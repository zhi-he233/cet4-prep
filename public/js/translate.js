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
let currentAssessment = null;
let evaluationPending = false;

function plainFeedback(text) {
  return String(text ?? '').replace(/\*\*|__|`/g, '').replace(/^#{1,6}\s+/gm, '').trim();
}

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
  return escapeHtml(plainFeedback(text)).replace(/\n/g, '<br>');
}

function feedbackHtml(segment) {
  const list = (items, emptyText) => items.length
    ? `<ul>${items.map((item) => `<li>${escapeHtml(plainFeedback(item))}</li>`).join('')}</ul>`
    : `<p>${emptyText}</p>`;
  return `
    <div class="feedback-heading">
      <h4>本段得分</h4>
      <span class="segment-score">${Number(segment.score)} / 15 分</span>
    </div>
    <div class="feedback-section"><h5>主要问题</h5>${list(segment.issues, '未发现明显问题。')}</div>
    <div class="feedback-section"><h5>修改建议</h5>${list(segment.suggestions, '保持当前表达。')}</div>
    <div class="feedback-section"><h5>参考译文</h5><p lang="en">${escapeHtml(plainFeedback(segment.reference))}</p></div>
  `;
}

function clearSegmentFeedback() {
  currentAssessment = null;
  document.body.classList.remove('assessment-visible');
  document.querySelectorAll('.segment-feedback').forEach((el) => {
    el.replaceChildren();
    el.hidden = true;
  });
}

function invalidateAssessment() {
  if (!currentAssessment) return;
  clearSegmentFeedback();
  translateResult.replaceChildren();
}

function renderAssessment(assessment) {
  currentAssessment = assessment;
  document.body.classList.add('assessment-visible');
  assessment.segments.forEach((segment, index) => {
    const target = document.getElementById(`segment-feedback-${index}`);
    if (target) {
      target.innerHTML = feedbackHtml(segment);
      target.hidden = false;
    }
  });
  translateResult.innerHTML = `
    <div class="feedback-heading"><h3>综合得分</h3><span class="segment-score">${assessment.totalScore} / 15 分</span></div>
    <p class="score-caption">各段平均分</p>
    ${assessment.summary ? `<p>${escapeHtml(plainFeedback(assessment.summary))}</p>` : ''}
    ${!document.body.classList.contains('segmented-ready') ? assessment.segments.map(feedbackHtml).join('') : ''}
  `;
}

function getSubmittedSegments() {
  const inputs = Array.from(segmentInputList?.querySelectorAll('.segment-translation-input') || []);
  if (document.body.classList.contains('segmented-ready') && inputs.length === currentSegments.length) {
    return currentSegments.map((chinese, index) => ({
      id: index + 1, chinese, english: inputs[index].value.trim()
    }));
  }
  return [{ id: 1, chinese: currentChinese, english: translationInput.value.trim() }];
}

function submissionIdentity() {
  return JSON.stringify({ chinese: currentChinese, segments: getSubmittedSegments(), level: getExamLevel(), user: getCurrentUserId() });
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

function renderPromptAndInputs(text, translationText = '', savedSegments = null) {
  clearSegmentFeedback();
  currentSegments = savedSegments?.length ? savedSegments.map((item) => item.chinese) : splitChineseText(text);
  translationInput.value = translationText;
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

  const existingParts = savedSegments?.length ? savedSegments.map((item) => item.english || '') : translationText
    ? translationText.split(/\n{2,}/).map((part) => part.trim())
    : [];

  segmentInputList.innerHTML = currentSegments.map((segment, index) => `
    <div class="segment-input-card">
      <div class="segment-source">
        <span class="segment-number">${index + 1}</span>
        <span>${escapeHtml(segment)}</span>
      </div>
      <label class="input-label" for="segment-input-${index}">第 ${index + 1} 段英文翻译</label>
      <textarea id="segment-input-${index}" class="segment-translation-input" rows="3" data-index="${index}" placeholder="翻译第 ${index + 1} 段...">${escapeHtml(existingParts[index] || '')}</textarea>
      <div id="segment-feedback-${index}" class="segment-feedback" aria-live="polite" hidden></div>
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
      invalidateAssessment();
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
  invalidateAssessment();
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
  if (evaluationPending) return;
  clearSegmentFeedback();
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

function createPracticeRecord(evaluation = '', savedOffline = false, assessment = null) {
  return {
    chinese: currentChinese,
    english: getCurrentTranslationText(),
    standard: assessment ? assessment.segments.map((item) => item.reference).join(' ') : extractStandardTranslation(evaluation),
    evaluation,
    assessment,
    segments: getSubmittedSegments(),
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
  if (evaluationPending) return;
  updateCombinedTranslation();
  const translation = getCurrentTranslationText();
  if (!currentChinese) return alert('请等待句子加载完成');
  if (!translation) return alert('请输入你的英文翻译');

  if (!navigator.onLine) {
    savePractice(true);
    return;
  }

  clearSegmentFeedback();
  const identity = submissionIdentity();
  const segments = getSubmittedSegments();
  const controls = Array.from(document.querySelectorAll('.segment-translation-input, #translationInput, #evaluateTranslationBtn, #refreshSentenceBtn, #clearTranslationBtn, #savePracticeBtn, #examLevelSelect, #loginBtn, #logoutBtn'));
  const disabledStates = controls.map((item) => item.disabled);
  evaluationPending = true;
  controls.forEach((item) => { item.disabled = true; });
  translateResult.textContent = 'AI 正在逐段评分...';
  try {
    const data = await API.post('/api/translate/evaluate', { chinese: currentChinese, translation, segments });
    if (submissionIdentity() !== identity) {
      translateResult.textContent = '练习或账号已变化，请重新评分。';
      return;
    }
    const assessment = normalizeStoredAssessment(data.assessment);
    if (assessment && assessment.segments.length === segments.length
        && assessment.segments.every((item, index) => item.chinese === segments[index].chinese && item.english === segments[index].english)) {
      renderAssessment(assessment);
      const records = getTranslateHistory();
      records.push(createPracticeRecord(data.evaluation || '', false, assessment));
      saveTranslateHistory(getCurrentUserId(), records);
      showTranslateHistory();
      const firstFeedback = document.querySelector('.segment-feedback:not([hidden])');
      (firstFeedback || translateResult).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      translateResult.textContent = data.error || '评分服务尚未更新，请更新服务后重新评分。你的输入已保留。';
    }
  } catch (e) {
    translateResult.textContent = '评分失败，请重试。你的输入已保留。';
  } finally {
    controls.forEach((item, index) => { item.disabled = disabledStates[index]; });
    evaluationPending = false;
  }
}

function reviewTranslateRecord(index) {
  if (evaluationPending) return;
  const item = getTranslateHistory()[index];
  if (!item) return;
  currentChinese = item.chinese || '';
  renderPromptAndInputs(currentChinese);
  translateResult.innerHTML = '';
  document.getElementById('translateReviewPanel').style.display = 'none';
  document.querySelector('[data-tab="translate"]')?.click();
  segmentInputList?.querySelector('.segment-translation-input')?.focus();
}

function showTranslateComparison(index) {
  if (evaluationPending) return;
  const item = getTranslateHistory()[index];
  if (!item) return;
  const assessment = normalizeStoredAssessment(item.assessment);
  if (assessment) {
    currentChinese = item.chinese || '';
    renderPromptAndInputs(currentChinese, item.english, assessment.segments);
    document.getElementById('translateReviewPanel').style.display = 'none';
    document.querySelector('[data-tab="translate"]')?.click();
    renderAssessment(assessment);
    return;
  }
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
translationInput?.addEventListener('input', () => {
  invalidateAssessment();
  updateTranslationStats(translationInput.value || '');
});

loadRandomSentence();
