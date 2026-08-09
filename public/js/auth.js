let authMode = 'login';

function setAuthMessage(message, isError = true) {
  const el = document.getElementById('authMessage');
  if (!el) return;
  el.textContent = message || '';
  el.classList.toggle('auth-message-error', isError);
}

function setAuthMode(mode) {
  authMode = mode;
  const inviteRow = document.getElementById('inviteCodeRow');
  document.getElementById('authModalTitle').textContent = mode === 'login' ? '登录' : '注册';
  document.getElementById('authSubmitBtn').textContent = mode === 'login' ? '登录' : '注册并登录';
  document.getElementById('authSwitchBtn').textContent = mode === 'login' ? '去注册' : '去登录';
  document.getElementById('authPassword').autocomplete = mode === 'login' ? 'current-password' : 'new-password';
  if (inviteRow) inviteRow.style.display = mode === 'login' ? 'none' : 'block';
  setAuthMessage('');
}

function showAuthModal(mode = 'login') {
  setAuthMode(mode);
  document.getElementById('authModal').style.display = 'flex';
  document.getElementById('authUsername').focus();
}

function hideAuthModal() {
  document.getElementById('authModal').style.display = 'none';
  setAuthMessage('');
}

function updateAuthUI() {
  const status = document.getElementById('authStatus');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const user = getStoredAuthUser();

  if (isLoggedIn() && user) {
    status.textContent = `已登录：${user.username}`;
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  } else {
    status.textContent = '未登录，本机保存';
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
  }
}

function collectLocalHistories() {
  const result = {};
  Object.keys(EXAM_LEVELS).forEach((level) => {
    result[level] = parseJson(localStorage.getItem(`local_${level}_translateHistory`), []);
  });
  return result;
}

function mergeHistories(localRecords, serverRecords) {
  const map = new Map();
  [...serverRecords, ...localRecords].forEach((record) => {
    const key = `${record.time || ''}|${record.chinese || ''}|${record.english || ''}`;
    map.set(key, record);
  });
  return Array.from(map.values()).sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
}

async function loadServerHistoryForCurrentLevel() {
  if (!isLoggedIn()) return;
  const data = await API.get('/api/user/history');
  if (data.history) {
    setUserJson('translateHistory', data.history);
  }
}

async function syncAllLevelsAfterLogin(localHistories) {
  for (const level of Object.keys(EXAM_LEVELS)) {
    const previousLevel = getExamLevel();
    localStorage.setItem('cet_examLevel', level);
    const data = await API.get('/api/user/history');
    const merged = mergeHistories(localHistories[level] || [], data.history || []);
    setUserJson('translateHistory', merged);
    await API.post('/api/user/history', { records: merged });
    localStorage.setItem('cet_examLevel', previousLevel);
  }
  await loadServerHistoryForCurrentLevel();
  showTranslateHistory();
}

async function handleAuthSuccess(data, localHistories) {
  localStorage.setItem(AUTH_TOKEN_KEY, data.token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user));
  updateAuthUI();
  hideAuthModal();
  await syncAllLevelsAfterLogin(localHistories);
}

async function submitAuth() {
  const username = document.getElementById('authUsername').value.trim();
  const password = document.getElementById('authPassword').value;
  const inviteCode = document.getElementById('inviteCodeInput')?.value.trim() || '';
  if (!username || !password) {
    setAuthMessage('请输入用户名和密码');
    return;
  }
  if (authMode === 'register' && !inviteCode) {
    setAuthMessage('请输入邀请码');
    return;
  }

  const localHistories = collectLocalHistories();
  const btn = document.getElementById('authSubmitBtn');
  btn.disabled = true;
  setAuthMessage(authMode === 'login' ? '登录中...' : '注册中...', false);

  const data = await API.post(authMode === 'login' ? '/api/auth/login' : '/api/auth/register', {
    username,
    password,
    inviteCode
  });

  btn.disabled = false;
  if (data.error) {
    setAuthMessage(data.error);
    return;
  }
  await handleAuthSuccess(data, localHistories);
}

function logout() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  updateAuthUI();
  showTranslateHistory();
}

async function restoreLogin() {
  if (!localStorage.getItem(AUTH_TOKEN_KEY)) {
    updateAuthUI();
    return;
  }
  const data = await API.get('/api/auth/me');
  if (data.user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user));
    await loadServerHistoryForCurrentLevel();
  } else {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  }
  updateAuthUI();
  showTranslateHistory();
}

function initAuth() {
  document.getElementById('loginBtn').addEventListener('click', () => showAuthModal('login'));
  document.getElementById('logoutBtn').addEventListener('click', logout);
  document.getElementById('closeAuthModalBtn').addEventListener('click', hideAuthModal);
  document.getElementById('authSwitchBtn').addEventListener('click', () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  });
  document.getElementById('authSubmitBtn').addEventListener('click', submitAuth);
  document.getElementById('authModal').addEventListener('click', (event) => {
    if (event.target.id === 'authModal') hideAuthModal();
  });
  document.getElementById('authPassword').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') submitAuth();
  });
  restoreLogin();
}
