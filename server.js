require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const EXAM_CONFIG = {
  cet4: {
    label: '四级',
    translateMaxChars: 100
  },
  cet6: {
    label: '六级',
    translateMaxChars: 120
  }
};

function getExamConfig(level) {
  return EXAM_CONFIG[level] || EXAM_CONFIG.cet4;
}

function getRequestExam(req) {
  return getExamConfig(req.body?.level || req.query?.level);
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
