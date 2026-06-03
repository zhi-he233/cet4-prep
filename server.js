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

// AI 出题
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