function getTranslateHistory(uid = getCurrentUserId()) {
  return getUserJson('translateHistory', [], `${uid}_translateHistory`);
}

async function syncTranslateHistoryToServer(records) {
  if (!isLoggedIn()) return;
  await API.post('/api/user/history', { records });
}

function saveTranslateHistory(uid, data) {
  setUserJson('translateHistory', data);
  syncTranslateHistoryToServer(data);
}

function getScoreText(evaluation) {
  if (!evaluation) return 'N/A';
  const scoreMatch = evaluation.match(/(\d+)\s*分/);
  return scoreMatch ? `${scoreMatch[1]}分` : 'N/A';
}

function showTranslateHistory() {
  const records = getTranslateHistory();
  const searchTerm = (document.getElementById('historySearch')?.value || '').trim().toLowerCase();
  const list = document.getElementById('historyList');
  if (!list) return;

  const filtered = records
    .map((record, index) => ({ record, index }))
    .filter(({ record }) => {
      if (!searchTerm) return true;
      return (record.chinese || '').toLowerCase().includes(searchTerm)
        || (record.english || '').toLowerCase().includes(searchTerm)
        || (record.standard || '').toLowerCase().includes(searchTerm);
    })
    .reverse();

  if (filtered.length === 0) {
    list.innerHTML = '<li class="empty-state">暂无翻译记录。</li>';
    return;
  }

  list.innerHTML = filtered.map(({ record, index }) => `
    <li class="history-item">
      <div class="history-main">
        <strong>${escapeHtml(record.chinese)}</strong>
        <p>${escapeHtml(record.english)}</p>
      </div>
      <div class="history-meta">
        <span>${getScoreText(record.evaluation)}</span>
        <span>${record.time ? new Date(record.time).toLocaleString() : ''}</span>
      </div>
      <div class="history-actions">
        <button type="button" onclick="reviewTranslateRecord(${index})">重新翻译</button>
        <button type="button" onclick="showTranslateComparison(${index})">查看对比</button>
        <button type="button" onclick="deleteTranslateItem(${index})">删除</button>
      </div>
    </li>
  `).join('');
}

function clearTranslateHistory() {
  if (!confirm('确定清空全部翻译记录？')) return;
  saveTranslateHistory(getCurrentUserId(), []);
  showTranslateHistory();
}

function deleteTranslateItem(index) {
  const records = getTranslateHistory();
  records.splice(index, 1);
  saveTranslateHistory(getCurrentUserId(), records);
  showTranslateHistory();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('historySearch')?.addEventListener('input', showTranslateHistory);
  document.getElementById('clearHistoryBtn')?.addEventListener('click', clearTranslateHistory);
  showTranslateHistory();
});
