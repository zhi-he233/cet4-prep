// ========== 作文模块（直接批改 + 教学模式） ==========
document.addEventListener('DOMContentLoaded', function() {

let currentTeachTopic = '';
let currentTeachOutline = '';
let currentTeachVocab = '';

// --- 模式切换 ---
const directEvalBtn = document.getElementById('directEvalMode');
const teachModeBtn = document.getElementById('teachMode');
const directContent = document.getElementById('directModeContent');
const teachContent = document.getElementById('teachModeContent');

if (!directEvalBtn || !teachModeBtn) {
  console.error('writing.js: 教学模式按钮未找到');
  return;
}

directEvalBtn.addEventListener('click', function() {
  directEvalBtn.classList.add('active');
  teachModeBtn.classList.remove('active');
  if (directContent) directContent.style.display = 'block';
  if (teachContent) teachContent.style.display = 'none';
});

teachModeBtn.addEventListener('click', function() {
  teachModeBtn.classList.add('active');
  directEvalBtn.classList.remove('active');
  if (directContent) directContent.style.display = 'none';
  if (teachContent) teachContent.style.display = 'block';
  loadTopicList();
});

// ==================== 直接批改 ====================
const essayTopic = document.getElementById('essayTopic');
const essayText = document.getElementById('essayText');
const evaluateBtn = document.getElementById('evaluateBtn');
const writingResult = document.getElementById('writingResult');

if (evaluateBtn) {
  evaluateBtn.addEventListener('click', async () => {
    const topic = essayTopic.value.trim();
    const essay = essayText.value.trim();
    if (!topic || !essay) return alert('请填写题目和作文');
    evaluateBtn.disabled = true;
    writingResult.textContent = '批改中...';
    const data = await API.post('/api/writing/evaluate', { topic, essay });
    if (data.evaluation) writingResult.innerHTML = marked.parse(data.evaluation);
    else writingResult.textContent = '出错：' + (data.error || '');
    evaluateBtn.disabled = false;

    if (data.evaluation) {
      const uid = getCurrentUserId();
      const history = JSON.parse(localStorage.getItem(`${uid}_writingHistory`) || '[]');
      history.push({
        topic: topic,
        essay: essay,
        evaluation: data.evaluation,
        time: new Date().toISOString()
      });
      localStorage.setItem(`${uid}_writingHistory`, JSON.stringify(history));
    }
  });
}

// ==================== 教学模式 ====================

async function loadTopicList() {
  const container = document.getElementById('topicListContainer');
  if (!container) return;
  try {
    const res = await fetch('/api/writing/topics');
    const data = await res.json();
    if (!data.topics) {
      container.innerHTML = '<p class="teach-hint">加载失败，请重试</p>';
      return;
    }
    let html = '<p class="teach-hint">点击一个题目开始：</p><div class="topic-grid">';
    data.topics.forEach(t => {
      const short = t.length > 40 ? t.substring(0, 40) + '...' : t;
      html += `<button class="topic-btn" data-topic="${t.replace(/"/g, '&quot;')}">${short}</button>`;
    });
    html += '</div>';
    container.innerHTML = html;

    container.querySelectorAll('.topic-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectTopic(btn.dataset.topic);
      });
    });
  } catch (e) {
    container.innerHTML = '<p class="teach-hint">请求失败，请检查服务器</p>';
  }
}

function selectTopic(topic) {
  currentTeachTopic = topic;
  const display = document.getElementById('selectedTopicDisplay');
  if (display) display.textContent = `「${topic}」`;

  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const step4 = document.getElementById('step4');

  if (step1) step1.style.display = 'none';
  if (step2) step2.style.display = 'block';
  if (step3) step3.style.display = 'block';
  if (step4) step4.style.display = 'block';

  document.querySelectorAll('.topic-btn').forEach(b => {
    b.classList.remove('selected');
    if (b.dataset.topic === topic) b.classList.add('selected');
  });
}

// 自定义题目
const customTopicBtn = document.getElementById('useCustomTopicBtn');
const customTopicInput = document.getElementById('customTopicInput');
if (customTopicBtn) {
  customTopicBtn.addEventListener('click', () => {
    const val = customTopicInput.value.trim();
    if (val) selectTopic(val);
  });
}
if (customTopicInput) {
  customTopicInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && customTopicBtn) customTopicBtn.click();
  });
}

// 生成大纲
const genOutlineBtn = document.getElementById('generateOutlineBtn');
if (genOutlineBtn) {
  genOutlineBtn.addEventListener('click', async () => {
    if (!currentTeachTopic) return alert('请先选择题目');
    const btn = genOutlineBtn;
    const result = document.getElementById('outlineResult');
    if (!result) return;
    btn.disabled = true;
    result.innerHTML = 'AI 生成大纲中...';
    result.style.display = 'block';

    const data = await API.post('/api/writing/outline', { topic: currentTeachTopic });
    if (data.outline) {
      currentTeachOutline = data.outline;
      result.innerHTML = '<div class="outline-content">' + marked.parse(data.outline) + '</div>';
    } else {
      result.textContent = '生成失败：' + (data.error || '');
    }
    btn.disabled = false;
  });
}

// 生成词汇
const genVocabBtn = document.getElementById('generateVocabBtn');
if (genVocabBtn) {
  genVocabBtn.addEventListener('click', async () => {
    if (!currentTeachTopic) return alert('请先选择题目');
    const btn = genVocabBtn;
    const result = document.getElementById('vocabResult');
    if (!result) return;
    btn.disabled = true;
    result.innerHTML = 'AI 推荐词汇中...';
    result.style.display = 'block';

    const data = await API.post('/api/writing/vocabulary', { topic: currentTeachTopic });
    if (data.vocabulary) {
      currentTeachVocab = data.vocabulary;
      result.innerHTML = '<div class="vocab-content">' + marked.parse(data.vocabulary) + '</div>';
    } else {
      result.textContent = '生成失败：' + (data.error || '');
    }
    btn.disabled = false;
  });
}

// 教学模式下提交批改
const evalTeachBtn = document.getElementById('evaluateTeachBtn');
if (evalTeachBtn) {
  evalTeachBtn.addEventListener('click', async () => {
    const essay = document.getElementById('teachEssayText').value.trim();
    if (!currentTeachTopic) return alert('请先选择题目');
    if (!essay) return alert('请先写作文');

    const btn = evalTeachBtn;
    const result = document.getElementById('teachResult');
    if (!result) return;
    btn.disabled = true;
    result.innerHTML = '批改中...';
    result.style.display = 'block';

    const data = await API.post('/api/writing/evaluate', { topic: currentTeachTopic, essay });
    if (data.evaluation) {
      result.innerHTML = marked.parse(data.evaluation);
      const uid = getCurrentUserId();
      const history = JSON.parse(localStorage.getItem(`${uid}_writingHistory`) || '[]');
      history.push({
        topic: currentTeachTopic,
        essay: essay,
        evaluation: data.evaluation,
        time: new Date().toISOString()
      });
      localStorage.setItem(`${uid}_writingHistory`, JSON.stringify(history));
    } else {
      result.textContent = '批改失败：' + (data.error || '');
    }
    btn.disabled = false;
  });
}

}); // end DOMContentLoaded
