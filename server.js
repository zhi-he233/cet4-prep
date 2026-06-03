require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

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
app.use('/materials', express.static(path.join(__dirname, 'materials')));

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
    const content = await askDeepSeek(
      '你是四级英语助教。请用中文详细讲解单词，包括：音标、中文释义、词根词缀、一个形象记忆故事、两个带中文翻译的例句、常见搭配。',
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
    const prompt = `你是四级翻译阅卷老师。请根据所给中文句子，评价学生的英文翻译。
指出词汇、语法、句式方面的问题，并给出修改建议和标准翻译（满分15分，请打分）。
用中文分点回复。`;
    const content = await askDeepSeek(prompt, `中文句子：${chinese}\n学生翻译：${translation}`);
    res.json({ evaluation: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// 随机翻译句子（静态题库，稳定免费）
const staticQuestions = [
  "环境保护是每个人的责任。",
  "随着互联网的普及，网络购物变得越来越流行。",
  "中国有着悠久的历史和丰富的文化遗产。",
  "近年来，越来越多的人开始学习外语。",
  "大学生应该多参加社会实践活动。",
  "共享单车为人们的出行提供了便利。",
  "移动支付已经改变了我们的生活方式。",
  "健康饮食对每个人都很重要。",
  "春节是中国最重要的传统节日。",
  "人工智能将在未来发挥更大的作用。"
];

app.get('/api/translate/random', (req, res) => {
  const index = Math.floor(Math.random() * staticQuestions.length);
  res.json({ sentence: staticQuestions[index] });
});

// 作文批改
app.post('/api/writing/evaluate', async (req, res) => {
  try {
    const { topic, essay } = req.body;
    const content = await askDeepSeek(
      '你是四级写作阅卷老师。请对作文评分（满分15分），指出词汇、语法、连贯性优缺点，并给出修改后的范文。',
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
    const quiz = await askDeepSeek(
      `你是四级英语出题专家。请根据所给单词和中文释义，出一道单选题。

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

// ========== 新增：四级新题型 ==========

// 选词填空（15选10）
app.post('/api/exam/bankedCloze', async (req, res) => {
  try {
    const content = await askDeepSeek(
      `你是四级英语出题专家。请出一道"选词填空"题（四级阅读15选10）。

要求：
1. 一篇约120-150词的英文短文，挖掉10个单词，每个空用____加编号①-⑩表示。
2. 提供15个候选词（A-O），多出5个干扰词。
3. 短文主题贴近四级常考话题。
4. 难度适中，符合四级水平。

输出格式（不要额外解释）：
【短文】
（带____①、____②等空格的短文全文）

【候选词】
A. word1  B. word2  C. word3 ... O. word15

【答案】
①=A  ②=B ... ⑩=J`,
      '请出一道四级选词填空（15选10）题。'
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
    const content = await askDeepSeek(
      `你是四级英语出题专家。请根据所给单词，出4道"词汇用法匹配"选择题。

要求：
1. 给出4个英文句子，每个句中有一个空缺（用____表示）。
2. 每句4个选项，考察该单词在不同语境下的用法。
3. 句子难度为四级水平。
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

// 获取四级作文标题列表
app.get('/api/writing/topics', (req, res) => {
  const topics = [
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
  ];
  res.json({ topics });
});

// AI 生成作文大纲
app.post('/api/writing/outline', async (req, res) => {
  try {
    const { topic } = req.body;
    const content = await askDeepSeek(
      `你是四级英语写作辅导老师。请根据所给作文题目，生成一个详细的英文写作大纲。

要求：
1. 用英文输出，给出 introduction、body paragraphs、conclusion 的结构。
2. 每个部分给出 2-3 个要点提示（bullet points）。
3. 在 body 部分建议可以使用的论证方法（举例、对比、因果等）。
4. 语言简洁实用，适合四级水平。

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
    const content = await askDeepSeek(
      `你是四级英语写作辅导老师。请根据所给作文题目，提供 15-20 个实用的英语词汇和短语。

要求：
1. 分为三类：开头引入短语、中间论证词汇/短语、结尾总结短语
2. 每个短语附中文翻译
3. 选择四级考试常用、能提分的表达
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

// 资料库列表
app.get('/api/materials/list', (req, res) => {
  const dir = path.join(__dirname, 'materials');
  if (!fs.existsSync(dir)) return res.json({ files: [] });
  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.pdf'));
  const fileList = files.map(f => ({
    name: f.replace(/\.pdf$/i, ''),
    url: `/materials/${encodeURIComponent(f)}`
  }));
  res.json({ files: fileList });
});

// 启动
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));