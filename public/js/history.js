function getTranslateHistory(uid = getCurrentUserId()) {
  return getUserJson('translateHistory', [], `${uid}_translateHistory`);
}

async function syncTranslateHistoryToServer(records) {
  if (!isLoggedIn()) return;
  await API.post('/api/user/history', { records });
}

function saveTranslateHistory(uid, data) {
  const records = Array.isArray(data) ? data.slice(-500) : [];
  try {
    setUserJson('translateHistory', records);
  } catch (e) {
    alert('本机存储空间不足，建议先导出记录后清理一部分。');
    return;
  }
  syncTranslateHistoryToServer(records);
}

function getHistoryForLevel(level) {
  const userId = getCurrentUserId();
  const key = getUserStorageKey('translateHistory', userId, level);
  const legacyKey = `${userId}_${level}_translateHistory`;
  return parseJson(localStorage.getItem(key), parseJson(localStorage.getItem(legacyKey), []));
}

function setHistoryForLevel(level, records) {
  const userId = getCurrentUserId();
  localStorage.setItem(getUserStorageKey('translateHistory', userId, level), JSON.stringify(records.slice(-500)));
}

function normalizeHistoryRecords(value) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((record) => record && (record.chinese || record.english))
    .map((record) => ({
      chinese: String(record.chinese || ''),
      english: String(record.english || ''),
      standard: String(record.standard || ''),
      evaluation: String(record.evaluation || ''),
      time: record.time || new Date().toISOString(),
      savedOffline: Boolean(record.savedOffline)
    }));
}

function mergeHistoryRecords(oldRecords, newRecords) {
  const map = new Map();
  [...oldRecords, ...newRecords].forEach((record) => {
    const key = `${record.time || ''}|${record.chinese || ''}|${record.english || ''}`;
    map.set(key, record);
  });
  return Array.from(map.values())
    .sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0))
    .slice(-500);
}

function getAllLevelHistories() {
  return Object.fromEntries(
    Object.keys(EXAM_LEVELS).map((level) => [level, getHistoryForLevel(level)])
  );
}

function exportTranslateHistory() {
  const payload = {
    app: 'cet-translation-practice',
    version: 1,
    exportedAt: new Date().toISOString(),
    currentLevel: getExamLevel(),
    histories: getAllLevelHistories()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `翻译记录-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function syncImportedHistories(levels) {
  if (!isLoggedIn()) return;
  const previousLevel = getExamLevel();
  for (const level of levels) {
    localStorage.setItem('cet_examLevel', level);
    await API.post('/api/user/history', { records: getHistoryForLevel(level) });
  }
  localStorage.setItem('cet_examLevel', previousLevel);
}

async function importTranslateHistoryFromText(text) {
  let payload;
  try {
    payload = JSON.parse(text);
  } catch (e) {
    alert('导入失败：文件不是有效的 JSON。');
    return;
  }

  const histories = Array.isArray(payload)
    ? { [getExamLevel()]: payload }
    : (payload.histories || {});

  const changedLevels = [];
  Object.keys(EXAM_LEVELS).forEach((level) => {
    const incoming = normalizeHistoryRecords(histories[level]);
    if (!incoming.length) return;
    setHistoryForLevel(level, mergeHistoryRecords(getHistoryForLevel(level), incoming));
    changedLevels.push(level);
  });

  if (!changedLevels.length) {
    alert('没有找到可导入的翻译记录。');
    return;
  }

  await syncImportedHistories(changedLevels);
  showTranslateHistory();
  alert(`已导入 ${changedLevels.join('、').toUpperCase()} 的翻译记录。`);
}

function importTranslateHistory(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => importTranslateHistoryFromText(String(reader.result || ''));
  reader.onerror = () => alert('读取文件失败，请重新选择。');
  reader.readAsText(file, 'utf-8');
}

function getScoreText(evaluation) {
  if (!evaluation) return '未评分';
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
        ${record.savedOffline ? '<span>离线保存</span>' : ''}
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
  document.getElementById('exportHistoryBtn')?.addEventListener('click', exportTranslateHistory);
  document.getElementById('importHistoryBtn')?.addEventListener('click', () => {
    document.getElementById('importHistoryFile')?.click();
  });
  document.getElementById('importHistoryFile')?.addEventListener('change', (event) => {
    importTranslateHistory(event.target.files?.[0]);
    event.target.value = '';
  });
  showTranslateHistory();
});
