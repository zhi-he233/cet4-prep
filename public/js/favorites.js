function loadFavorites() {
  const container = document.getElementById('favoritesContent');
  const favorites = JSON.parse(localStorage.getItem('cet4_favorites') || '[]');
  if (favorites.length === 0) {
    container.innerHTML = '<p>还没有收藏的单词，点击背单词页面的 ☆ 收藏按钮添加。</p>';
    return;
  }
  let html = '<ul class="favorites-list">';
  favorites.forEach(f => {
    html += `<li class="favorite-item">
      <span><strong>${f.word}</strong> - ${f.meaning}</span>
      <button class="remove-fav-btn" data-word="${f.word}">🗑️ 取消收藏</button>
    </li>`;
  });
  html += '</ul>';
  container.innerHTML = html;

  // 取消收藏事件
  container.querySelectorAll('.remove-fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const word = e.target.dataset.word;
      let favs = JSON.parse(localStorage.getItem('cet4_favorites') || '[]');
      favs = favs.filter(f => f.word !== word);
      localStorage.setItem('cet4_favorites', JSON.stringify(favs));
      loadFavorites(); // 刷新列表
    });
  });
}