const chineseDisplay = document.getElementById('chineseDisplay');
const translationInput = document.getElementById('translationInput');
const evaluateBtn = document.getElementById('evaluateTranslationBtn');
const translateResult = document.getElementById('translateResult');
const refreshSentenceBtn = document.getElementById('refreshSentenceBtn');

let currentChinese = '';

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
    const res = await fetch(`/api/translate/random?level=${encodeURIComponent(getExamLevel())}`, { cache: 'no-store' });
    const data = await res.json();
    if (data.sentence) {
      currentChinese = data.sentence;
      chineseDisplay.textContent = currentChinese;
    } else {
      currentChinese = '';
      chineseDisplay.textContent = '获取句子失败，请重试';
    }
  } catch (e) {
    currentChinese = '';
    chineseDisplay.textContent = '请求出错，请检查服务器连接';
  } finally {
    refreshSentenceBtn.disabled = false;
  }
}

loadRandomSentence();

refreshSentenceBtn.addEventListener('click', () => {
  translationInput.value = '';
  translateResult.textContent = '';
  loadRandomSentence();
});

evaluateBtn.addEventListener('click', async () => {
  const translation = translationInput.value.trim();
  if (!currentChinese) return alert('等待句子加载');
    if (!translation) return alert('请输入你的英文翻译');
  evaluateBtn.disabled = true;
  translateResult.textContent = 'AI 评分中...';
  const data = await API.post('/api/translate/evaluate', {
    chinese: currentChinese,
    translation: translation
  });
  translateResult.innerHTML = data.evaluation ? marked.parse(data.evaluation) : ('出错：' + (data.error || ''));
  evaluateBtn.disabled = false;

  // 保存完整记录（含 evaluation 详情）
  if (data.evaluation) {
    const standard = extractStandardTranslation(data.evaluation);
    const uid = getCurrentUserId();
    const history = getTranslateHistory(uid);
    history.push({
      chinese: currentChinese,
      english: translation,
      standard,
      evaluation: data.evaluation,
      time: new Date().toISOString()
    });
    saveTranslateHistory(uid, history);
    showTranslateHistory();
  }
});

function reviewTranslateRecord(index) {
  const records = getTranslateHistory(getCurrentUserId());
  const item = records[index];
  if (!item) return;
  currentChinese = item.chinese || '';
  chineseDisplay.textContent = currentChinese;
  translationInput.value = '';
  translateResult.textContent = '';
  showTranslateReviewPanel(item, index, true);
  document.querySelector('[data-tab="translate"]')?.click();
  translationInput.focus();
}

function showTranslateComparison(index) {
  const records = getTranslateHistory(getCurrentUserId());
  const item = records[index];
  if (!item) return;
  showTranslateReviewPanel(item, index, false);
}

function showTranslateReviewPanel(item, index, compact) {
  const panel = document.getElementById('translateReviewPanel');
  if (!panel) return;
  const standard = item.standard || extractStandardTranslation(item.evaluation || '') || 'AI 评价中未识别到标准译文，可查看完整评分。';
  panel.style.display = 'block';
  panel.innerHTML = `
    <h3>${compact ? '正在复习这句' : '翻译对比'}</h3>
    <div class="detail-section">
      <span class="label">中文原句</span>
      <div class="content">${item.chinese || '暂无'}</div>
    </div>
    <div class="compare-grid">
      <div class="compare-box">
        <h4>你的翻译</h4>
        <p>${item.english || '暂无'}</p>
      </div>
      <div class="compare-box">
        <h4>标准/参考翻译</h4>
        <p>${standard}</p>
      </div>
    </div>
    <div class="translate-actions">
      <button onclick="reviewTranslateRecord(${index})">重新翻译这句</button>
      <button onclick="document.getElementById('translateReviewPanel').style.display='none'">收起</button>
    </div>
    <div class="result-box">${item.evaluation ? marked.parse(item.evaluation) : '暂无评分详情'}</div>
  `;
}

// getCurrentUserId 已在 api.js 中定义
