const chineseDisplay = document.getElementById('chineseDisplay');
const translationInput = document.getElementById('translationInput');
const evaluateBtn = document.getElementById('evaluateTranslationBtn');
const translateResult = document.getElementById('translateResult');
const refreshSentenceBtn = document.getElementById('refreshSentenceBtn');

let currentChinese = '';

function renderMarkdown(text) {
  if (!text) return '';
  if (window.marked && typeof window.marked.parse === 'function') return window.marked.parse(text);
  return escapeHtml(text).replace(/\n/g, '<br>');
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

async function loadRandomSentence() {
  try {
    refreshSentenceBtn.disabled = true;
    chineseDisplay.textContent = '加载中...';

    const data = await API.get('/api/translate/random');
    if (data.sentence) {
      currentChinese = data.sentence;
      chineseDisplay.textContent = currentChinese;
      translationInput.value = '';
      translationInput.focus();
    } else {
      currentChinese = '';
      chineseDisplay.textContent = data.error || '获取句子失败，请重试';
    }
  } catch (e) {
    currentChinese = '';
    chineseDisplay.textContent = '请求出错，请检查服务器连接';
  } finally {
    refreshSentenceBtn.disabled = false;
  }
}

async function evaluateTranslation() {
  const translation = translationInput.value.trim();
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
  chineseDisplay.textContent = currentChinese;
  translationInput.value = '';
  translateResult.innerHTML = '';
  showTranslateReviewPanel(item, index, true);
  document.querySelector('[data-tab="translate"]')?.click();
  translationInput.focus();
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

loadRandomSentence();
