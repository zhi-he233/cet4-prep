require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

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

async function askDeepSeek(systemPrompt, userMessage) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    const errMsg = '错误：未设置 DEEPSEEK_API_KEY 环境变量';
    console.error(errMsg);
    throw new Error(errMsg);
  }
  try {
    console.log('正在调用 DeepSeek API...');
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

    const data = await res.json();
    console.log('DeepSeek 响应状态码:', res.status);
    if (!res.ok) {
      const errMsg = `DeepSeek API 错误 (${res.status}): ${JSON.stringify(data)}`;
      console.error(errMsg);
      throw new Error(errMsg);
    }
    return data.choices[0].message.content;
  } catch (e) {
    console.error('askDeepSeek 异常:', e.message);
    throw e;
  }
}

// 1. 单词详解
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

// 2. 翻译评分
app.post('/api/translate/evaluate', async (req, res) => {
  try {
    const { chinese, translation } = req.body;
    const prompt = '你是四级翻译阅卷老师。请根据所给中文句子，评价学生的英文翻译。指出词汇、语法、句式方面的问题，并给出修改建议和标准翻译（满分15分，请打分）。用中文分点回复。';
    const content = await askDeepSeek(prompt, `中文句子：${chinese}\n学生翻译：${translation}`);
    res.json({ evaluation: content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// 3. 随机翻译句子（DeepSeek 生成）
app.get('/api/translate/random', async (req, res) => {
  try {
    const sentence = await askDeepSeek(
      '你是四级英语出题老师。每次随机生成一个四级翻译常考的中文句子（长度约15-30字），直接输出句子，不要解释，不要标点以外的符号。',
      '生成一个随机中文翻译句子'
    );
    res.json({ sentence: sentence.trim() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// 4. 作文批改
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

// 5. AI 出题
app.post('/api/word/quiz', async (req, res) => {
  try {
    const { word, meaning } = req.body;
    const quiz = await askDeepSeek(
      '你是四级英语出题老师。请根据所给单词和中文释义，出一道四级真题风格的选择题（单选题），包含题目、四个选项和正确答案。用中文说明题目要求。',
      `单词：${word}，释义：${meaning}`
    );
    res.json({ quiz });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// 6. 资料库列表
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));