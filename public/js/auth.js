// ========== Auth Module ==========
let authToken = localStorage.getItem('cet4token');
let currentUser = null;

function isLoggedIn() {
  return !!authToken;
}

function getAuthHeaders() {
  const h = { 'Content-Type': 'application/json' };
  if (authToken) h['Authorization'] = `Bearer ${authToken}`;
  return h;
}

function getCurrentUsername() {
  return currentUser ? currentUser.username : '游客';
}

// Override API helpers for auth
const _API = { ...API };
API.post = async function(url, data) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ level: getExamLevel(), ...(data || {}) })
    });
    const json = await res.json();
    if (!res.ok) return { error: json.error || `请求失败 (${res.status})` };
    return json;
  } catch (e) {
    return { error: '网络连接失败' };
  }
};
API.get = async function(url) {
  try {
    const separator = url.includes('?') ? '&' : '?';
    const res = await fetch(`${url}${separator}level=${encodeURIComponent(getExamLevel())}`, { headers: getAuthHeaders() });
    const json = await res.json();
    if (!res.ok) return { error: json.error || `请求失败 (${res.status})` };
    return json;
  } catch (e) {
    return { error: '网络连接失败' };
  }
};

function showAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.style.display = 'flex';
}

function hideAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.style.display = 'none';
}

async function doLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const msg = document.getElementById('authMsg');
  if (!username || !password) { msg.textContent = '请填写用户名和密码'; return; }
  msg.textContent = '';
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!res.ok) { msg.textContent = data.error || '登录失败'; return; }
    authToken = data.token;
    currentUser = data.user;
    localStorage.setItem('cet4token', authToken);
    localStorage.setItem('cet4_currentUser', currentUser.username);
    hideAuthModal();
    updateAuthUI();
    await syncUserDataFromServer();
  } catch (e) {
    msg.textContent = '网络错误';
  }
}

async function doRegister() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value;
  const msg = document.getElementById('authMsg');
  if (!username || !password) { msg.textContent = '请填写用户名和密码'; return; }
  if (username.length < 2) { msg.textContent = '用户名至少2个字符'; return; }
  if (password.length < 3) { msg.textContent = '密码至少3个字符'; return; }
  msg.textContent = '';
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!res.ok) { msg.textContent = data.error || '注册失败'; return; }
    authToken = data.token;
    currentUser = data.user;
    localStorage.setItem('cet4token', authToken);
    localStorage.setItem('cet4_currentUser', currentUser.username);
    hideAuthModal();
    updateAuthUI();
    msg.textContent = '';
  } catch (e) {
    msg.textContent = '网络错误';
  }
}

function doLogout() {
  authToken = null;
  currentUser = null;
  localStorage.removeItem('cet4token');
  updateAuthUI();
}

async function syncUserDataFromServer() {
  if (!isLoggedIn()) return;
  try {
    const data = await API.get('/api/user/data');
    if (data.data && !data.error) {
      if (data.data.favorites) setUserJson('favorites', data.data.favorites);
      if (data.data.wrongbook) setUserJson('wrongbook', data.data.wrongbook);
    }
  } catch (e) { /* silent */ }
}

async function syncSingleKeyToServer(key) {
  if (!isLoggedIn()) return;
  const value = getUserJson(key, []);
  try {
    await API.post('/api/user/sync', { key, value });
  } catch (e) { /* silent */ }
}

function updateAuthUI() {
  const userDisplay = document.getElementById('authUserDisplay');
  const loginBtn = document.getElementById('authLoginBtn');
  const logoutBtn = document.getElementById('authLogoutBtn');
  if (!userDisplay) return;

  if (isLoggedIn()) {
    userDisplay.textContent = getCurrentUsername();
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
  } else {
    userDisplay.textContent = '未登录';
    if (loginBtn) loginBtn.style.display = 'inline-block';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
  if (isLoggedIn()) syncUserDataFromServer();
});
