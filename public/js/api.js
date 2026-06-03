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
  return localStorage.getItem('cet4_currentUser') || '默认用户';
}
function switchUser(userId) {
  localStorage.setItem('cet4_currentUser', userId);
  location.reload(); // 简单重载刷新所有记录
}
// 初始化下拉框
function initUserSelect() {
  const select = document.getElementById('userSelect');
  const users = getUsers();
  select.innerHTML = users.map(u => `<option value="${u}">${u}</option>`).join('');
  select.value = getCurrentUserId();
  select.addEventListener('change', () => switchUser(select.value));
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
  switchUser(name);
});