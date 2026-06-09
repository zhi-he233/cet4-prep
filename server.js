require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

let fetch;
if (typeof globalThis.fetch === 'function') {
  fetch = globalThis.fetch;
} else {
  fetch = require('node-fetch');
}

const JWT_SECRET = process.env.JWT_SECRET || 'cet4prep_secret_key_2026';
const JWT_EXPIRES = '7d';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const EXAM_CONFIG = {
  cet4: {
    label: '四级',
    translateMaxChars: 50,
    clozeWords: '120-150',
    writingTopics: [
      "The Importance of Environmental Protection",
      "The Impact of the Internet on Education",
      "Should College Students Take Part-time Jobs?",
      "The Advantages and Disadvantages of Online Shopping",
      "How to Keep Healthy in Modern Life",
      "The Role of Artificial Intelligence in the Future",
      "My Views on Social Media",
      "The Importance of Learning a Second Language",
      "How to Deal with Stress as a College Student",
      "The Benefits of Volunteering",
      "Is It Necessary to Study Abroad?",
      "The Influence of Smartphones on People's Lives",
      "The Importance of Teamwork",
      "How to Protect the Environment in Daily Life",
      "The Value of Reading Books"
    ]
  },
  cet6: {
    label: '六级',
    translateMaxChars: 70,
    clozeWords: '150-180',
    writingTopics: [
      "The Influence of Digital Technology on Learning",
      "The Importance of Critical Thinking",
      "Should Universities Encourage Interdisciplinary Study?",
      "The Role of Innovation in Social Development",
      "How to Balance Efficiency and Well-being",
      "The Impact of Artificial Intelligence on Employment",
      "The Value of Cultural Confidence",
      "The Challenges of Information Overload",
      "How to Improve Academic Integrity",
      "The Importance of Lifelong Learning",
      "Should Young People Pursue Stable Jobs or Personal Dreams?",
      "The Relationship Between Technology and Human Communication",
      "How to Build a Sustainable Lifestyle",
      "The Benefits and Risks of Online Communities",
      "The Role of Universities in Serving Society"
    ]
  }
};

function getExamConfig(level) {
  return EXAM_CONFIG[level] || EXAM_CONFIG.cet4;
}

function getRequestExam(req) {
  return getExamConfig(req.body?.level || req.query?.level);
}

// ---------- DeepSeek ----------
async function askDeepSeek(systemPrompt, userMessage) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error('未设置 DEEPSEEK_API_KEY 环境变量');
  const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`DeepSeek API error (${res.status}): ${errorText}`);
  }
  const data = await res.json();
  return data.choices[0].message.content;
}

// ====================== Auth Middleware ======================
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: '未登录' });
  }
  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    req.username = decoded.username;
    next();
  } catch (e) {
    return res.status(401).json({ error: '登录已过期，请重新登录' });
  }
}

// ====================== Auth Routes ======================

app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });
    if (username.trim().length < 2 || username.trim().length > 20) return res.status(400).json({ error: '用户名2-20个字符' });
    if (password.length < 3 || password.length > 50) return res.status(400).json({ error: '密码3-50个字符' });

    const exists = await db.users.findOne({ username: username.trim() });
    if (exists) return res.status(400).json({ error: '用户名已存在' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await db.users.insert({ username: username.trim(), password: hashed, createdAt: new Date() });

    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });

    const user = await db.users.findOne({ username: username.trim() });
    if (!user) return res.status(400).json({ error: '用户名或密码错误' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: '用户名或密码错误' });

    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await db.users.findOne({ _id: req.userId });
    if (!user) return res.status(404).json({ error: '用户不存在' });
    res.json({ user: { id: user._id, username: user.username, createdAt: user.createdAt } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// User data sync (after login, load from server)
app.get('/api/user/data', authMiddleware, async (req, res) => {
  try {
    let data = await db.userData.findOne({ userId: req.userId });
    if (!data) {
      data = { userId: req.userId, favorites: [], wrongbook: [], translateHistory: [], writingHistory: [], studyHistory: [] };
      await db.userData.insert(data);
    }
    res.json({ data: { favorites: data.favorites, wrongbook: data.wrongbook, translateHistory: data.translateHistory, writingHistory: data.writingHistory, studyHistory: data.studyHistory } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/user/sync', authMiddleware, async (req, res) => {
  try {
    const { key, value } = req.body;
    const allowed = ['favorites', 'wrongbook', 'translateHistory', 'writingHistory', 'studyHistory'];
    if (!allowed.includes(key)) return res.status(400).json({ error: 'invalid key' });
    await db.userData.update(
      { userId: req.userId },
      { $set: { [key]: value } },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ====================== Reading Translation ======================

app.post('/api/reading/translate', async (req, res) => {
  try {
    const { text, type } = req.body;
    if (!text || text.length > 500) return res.status(400).json({ error: 'text too long' });

    const content = await askDeepSeek(
      type === 'word'
        ? '你是英语助教。请翻译这个单词，格式：中文释义（词性）。例如：abandon - v. 放弃，抛弃。只输出翻译结果，不要额外解释。'
        : '你是英语助教。请将这句话翻译成通顺的中文。只输出中文翻译，不要额外解释。',
      text
    );
    res.json({ translation: content.trim() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ====================== Word Routes ======================

app.post('/api/word/enrich', async (req, res) => {
  try {
    const { word } = req.body;
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}英语助教。请用中文详细讲解单词，包括：音标、中文释义、词根词缀、一个形象记忆故事、两个带中文翻译的例句、常见搭配。内容难度要贴合${exam.label}考试。`,
      `单词：${word}`
    );
    res.json({ result: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/translate/evaluate', async (req, res) => {
  try {
    const { chinese, translation } = req.body;
    const exam = getRequestExam(req);
    const prompt = `你是${exam.label}翻译阅卷老师。请根据所给中文句子，评价学生的英文翻译。指出词汇、语法、句式方面的问题，并给出修改建议和标准翻译（满分15分，请打分）。请严格包含以下小标题：得分、主要问题、修改建议、标准翻译。其中"标准翻译："后面单独给出一版完整英文译文，方便学生对比复习。用中文分点回复。`;
    const content = await askDeepSeek(prompt, `中文句子：${chinese}\n学生翻译：${translation}`);
    res.json({ evaluation: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/translate/random', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const exam = getRequestExam(req);
    const seed = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const sentence = await askDeepSeek(
      `你是${exam.label}翻译出题老师。请现场原创生成一个${exam.translateMaxChars}字以内的中文句子，适合${exam.label}学生翻译成英文。句子要贴近中国文化、社会生活、科技发展、校园日常或社会热点。不要使用固定题库，不要复述示例。只输出句子本身，不要任何解释、编号、引号。`,
      `请根据这个随机种子原创生成一道新的${exam.label}翻译练习中文句子：${seed}`
    );
    res.json({ sentence: sentence.trim().replace(/^[\u201c\u2018"]|[\u201d\u2019"]$/g, '') });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/writing/evaluate', async (req, res) => {
  try {
    const { topic, essay } = req.body;
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}写作阅卷老师。请对作文评分（满分15分），指出词汇、语法、连贯性优缺点，并给出修改后的范文。评分标准和修改建议要贴合${exam.label}考试。`,
      `题目：${topic}\n学生作文：${essay}`
    );
    res.json({ evaluation: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/word/quiz', async (req, res) => {
  try {
    const { word, meaning } = req.body;
    const exam = getRequestExam(req);
    const quiz = await askDeepSeek(
      `你是${exam.label}英语出题专家。请根据所给单词和中文释义，出一道单选题。
要求：1. 题干用中文，考察该单词的英文拼写或用法。2. 四个选项必须都是真实的英文单词，其中一个是正确答案，另外三个是干扰项。
3. 干扰项必须具备高度迷惑性，优先使用：
   - 形近词（如 abandon 和 abundant）
   - 近义词但用法不同（如 refuse / decline / reject）
   - 同词根派生词（如 predict / preview / prepare）
   - 同一场景的关联词（如 banquet / feast / dinner）
4. 严禁出现明显无关的单词或乱码。
5. 输出格式严格按照下面模板，不要添加任何额外解释：

题目：...
A. ...
B. ...
C. ...
D. ...
答案：A（或B/C/D）`,
      `单词：${word}，释义：${meaning}`
    );
    res.json({ quiz });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ========== Exam Routes ==========

app.post('/api/exam/bankedCloze', async (req, res) => {
  try {
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}英语出题专家。请出一道"选词填空"题（${exam.label}阅读15选10）。
要求：1. 一篇约${exam.clozeWords}词的英文短文，挖掉10个单词，每个空用____加编号①-⑩表示。2. 提供15个候选词（A-O），多出5个干扰词。3. 短文主题贴近${exam.label}常考话题。4. 难度适中，符合${exam.label}水平。
输出格式（不要额外解释）：
【短文】
（带____①、____②等空格的短文全文）

【候选词】
A. word1  B. word2  C. word3 ... O. word15

【答案】
①=A  ②=B ... ⑩=J`,
      `请出一道${exam.label}选词填空（15选10）题。`
    );
    res.json({ content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/exam/infoMatch', async (req, res) => {
  try {
    const { word } = req.body;
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}英语出题专家。请根据所给单词，出4道"词汇用法匹配"选择题。
要求：1. 给出4个英文句子，每个句中有一个空缺（用___表示）。2. 每题4个选项，考察该单词在不同语境下的用法。3. 句子难度为${exam.label}水平。4. 选项可以是被动语态、搭配、词形变化等不同形式。

输出格式（不要额外解释）：
1. 句子___剩余部分。
   A. opt1  B. opt2  C. opt3  D. opt4

2. 句子___剩余部分。
   A. opt1  B. opt2  C. opt3  D. opt4

3. 句子___剩余部分。
   A. opt1  B. opt2  C. opt3  D. opt4

4. 句子___剩余部分。
   A. opt1  B. opt2  C. opt3  D. opt4

【答案】
1=A  2=B  3=C  4=D`,
      `单词：${word}`
    );
    res.json({ content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ========== Writing Teaching Mode ==========

app.get('/api/writing/topics', (req, res) => {
  const exam = getRequestExam(req);
  res.json({ topics: exam.writingTopics });
});

app.post('/api/writing/outline', async (req, res) => {
  try {
    const { topic } = req.body;
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}英语写作辅导老师。请根据所给作文题目，生成一个详细的英文写作大纲。
要求：
1. 用英文输出，给出 introduction、body paragraphs、conclusion 的结构。
2. 每个部分给出 2-3 个要点提示（bullet points）。
3. 在 body 部分建议可以使用的论证方法（举例、对比、因果等）。
4. 语言简洁实用，适合${exam.label}水平。
输出格式：
Introduction:
- 要点1
- 要点2
...

Body Paragraph 1:
- 要点1
- 要点2
...

Body Paragraph 2:
- 要点1
- 要点2
...

Conclusion:
- 要点1
- 要点2
...`,
      `题目：${topic}`
    );
    res.json({ outline: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/writing/vocabulary', async (req, res) => {
  try {
    const { topic } = req.body;
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}英语写作辅导老师。请根据所给作文题目，提供 15-20 个实用的英语词汇和短语。
要求：
1. 分为三类：开头引入短语、中间论证词汇/短语、结尾总结短语
2. 每个短语附中文翻译
3. 选择${exam.label}考试常用、能提分的表达
4. 避免太简单的词汇

输出格式：
【开头引入】
- phrase1（中文翻译）
- phrase2（中文翻译）

【中间论证】
- phrase3（中文翻译）
- phrase4（中文翻译）

【结尾总结】
- phrase5（中文翻译）
- phrase6（中文翻译）`,
      `题目：${topic}`
    );
    res.json({ vocabulary: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});



// ========== AI Daily Reading ==========
app.get('/api/reading/daily', async (req, res) => {
  try {
    const level = req.query.level || 'cet4';
    const exam = getExamConfig(level);
    const seed = Date.now().toString(36);
    const content = await askDeepSeek(
      `你是${exam.label}英语阅读老师。请原创一篇适合${exam.label}水平的英文短文（300-400词），主题不限（科技、文化、社会、环境、教育等）。要求：语言地道，难度适中，有3-4个自然段落。只输出纯文本短文，不要标题，不要任何解释。`,
      `请生成一篇新的${exam.label}阅读短文，随机种子：${seed}`
    );
    res.json({ article: content.trim(), level });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ========== Reading Explain ==========
app.post('/api/reading/explain', async (req, res) => {
  try {
    const { passage, question, options, answer } = req.body;
    if (!question) return res.status(400).json({ error: 'missing question' });
    const content = await askDeepSeek(
      '你是英语阅读老师。请用中文简要解析这道阅读题：说明正确答案为什么对，每个错误选项为什么错（1-2句话即可）。格式：先给答案，再逐项解析。',
      `文章片段：${passage ? passage.substring(0, 500) : '无'}\n题目：${question}\n选项：${(options||[]).join(' / ')}\n正确答案：${answer}`
    );
    res.json({ explanation: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ========== Listening ==========


// Seed-based listening list (works without filesystem access)
let listeningSeedData = null;
try {
  const sp = require('path').join(__dirname, 'listening_seed.json');
  if (require('fs').existsSync(sp)) listeningSeedData = JSON.parse(require('fs').readFileSync(sp, 'utf8'));
} catch(e) {}

const EXAM_BASE = (() => { const p = process.env.EXAM_DATA_PATH; if (p) return p; try { return require('path').join(process.env.USERPROFILE || process.env.HOME || __dirname, 'exam_data'); } catch(e) { return require('path').join(__dirname, 'exam_data'); } })();

// Serve MP3 audio files
app.get('/api/listening/audio/:file', (req, res) => {
  try {
    const p = decodeURIComponent(req.params[0]);
    const fullPath = path.join(EXAM_BASE, p);
    if (!require('fs').existsSync(fullPath)) return res.status(404).json({ error: 'Audio not found' });
    const stat = require('fs').statSync(fullPath);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Content-Length', stat.size);
    require('fs').createReadStream(fullPath).pipe(res);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// List listening exercises
app.get('/api/listening', async (req, res) => {
  try {
    const level = req.query.level || 'cet4';
    const label = level === 'cet6' ? '六级' : '四级';
    const dir = path.join(EXAM_BASE, '大学生英语' + label + '历年真题（已更新至2025年12月）', '【2013年-2025年12月】历年' + label + '真题+答案解析+听力音频');
    if (!require('fs').existsSync(dir)) return res.json({ exercises: [] });
    const periods = require('fs').readdirSync(dir).filter(d => d.match(/【\d{4}年\d{2}月】/));
    let exercises = listeningSeedData || [];
    if (exercises.length > 0) return res.json({ exercises: exercises.filter(e => e.level === level) });
    exercises = [];
    for (const p of periods) {
      const ym = p.match(/(\d{4})年(\d{2})月/); if (!ym) continue;
      const y = parseInt(ym[1]), m = parseInt(ym[2]);
      const dp = path.join(dir, p);
      const files = require('fs').readdirSync(dp);
      const af = files.filter(f => f.match(/\.mp3$/i) && f.includes('第1套'));
      const pf = files.filter(f => f.includes('真题第1套') && f.endsWith('.pdf') && !f.includes('解析'));
      if (af.length > 0) {
        const audioRel = '大学生英语' + label + '历年真题（已更新至2025年12月）/【2013年-2025年12月】历年' + label + '真题+答案解析+听力音频/' + encodeURIComponent(p) + '/' + af[0];
        exercises.push({ id: level + '_' + y + '_' + m + '_1', title: y + '年' + m + '月' + label + '听力', level, year: y, month: m, audioUrl: '/api/listening/audio/' + audioRel.split('/').pop(), pdfPath: pf.length > 0 ? path.join(dp, pf[0]) : null });
      }
    }
    exercises.sort((a,b) => b.year - a.year || b.month - a.month);
    res.json({ exercises });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Parse listening questions from PDF
app.post('/api/listening/questions', async (req, res) => {
  try {
    const { pdfPath } = req.body;
    if (!pdfPath || !require('fs').existsSync(pdfPath)) return res.status(400).json({ error: 'Invalid pdfPath' });
    const pdfParse = require('pdf-parse');
    const buf = require('fs').readFileSync(pdfPath);
    const data = await pdfParse(buf);
    const text = data.text.replace(/([a-zA-Z]) ([a-zA-Z])/g, '$1$2').replace(/\n{2,}/g, '\n\n');
    const start = text.indexOf('Part II');
    const end = text.indexOf('Part III');
    const snippet = (start >= 0 ? text.substring(start, end > start ? end : undefined) : text).substring(0, 6000);
    const content = await askDeepSeek(
      '你是英语听力出题专家。请提取听力选择题：Section A新闻, Section B长对话, Section C短文。输出JSON:{"questions":[{"section":"Section A","number":1,"question":"...","options":["A) ...","B) ...","C) ...","D) ..."],"answer":"A"}]}',
      '文本：\n' + snippet
    );
    const match = content.match(/\{[\s\S]*\}/);
    if (match) {
      try { res.json({ questions: JSON.parse(match[0]).questions || [], raw: content }); }
      catch(e) { res.json({ questions: [], raw: content, error: e.message }); }
    } else {
      res.json({ questions: [], raw: content });
    }
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ========== Paper Management ==========

// List papers
app.get('/api/papers', async (req, res) => {
  try {
    const level = req.query.level || 'cet4';
    const papers = await db.papers.find({ level }).sort({ year: -1, month: -1, set: 1 });
    res.json({ papers: papers.map(p => ({ _id: p._id, title: p.title, level: p.level, year: p.year, month: p.month, set: p.set, sectionCount: p.sections ? p.sections.length : 0 })) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get single paper
app.get('/api/papers/:id', async (req, res) => {
  try {
    const paper = await db.papers.findOne({ _id: req.params.id });
    if (!paper) return res.status(404).json({ error: '试卷不存在' });
    res.json({ paper });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Import paper JSON
app.post('/api/papers/import', authMiddleware, async (req, res) => {
  try {
    const { title, level, year, month, set, sections } = req.body;
    if (!title || !level || !sections) return res.status(400).json({ error: '缺少必填字段' });
    const paper = await db.papers.insert({
      title, level, year: year || 0, month: month || 0, set: set || 1,
      sections,
      createdAt: new Date()
    });
    res.json({ success: true, paper });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// AI parse PDF text to structured paper
app.post('/api/papers/parse', async (req, res) => {
  try {
    const { text, level, title } = req.body;
    if (!text) return res.status(400).json({ error: '缺少文本' });
    const exam = getExamConfig(level || 'cet4');

    // Clean PDF extraction spacing
    const cleaned = text
      .replace(/([a-zA-Z]) ([a-zA-Z])/g, '$1$2')
      .replace(/\n{2,}/g, '\n\n');

    const snippet = cleaned.substring(0, 8000);
    const content = await askDeepSeek(
      `你是${exam.label}真题解析专家。请将以下真题文本解析为结构化JSON。
要求：
1. 识别 "Part I Writing", "Part II", "Part III Reading Comprehension", "Part IV Translation" 等部分
2. 对于 Reading Comprehension 部分，提取每篇阅读理解的 passage（文章全文）和 questions（题目列表，每题含 question、options 数组、answer）
3. 对于 Writing 部分，提取 Directions 作为 passage
4. 对于 Translation 部分，提取中文原文作为 passage
5. Listening 部分跳过
6. 输出严格 JSON 格式：
{
  "sections": [
    { "type": "writing", "title": "Part I Writing", "passage": "...", "questions": [] },
    { "type": "reading", "title": "Section B - Passage One", "passage": "...", "questions": [{"question": "...", "options": ["A) ...", "B) ...", "C) ...", "D) ..."], "answer": "A"}] },
    { "type": "translation", "title": "Part IV Translation", "passage": "...", "questions": [] }
  ]
}`,
      `试卷标题：${title || ''}\n级别：${exam.label}\n文本内容：\n${snippet}`
    );

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      res.json({ parsed, raw: content });
    } else {
      res.json({ raw: content, error: '未能提取到有效的 JSON' });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ========== Chat ==========

let chatMessages = [];

app.get('/api/chat/messages', (req, res) => {
  const recent = chatMessages.slice(-200);
  res.json({ messages: recent });
});

app.post('/api/chat/send', (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) return res.status(400).json({ error: '缺少用户或消息内容' });
  const msg = {
    id: Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    user: user.trim(),
    text: text.trim().substring(0, 500),
    time: new Date().toISOString()
  };
  chatMessages.push(msg);
  res.json({ success: true, message: msg });
});

app.post('/api/chat/clear', (req, res) => {
  chatMessages = [];
  res.json({ success: true });
});

// ========== Start ==========

const PORT = process.env.PORT || 8080;

// Auto-seed papers on first run
(async () => {
  try {
    const count = await db.papers.count({});
    if (count === 0) {
      const fs = require('fs');
      const path = require('path');
      const seedPath = path.join(__dirname, 'papers_seed.json');
      if (fs.existsSync(seedPath)) {
        const papers = JSON.parse(fs.readFileSync(seedPath, 'utf8'));
        for (const p of papers) {
          await db.papers.insert({ ...p, createdAt: new Date() });
        }
        console.log('Seeded ' + papers.length + ' papers from papers_seed.json');
      }
    }
  } catch(e) { console.log('Seed skipped:', e.message); }
})();

// Ensure data dir exists
try { require('fs').mkdirSync(require('path').join(__dirname, 'data'), { recursive: true }); } catch(e) {}

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));








