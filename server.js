require('dotenv').config();

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'auth-users.json');
const HISTORY_FILE = path.join(DATA_DIR, 'translate-history.json');
const TOKEN_SECRET = process.env.JWT_SECRET || process.env.AUTH_SECRET || 'cet-translation-local-secret';
const REGISTRATION_INVITE_CODE = process.env.REGISTRATION_INVITE_CODE || 'swh';
const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

fs.mkdirSync(DATA_DIR, { recursive: true });

const EXAM_CONFIG = {
  cet4: { label: '四级', translateMaxChars: 100 },
  cet6: { label: '六级', translateMaxChars: 120 }
};

function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return fallback;
  }
}

function writeJson(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2), 'utf8');
}

function base64url(value) {
  return Buffer.from(value).toString('base64url');
}

function signPayload(payload) {
  const encoded = base64url(JSON.stringify(payload));
  const signature = crypto.createHmac('sha256', TOKEN_SECRET).update(encoded).digest('base64url');
  return `${encoded}.${signature}`;
}

function verifyToken(token) {
  if (!token || !token.includes('.')) return null;
  const [encoded, signature] = token.split('.');
  const expected = crypto.createHmac('sha256', TOKEN_SECRET).update(encoded).digest('base64url');
  const sigBuffer = Buffer.from(signature || '');
  const expectedBuffer = Buffer.from(expected);
  if (sigBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(sigBuffer, expectedBuffer)) {
    return null;
  }
  const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
  if (!payload.exp || Date.now() > payload.exp) return null;
  return payload;
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
}

function isValidPassword(password, stored) {
  const { hash } = hashPassword(password, stored.salt);
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(stored.hash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const payload = verifyToken(token);
  if (!payload) return res.status(401).json({ error: '未登录或登录已过期' });
  req.user = payload;
  next();
}

function getExamConfig(level) {
  return EXAM_CONFIG[level] || EXAM_CONFIG.cet4;
}

function getRequestExam(req) {
  return getExamConfig(req.body?.level || req.query?.level);
}

function normalizeLevel(level) {
  return EXAM_CONFIG[level] ? level : 'cet4';
}

async function askDeepSeek(systemPrompt, userMessage) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error('未设置 DEEPSEEK_API_KEY 环境变量');
  if (typeof globalThis.fetch !== 'function') {
    throw new Error('当前 Node.js 版本不支持 fetch，请升级到 Node.js 18 或更高版本');
  }

  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.9,
      max_tokens: 1800
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

function buildAuthResponse(user) {
  const safeUser = { id: user.id, username: user.username, createdAt: user.createdAt };
  const token = signPayload({
    userId: user.id,
    username: user.username,
    exp: Date.now() + TOKEN_MAX_AGE_MS
  });
  return { token, user: safeUser };
}

app.post('/api/auth/register', (req, res) => {
  try {
    const username = String(req.body.username || '').trim();
    const password = String(req.body.password || '');
    const inviteCode = String(req.body.inviteCode || '').trim();
    if (username.length < 2 || username.length > 20) {
      return res.status(400).json({ error: '用户名需为2-20个字符' });
    }
    if (password.length < 3 || password.length > 50) {
      return res.status(400).json({ error: '密码需为3-50个字符' });
    }
    if (inviteCode !== REGISTRATION_INVITE_CODE) {
      return res.status(403).json({ error: '邀请码不正确' });
    }

    const users = readJson(USERS_FILE, []);
    if (users.some((user) => user.username.toLowerCase() === username.toLowerCase())) {
      return res.status(400).json({ error: '用户名已存在' });
    }

    const passwordData = hashPassword(password);
    const user = {
      id: crypto.randomUUID(),
      username,
      salt: passwordData.salt,
      hash: passwordData.hash,
      createdAt: new Date().toISOString()
    };
    users.push(user);
    writeJson(USERS_FILE, users);

    res.json(buildAuthResponse(user));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const username = String(req.body.username || '').trim();
    const password = String(req.body.password || '');
    const users = readJson(USERS_FILE, []);
    const user = users.find((item) => item.username.toLowerCase() === username.toLowerCase());
    if (!user || !isValidPassword(password, user)) {
      return res.status(400).json({ error: '用户名或密码错误' });
    }
    res.json(buildAuthResponse(user));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({
    user: {
      id: req.user.userId,
      username: req.user.username
    }
  });
});

app.get('/api/user/history', authMiddleware, (req, res) => {
  const level = normalizeLevel(req.query.level);
  const allHistory = readJson(HISTORY_FILE, {});
  const userHistory = allHistory[req.user.userId] || {};
  res.json({ history: userHistory[level] || [] });
});

app.post('/api/user/history', authMiddleware, (req, res) => {
  const level = normalizeLevel(req.body.level);
  const records = Array.isArray(req.body.records) ? req.body.records.slice(-500) : [];
  const allHistory = readJson(HISTORY_FILE, {});
  if (!allHistory[req.user.userId]) allHistory[req.user.userId] = {};
  allHistory[req.user.userId][level] = records;
  writeJson(HISTORY_FILE, allHistory);
  res.json({ success: true });
});

app.get('/api/translate/random', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');

    const exam = getRequestExam(req);
    const topics = [
      '中国文化与传统节日',
      '现代科技与人工智能',
      '环境保护与气候变化',
      '教育与就业',
      '社交媒体与网络生活',
      '健康与运动',
      '经济发展与社会变化',
      '旅游与文化交流',
      '城乡发展与城镇化',
      '家庭与代际关系',
      '创新与创业',
      '阅读与学习习惯',
      '食品安全与公共卫生',
      '交通与基础设施',
      '人口老龄化与社会保障',
      '电影与娱乐',
      '体育运动',
      '大学校园生活',
      '传统文化复兴',
      '航天科技与探索',
      '数字经济与电子支付',
      '碳中和与绿色能源',
      '乡村振兴',
      '在线教育',
      '心理健康',
      '人工智能伦理',
      '历史人物与文化遗产',
      '艺术与审美教育'
    ];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const seed = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

    const sentence = await askDeepSeek(
      `你是${exam.label}翻译出题老师。请原创生成一段适合${exam.label}学生翻译成英文的中文材料。要求：2-3句话，${exam.translateMaxChars}字以内，贴近真实${exam.label}翻译题风格，包含2-3个信息点，只输出段落本身，不要解释、编号或引号。`,
      `主题：${topic}\n随机种子：${seed}`
    );

    res.json({
      sentence: sentence.trim().replace(/^[\u201c\u2018"]|[\u201d\u2019"]$/g, '')
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/translate/evaluate', async (req, res) => {
  try {
    const { chinese, translation } = req.body;
    if (!chinese || !translation) {
      return res.status(400).json({ error: '缺少中文原句或英文翻译' });
    }

    const exam = getRequestExam(req);
    const evaluation = await askDeepSeek(
      `你是${exam.label}翻译阅卷老师。请根据所给中文材料，评价学生的英文翻译。请严格包含以下小标题：得分、主要问题、修改建议、标准翻译。其中"标准翻译："后面单独给出一版完整英文译文。满分15分，用中文分点回复，重点指出词汇、语法、句式和信息完整度问题。`,
      `中文材料：${chinese}\n学生翻译：${translation}`
    );

    res.json({ evaluation });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
