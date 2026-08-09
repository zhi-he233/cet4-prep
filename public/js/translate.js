const chineseDisplay = document.getElementById('chineseDisplay');
const translationInput = document.getElementById('translationInput');
const evaluateBtn = document.getElementById('evaluateTranslationBtn');
const translateResult = document.getElementById('translateResult');
const refreshSentenceBtn = document.getElementById('refreshSentenceBtn');
const promptSegmentsEl = document.getElementById('promptSegments');
const promptSegmentCount = document.getElementById('promptSegmentCount');
const segmentInputList = document.getElementById('segmentInputList');
const clearTranslationBtn = document.getElementById('clearTranslationBtn');
const translationStats = document.getElementById('translationStats');
const fallbackInputSection = document.getElementById('fallbackInputSection');
const savePracticeBtn = document.getElementById('savePracticeBtn');

const canUseSegmentedInputs = Boolean(
  promptSegmentsEl &&
  promptSegmentCount &&
  segmentInputList &&
  clearTranslationBtn &&
  translationStats
);

let currentChinese = '';
let currentSegments = [];

const LOCAL_SENTENCE_BANK = {
  cet4: [
    '近年来，越来越多的年轻人选择在周末参观博物馆。他们希望通过这种方式了解历史，并放松紧张的学习生活。',
    '中国的高铁发展迅速，已经连接了许多大中城市。它不仅缩短了旅行时间，也促进了地区之间的交流。',
    '保护环境需要每个人的参与。少用一次性塑料制品、节约用水用电，都是普通人可以做到的小事。',
    '阅读可以帮助学生扩大词汇量，也能培养他们独立思考的能力。因此，很多学校鼓励学生每天坚持阅读。',
    '随着移动支付的普及，人们出门购物越来越方便。即使不带现金，也可以完成大多数日常消费。'
  ],
  cet6: [
    '人工智能正在改变人们的学习和工作方式。与此同时，我们也需要关注数据安全、职业变化以及技术伦理等问题。',
    '乡村振兴不仅要改善基础设施，还要发展特色产业。只有让年轻人看到机会，乡村才能保持长期活力。',
    '城市公共交通的完善有助于缓解拥堵并减少污染。越来越多的人愿意乘坐地铁、公交或骑自行车出行。',
    '心理健康教育越来越受到高校重视。及时的沟通和专业支持，可以帮助学生更好地面对压力和挫折。',
    '传统文化的传播需要结合现代媒介。短视频、数字展览和互动课程，让更多年轻人愿意主动了解文化遗产。'
  ]
};

function setFallbackVisible(visible) {
  document.body.classList.toggle('fallback-visible', visible);
  if (fallbackInputSection) fallbackInputSection.hidden = !visible;
}

function renderMarkdown(text) {
  return escapeHtml(text || '').replace(/\n/g, '<br>');
}

function pickLocalSentence() {
  const bank = LOCAL_SENTENCE_BANK[getExamLevel()] || LOCAL_SENTENCE_BANK.cet4;
  return bank[Math.floor(Math.random() * bank.length)];
}

function showSoftMessage(message) {
  if (!translateResult) return;
  translateResult.textContent = message;
}

function useLocalSentence(message) {
  currentChinese = pickLocalSentence();
  translationInput.value = '';
  renderPromptAndInputs(currentChinese);
  showSoftMessage(message);
  segmentInputList?.querySelector('.segment-translation-input')?.focus();
}

function extractStandardTranslation(evaluation) {
  if (!evaluation) return '';
  const patterns = [
    /标准翻译[：:]\s*([^\n]+)/,
    /参考译文[：:]\s*([^\n]+)/,
    /修改后[的]?译文[：:]\s*([^\n]+)/,
    /Suggested translation[：:]\s*([^\n]+)/i
  ];
  for (const pattern of patterns) {
    const match = evaluation.match(pattern);
    if (match) return match[1].replace(/^["“”']|["“”']$/g, '').trim();
  }
  return '';
}

function splitChineseText(text) {
  const normalized = (text || '').trim().replace(/\s+/g, ' ');
  if (!normalized) return [];

  const sentencePieces = normalized.match(/[^。！？；!?;]+[。！？；!?;]?/g) || [normalized];
  const segments = [];

  sentencePieces.forEach((piece) => {
    const clean = piece.trim();
    if (!clean) return;
    if (clean.length <= 42) {
      segments.push(clean);
      return;
    }
    splitLongChineseSegment(clean).forEach((part) => segments.push(part));
  });

  return segments.length ? segments : [normalized];
}

function splitLongChineseSegment(text) {
  const roughParts = [];
  let buffer = '';
  for (const char of text) {
    buffer += char;
    if ('，、,：:'.includes(char)) {
      roughParts.push(buffer.trim());
      buffer = '';
    }
  }
  if (buffer.trim()) roughParts.push(buffer.trim());

  const packed = [];
  let current = '';
  roughParts.forEach((part) => {
    if ((current + part).length <= 42) {
      current += part;
    } else {
      if (current) packed.push(current);
      current = part;
    }
  });
  if (current) packed.push(current);

  return packed.flatMap((part) => {
    if (part.length <= 50) return [part];
    const chunks = [];
    for (let i = 0; i < part.length; i += 38) {
      chunks.push(part.slice(i, i + 38));
    }
    return chunks;
  });
}

function renderPromptAndInputs(text, translationText = '') {
  currentSegments = splitChineseText(text);
  chineseDisplay.textContent = text || '加载中...';

  if (!canUseSegmentedInputs) {
    document.body.classList.remove('segmented-ready');
    setFallbackVisible(true);
    if (translationText) translationInput.value = translationText;
    updateTranslationStats();
    return;
  }

  chineseDisplay.style.display = currentSegments.length > 1 ? 'none' : 'block';
  promptSegmentsEl.innerHTML = currentSegments.map((segment, index) => `
    <li>
      <span class="segment-number">${index + 1}</span>
      <span>${escapeHtml(segment)}</span>
    </li>
  `).join('');
  promptSegmentsEl.style.display = currentSegments.length > 1 ? 'grid' : 'none';
  promptSegmentCount.textContent = currentSegments.length > 1 ? `${currentSegments.length} 段` : '';

  const existingParts = translationText
    ? translationText.split(/\n{2,}/).map((part) => part.trim())
    : [];

  segmentInputList.innerHTML = currentSegments.map((segment, index) => `
    <div class="segment-input-card">
      <div class="segment-source">
        <span class="segment-number">${index + 1}</span>
        <span>${escapeHtml(segment)}</span>
      </div>
      <textarea class="segment-translation-input" rows="3" data-index="${index}" placeholder="翻译第 ${index + 1} 段...">${escapeHtml(existingParts[index] || '')}</textarea>
    </div>
  `).join('');

  document.body.classList.toggle('segmented-ready', currentSegments.length > 0);
  setFallbackVisible(currentSegments.length === 0);
  bindSegmentInputs();
  updateCombinedTranslation();
}

function bindSegmentInputs() {
  if (!canUseSegmentedInputs) return;
  segmentInputList.querySelectorAll('.segment-translation-input').forEach((input) => {
    input.addEventListener('input', () => {
      autoGrowTextarea(input);
      updateCombinedTranslation();
    });
    autoGrowTextarea(input);
  });
}

function autoGrowTextarea(input) {
  input.style.height = 'auto';
  input.style.height = Math.max(input.scrollHeight, 96) + 'px';
}

function getSegmentTranslationText() {
  if (!canUseSegmentedInputs) return '';
  return Array.from(segmentInputList.querySelectorAll('.segment-translation-input'))
    .map((input) => input.value.trim())
    .filter(Boolean)
    .join('\n\n');
}

function getCurrentTranslationText() {
  const segmentedText = getSegmentTranslationText();
  return segmentedText || (translationInput?.value || '').trim();
}

function updateTranslationStats(text = getCurrentTranslationText()) {
  if (!translationStats) return;
  const words = text.match(/[A-Za-z]+(?:[-'][A-Za-z]+)?/g) || [];
  translationStats.textContent = `${words.length} 词`;
}

function updateCombinedTranslation() {
  const text = getSegmentTranslationText();
  if (document.body.classList.contains('segmented-ready')) {
    translationInput.value = text;
  }
  updateTranslationStats(text || translationInput.value || '');
}

function clearTranslationInputs() {
  if (canUseSegmentedInputs) {
    segmentInputList.querySelectorAll('.segment-translation-input').forEach((input) => {
      input.value = '';
      autoGrowTextarea(input);
    });
  }
  translationInput.value = '';
  updateTranslationStats('');
  segmentInputList?.querySelector('.segment-translation-input')?.focus();
  if (document.body.classList.contains('fallback-visible')) translationInput.focus();
}

async function loadRandomSentence() {
  try {
    refreshSentenceBtn.disabled = true;
    chineseDisplay.textContent = '加载中...';
    translateResult.innerHTML = '';
    document.body.classList.remove('segmented-ready');
    setFallbackVisible(false);
    if (canUseSegmentedInputs) {
      promptSegmentsEl.innerHTML = '';
      promptSegmentCount.textContent = '';
      segmentInputList.innerHTML = '';
    }

    if (!navigator.onLine) {
      useLocalSentence('当前离线，已切换到本地题库。练习可以先保存，联网后再做 AI 评分。');
      return;
    }

    const data = await API.get('/api/translate/random');
    if (data.sentence) {
      currentChinese = data.sentence;
      translationInput.value = '';
      renderPromptAndInputs(currentChinese);
      segmentInputList?.querySelector('.segment-translation-input')?.focus();
    } else {
      useLocalSentence(data.error ? `AI 出题暂时不可用：${data.error}。已切换到本地题库。` : 'AI 出题暂时不可用，已切换到本地题库。');
    }
  } catch (e) {
    useLocalSentence('服务器连接失败，已切换到本地题库。');
  } finally {
    refreshSentenceBtn.disabled = false;
  }
}

function createPracticeRecord(evaluation = '', savedOffline = false) {
  return {
    chinese: currentChinese,
    english: getCurrentTranslationText(),
    standard: extractStandardTranslation(evaluation),
    evaluation,
    time: new Date().toISOString(),
    savedOffline
  };
}

function savePractice(savedOffline = !navigator.onLine) {
  updateCombinedTranslation();
  const translation = getCurrentTranslationText();
  if (!currentChinese) return alert('请先加载一道翻译题');
  if (!translation) return alert('请输入你的英文翻译');

  const records = getTranslateHistory();
  records.push(createPracticeRecord('', savedOffline));
  saveTranslateHistory(getCurrentUserId(), records);
  showTranslateHistory();
  showSoftMessage(savedOffline ? '已离线保存。联网后可以从记录里重新翻译并做 AI 评分。' : '已保存到翻译记录。');
}

async function evaluateTranslation() {
  updateCombinedTranslation();
  const translation = getCurrentTranslationText();
  if (!currentChinese) return alert('请等待句子加载完成');
  if (!translation) return alert('请输入你的英文翻译');

  if (!navigator.onLine) {
    savePractice(true);
    return;
  }

  evaluateBtn.disabled = true;
  translateResult.textContent = 'AI 评分中...';

  const data = await API.post('/api/translate/evaluate', {
    chinese: currentChinese,
    translation
  });

  if (data.evaluation) {
    translateResult.innerHTML = renderMarkdown(data.evaluation);
    const records = getTranslateHistory();
    records.push(createPracticeRecord(data.evaluation, false));
    saveTranslateHistory(getCurrentUserId(), records);
    showTranslateHistory();
  } else {
    translateResult.textContent = '出错：' + (data.error || '评分失败') + '。可以先保存，稍后再评分。';
  }

  evaluateBtn.disabled = false;
  translateResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function reviewTranslateRecord(index) {
  const item = getTranslateHistory()[index];
  if (!item) return;
  currentChinese = item.chinese || '';
  renderPromptAndInputs(currentChinese);
  translateResult.innerHTML = '';
  showTranslateReviewPanel(item, index, true);
  document.querySelector('[data-tab="translate"]')?.click();
  segmentInputList?.querySelector('.segment-translation-input')?.focus();
}

function showTranslateComparison(index) {
  const item = getTranslateHistory()[index];
  if (!item) return;
  showTranslateReviewPanel(item, index, false);
  document.querySelector('[data-tab="translate"]')?.click();
}

function showTranslateReviewPanel(item, index, compact) {
  const panel = document.getElementById('translateReviewPanel');
  if (!panel) return;

  const standard = item.standard || extractStandardTranslation(item.evaluation || '') || 'AI 评价中未识别到参考译文。';
  panel.style.display = 'block';
  panel.innerHTML = `
    <h3>${compact ? '正在复习这句' : '翻译对比'}</h3>
    <div class="detail-section">
      <span class="label">中文原句</span>
      <div class="content">${escapeHtml(item.chinese)}</div>
    </div>
    <div class="compare-grid">
      <div class="compare-box">
        <h4>你的翻译</h4>
        <p>${escapeHtml(item.english)}</p>
      </div>
      <div class="compare-box">
        <h4>参考翻译</h4>
        <p>${escapeHtml(standard)}</p>
      </div>
    </div>
    <div class="translate-actions">
      <button type="button" onclick="reviewTranslateRecord(${index})">重新翻译这句</button>
      <button type="button" onclick="document.getElementById('translateReviewPanel').style.display='none'">收起</button>
    </div>
    <div class="result-box">${renderMarkdown(item.evaluation || '暂无评分详情')}</div>
  `;
}

refreshSentenceBtn.addEventListener('click', () => {
  translateResult.innerHTML = '';
  document.getElementById('translateReviewPanel').style.display = 'none';
  loadRandomSentence();
});

evaluateBtn.addEventListener('click', evaluateTranslation);
savePracticeBtn?.addEventListener('click', () => savePractice(false));
clearTranslationBtn?.addEventListener('click', clearTranslationInputs);
translationInput?.addEventListener('input', () => updateTranslationStats(translationInput.value || ''));

loadRandomSentence();
