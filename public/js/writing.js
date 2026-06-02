const essayTopic = document.getElementById('essayTopic');
const essayText = document.getElementById('essayText');
const evaluateBtn = document.getElementById('evaluateBtn');
const writingResult = document.getElementById('writingResult');

evaluateBtn.addEventListener('click', async () => {
  const topic = essayTopic.value.trim();
  const essay = essayText.value.trim();
  if (!topic || !essay) return alert('请填写题目和作文');
  evaluateBtn.disabled = true;
  writingResult.textContent = '批改中...';
  const data = await API.post('/api/writing/evaluate', { topic, essay });
  if (data.evaluation) writingResult.textContent = data.evaluation;
  else writingResult.textContent = '出错：' + (data.error || '');
  evaluateBtn.disabled = false;
});