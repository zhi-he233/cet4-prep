const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist');

const MATERIALS_DIR = path.join(__dirname, '../materials');
const OUTPUT_FILE = path.join(__dirname, '../public/js/words.js');

const KEYWORDS = [
  '高频700词', '高频1000词', '核心1500词', '大纲词汇4500',
  '词汇表', '高频700', '高频1000', '核心1500', '大纲词汇'
];
const EXCLUDE_KEYWORDS = ['词组', '翻译词组'];

function shouldExtract(filename) {
  if (EXCLUDE_KEYWORDS.some(k => filename.includes(k))) return false;
  return KEYWORDS.some(k => filename.includes(k));
}

async function extractTextFromPDF(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += pageText + '\n';
  }
  return fullText;
}

/**
 * 将文本按单词条目拆分成片段
 * 每个条目以 “数字. 英文单词” 或 “数字 . 英文单词” 开头
 */
function splitWordEntries(text) {
  const entries = [];
  // 匹配序号+英文单词
  const regex = /(\d+)\s*\.\s*([a-zA-Z\-]+)/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    // 如果这不是第一个匹配，说明上一个条目开始到本次匹配之前的内容是属于上一个条目的
    if (entries.length > 0) {
      entries[entries.length - 1].suffix = text.slice(entries[entries.length - 1].end, match.index).trim();
    }
    // 记录当前条目
    entries.push({
      number: match[1],
      word: match[2],
      start: match.index,
      end: regex.lastIndex
    });
    lastIndex = regex.lastIndex;
  }
  // 最后一个条目之后的内容
  if (entries.length > 0) {
    entries[entries.length - 1].suffix = text.slice(entries[entries.length - 1].end).trim();
  }
  return entries;
}

/**
 * 从一个条目片段中提取音标和释义
 */
function parseEntry(word, suffix) {
  let phonetic = '';
  let meaning = '';

  // 1. 尝试提取 [...] 中的音标
  const bracketMatch = suffix.match(/^\s*\[([^\]]+)\]\s*/);
  if (bracketMatch) {
    phonetic = bracketMatch[1].trim();
    meaning = suffix.substring(bracketMatch[0].length).trim();
  } else {
    meaning = suffix.trim();
  }

  // 2. 去除开头的 - 或 · 等分隔符
  meaning = meaning.replace(/^[-－·•\s]+/, '').trim();

  // 3. 如果释义开头是词性缩写（如 v. n. adj. 等），则保留原样
  // 已经是最终内容，不需要进一步处理

  return { word: word.toLowerCase(), phonetic, meaning, example: '', examPoint: '' };
}

function extractWordsFromText(text) {
  // 先分割成条目
  const entries = splitWordEntries(text);
  const words = [];

  for (const entry of entries) {
    const { word, suffix } = entry;
    if (!word || word.length < 2 || word.length > 30) continue;
    if (/[^a-z\-]/i.test(word)) continue; // 排除非纯字母

    const result = parseEntry(word, suffix);
    words.push(result);
  }

  return words;
}

async function processPDF(filePath) {
  const text = await extractTextFromPDF(filePath);
  // 打印前 3 行预览
  const previewLines = text.split('\n').filter(l => l.trim()).slice(0, 3);
  console.log(`\n--- ${path.basename(filePath)} 前3行预览 ---`);
  previewLines.forEach(l => console.log('  ', l));

  const words = extractWordsFromText(text);
  console.log(`  从 ${path.basename(filePath)} 提取出 ${words.length} 个单词`);
  return words;
}

async function main() {
  if (!fs.existsSync(MATERIALS_DIR)) {
    console.log('materials 文件夹不存在');
    return;
  }

  const allFiles = fs.readdirSync(MATERIALS_DIR);
  const pdfFiles = allFiles.filter(f => f.endsWith('.pdf') && shouldExtract(f));

  if (pdfFiles.length === 0) {
    console.log('没有找到需要提取单词的 PDF。请确认文件名包含以下关键字之一：', KEYWORDS);
    return;
  }

  let allWords = [];
  for (const file of pdfFiles) {
    const filePath = path.join(MATERIALS_DIR, file);
    try {
      const words = await processPDF(filePath);
      allWords = allWords.concat(words);
    } catch (e) {
      console.error(`处理 ${file} 时出错:`, e.message);
    }
  }

  // 去重
  const uniqueWords = [];
  const seen = new Set();
  for (const w of allWords) {
    if (!seen.has(w.word)) {
      seen.add(w.word);
      uniqueWords.push(w);
    }
  }

  console.log(`\n总共提取 ${allWords.length} 个单词，去重后 ${uniqueWords.length} 个。`);

  // 生成 words.js（保留全部交互功能）
  const content = `// 自动生成的词库，来自 materials 目录中的PDF单词表
const WORDS = ${JSON.stringify(uniqueWords, null, 2)};

let currentIndex = 0;
let meaningVisible = true;

const wordEl = document.getElementById('wordDisplay');
const phoneticEl = document.getElementById('phoneticDisplay');
const meaningEl = document.getElementById('meaningDisplay');
const exampleEl = document.getElementById('exampleDisplay');
const examPointEl = document.getElementById('examPointDisplay');
const showMeaningBtn = document.getElementById('showMeaningBtn');
const nextWordBtn = document.getElementById('nextWordBtn');
const aiExplainBtn = document.getElementById('aiExplainBtn');
const dictationBtn = document.getElementById('dictationModeBtn');
const dictationInput = document.getElementById('dictationInput');
const dictationCheckBtn = document.getElementById('dictationCheckBtn');
const dictationResult = document.getElementById('dictationResult');
const wordResult = document.getElementById('wordResult');
const aiQuizBtn = document.getElementById('aiQuizBtn');
const quizResult = document.getElementById('quizResult');
const wordFileInput = document.getElementById('wordFile');

function showWord() {
  if (WORDS.length === 0) return;
  const w = WORDS[currentIndex % WORDS.length];
  wordEl.textContent = w.word;
  phoneticEl.textContent = w.phonetic || '';
  meaningEl.textContent = w.meaning;
  meaningEl.style.display = meaningVisible ? 'block' : 'none';
  exampleEl.textContent = w.example ? '📖 真题例句：' + w.example : '';
  examPointEl.textContent = w.examPoint ? '📌 考点：' + w.examPoint : '';
  dictationInput.value = '';
  dictationResult.textContent = '';
  quizResult.textContent = '';
  wordResult.textContent = '';
}

showMeaningBtn.addEventListener('click', () => {
  meaningVisible = !meaningVisible;
  meaningEl.style.display = meaningVisible ? 'block' : 'none';
});

nextWordBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % WORDS.length;
  showWord();
});

aiExplainBtn.addEventListener('click', async () => {
  if (WORDS.length === 0) return;
  aiExplainBtn.disabled = true;
  wordResult.textContent = 'AI 讲解生成中...';
  const data = await API.post('/api/word/enrich', { word: wordEl.textContent });
  if (data.result) wordResult.textContent = data.result;
  else wordResult.textContent = '出错：' + (data.error || '');
  aiExplainBtn.disabled = false;
});

dictationBtn.addEventListener('click', () => {
  if (meaningVisible) {
    wordEl.style.display = 'none';
    phoneticEl.style.display = 'none';
    meaningEl.style.display = 'block';
    dictationBtn.textContent = '退出默写';
    dictationInput.style.display = 'block';
    dictationCheckBtn.style.display = 'inline-block';
    dictationResult.textContent = '';
  } else {
    wordEl.style.display = 'inline';
    phoneticEl.style.display = 'inline';
    meaningEl.style.display = meaningVisible ? 'block' : 'none';
    dictationBtn.textContent = '默写模式';
    dictationInput.style.display = 'none';
    dictationCheckBtn.style.display = 'none';
    dictationResult.textContent = '';
  }
});

dictationCheckBtn.addEventListener('click', () => {
  const answer = dictationInput.value.trim().toLowerCase();
  const correct = WORDS[currentIndex].word.toLowerCase();
  if (answer === correct) {
    dictationResult.innerHTML = '<span style="color:green;">✅ 正确！</span>';
  } else {
    dictationResult.innerHTML = '<span style="color:red;">❌ 错误，正确答案是：<strong>' + correct + '</strong></span>';
  }
});

aiQuizBtn.addEventListener('click', async () => {
  if (WORDS.length === 0) return;
  aiQuizBtn.disabled = true;
  quizResult.textContent = 'AI 生成题目中...';
  const data = await API.post('/api/word/quiz', { word: WORDS[currentIndex].word, meaning: WORDS[currentIndex].meaning });
  if (data.quiz) quizResult.innerHTML = data.quiz.replace(/\\n/g, '<br>');
  else quizResult.textContent = '出题失败：' + (data.error || '');
  aiQuizBtn.disabled = false;
});

if (wordFileInput) {
  wordFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data) && data.length > 0 && data[0].word) {
          WORDS.length = 0;
          Array.prototype.push.apply(WORDS, data);
          currentIndex = 0;
          showWord();
          alert('成功导入 ' + data.length + ' 个单词！');
        } else {
          alert('JSON 格式错误，需要包含 word 字段');
        }
      } catch {
        alert('文件解析失败');
      }
    };
    reader.readAsText(file);
  });
}

showWord();
`;

  fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
  console.log('\n已生成新的 words.js 文件:', OUTPUT_FILE);
  console.log('重启程序后即可使用新的词库！');
}

main();