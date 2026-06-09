// ========== Mock Exam Module ==========
let examTimer = null;
let examSeconds = 0;
let examAnswers = {};
let examPaper = null;
let examPaperId = null;

const EXAM_DURATIONS = { cet4: 125 * 60, cet6: 130 * 60 }; // seconds
const PAPER_LABELS = { cet4: '四级', cet6: '六级' };

async function loadExamSelector() {
  const container = document.getElementById('mockExamContent');
  const data = await API.get('/api/papers');
  const papers = data.papers || [];
  const levels = { cet4: '四级', cet6: '六级' };

  let html = '<h2>📝 选择试卷开始模拟考试</h2>';
  html += '<p class="teach-hint">选择一套真题，系统将计时模拟完整考试流程（写作→听力→阅读→翻译）</p>';

  if (papers.length === 0) {
    html += '<div class="empty-state"><p>暂无试卷数据</p></div>';
  } else {
    html += '<div class="paper-list">';
    papers.forEach(p => {
      html += '<div class="paper-card exam-select-card" data-id="' + p._id + '" data-title="' + p.title + '"><div class="paper-title">' + p.title + '</div><div class="paper-meta">' + (levels[p.level]||p.level) + ' · ' + (p.sectionCount||0) + ' 个题型模块</div><div class="paper-meta">⏱ 建议时长: ' + Math.floor(EXAM_DURATIONS[p.level]/60) + ' 分钟</div></div>';
    });
    html += '</div>';
  }
  container.innerHTML = html;

  container.querySelectorAll('.exam-select-card').forEach(card => {
    card.addEventListener('click', () => startExam(card.dataset.id, card.dataset.title));
  });
}

async function startExam(paperId, title) {
  if (!confirm('开始模拟考试：' + title + '\n\n考试将计时进行，时间到自动提交。确定开始吗？')) return;

  const data = await API.get('/api/papers/' + paperId);
  if (data.error) { alert('加载试卷失败'); return; }
  examPaper = data.paper;
  examPaperId = paperId;
  examAnswers = {};
  examSeconds = EXAM_DURATIONS[examPaper.level] || EXAM_DURATIONS.cet4;

  renderExamUI();
  startTimer();
}

function renderExamUI() {
  const container = document.getElementById('mockExamContent');
  container.innerHTML = `
    <div class="exam-header">
      <div class="exam-timer" id="examTimer">⏱ ${formatTime(examSeconds)}</div>
      <h2>📝 ${examPaper.title}</h2>
      <button class="btn-secondary" id="exitExamBtn">退出考试</button>
    </div>
    <div class="exam-nav" id="examNav"></div>
    <div class="exam-body" id="examBody"></div>
    <div class="exam-footer">
      <button class="btn-primary" id="submitExamBtn">📤 提交试卷</button>
    </div>
  `;

  document.getElementById('exitExamBtn').addEventListener('click', () => {
    if (confirm('确定退出考试？所有作答将丢失。')) {
      stopTimer();
      loadExamSelector();
    }
  });
  document.getElementById('submitExamBtn').addEventListener('click', submitExam);

  renderExamNav();
  switchSection(0);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

function startTimer() {
  stopTimer();
  examTimer = setInterval(() => {
    examSeconds--;
    const el = document.getElementById('examTimer');
    if (el) {
      el.textContent = '⏱ ' + formatTime(examSeconds);
      if (examSeconds < 300) el.classList.add('time-warning');
      if (examSeconds < 60) el.classList.add('time-danger');
    }
    if (examSeconds <= 0) { stopTimer(); submitExam(); }
  }, 1000);
}

function stopTimer() {
  if (examTimer) { clearInterval(examTimer); examTimer = null; }
}

function renderExamNav() {
  const nav = document.getElementById('examNav');
  if (!examPaper.sections || !nav) return;
  nav.innerHTML = examPaper.sections.map((s, i) =>
    '<button class="exam-nav-btn" data-sec="' + i + '">' + (s.title || ('Part ' + (i+1))) + '</button>'
  ).join('');
  nav.querySelectorAll('.exam-nav-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => switchSection(i));
  });
}

function switchSection(idx) {
  const sections = examPaper.sections;
  if (idx < 0 || idx >= sections.length) return;
  const sec = sections[idx];
  const body = document.getElementById('examBody');

  // Update nav active
  document.querySelectorAll('.exam-nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector('.exam-nav-btn[data-sec="' + idx + '"]');
  if (btn) btn.classList.add('active');

  let html = '<h3 class="section-heading">' + sec.title + '</h3>';

  if (sec.type === 'writing') {
    html += '<div class="exam-writing"><p class="exam-passage markable">' + (sec.passage || '无题目') + '</p><textarea class="exam-textarea" id="examEssay" placeholder="在此写作（至少120词）..." rows="12">' + (examAnswers['writing'] || '') + '</textarea></div>';
  } else if (sec.type === 'reading') {
    // Add passage ID for this section
    const realIdx = examPaper.sections.indexOf(sec);
    html += '<div class="exam-reading"><div class="reading-passage markable" id="examPassage-' + realIdx + '">';
    const words = (sec.passage || '').split(' ');
    words.forEach(w => {
      html += '<span class="clickable-word">' + w + '</span> ';
    });
    html += '</div>';
    if (sec.questions && sec.questions.length > 0) {
      html += '<div class="paper-questions">';
      sec.questions.forEach((q, qi) => {
        const key = 'q_' + realIdx + '_' + qi;
        html += '<div class="quiz-question-item"><div class="q-text">' + (qi+1) + '. ' + q.question + '</div>';
        if (q.options && q.options.length > 0) {
          html += '<div class="q-options">';
          q.options.forEach(opt => {
            const letter = opt.substring(0, opt.indexOf(')') > -1 ? opt.indexOf(')') : 2);
            const checked = examAnswers[key] === letter.trim() ? ' checked' : '';
            html += '<label class="q-opt-label"><input type="radio" name="' + key + '" value="' + letter.trim() + '"' + checked + ' onchange="saveExamAnswer(\'' + key + '\', this.value)"> ' + opt + '</label>';
          });
          html += '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div>';
  } else if (sec.type === 'translation') {
    html += '<div class="exam-translation"><div class="exam-passage markable" style="font-size:1.2rem;">' + (sec.passage || '无原文') + '</div><textarea class="exam-textarea" id="examTranslation" placeholder="在此输入英文翻译..." rows="6">' + (examAnswers['translation'] || '') + '</textarea></div>';
  }

  body.innerHTML = html;

  // Bind writing/translation textarea changes
  const essayEl = document.getElementById('examEssay');
  if (essayEl) essayEl.addEventListener('input', () => { examAnswers['writing'] = essayEl.value; });

  const transEl = document.getElementById('examTranslation');
  if (transEl) transEl.addEventListener('input', () => { examAnswers['translation'] = transEl.value; });

  // Bind word clicks for reading passages
  bindExamWordClicks();
  bindExamMarking();
}

function saveExamAnswer(key, value) {
  examAnswers[key] = value;
}

function bindExamWordClicks() {
  document.querySelectorAll('#examBody .clickable-word').forEach(wordEl => {
    wordEl.addEventListener('click', function(e) {
      e.stopPropagation();
      const word = this.textContent.replace(/[^a-zA-Z-]/g, '');
      if (!word || word.length < 2) return;
      if (typeof lookupLocalWord === 'function') {
        const local = lookupLocalWord(word);
        if (local) {
          if (typeof showTooltip === 'function') showTooltip(e, word, local.meaning, local.phonetic);
        }
      }
    });
  });
}

function bindExamMarking() {
  document.querySelectorAll('#examBody .markable').forEach(el => {
    el.addEventListener('mouseup', function(e) {
      const sel = window.getSelection();
      if (!sel.toString().trim()) return;
      const range = sel.getRangeAt(0);
      const span = document.createElement('span');
      span.className = 'exam-mark';
      span.style.backgroundColor = 'rgba(239,68,68,0.15)';
      span.style.borderBottom = '2px solid #ef4444';
      try { range.surroundContents(span); } catch(e) {}
      sel.removeAllRanges();
    });
  });

  // Click marked text to unmark
  document.querySelectorAll('#examBody .exam-mark').forEach(mark => {
    mark.addEventListener('click', function() {
      const parent = this.parentNode;
      while (this.firstChild) parent.insertBefore(this.firstChild, this);
      parent.removeChild(this);
    });
  });
}

function submitExam() {
  stopTimer();
  if (!confirm('确定提交试卷吗？')) { startTimer(); return; }

  // Calculate reading score
  let readingCorrect = 0, readingTotal = 0;
  if (examPaper.sections) {
    examPaper.sections.forEach((sec, si) => {
      if (sec.type !== 'reading' || !sec.questions) return;
      sec.questions.forEach((q, qi) => {
        const key = 'q_' + si + '_' + qi;
        if (q.answer) {
          readingTotal++;
          const userAns = examAnswers[key];
          if (userAns && userAns.toUpperCase() === q.answer.trim()[0].toUpperCase()) readingCorrect++;
        }
      });
    });
  }

  const container = document.getElementById('mockExamContent');
  const essay = examAnswers['writing'] || '';
  const translation = examAnswers['translation'] || '';

  container.innerHTML = `
    <h2>📊 考试结果</h2>
    <div class="result-box">
      <h3>📖 阅读理解</h3>
      <p>得分: <strong style="font-size:1.5rem;">${readingCorrect}</strong> / ${readingTotal} (${readingTotal > 0 ? Math.round(readingCorrect/readingTotal*100) : 0}%)</p>
      <p style="color:var(--text-muted);">用时: ${formatTime(EXAM_DURATIONS[examPaper.level] - examSeconds)}</p>
    </div>
    ${essay ? '<div class="result-box"><h3>✍️ 写作</h3><pre style="white-space:pre-wrap;">' + essay + '</pre><button class="btn-primary" onclick="evaluateExamEssay()">🤖 AI 批改作文</button><div id="examEssayResult"></div></div>' : ''}
    ${translation ? '<div class="result-box"><h3>🌪 翻译</h3><pre style="white-space:pre-wrap;">' + translation + '</pre><button class="btn-primary" onclick="evaluateExamTranslation()">🤖 AI 评分翻译</button><div id="examTransResult"></div></div>' : ''}
    <button class="btn-secondary" onclick="loadExamSelector()">返回选择试卷</button>
  `;
}

async function evaluateExamEssay() {
  const essay = examAnswers['writing'] || '';
  const btn = document.querySelector('#examEssayResult').previousElementSibling;
  btn.disabled = true; btn.textContent = '批改中...';
  const data = await API.post('/api/writing/evaluate', { topic: '作文', essay });
  document.getElementById('examEssayResult').innerHTML = data.evaluation ? marked.parse(data.evaluation) : '批改失败';
  btn.style.display = 'none';
}

async function evaluateExamTranslation() {
  const translation = examAnswers['translation'] || '';
  const btn = document.querySelector('#examTransResult').previousElementSibling;
  btn.disabled = true; btn.textContent = '评分中...';
  const data = await API.post('/api/translate/evaluate', { chinese: '翻译', translation });
  document.getElementById('examTransResult').innerHTML = data.evaluation ? marked.parse(data.evaluation) : '评分失败';
  btn.style.display = 'none';
}

window.loadExamSelector = loadExamSelector;
window.evaluateExamEssay = evaluateExamEssay;
window.evaluateExamTranslation = evaluateExamTranslation;

async function loadExamListeningQuestions(secIdx) {
  const btn = document.getElementById('loadExamListeningBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'AI 生成题目中...'; }
  const container = document.getElementById('examListeningQuestions');
  if (container) container.innerHTML = '<p style="padding:1rem;">🤖 AI 正在生成听力题目...</p>';
  const data = await API.post('/api/listening/questions', {
    level: examPaper.level || 'cet4',
    year: examPaper.year,
    month: examPaper.month
  });
  if (data.questions && data.questions.length > 0) {
    renderExamListeningQuestions(data.questions);
  } else {
    if (container) container.innerHTML = '<p style="color:red;">题目生成失败: ' + (data.error || '') + '</p>';
  }
  if (btn) btn.style.display = 'none';
}

function renderExamListeningQuestions(questions) {
  const container = document.getElementById('examListeningQuestions');
  if (!container) return;
  let html = '<div class="paper-questions"><h3>📋 听力题目</h3>';
  let currentSection = '';
  questions.forEach((q, idx) => {
    if (q.section && q.section !== currentSection) {
      currentSection = q.section;
      html += '<h4 class="listening-section-heading">' + currentSection + '</h4>';
    }
    html += '<div class="quiz-question-item" data-lq="' + idx + '">';
    html += '<div class="q-text">' + (q.number || idx + 1) + '. ' + (q.question || '') + '</div>';
    if (q.options && q.options.length > 0) {
      html += '<div class="q-options">';
      q.options.forEach(opt => {
        const letter = (opt || '').substring(0, (opt || '').indexOf(')') > -1 ? (opt || '').indexOf(')') : 2);
        html += '<button class="q-opt-btn" data-answer="' + letter.trim() + '">' + opt + '</button>';
      });
      html += '</div>';
    }
    html += '<div class="q-feedback" id="lq-fb-' + idx + '" style="display:none;"></div>';
    html += '</div>';
  });
  html += '<button class="btn-primary" id="submitExamListeningBtn" style="margin-top:1rem;">提交答案</button>';
  html += '<div id="examListeningScore" class="quiz-feedback" style="margin-top:0.5rem;"></div>';
  html += '</div>';
  container.innerHTML = html;

  // Bind option selection
  container.querySelectorAll('.q-opt-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.querySelectorAll('.q-opt-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Bind submit
  document.getElementById('submitExamListeningBtn').addEventListener('click', () => {
    let correct = 0, total = 0;
    questions.forEach((q, idx) => {
      if (!q.answer) return;
      total++;
      const selected = container.querySelector('.quiz-question-item[data-lq="' + idx + '"] .q-opt-btn.selected');
      const fb = document.getElementById('lq-fb-' + idx);
      fb.style.display = 'block';
      const qDiv = container.querySelector('.quiz-question-item[data-lq="' + idx + '"]');
      qDiv.querySelectorAll('.q-opt-btn').forEach(b => b.disabled = true);
      const correctLetter = q.answer.trim()[0].toUpperCase();
      qDiv.querySelectorAll('.q-opt-btn').forEach(b => {
        if (b.dataset.answer.toUpperCase() === correctLetter) b.classList.add('correct');
      });
      if (selected && selected.dataset.answer.toUpperCase() === correctLetter) {
        correct++;
        fb.innerHTML = '<span style="color:green;">✓ 正确</span>';
      } else {
        if (selected) selected.classList.add('wrong');
        fb.innerHTML = '<span style="color:red;">✗ 正确答案: ' + q.answer + '</span>';
      }
    });
    document.getElementById('examListeningScore').innerHTML = '得分: <strong>' + correct + '</strong> / ' + total + ' (' + (total > 0 ? Math.round(correct / total * 100) : 0) + '%)';
    document.getElementById('submitExamListeningBtn').style.display = 'none';
  });
}
