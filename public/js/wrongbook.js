// ========== 学习档案（错词本 + 翻译记录 + 作文记录） ==========

function loadWrongBook(subTab) {
  if (!subTab) subTab = 'wrong-words';
  const container = document.getElementById('wrongbookContent');

  if (subTab === 'wrong-words') {
    loadWrongWords(container);
  } else if (subTab === 'wrong-translate') {
    loadTranslateRecords(container);
  } else if (subTab === 'wrong-writing') {
    loadWritingRecords(container);
  }
}

// --- 错词本 ---
function loadWrongWords(container) {
  const wrongWords = getUserJson('wrongbook', [], 'cet4_wrongbook');
  if (wrongWords.length === 0) {
    container.innerHTML = '<p>暂无错题，去背单词模块做一下 AI 出题吧！</p>';
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const todayWrong = wrongWords.filter(w => w.wrongTime && w.wrongTime.startsWith(today));

  let html = '';
  if (todayWrong.length > 0) {
    html += '<h3>📅 今日错题 (' + todayWrong.length + ')</h3>';
    html += '<div class="wrong-list">';
    todayWrong.forEach(w => {
      const idx = wrongWords.indexOf(w);
      html += buildWrongCard(w, idx, false);
    });
    html += '</div>';
  }

  html += '<h3 style="margin-top:1.5rem;">📚 全部错题 (' + wrongWords.length + ')</h3>';
  html += '<div class="wrong-list">';
  wrongWords.slice().reverse().forEach((w, i) => {
    const idx = wrongWords.length - 1 - i;
    html += buildWrongCard(w, idx, true);
  });
  html += '</div>';

  container.innerHTML = html;

  container.querySelectorAll('.record-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index);
      const records = getUserJson('wrongbook', [], 'cet4_wrongbook');
      const item = records[idx];
      if (item) showWrongWordDetail(item);
    });
  });
}

function buildWrongCard(item, index, showDate) {
  const dateStr = item.wrongTime ? new Date(item.wrongTime).toLocaleString() : '';
  const preview = item.meaning ? item.meaning.substring(0, 30) : '';
  return `<div class="record-card wrong-card" data-index="${index}">
    <div class="record-title">${item.word}</div>
    <div class="record-preview">${preview}${item.meaning && item.meaning.length > 30 ? '...' : ''}</div>
    <div class="record-meta">${showDate ? dateStr : new Date(item.wrongTime).toLocaleTimeString()}</div>
  </div>`;
}

function showWrongWordDetail(item) {
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('detailContent');
  content.innerHTML = `
    <div class="detail-section">
      <span class="label">📖 单词</span>
      <div class="content" style="font-size:1.5rem; font-weight:700;">${item.word}</div>
    </div>
    <div class="detail-section">
      <span class="label">📝 释义</span>
      <div class="content">${item.meaning || '暂无'}</div>
    </div>
    <div class="detail-section">
      <span class="label">⏰ 出错时间</span>
      <div class="content">${item.wrongTime ? new Date(item.wrongTime).toLocaleString() : '未知'}</div>
    </div>
    <div class="detail-actions">
      <button onclick='focusWord(${JSON.stringify(item.word)})'>去复习这个词</button>
      <button onclick="document.getElementById('detailModal').style.display='none'">关闭</button>
    </div>
  `;
  modal.style.display = 'flex';
}

// --- 翻译记录 ---
function loadTranslateRecords(container) {
  const uid = getCurrentUserId();
  const records = getTranslateHistory(uid);

  if (records.length === 0) {
    container.innerHTML = '<p>暂无翻译记录，去翻译模块练习吧！</p>';
    return;
  }

  let html = '<div class="wrong-list">';
  const reversed = [...records].reverse();
  reversed.forEach((r, i) => {
    const idx = records.length - 1 - i;
    const dateStr = r.time ? new Date(r.time).toLocaleString() : '';
    let scoreText = '';
    if (r.evaluation) {
      const scoreMatch = r.evaluation.match(/(\d+)\s*分/);
      if (scoreMatch) scoreText = '评分：' + scoreMatch[1] + '分';
    } else if (r.score) {
      scoreText = '评分：' + r.score + '分';
    }
    const preview = r.chinese ? r.chinese.substring(0, 40) : '';
    html += `<div class="record-card translate-card" data-index="${idx}">
      <div class="record-title">${preview}${r.chinese && r.chinese.length > 40 ? '...' : ''}</div>
      <div class="record-preview">${r.english ? r.english.substring(0, 50) : ''}</div>
      <div class="record-meta">${scoreText ? scoreText + ' · ' : ''}${dateStr}</div>
    </div>`;
  });
  html += '</div>';
  container.innerHTML = html;

  container.querySelectorAll('.record-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index);
      const records = getTranslateHistory(getCurrentUserId());
      const item = records[idx];
      if (item) showTranslateDetail(item, idx);
    });
  });
}

function showTranslateDetail(item, index) {
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('detailContent');

  let scoreClass = '';
  if (item.evaluation) {
    const scoreMatch = item.evaluation.match(/(\d+)\s*分/);
    if (scoreMatch) {
      const score = parseInt(scoreMatch[1]);
      if (score >= 12) scoreClass = 'score-good';
      else if (score >= 8) scoreClass = 'score-avg';
      else scoreClass = 'score-bad';
    }
  }

  content.innerHTML = `
    <div class="detail-section">
      <span class="label">🀄 中文句子</span>
      <div class="content" style="font-size:1.2rem;">${item.chinese || '暂无'}</div>
    </div>
    <div class="detail-section">
      <span class="label">🇬🇧 你的翻译</span>
      <div class="content">${item.english || '暂无'}</div>
    </div>
    <div class="detail-section">
      <span class="label">✅ 参考翻译</span>
      <div class="content">${item.standard || (typeof extractStandardTranslation === 'function' ? extractStandardTranslation(item.evaluation || '') : '') || 'AI 评价中未识别到标准译文'}</div>
    </div>
    <div class="detail-section">
      <span class="label">📊 AI 评分</span>
      <div class="content ${scoreClass}">${item.evaluation ? marked.parse(item.evaluation) : (item.score ? '评分：' + item.score + '分' : '暂无评分')}</div>
    </div>
    <div class="detail-section">
      <span class="label">⏰ 时间</span>
      <div class="content">${item.time ? new Date(item.time).toLocaleString() : '未知'}</div>
    </div>
    <div class="detail-actions">
      <button onclick="reviewTranslateRecord(${index}); document.getElementById('detailModal').style.display='none'">重新翻译这句</button>
      <button onclick="showTranslateComparison(${index}); document.getElementById('detailModal').style.display='none'">查看对比</button>
    </div>
  `;
  modal.style.display = 'flex';
}

// --- 作文记录 ---
function loadWritingRecords(container) {
  const uid = getCurrentUserId();
  const records = getWritingHistory(uid);

  if (records.length === 0) {
    container.innerHTML = '<p>暂无作文记录，去作文批改模块练习吧！</p>';
    return;
  }

  let html = '<div class="wrong-list">';
  const reversed = [...records].reverse();
  reversed.forEach((r, i) => {
    const idx = records.length - 1 - i;
    const dateStr = r.time ? new Date(r.time).toLocaleString() : '';
    let scoreText = '';
    if (r.evaluation) {
      const scoreMatch = r.evaluation.match(/(\d+)\s*分/);
      if (scoreMatch) scoreText = '评分：' + scoreMatch[1] + '分';
    }
    const preview = r.topic ? r.topic.substring(0, 30) : '无题';
    html += `<div class="record-card writing-card" data-index="${idx}">
      <div class="record-title">📝 ${preview}</div>
      <div class="record-preview">${r.essay ? r.essay.substring(0, 60) : ''}</div>
      <div class="record-meta">${scoreText ? scoreText + ' · ' : ''}${dateStr}</div>
    </div>`;
  });
  html += '</div>';
  container.innerHTML = html;

  container.querySelectorAll('.record-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index);
      const records = getWritingHistory(getCurrentUserId());
      const item = records[idx];
      if (item) showWritingDetail(item);
    });
  });
}

function showWritingDetail(item) {
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('detailContent');

  let scoreClass = '';
  if (item.evaluation) {
    const scoreMatch = item.evaluation.match(/(\d+)\s*分/);
    if (scoreMatch) {
      const score = parseInt(scoreMatch[1]);
      if (score >= 12) scoreClass = 'score-good';
      else if (score >= 8) scoreClass = 'score-avg';
      else scoreClass = 'score-bad';
    }
  }

  content.innerHTML = `
    <div class="detail-section">
      <span class="label">📌 题目</span>
      <div class="content" style="font-size:1.2rem;">${item.topic || '无题'}</div>
    </div>
    <div class="detail-section">
      <span class="label">✍️ 你的作文</span>
      <div class="content" style="white-space:pre-wrap;">${item.essay || '暂无内容'}</div>
    </div>
    <div class="detail-section">
      <span class="label">📊 AI 批改</span>
      <div class="content ${scoreClass}">${item.evaluation ? marked.parse(item.evaluation) : '暂无批改'}</div>
    </div>
    <div class="detail-section">
      <span class="label">⏰ 时间</span>
      <div class="content">${item.time ? new Date(item.time).toLocaleString() : '未知'}</div>
    </div>
  `;
  modal.style.display = 'flex';
}

// ========== 辅助函数 ==========
function getTranslateHistory(uid) {
  return getUserJson('translateHistory', [], `${uid}_translateHistory`);
}

function getWritingHistory(uid) {
  return getUserJson('writingHistory', [], `${uid}_writingHistory`);
}

// getCurrentUserId 已在 api.js 中定义
