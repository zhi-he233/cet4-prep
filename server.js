require('dotenv').config();
const express = require('express');
const cors = require('cors');

// 兼容 fetch
let fetch;
if (typeof globalThis.fetch === 'function') {
  fetch = globalThis.fetch;
} else {
  fetch = require('node-fetch');
}

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

// ---------- DeepSeek 调用 ----------
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
      max_tokens: 1500
    })
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`DeepSeek API 错误 (${res.status}): ${errorText}`);
  }
  const data = await res.json();
  return data.choices[0].message.content;
}

// ====================== 路由 ======================

// 单词讲解
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

// 翻译评分
app.post('/api/translate/evaluate', async (req, res) => {
  try {
    const { chinese, translation } = req.body;
    const exam = getRequestExam(req);
    const prompt = `你是${exam.label}翻译阅卷老师。请根据所给中文句子，评价学生的英文翻译。
指出词汇、语法、句式方面的问题，并给出修改建议和标准翻译（满分15分，请打分）。
请严格包含以下小标题：得分、主要问题、修改建议、标准翻译。
其中“标准翻译：”后面单独给出一版完整英文译文，方便学生对比复习。用中文分点回复。`;
    const content = await askDeepSeek(prompt, `中文句子：${chinese}\n学生翻译：${translation}`);
    res.json({ evaluation: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// AI 随机生成翻译句子
app.get('/api/translate/random', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const exam = getRequestExam(req);
    const seed = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const sentence = await askDeepSeek(
      `你是${exam.label}翻译出题老师。请现场原创生成一个${exam.translateMaxChars}字以内的中文句子，适合${exam.label}学生翻译成英文。句子要贴近中国文化、社会生活、科技发展、校园日常或社会热点。不要使用固定题库，不要复述示例。只输出句子本身，不要任何解释、不要编号、不要引号。`,
      `请根据这个随机种子原创生成一道新的${exam.label}翻译练习中文句子：${seed}`
    );
    res.json({ sentence: sentence.trim().replace(/^["“”']|["“”']$/g, '') });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// 作文批改
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

// AI 出题（选择题）
app.post('/api/word/quiz', async (req, res) => {
  try {
    const { word, meaning } = req.body;
    const exam = getRequestExam(req);
    const quiz = await askDeepSeek(
      `你是${exam.label}英语出题专家。请根据所给单词和中文释义，出一道单选题。

要求：
1. 题干用中文，考察该单词的英文拼写或用法。
2. 四个选项必须都是真实的英文单词，其中一个是正确答案，另外三个是干扰项。
3. 干扰项必须具有高度迷惑性，优先使用：
   - 形近词（如 abandon 和 abundant）
   - 近义词但用法不同（如 refuse / decline / reject）
   - 同词根派生词（如 predict / preview / prepare）
   - 同一场景的关联词（如 banquet / feast / dinner）
4. 严禁出现明显无关的单词或乱码。
5. 输出格式必须严格按下面模板，不要添加任何额外解释：

题目：……
A. ……
B. ……
C. ……
D. ……
答案：A（或B/C/D）`,
      `单词：${word}，释义：${meaning}`
    );
    res.json({ quiz });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ========== 考试题型 ==========

// 选词填空（15选10）
app.post('/api/exam/bankedCloze', async (req, res) => {
  try {
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}英语出题专家。请出一道"选词填空"题（${exam.label}阅读15选10）。

要求：
1. 一篇约${exam.clozeWords}词的英文短文，挖掉10个单词，每个空用____加编号①-⑩表示。
2. 提供15个候选词（A-O），多出5个干扰词。
3. 短文主题贴近${exam.label}常考话题。
4. 难度适中，符合${exam.label}水平。

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

// 信息匹配（词汇用法匹配，4题一组）
app.post('/api/exam/infoMatch', async (req, res) => {
  try {
    const { word } = req.body;
    const exam = getRequestExam(req);
    const content = await askDeepSeek(
      `你是${exam.label}英语出题专家。请根据所给单词，出4道"词汇用法匹配"选择题。

要求：
1. 给出4个英文句子，每个句中有一个空缺（用____表示）。
2. 每句4个选项，考察该单词在不同语境下的用法。
3. 句子难度为${exam.label}水平。
4. 选项可以是被动语态、搭配、词形变化等不同形式。

输出格式（不要额外解释）：
1. 句子____剩余部分。
   A. opt1  B. opt2  C. opt3  D. opt4

2. 句子____剩余部分。
   A. opt1  B. opt2  C. opt3  D. opt4

3. 句子____剩余部分。
   A. opt1  B. opt2  C. opt3  D. opt4

4. 句子____剩余部分。
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

// ========== 作文教学模式 ==========

// 获取作文标题列表
app.get('/api/writing/topics', (req, res) => {
  const exam = getRequestExam(req);
  res.json({ topics: exam.writingTopics });
});

// AI 生成作文大纲
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

// AI 提供关键词汇和短语
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

// ========== 交流角（消息系统） ==========

// 消息存储（内存，重启会丢失。可以改用文件持久化）
let chatMessages = [];

// 获取所有消息
app.get('/api/chat/messages', (req, res) => {
  // 只返回最近 200 条
  const recent = chatMessages.slice(-200);
  res.json({ messages: recent });
});

// 发送消息
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

// 清空消息（调试用）
app.post('/api/chat/clear', (req, res) => {
  chatMessages = [];
  res.json({ success: true });
});

// 启动
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
