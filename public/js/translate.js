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

const canUseSegmentedInputs = Boolean(
  promptSegmentsEl &&
  promptSegmentCount &&
  segmentInputList &&
  clearTranslationBtn &&
  translationStats
);

let currentChinese = '';
let currentSegments = [];

function setFallbackVisible(visible) {
  document.body.classList.toggle('fallback-visible', visible);
  if (fallbackInputSection) fallbackInputSection.hidden = !visible;
}

function renderMarkdown(text) {
  return escapeHtml(text || '').replace(/\n/g, '<br>');
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
  if (text) translationInput.value = text;
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
    document.body.classList.remove('segmented-ready');
    setFallbackVisible(false);
    if (canUseSegmentedInputs) {
      promptSegmentsEl.innerHTML = '';
      promptSegmentCount.textContent = '';
      segmentInputList.innerHTML = '';
    }

    const data = await API.get('/api/translate/random');
    if (data.sentence) {
      currentChinese = data.sentence;
      translationInput.value = '';
      renderPromptAndInputs(currentChinese);
      segmentInputList?.querySelector('.segment-translation-input')?.focus();
    } else {
      currentChinese = '';
      chineseDisplay.textContent = data.error || '获取句子失败，请重试';
      setFallbackVisible(true);
      updateTranslationStats('');
    }
  } catch (e) {
    currentChinese = '';
    chineseDisplay.textContent = '请求出错，请检查服务器连接';
    setFallbackVisible(true);
    updateTranslationStats('');
  } finally {
    refreshSentenceBtn.disabled = false;
  }
}

async function evaluateTranslation() {
  updateCombinedTranslation();
  const translation = getCurrentTranslationText();
  if (!currentChinese) return alert('请等待句子加载完成');
  if (!translation) return alert('请输入你的英文翻译');

  evaluateBtn.disabled = true;
  translateResult.textContent = 'AI 评分中...';

  const data = await API.post('/api/translate/evaluate', {
    chinese: currentChinese,
    translation
  });

  if (data.evaluation) {
    translateResult.innerHTML = renderMarkdown(data.evaluation);
    const records = getTranslateHistory();
    records.push({
      chinese: currentChinese,
      english: translation,
      standard: extractStandardTranslation(data.evaluation),
      evaluation: data.evaluation,
      time: new Date().toISOString()
    });
    saveTranslateHistory(getCurrentUserId(), records);
    showTranslateHistory();
  } else {
    translateResult.textContent = '出错：' + (data.error || '评分失败');
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
clearTranslationBtn?.addEventListener('click', clearTranslationInputs);
translationInput?.addEventListener('input', () => updateTranslationStats(translationInput.value || ''));

loadRandomSentence();
