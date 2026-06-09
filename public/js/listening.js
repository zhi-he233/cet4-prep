// ========== Listening Module ==========
let currentExercise = null;
let listeningQuestions = [];
let audioPlayer = null;

async function loadListeningList() {
  const container = document.getElementById('listeningContent');
  container.innerHTML = '<p>加载听力列表...</p>';

  const data = await API.get('/api/listening');
  const exercises = data.exercises || [];
  const levels = { cet4: '四级', cet6: '六级' };

  if (exercises.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>暂无听力练习</p></div>';
    return;
  }

  let html = '<div class="listening-list">';
  exercises.forEach(ex => {
    html += `<div class="listening-card" data-id="${ex.id}">
      <div class="listening-title">🎧 ${ex.title}</div>
      <div class="listening-meta">${levels[ex.level]} · ${ex.year}年${ex.month}月</div>
    </div>`;
  });
  html += '</div>';
  container.innerHTML = html;

  container.querySelectorAll('.listening-card').forEach(card => {
    card.addEventListener('click', () => startListening(card.dataset.id, exercises));
  });
}

async function startListening(id, exercises) {
  const ex = exercises.find(e => e.id === id);
  if (!ex) return;
  currentExercise = ex;
  listeningQuestions = [];

  const container = document.getElementById('listeningContent');
  container.innerHTML = `
    <button class="btn-secondary" onclick="loadListeningList()">← 返回列表</button>
    <h2>🎧 ${ex.title}</h2>
    <div class="audio-player-box">
      <audio id="listeningAudio" controls src="${ex.audioUrl}" preload="auto"></audio>
    </div>
    <div id="listeningQuestionsBox">
      <button class="btn-primary" id="loadQuestionsBtn" onclick="loadListeningQuestions()">📋 加载听力题目</button>
      <div id="listeningQuestionsList"></div>
    </div>
  `;

  audioPlayer = document.getElementById('listeningAudio');
  audioPlayer.addEventListener('error', () => {
    console.warn('Audio may still be loading...');
  });
}

async function loadListeningQuestions() {
  const btn = document.getElementById('loadQuestionsBtn');
  btn.disabled = true;
  btn.textContent = 'AI 解析中...';

  const data = await API.post('/api/listening/questions', { pdfPath: currentExercise.pdfPath });
  
  if (data.questions && data.questions.length > 0) {
    listeningQuestions = data.questions;
    renderListeningQuestions(data.questions);
  } else if (data.raw) {
    listeningQuestions = [];
    document.getElementById('listeningQuestionsList').innerHTML = 
      '<div class="result-box"><p>AI 返回原始结果（未能提取到结构化题目）：</p><pre>' + data.raw.substring(0, 1000) + '</pre></div>';
  } else {
    document.getElementById('listeningQuestionsList').innerHTML = '<p style="color:red;">题目加载失败: ' + (data.error || '未知错误') + '</p>';
  }
  btn.style.display = 'none';
}

function renderListeningQuestions(questions) {
  const container = document.getElementById('listeningQuestionsList');
  let html = '<div class="paper-questions"><h3>📋 听力题目</h3>';
  let currentSection = '';

  questions.forEach((q, idx) => {
    if (q.section && q.section !== currentSection) {
      currentSection = q.section;
      html += `<h4 class="listening-section-heading">${currentSection}</h4>`;
    }
    html += `<div class="quiz-question-item" data-q="${idx}">
      <div class="q-text">${q.number || idx+1}. ${q.question}</div>`;
    if (q.options && q.options.length > 0) {
      html += '<div class="q-options">';
      q.options.forEach(opt => {
        const letter = opt.substring(0, opt.indexOf(')') > -1 ? opt.indexOf(')') : 2);
        html += `<button class="q-opt-btn" data-answer="${letter.trim()}">${opt}</button>`;
      });
      html += '</div>';
    }
    html += `<div class="q-feedback" id="lq-fb-${idx}" style="display:none;"></div></div>`;
  });

  html += '<button class="btn-primary" id="submitListeningBtn" style="margin-top:1rem;">提交答案</button>';
  html += '<div id="listeningScore" class="quiz-feedback" style="margin-top:0.5rem;"></div>';
  html += '</div>';
  container.innerHTML = html;

  // Bind option clicks
  container.querySelectorAll('.q-opt-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.querySelectorAll('.q-opt-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Bind submit
  document.getElementById('submitListeningBtn').addEventListener('click', () => {
    let correct = 0, total = 0;
    questions.forEach((q, idx) => {
      if (!q.answer) return;
      total++;
      const selected = container.querySelector(`.quiz-question-item[data-q="${idx}"] .q-opt-btn.selected`);
      const fb = document.getElementById(`lq-fb-${idx}`);
      fb.style.display = 'block';
      const qDiv = container.querySelector(`.quiz-question-item[data-q="${idx}"]`);
      qDiv.querySelectorAll('.q-opt-btn').forEach(b => b.disabled = true);

      if (selected && selected.dataset.answer.toUpperCase() === q.answer.trim()[0].toUpperCase()) {
        correct++;
        selected.classList.add('correct');
        fb.innerHTML = '<span style="color:green;">✓ 正确</span>';
      } else {
        if (selected) selected.classList.add('wrong');
        qDiv.querySelectorAll('.q-opt-btn').forEach(b => {
          if (b.dataset.answer.toUpperCase() === q.answer.trim()[0].toUpperCase()) b.classList.add('correct');
        });
        fb.innerHTML = `<span style="color:red;">✗ 正确答案: ${q.answer}</span>`;
      }
    });
    document.getElementById('listeningScore').innerHTML = `得分: <strong>${correct}</strong> / ${total} (${total > 0 ? Math.round(correct/total*100) : 0}%)`;
    document.getElementById('submitListeningBtn').style.display = 'none';
  });
}

window.loadListeningList = loadListeningList;
window.loadListeningQuestions = loadListeningQuestions;
