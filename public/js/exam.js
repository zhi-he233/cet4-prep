// ========== 四级新题型 ==========

// 当前题型数据
let currentQuizType = null; // 'choice' | 'cloze' | 'match'
let currentQuizData = null; // 当前题目的数据

// --- 选择题（原有逻辑，改为从弹窗调用） ---
async function startChoiceQuiz() {
  const w = getCurrentWord();
  if (!w) return alert('请先切换到背单词页面');
  currentQuizType = 'choice';
  const quizResult = document.getElementById('quizResult');
  quizResult.innerHTML = 'AI 出题中...';

  const data = await API.post('/api/word/quiz', { word: w.word, meaning: w.meaning });
  if (!data.quiz) {
    quizResult.textContent = '出题失败：' + (data.error || '');
    return;
  }
  renderChoiceQuiz(data.quiz, w);
}

function renderChoiceQuiz(quizText, w) {
  const quizResult = document.getElementById('quizResult');
  // 解析选项
  const optionRegex = /([A-D])[.、．]\s*(.+)/g;
  const options = {};
  let match;
  let questionText = quizText;
  const firstOptionIdx = quizText.search(optionRegex);
  if (firstOptionIdx !== -1) {
    questionText = quizText.substring(0, firstOptionIdx).trim();
  }
  optionRegex.lastIndex = 0;
  while ((match = optionRegex.exec(quizText)) !== null) {
    options[match[1]] = match[2].trim();
  }
  const answerMatch = quizText.match(/答案[：:]\s*([A-D])/i);
  let correctOption = answerMatch ? answerMatch[1].toUpperCase() : null;

  // 尝试多种答案格式
  if (!correctOption) {
    const ansMatch2 = quizText.match(/答案[：:]\s*([A-D])/i);
    if (ansMatch2) correctOption = ansMatch2[1].toUpperCase();
  }

  if (Object.keys(options).length === 0 || !correctOption) {
    quizResult.innerHTML = marked.parse(quizText);
    return;
  }

  let html = `<div class="quiz-question">${questionText.replace(/\n/g, '<br>')}</div>`;
  html += '<div class="quiz-options">';
  for (const [letter, text] of Object.entries(options)) {
    html += `<button class="quiz-option-btn" data-letter="${letter}">${letter}. ${text}</button>`;
  }
  html += '</div>';
  html += '<div id="quizFeedback" class="quiz-feedback"></div>';
  quizResult.innerHTML = html;

  const optionBtns = quizResult.querySelectorAll('.quiz-option-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      optionBtns.forEach(b => b.disabled = true);
      this.classList.add('selected');
      const feedback = document.getElementById('quizFeedback');
      if (this.dataset.letter === correctOption) {
        feedback.innerHTML = '<span style="color:green; font-weight:bold;">✅ 回答正确！</span>';
      } else {
        const wrongWords = JSON.parse(localStorage.getItem('cet4_wrongbook') || '[]');
        wrongWords.push({
          word: w.word,
          meaning: w.meaning,
          wrongTime: new Date().toISOString()
        });
        localStorage.setItem('cet4_wrongbook', JSON.stringify(wrongWords));
        feedback.innerHTML = `<span style="color:red;">❌ 回答错误，正确答案是：<strong>${correctOption}. ${options[correctOption]}</strong>，已加入错题本。</span>`;
      }
      optionBtns.forEach(b => {
        if (b.dataset.letter === correctOption) b.classList.add('correct');
      });
    });
  });
}

// --- 选词填空（15选10） ---
async function startClozeQuiz() {
  currentQuizType = 'cloze';
  const quizResult = document.getElementById('quizResult');
  quizResult.innerHTML = 'AI 生成题目中...';

  const data = await API.post('/api/exam/bankedCloze', {});
  if (!data.content) {
    quizResult.textContent = '出题失败';
    return;
  }
  renderClozeQuiz(data.content);
}

function renderClozeQuiz(content) {
  const quizResult = document.getElementById('quizResult');

  // 解析短文
  const passageMatch = content.match(/【短文】\s*([\s\S]*?)(?=【候选词】)/);
  // 解析候选词
  const wordBankMatch = content.match(/【候选词】\s*([\s\S]*?)(?=【答案】)/);
  // 解析答案
  const answerMatch = content.match(/【答案】\s*([\s\S]*)/);

  const passage = passageMatch ? passageMatch[1].trim() : '';
  const wordBankText = wordBankMatch ? wordBankMatch[1].trim() : '';
  const answerText = answerMatch ? answerMatch[1].trim() : '';

  // 解析答案
  const answers = {};
  if (answerText) {
    const lines = answerText.split('\n');
    lines.forEach(line => {
      const m = line.match(/([①②③④⑤⑥⑦⑧⑨⑩])\s*=\s*([A-O])/i);
      if (m) answers[m[1]] = m[2].toUpperCase();
    });
  }

  // 解析候选词
  const words = [];
  const wordRegex = /([A-O])[.、．]\s*(\S+)/g;
  let m;
  while ((m = wordRegex.exec(wordBankText)) !== null) {
    words.push({ letter: m[1], word: m[2] });
  }

  // 构建选词区
  let html = '<div class="cloze-passage">';
  // 在短文中将 ____① 等替换成可点击占位符
  let displayPassage = passage;
  const blankRegex = /_{4,}\s*([①②③④⑤⑥⑦⑧⑨⑩])/g;
  let blankMatch;
  const blankMap = {};
  while ((blankMatch = blankRegex.exec(passage)) !== null) {
    blankMap[blankMatch[1]] = '';
  }

  // 渲染短文
  displayPassage = displayPassage.replace(blankRegex, (match, num) => {
    return `<span class="blank" id="cloze-blank-${num}">${num}</span>`;
  });
  html += displayPassage;
  html += '</div>';

  // 词库
  html += '<div class="cloze-word-bank">';
  words.forEach(w => {
    html += `<span class="cloze-word-tag" data-letter="${w.letter}" data-word="${w.word}">${w.letter}. ${w.word}</span>`;
  });
  html += '</div>';

  // 提交按钮
  html += '<button id="clozeSubmitBtn" class="btn-primary">提交答案</button>';
  html += '<div id="clozeFeedback" class="quiz-feedback" style="margin-top:1rem;"></div>';

  quizResult.innerHTML = html;

  // 绑定选词
  const tags = quizResult.querySelectorAll('.cloze-word-tag');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      if (tag.classList.contains('used')) return;
      // 找到第一个空位
      for (const num of ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']) {
        const blank = document.getElementById(`cloze-blank-${num}`);
        if (blank && !blank.dataset.filled) {
          blank.textContent = tag.dataset.word;
          blank.dataset.filled = tag.dataset.letter;
          tag.classList.add('used');
          break;
        }
      }
    });
  });

  // 绑定提交
  document.getElementById('clozeSubmitBtn').addEventListener('click', () => {
    const feedback = document.getElementById('clozeFeedback');
    let correct = 0;
    let total = 0;
    for (const num of ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']) {
      const blank = document.getElementById(`cloze-blank-${num}`);
      if (blank && blank.dataset.filled) {
        total++;
        if (blank.dataset.filled === answers[num]) {
          correct++;
          blank.style.background = '#d1fae5';
        } else {
          blank.style.background = '#fee2e2';
          blank.textContent = `${blank.dataset.filled}→${answers[num] || '?'}`;
        }
      }
    }
    feedback.innerHTML = `答对 <strong>${correct}</strong> / ${total} 题`;
    if (correct === total && total > 0) {
      feedback.innerHTML += ' 🎉 全部正确！';
    }
  });
}

// --- 信息匹配 ---
async function startInfoMatchQuiz() {
  const w = getCurrentWord();
  if (!w) return alert('请先切换到背单词页面');
  currentQuizType = 'match';
  const quizResult = document.getElementById('quizResult');
  quizResult.innerHTML = 'AI 生成题目中...';

  const data = await API.post('/api/exam/infoMatch', { word: w.word });
  if (!data.content) {
    quizResult.textContent = '出题失败';
    return;
  }
  renderInfoMatchQuiz(data.content, w);
}

function renderInfoMatchQuiz(content, w) {
  const quizResult = document.getElementById('quizResult');

  // 解析题目
  const questions = [];
  const lines = content.split('\n');
  let currentQuestion = null;

  for (const line of lines) {
    const qMatch = line.match(/^(\d+)[.、．]\s*(.+)/);
    if (qMatch) {
      if (currentQuestion) questions.push(currentQuestion);
      currentQuestion = { text: qMatch[2], options: [], answer: null };
    } else if (currentQuestion) {
      const optMatch = line.match(/([A-D])[.、．]\s*(.+)/);
      if (optMatch) {
        currentQuestion.options.push({ letter: optMatch[1], text: optMatch[2] });
      }
    }
  }
  if (currentQuestion) questions.push(currentQuestion);

  // 解析答案
  const answerMatch = content.match(/【答案】\s*([\s\S]*)/);
  const answers = {};
  if (answerMatch) {
    const ansLines = answerMatch[1].split('\n');
    ansLines.forEach(line => {
      const m = line.match(/(\d+)\s*=\s*([A-D])/i);
      if (m) answers[m[1]] = m[2].toUpperCase();
    });
  }

  let html = '<div class="info-match">';
  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    html += `<div class="info-match-item">
      <div class="info-question">${qNum}. ${q.text}</div>
      <div class="info-options">`;
    q.options.forEach(opt => {
      html += `<button class="info-opt-btn" data-q="${qNum}" data-letter="${opt.letter}">${opt.letter}. ${opt.text}</button>`;
    });
    html += `</div><div class="info-feedback" id="info-fb-${qNum}"></div></div>`;
  });
  html += '<button id="infoMatchSubmitBtn" class="btn-primary" style="margin-top:1rem;">提交答案</button>';
  html += '<div id="infoMatchTotalFb" class="quiz-feedback"></div>';
  html += '</div>';

  quizResult.innerHTML = html;

  // 绑定选择
  const optBtns = quizResult.querySelectorAll('.info-opt-btn');
  optBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      // 清除同组选择
      quizResult.querySelectorAll(`.info-opt-btn[data-q="${q}"]`).forEach(b => {
        b.classList.remove('selected');
      });
      btn.classList.add('selected');
    });
  });

  // 提交
  document.getElementById('infoMatchSubmitBtn').addEventListener('click', () => {
    let correct = 0;
    let total = 0;
    for (const qNum in answers) {
      total++;
      const selected = quizResult.querySelector(`.info-opt-btn[data-q="${qNum}"].selected`);
      const fb = document.getElementById(`info-fb-${qNum}`);
      if (selected) {
        if (selected.dataset.letter === answers[qNum]) {
          correct++;
          fb.innerHTML = '<span style="color:green;">✅ 正确</span>';
        } else {
          fb.innerHTML = `<span style="color:red;">❌ 错误，正确答案是 ${answers[qNum]}</span>`;
          // 记录错题
          const wrongWords = JSON.parse(localStorage.getItem('cet4_wrongbook') || '[]');
          wrongWords.push({
            word: w.word,
            meaning: w.meaning,
            wrongTime: new Date().toISOString()
          });
          localStorage.setItem('cet4_wrongbook', JSON.stringify(wrongWords));
        }
      } else {
        fb.innerHTML = `<span style="color:red;">⚠️ 未作答，正确答案是 ${answers[qNum]}</span>`;
      }
      // 高亮正确
      quizResult.querySelectorAll(`.info-opt-btn[data-q="${qNum}"]`).forEach(b => {
        b.disabled = true;
        if (b.dataset.letter === answers[qNum]) b.classList.add('correct');
      });
    }
    document.getElementById('infoMatchTotalFb').innerHTML = `答对 <strong>${correct}</strong> / ${total} 题`;
  });
}
