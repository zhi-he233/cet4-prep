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

// 进入页面自动获取
loadRandomSentence();

// 换一题
refreshSentenceBtn.addEventListener('click', () => {
  translationInput.value = '';
  translateResult.textContent = '';
  loadRandomSentence();
});

// 评分
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
  translateResult.textContent = data.evaluation || ('出错：' + (data.error || ''));
  evaluateBtn.disabled = false;
});