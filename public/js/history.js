// ========== 翻译历史 ==========
function getTranslateHistory(uid) {
  return JSON.parse(localStorage.getItem(`${uid}_translateHistory`) || '[]');
}
function saveTranslateHistory(uid, data) {
  localStorage.setItem(`${uid}_translateHistory`, JSON.stringify(data));
}

function showTranslateHistory() {
  const uid = getCurrentUserId();
  const records = getTranslateHistory(uid);
  const searchTerm = document.getElementById('historySearch')?.value.toLowerCase() || '';
  const filtered = records.filter(r =>
    r.chinese.includes(searchTerm) || (r.english && r.english.toLowerCase().includes(searchTerm))
  );
  const list = document.getElementById('historyList');
  if (!list) return;
  list.innerHTML = filtered.map((r) => {
    const originalIndex = records.indexOf(r);
    let scoreText = '';
    if (r.evaluation) {
      const scoreMatch = r.evaluation.match(/(\d+)\s*分/);
      if (scoreMatch) scoreText = scoreMatch[1] + '分';
    } else if (r.score) {
      scoreText = r.score + '分';
    }
    return `
      <li>
        <strong>中文：</strong>${r.chinese}<br>
        <strong>你的翻译：</strong>${r.english}<br>
        <strong>评分：</strong>${scoreText || 'N/A'} <small>${new Date(r.time).toLocaleString()}</small>
        <button onclick="deleteTranslateItem(${originalIndex})">删除</button>
      </li>
    `;
  }).join('');
}

function deleteTranslateItem(index) {
  const uid = getCurrentUserId();
  const records = getTranslateHistory(uid);
  records.splice(index, 1);
  saveTranslateHistory(uid, records);
  showTranslateHistory();
}

// ========== 作文历史 ==========
function getWritingHistory(uid) {
  return JSON.parse(localStorage.getItem(`${uid}_writingHistory`) || '[]');
}
function saveWritingHistory(uid, data) {
  localStorage.setItem(`${uid}_writingHistory`, JSON.stringify(data));
}

// ========== 背诵历史 ==========
function getStudyHistory(uid) {
  return JSON.parse(localStorage.getItem(`${uid}_studyHistory`) || '[]');
}
function saveStudyHistory(uid, data) {
  localStorage.setItem(`${uid}_studyHistory`, JSON.stringify(data));
}

function recordStudy(type, word, meaning, correct) {
  const uid = getCurrentUserId();
  const history = getStudyHistory(uid);
  history.push({ type, word, meaning, correct, time: new Date().toISOString() });
  saveStudyHistory(uid, history);
}

function showStudyHistory() {
  const uid = getCurrentUserId();
  const records = getStudyHistory(uid);
  const list = document.getElementById('studyHistoryList');
  if (!list) return;
  list.innerHTML = records.map((r, i) => `
    <li>
      ${r.type === 'spell' ? '默写' : '选择题'} - ${r.word} (${r.meaning}) → 
      ${r.correct ? '✅ 正确' : '❌ 错误'}
      <small>${new Date(r.time).toLocaleString()}</small>
      <button onclick="deleteStudyItem(${i})">删除</button>
    </li>
  `).join('');
}

function deleteStudyItem(index) {
  const uid = getCurrentUserId();
  const records = getStudyHistory(uid);
  records.splice(index, 1);
  saveStudyHistory(uid, records);
  showStudyHistory();
}

function clearStudyHistory() {
  const uid = getCurrentUserId();
  localStorage.removeItem(`${uid}_studyHistory`);
  showStudyHistory();
}

// getCurrentUserId 已在 api.js 中定义
