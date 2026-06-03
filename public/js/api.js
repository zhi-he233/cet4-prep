const API = {
  async post(url, data) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      const token = localStorage.getItem('cet4token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) return { error: json.error || `请求失败 (${res.status})` };
      return json;
    } catch (e) {
      return { error: '网络连接失败' };
    }
  },
  async get(url) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      const token = localStorage.getItem('cet4token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, { headers });
      const json = await res.json();
      if (!res.ok) return { error: json.error || `请求失败 (${res.status})` };
      return json;
    } catch (e) {
      return { error: '网络连接失败' };
    }
  }
};
// 获取用户列表
function getUsers() {
  return JSON.parse(localStorage.getItem('cet4_users') || '["默认用户"]');
}
function saveUsers(users) {
  localStorage.setItem('cet4_users', JSON.stringify(users));
}
function getCurrentUserId() {
  const select = document.getElementById('userSelect');
  if (select && select.value) return select.value;
  return localStorage.getItem('cet4_currentUser') || '默认用户';
}
function switchUser(userId) {
  localStorage.setItem('cet4_currentUser', userId);
  // 更新下拉框
  const select = document.getElementById('userSelect');
  if (select) select.value = userId;
  // 刷新各模块数据，无需重载页面
  // 刷新各模块显示
  const activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) {
    const tab = activeTab.dataset.tab;
    if (tab === 'words') showStudyHistory();
    else if (tab === 'translate') showTranslateHistory();
    else if (tab === 'wrongbook') loadWrongBook('wrong-words');
    else if (tab === 'favorites') loadFavorites();
    else if (tab === 'writing') {
      // 不刷新，因为内容是独立的
    }
  }
  // 清空各结果区域
  document.getElementById('wordResult') && (document.getElementById('wordResult').innerHTML = '');
  document.getElementById('quizResult') && (document.getElementById('quizResult').innerHTML = '');
  document.getElementById('translateResult') && (document.getElementById('translateResult').innerHTML = '');
  document.getElementById('writingResult') && (document.getElementById('writingResult').innerHTML = '');
}
// 初始化下拉框
function initUserSelect() {
  const select = document.getElementById('userSelect');
  const users = getUsers();
  select.innerHTML = users.map(u => `<option value="${u}">${u}</option>`).join('');
  select.value = getCurrentUserId();
  // 用 setTimeout 避免初始化时触发 change
  setTimeout(() => {
    select.addEventListener('change', () => switchUser(select.value));
  }, 100);
}
// 新建用户
document.getElementById('newUserBtn').addEventListener('click', () => {
  document.getElementById('newUserName').style.display = 'inline';
  document.getElementById('confirmNewUser').style.display = 'inline';
});
document.getElementById('confirmNewUser').addEventListener('click', () => {
  const name = document.getElementById('newUserName').value.trim();
  if (!name) return;
  const users = getUsers();
  if (users.includes(name)) { alert('用户已存在'); return; }
  users.push(name);
  saveUsers(users);
  // 重新初始化下拉框并切换到新用户
  initUserSelect();
  switchUser(name);
  document.getElementById('newUserName').value = '';
  document.getElementById('newUserName').style.display = 'none';
  document.getElementById('confirmNewUser').style.display = 'none';
});
