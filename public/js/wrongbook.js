function loadWrongBook() {
  const container = document.getElementById('wrongbookContent');
  const wrongWords = JSON.parse(localStorage.getItem('cet4_wrongbook') || '[]');
  if (wrongWords.length === 0) {
    container.innerHTML = '<p>暂无错题，去背单词模块做一下 AI 出题吧！</p>';
    return;
  }

  // 分组今日错题 / 累计错题
  const today = new Date().toISOString().slice(0, 10);
  const todayWrong = wrongWords.filter(w => w.wrongTime.startsWith(today));
  const allWrong = wrongWords;

  let html = '';
  if (todayWrong.length > 0) {
    html += '<h3>📅 今日错题 (' + todayWrong.length + ')</h3>';
    html += '<ul class="wrong-list">';
    todayWrong.forEach(w => {
      html += `<li class="wrong-item"><span class="word">${w.word}</span> <span class="wrong-meaning">${w.meaning}</span><span class="wrong-date">${new Date(w.wrongTime).toLocaleTimeString()}</span></li>`;
    });
    html += '</ul>';
  } else {
    html += '<p>今日暂无错题。</p>';
  }
  html += '<h3>📚 累计错题 (' + allWrong.length + ')</h3>';
  html += '<ul class="wrong-list">';
  allWrong.slice().reverse().forEach(w => {
    html += `<li class="wrong-item"><span class="word">${w.word}</span> <span class="wrong-meaning">${w.meaning}</span><span class="wrong-date">${new Date(w.wrongTime).toLocaleString()}</span></li>`;
  });
  html += '</ul>';
  container.innerHTML = html;
}