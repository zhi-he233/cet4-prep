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
app.use((req, res, next) => {
  const ct = res.getHeader('Content-Type');
  if (ct && !ct.includes('charset')) res.setHeader('Content-Type', ct + '; charset=utf-8');
  next();
});
app.use(express.json());
app.use(express.static('public'));

const EXAM_CONFIG = {
  cet4: {
    label: '�ļ�',
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
    label: '����',
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
  if (!apiKey) throw new Error('δ���� DEEPSEEK_API_KEY ��������');
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
    return res.status(401).json({ error: 'δ��¼' });
  }
  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    req.username = decoded.username;
    next();
  } catch (e) {
    return res.status(401).json({ error: '��¼�ѹ��ڣ������µ�¼' });
  }
}

// ====================== Auth Routes ======================

app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: '�û��������벻��Ϊ��' });
    if (username.trim().length < 2 || username.trim().length > 20) return res.status(400).json({ error: '�û���2-20���ַ�' });
    if (password.length < 3 || password.length > 50) return res.status(400).json({ error: '����3-50���ַ�' });

    const exists = await db.users.findOne({ username: username.trim() });
    if (exists) return res.status(400).json({ error: '�û����Ѵ���' });

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
    if (!username || !password) return res.status(400).json({ error: '�û��������벻��Ϊ��' });

    const user = await db.users.findOne({ username: username.trim() });
    if (!user) return res.status(400).json({ error: '�û������������' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: '�û������������' });

    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await db.users.findOne({ _id: req.userId });
    if (!user) return res.status(404).json({ error: '�û�������' });
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
        ? '����Ӣ�����̡��뷭��������ʣ���ʽ���������壨���ԣ������磺abandon - v. ������������ֻ�������������Ҫ������͡�'
        : '����Ӣ�����̡��뽫��仰�����ͨ˳�����ġ�ֻ������ķ��룬��Ҫ������͡�',
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
      `����${exam.label}Ӣ�����̡�����������ϸ���ⵥ�ʣ����������ꡢ�������塢�ʸ���׺��һ�����������¡����������ķ�������䡢�������䡣�����Ѷ�Ҫ����${exam.label}���ԡ�`,
      `���ʣ�${word}`
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
    const prompt = `����${exam.label}�����ľ���ʦ��������������ľ��ӣ�����ѧ����Ӣ�ķ��롣ָ���ʻ㡢�﷨����ʽ��������⣬�������޸Ľ���ͱ�׼���루����15�֣����֣������ϸ��������С���⣺�÷֡���Ҫ���⡢�޸Ľ��顢��׼���롣����"��׼���룺"���浥������һ������Ӣ�����ģ�����ѧ���Աȸ�ϰ�������ķֵ�ظ���`;
    const content = await askDeepSeek(prompt, `���ľ��ӣ�${chinese}\nѧ�����룺${translation}`);
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
      `����${exam.label}���������ʦ�����ֳ�ԭ������һ��${exam.translateMaxChars}�����ڵ����ľ��ӣ��ʺ�${exam.label}ѧ�������Ӣ�ġ�����Ҫ�����й��Ļ����������Ƽ���չ��У԰�ճ�������ȵ㡣��Ҫʹ�ù̶���⣬��Ҫ����ʾ����ֻ������ӱ�������Ҫ�κν��͡���š����š�`,
      `���������������ԭ������һ���µ�${exam.label}������ϰ���ľ��ӣ�${seed}`
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
      `����${exam.label}д���ľ���ʦ������������֣�����15�֣���ָ���ʻ㡢�﷨����������ȱ�㣬�������޸ĺ�ķ��ġ����ֱ�׼���޸Ľ���Ҫ����${exam.label}���ԡ�`,
      `��Ŀ��${topic}\nѧ�����ģ�${essay}`
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
      `����${exam.label}Ӣ�����ר�ҡ�������������ʺ��������壬��һ����ѡ�⡣
Ҫ��1. ��������ģ�����õ��ʵ�Ӣ��ƴд���÷���2. �ĸ�ѡ����붼����ʵ��Ӣ�ĵ��ʣ�����һ������ȷ�𰸣����������Ǹ����
3. ���������߱��߶��Ի��ԣ�����ʹ�ã�
   - �ν��ʣ��� abandon �� abundant��
   - ����ʵ��÷���ͬ���� refuse / decline / reject��
   - ͬ�ʸ������ʣ��� predict / preview / prepare��
   - ͬһ�����Ĺ����ʣ��� banquet / feast / dinner��
4. �Ͻ����������޹صĵ��ʻ����롣
5. �����ʽ�ϸ�������ģ�壬��Ҫ�����κζ�����ͣ�

��Ŀ��...
A. ...
B. ...
C. ...
D. ...
�𰸣�A����B/C/D��`,
      `���ʣ�${word}�����壺${meaning}`
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
      `����${exam.label}Ӣ�����ר�ҡ����һ��"ѡ�����"�⣨${exam.label}�Ķ�15ѡ10����
Ҫ��1. һƪԼ${exam.clozeWords}�ʵ�Ӣ�Ķ��ģ��ڵ�10�����ʣ�ÿ������____�ӱ�Ţ�-���ʾ��2. �ṩ15����ѡ�ʣ�A-O�������5�����Ŵʡ�3. ������������${exam.label}�������⡣4. �Ѷ����У�����${exam.label}ˮƽ��
�����ʽ����Ҫ������ͣ���
�����ġ�
����____�١�____�ڵȿո�Ķ���ȫ�ģ�

����ѡ�ʡ�
A. word1  B. word2  C. word3 ... O. word15

���𰸡�
��=A  ��=B ... ��=J`,
      `���һ��${exam.label}ѡ����գ�15ѡ10���⡣`
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
      `����${exam.label}Ӣ�����ר�ҡ�������������ʣ���4��"�ʻ��÷�ƥ��"ѡ���⡣
Ҫ��1. ����4��Ӣ�ľ��ӣ�ÿ��������һ����ȱ����___��ʾ����2. ÿ��4��ѡ�����õ����ڲ�ͬ�ﾳ�µ��÷���3. �����Ѷ�Ϊ${exam.label}ˮƽ��4. ѡ������Ǳ�����̬�����䡢���α仯�Ȳ�ͬ��ʽ��

�����ʽ����Ҫ������ͣ���
1. ����___ʣ�ಿ�֡�
   A. opt1  B. opt2  C. opt3  D. opt4

2. ����___ʣ�ಿ�֡�
   A. opt1  B. opt2  C. opt3  D. opt4

3. ����___ʣ�ಿ�֡�
   A. opt1  B. opt2  C. opt3  D. opt4

4. ����___ʣ�ಿ�֡�
   A. opt1  B. opt2  C. opt3  D. opt4

���𰸡�
1=A  2=B  3=C  4=D`,
      `���ʣ�${word}`
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
      `����${exam.label}Ӣ��д��������ʦ�����������������Ŀ������һ����ϸ��Ӣ��д����١�
Ҫ��
1. ��Ӣ����������� introduction��body paragraphs��conclusion �Ľṹ��
2. ÿ�����ָ��� 2-3 ��Ҫ����ʾ��bullet points����
3. �� body ���ֽ������ʹ�õ���֤�������������Աȡ�����ȣ���
4. ���Լ��ʵ�ã��ʺ�${exam.label}ˮƽ��
�����ʽ��
Introduction:
- Ҫ��1
- Ҫ��2
...

Body Paragraph 1:
- Ҫ��1
- Ҫ��2
...

Body Paragraph 2:
- Ҫ��1
- Ҫ��2
...

Conclusion:
- Ҫ��1
- Ҫ��2
...`,
      `��Ŀ��${topic}`
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
      `����${exam.label}Ӣ��д��������ʦ�����������������Ŀ���ṩ 15-20 ��ʵ�õ�Ӣ��ʻ�Ͷ��
Ҫ��
1. ��Ϊ���ࣺ��ͷ�������м���֤�ʻ�/�����β�ܽ����
2. ÿ�����︽���ķ���
3. ѡ��${exam.label}���Գ��á�����ֵı���
4. ����̫�򵥵Ĵʻ�

�����ʽ��
����ͷ���롿
- phrase1�����ķ��룩
- phrase2�����ķ��룩

���м���֤��
- phrase3�����ķ��룩
- phrase4�����ķ��룩

����β�ܽ᡿
- phrase5�����ķ��룩
- phrase6�����ķ��룩`,
      `��Ŀ��${topic}`
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
      `����${exam.label}Ӣ���Ķ���ʦ����ԭ��һƪ�ʺ�${exam.label}ˮƽ��Ӣ�Ķ��ģ�300-400�ʣ������ⲻ�ޣ��Ƽ����Ļ�����ᡢ�����������ȣ���Ҫ�����Եص����Ѷ����У���3-4����Ȼ���䡣ֻ������ı����ģ���Ҫ���⣬��Ҫ�κν��͡�`,
      `������һƪ�µ�${exam.label}�Ķ����ģ�������ӣ�${seed}`
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
      '����Ӣ���Ķ���ʦ���������ļ�Ҫ��������Ķ��⣺˵����ȷ��Ϊʲô�ԣ�ÿ������ѡ��Ϊʲô����1-2�仰���ɣ�����ʽ���ȸ��𰸣������������',
      `����Ƭ�Σ�${passage ? passage.substring(0, 500) : '��'}\n��Ŀ��${question}\nѡ�${(options||[]).join(' / ')}\n��ȷ�𰸣�${answer}`
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
    const filename = decodeURIComponent(req.params[0]);
    const fullPath = path.join(__dirname, 'public', 'audio', filename);
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
    const label = level === 'cet6' ? '����' : '�ļ�';
    const dir = path.join(EXAM_BASE, '��ѧ��Ӣ��' + label + '�������⣨�Ѹ�����2025��12�£�', '��2013��-2025��12�¡�����' + label + '����+�𰸽���+������Ƶ');
    if (!require('fs').existsSync(dir)) return res.json({ exercises: [] });
    const periods = require('fs').readdirSync(dir).filter(d => d.match(/��\d{4}��\d{2}�¡�/));
    let exercises = listeningSeedData || [];
    if (exercises.length > 0) return res.json({ exercises: exercises.filter(e => e.level === level) });
    exercises = [];
    for (const p of periods) {
      const ym = p.match(/(\d{4})��(\d{2})��/); if (!ym) continue;
      const y = parseInt(ym[1]), m = parseInt(ym[2]);
      const dp = path.join(dir, p);
      const files = require('fs').readdirSync(dp);
      const af = files.filter(f => f.match(/\.mp3$/i) && f.includes('��1��'));
      const pf = files.filter(f => f.includes('�����1��') && f.endsWith('.pdf') && !f.includes('����'));
      if (af.length > 0) {
        const audioRel = '��ѧ��Ӣ��' + label + '�������⣨�Ѹ�����2025��12�£�/��2013��-2025��12�¡�����' + label + '����+�𰸽���+������Ƶ/' + encodeURIComponent(p) + '/' + af[0];
        exercises.push({ id: level + '_' + y + '_' + m + '_1', title: y + '��' + m + '��' + label + '����', level, year: y, month: m, audioUrl: '/api/listening/audio/' + audioRel.split('/').pop(), pdfPath: pf.length > 0 ? path.join(dp, pf[0]) : null });
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
      '����Ӣ����������ר�ҡ�����ȡ����ѡ���⣺Section A����, Section B���Ի�, Section C���ġ����JSON:{"questions":[{"section":"Section A","number":1,"question":"...","options":["A) ...","B) ...","C) ...","D) ..."],"answer":"A"}]}',
      '�ı���\n' + snippet
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
    if (!paper) return res.status(404).json({ error: '�Ծ�������' });
    res.json({ paper });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Import paper JSON
app.post('/api/papers/import', authMiddleware, async (req, res) => {
  try {
    const { title, level, year, month, set, sections } = req.body;
    if (!title || !level || !sections) return res.status(400).json({ error: 'ȱ�ٱ����ֶ�' });
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
    if (!text) return res.status(400).json({ error: 'ȱ���ı�' });
    const exam = getExamConfig(level || 'cet4');

    // Clean PDF extraction spacing
    const cleaned = text
      .replace(/([a-zA-Z]) ([a-zA-Z])/g, '$1$2')
      .replace(/\n{2,}/g, '\n\n');

    const snippet = cleaned.substring(0, 8000);
    const content = await askDeepSeek(
      `����${exam.label}�������ר�ҡ��뽫���������ı�����Ϊ�ṹ��JSON��
Ҫ��
1. ʶ�� "Part I Writing", "Part II", "Part III Reading Comprehension", "Part IV Translation" �Ȳ���
2. ���� Reading Comprehension ���֣���ȡÿƪ�Ķ������ passage������ȫ�ģ��� questions����Ŀ�б���ÿ�⺬ question��options ���顢answer��
3. ���� Writing ���֣���ȡ Directions ��Ϊ passage
4. ���� Translation ���֣���ȡ����ԭ����Ϊ passage
5. Listening ��������
6. ����ϸ� JSON ��ʽ��
{
  "sections": [
    { "type": "writing", "title": "Part I Writing", "passage": "...", "questions": [] },
    { "type": "reading", "title": "Section B - Passage One", "passage": "...", "questions": [{"question": "...", "options": ["A) ...", "B) ...", "C) ...", "D) ..."], "answer": "A"}] },
    { "type": "translation", "title": "Part IV Translation", "passage": "...", "questions": [] }
  ]
}`,
      `�Ծ����⣺${title || ''}\n����${exam.label}\n�ı����ݣ�\n${snippet}`
    );

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      res.json({ parsed, raw: content });
    } else {
      res.json({ raw: content, error: 'δ����ȡ����Ч�� JSON' });
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
  if (!user || !text) return res.status(400).json({ error: 'ȱ���û�����Ϣ����' });
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








