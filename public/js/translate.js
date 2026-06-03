const chineseDisplay = document.getElementById('chineseDisplay');
const translationInput = document.getElementById('translationInput');
const evaluateBtn = document.getElementById('evaluateTranslationBtn');
const translateResult = document.getElementById('translateResult');
const refreshSentenceBtn = document.getElementById('refreshSentenceBtn');

let currentChinese = '';

async function loadRandomSentence() {
  try {
    chineseDisplay.textContent = '加载中...';
    const res = await fetch('/api/translate/random');
    const data = await res.json();
    if (data.sentence) {
      currentChinese = data.sentence;
      chineseDisplay.textContent = currentChinese;
    } else {
      chineseDisplay.textContent = '获取句子失败，请重试';
    }
  } catch (e) {
    chineseDisplay.textContent = '请求出错，请检查服务器连接';
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
    const uid = getCurrentUserId();
    const history = JSON.parse(localStorage.getItem(`${uid}_translateHistory`) || '[]');
    history.push({
      chinese: currentChinese,
      english: translation,
      evaluation: data.evaluation,
      time: new Date().toISOString()
    });
    localStorage.setItem(`${uid}_translateHistory`, JSON.stringify(history));
  }
});

// getCurrentUserId 已在 api.js 中定义
