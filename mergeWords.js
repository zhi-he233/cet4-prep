// mergeWords.js
const fs = require('fs');
const path = require('path');

// 1. 读取旧的 words.js 文件
const oldFilePath = path.join(__dirname, 'public', 'js', 'words.js');
const oldContent = fs.readFileSync(oldFilePath, 'utf-8');

// 2. 提取 WORDS 数组
const match = oldContent.match(/const\s+WORDS\s*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error('未找到 WORDS 数组，请确保旧文件中包含 const WORDS = [...];');
  process.exit(1);
}
const wordsArrayStr = match[1]; // 提取的数组字符串

// 3. 新的交互逻辑模板（从 // ========== 开始，到文件末尾）
// 我们直接读取当前最新的 words.js 模板（假设你已有我提供的包含测试词库的新版 words.js）
// 如果没有，可以手动提供一个固定的新逻辑字符串。
// 这里使用硬编码的新逻辑，或读取另一个模板文件。
// 为了简单，我将在下面直接嵌入新逻辑字符串。
const newLogic = `
// ========== 以下为最新交互逻辑 ==========
let currentIndex = 0;
let mode = 'study';
let favorites = getUserJson('favorites', [], 'cet4_favorites');

const studyModeEl = document.getElementById('studyMode');
const dictationModeEl = document.getElementById('dictationMode');
const studyWordEl = document.getElementById('studyWord');
const studyPhoneticEl = document.getElementById('studyPhonetic');
const studyMeaningEl = document.getElementById('studyMeaning');
const toggleMeaningBtn = document.getElementById('toggleMeaningBtn');
const switchToDictationBtn = document.getElementById('switchToDictationBtn');
const switchToStudyBtn = document.getElementById('switchToStudyBtn');
const dictationMeaningEl = document.getElementById('dictationMeaning');
const dictationInput = document.getElementById('dictationInput');
const checkSpellBtn = document.getElementById('checkSpellBtn');
const spellResult = document.getElementById('spellResult');
const nextWordAfterCheckBtn = document.getElementById('nextWordAfterCheckBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const aiExplainBtn = document.getElementById('aiExplainBtn');
const aiQuizBtn = document.getElementById('aiQuizBtn');
const wordResult = document.getElementById('wordResult');
const quizResult = document.getElementById('quizResult');
const wordFileInput = document.getElementById('wordFile');

function getCurrentWord() {
  return WORDS.length > 0 ? WORDS[currentIndex % WORDS.length] : null;
}

function saveFavorites() {
  setUserJson('favorites', favorites);
}

function isFavorited(word) {
  return favorites.some(f => f.word === word);
}

function toggleFavorite(word, meaning) {
  if (isFavorited(word)) {
    favorites = favorites.filter(f => f.word !== word);
    favoriteBtn.textContent = '☆ 收藏';
    favoriteBtn.classList.remove('active');
  } else {
    favorites.push({ word, meaning, time: new Date().toISOString() });
    favoriteBtn.textContent = '★ 已收藏';
    favoriteBtn.classList.add('active');
  }
  saveFavorites();
}

function updateFavoriteBtn() {
  const w = getCurrentWord();
  if (!w) return;
  if (isFavorited(w.word)) {
    favoriteBtn.textContent = '★ 已收藏';
    favoriteBtn.classList.add('active');
  } else {
    favoriteBtn.textContent = '☆ 收藏';
    favoriteBtn.classList.remove('active');
  }
}

function showStudyView() {
  const w = getCurrentWord();
  if (!w) {
    studyWordEl.textContent = '无单词数据';
    studyPhoneticEl.textContent = '';
    studyMeaningEl.textContent = '';
    toggleMeaningBtn.textContent = '显示释义';
    return;
  }
  studyWordEl.textContent = w.word || '?';
  studyPhoneticEl.textContent = w.phonetic || '';
  studyMeaningEl.textContent = w.meaning || '（释义缺失）';
  studyMeaningEl.style.display = 'none';
  toggleMeaningBtn.textContent = '显示释义';
  updateFavoriteBtn();
}

function showDictationView() {
  const w = getCurrentWord();
  if (!w) return;
  dictationMeaningEl.textContent = w.meaning || '';
  dictationInput.value = '';
  spellResult.innerHTML = '';
}

function switchMode(newMode) {
  mode = newMode;
  if (mode === 'study') {
    studyModeEl.style.display = 'block';
    dictationModeEl.style.display = 'none';
    showStudyView();
  } else {
    studyModeEl.style.display = 'none';
    dictationModeEl.style.display = 'block';
    showDictationView();
  }
}

function nextWord() {
  currentIndex = (currentIndex + 1) % WORDS.length;
  if (mode === 'study') showStudyView();
  else showDictationView();
  wordResult.textContent = '';
  quizResult.textContent = '';
}

toggleMeaningBtn.addEventListener('click', () => {
  if (!studyMeaningEl) return;
  if (studyMeaningEl.style.display === 'none') {
    studyMeaningEl.style.display = 'block';
    toggleMeaningBtn.textContent = '隐藏释义';
  } else {
    studyMeaningEl.style.display = 'none';
    toggleMeaningBtn.textContent = '显示释义';
  }
});

switchToDictationBtn.addEventListener('click', () => switchMode('dictation'));
switchToStudyBtn.addEventListener('click', () => switchMode('study'));

checkSpellBtn.addEventListener('click', () => {
  const w = getCurrentWord();
  if (!w) return;
  const answer = dictationInput.value.trim().toLowerCase();
  const correct = w.word.toLowerCase();
  if (answer === correct) {
    spellResult.innerHTML = '<span style="color:green; font-weight:bold;">✅ 完全正确！</span>';
    setTimeout(nextWord, 1500);
  } else {
    spellResult.innerHTML = '<span style="color:red;">❌ 拼写错误，正确答案是：<strong>' + w.word + '</strong></span>';
  }
});

nextWordAfterCheckBtn.addEventListener('click', nextWord);

favoriteBtn.addEventListener('click', () => {
  const w = getCurrentWord();
  if (!w) return;
  toggleFavorite(w.word, w.meaning);
});

aiExplainBtn.addEventListener('click', async () => {
  const w = getCurrentWord();
  if (!w) return;
  aiExplainBtn.disabled = true;
  wordResult.textContent = 'AI 讲解生成中...';
  const data = await API.post('/api/word/enrich', { word: w.word });
  wordResult.textContent = data.result || ('出错：' + (data.error || ''));
  aiExplainBtn.disabled = false;
});

aiQuizBtn.addEventListener('click', async () => {
  const w = getCurrentWord();
  if (!w) return;
  aiQuizBtn.disabled = true;
  quizResult.innerHTML = 'AI 出题中...';
  const data = await API.post('/api/word/quiz', { word: w.word, meaning: w.meaning });
  if (data.quiz) {
    const quizText = data.quiz;
    const answerMatch = quizText.match(/答案[：:]\\s*([A-D])/i);
    const correctOption = answerMatch ? answerMatch[1].toUpperCase() : null;
    quizResult.innerHTML = quizText.replace(/\\n/g, '<br>');
    if (correctOption) {
      const userAnswer = prompt('请输入你的答案（A/B/C/D）：\\n正确答案是 ' + correctOption);
      if (userAnswer && userAnswer.toUpperCase() !== correctOption) {
        const wrongWords = getUserJson('wrongbook', [], 'cet4_wrongbook');
        wrongWords.push({
          word: w.word,
          meaning: w.meaning,
          wrongTime: new Date().toISOString()
        });
        setUserJson('wrongbook', wrongWords);
        quizResult.innerHTML += '<br><span style="color:red;">❌ 回答错误，已加入错题本。</span>';
      } else if (userAnswer) {
        quizResult.innerHTML += '<br><span style="color:green;">✅ 回答正确！</span>';
      }
    }
  } else {
    quizResult.textContent = '出题失败：' + (data.error || '');
  }
  aiQuizBtn.disabled = false;
});

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
        switchMode('study');
        alert('成功导入 ' + data.length + ' 个单词！');
      } else {
        alert('JSON 格式错误');
      }
    } catch {
      alert('文件解析失败');
    }
  };
  reader.readAsText(file);
});

// 初始化
if (WORDS.length > 0) {
  switchMode('study');
} else {
  studyWordEl.textContent = '暂无单词';
  studyPhoneticEl.textContent = '';
  studyMeaningEl.textContent = '请导入词库或运行生成脚本';
}
`;

// 4. 生成新的 words.js 内容
const newContent = `// 词库数据（从旧文件提取）
const WORDS = ${wordsArrayStr};

${newLogic}`;

// 5. 写入新文件（先备份提示）
const newFilePath = path.join(__dirname, 'public', 'js', 'words_new.js');
fs.writeFileSync(newFilePath, newContent, 'utf-8');
console.log('✅ 已生成 words_new.js，请手动替换旧的 words.js（建议先备份旧文件）');
console.log('   替换命令（在项目根目录执行）：');
console.log('   cp public/js/words.js public/js/words_backup.js && mv public/js/words_new.js public/js/words.js');
