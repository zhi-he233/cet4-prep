const API = {
  async post(url, data) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      const token = localStorage.getItem('cet4token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({ level: getExamLevel(), ...(data || {}) })
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
      const separator = url.includes('?') ? '&' : '?';
      const res = await fetch(`${url}${separator}level=${encodeURIComponent(getExamLevel())}`, { headers });
      const json = await res.json();
      if (!res.ok) return { error: json.error || `请求失败 (${res.status})` };
      return json;
    } catch (e) {
      return { error: '网络连接失败' };
    }
  }
};

const EXAM_LEVELS = {
  cet4: { label: '四级', title: '四级速通助手' },
  cet6: { label: '六级', title: '六级速通助手' }
};

function getExamLevel() {
  const saved = localStorage.getItem('cet_examLevel') || 'cet4';
  return EXAM_LEVELS[saved] ? saved : 'cet4';
}

function getExamLabel() {
  return EXAM_LEVELS[getExamLevel()].label;
}

function updateExamLevelText() {
  const title = EXAM_LEVELS[getExamLevel()].title;
  document.title = title;
  document.querySelectorAll('[data-exam-label]').forEach(el => {
    el.textContent = getExamLabel();
  });
  document.querySelectorAll('[data-exam-title]').forEach(el => {
    el.textContent = title;
  });
}

function getThemeMode() {
  return localStorage.getItem('cet_theme') || 'light';
}

function applyThemeMode() {
  const dark = getThemeMode() === 'dark';
  document.body.classList.toggle('theme-dark', dark);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.textContent = dark ? '浅色模式' : '深色模式';
}

function toggleThemeMode() {
  localStorage.setItem('cet_theme', getThemeMode() === 'dark' ? 'light' : 'dark');
  applyThemeMode();
}

function switchExamLevel(level) {
  if (!EXAM_LEVELS[level]) return;
  localStorage.setItem('cet_examLevel', level);
  const select = document.getElementById('examLevelSelect');
  if (select) select.value = level;
  updateExamLevelText();
  if (typeof refreshWordUserData === 'function') refreshWordUserData();

  const activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) {
    const tab = activeTab.dataset.tab;
    if (tab === 'words') showStudyHistory();
    else if (tab === 'translate') {
      showTranslateHistory();
      if (typeof loadRandomSentence === 'function') loadRandomSentence();
    } else if (tab === 'wrongbook') loadWrongBook('wrong-words');
    else if (tab === 'favorites') loadFavorites();
    else if (tab === 'writing' && typeof refreshWritingForExamLevel === 'function') {
      refreshWritingForExamLevel();
    } else if (tab === 'chat') {
      stopPolling();
      loadChat();
    }
  }

  document.getElementById('wordResult') && (document.getElementById('wordResult').innerHTML = '');
  document.getElementById('quizResult') && (document.getElementById('quizResult').innerHTML = '');
  document.getElementById('translateResult') && (document.getElementById('translateResult').innerHTML = '');
  document.getElementById('writingResult') && (document.getElementById('writingResult').innerHTML = '');
}

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

function parseJson(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

function getUserStorageKey(name, userId = getCurrentUserId(), level = getExamLevel()) {
  return `${userId}_${level}_${name}`;
}

function getUserJson(name, fallback, legacyKey) {
  const key = getUserStorageKey(name);
  const stored = localStorage.getItem(key);
  if (stored) return parseJson(stored, fallback);

  if (getExamLevel() === 'cet4') {
    const candidates = [`${getCurrentUserId()}_${name}`].concat(legacyKey ? [].concat(legacyKey) : []);
    for (const candidate of candidates) {
      const legacyValue = localStorage.getItem(candidate);
      const migrationFlag = `${candidate}_migrated_to_${key}`;
      if (!legacyValue || localStorage.getItem(migrationFlag)) continue;
      if (legacyValue && !localStorage.getItem(migrationFlag)) {
        localStorage.setItem(key, legacyValue);
        localStorage.setItem(migrationFlag, '1');
        return parseJson(legacyValue, fallback);
      }
    }
  }

  return fallback;
}

function setUserJson(name, data) {
  localStorage.setItem(getUserStorageKey(name), JSON.stringify(data));
}

function switchUser(userId) {
  localStorage.setItem('cet4_currentUser', userId);
  // 更新下拉框
  const select = document.getElementById('userSelect');
  if (select) select.value = userId;
  if (typeof refreshWordUserData === 'function') refreshWordUserData();
  // 刷新各模块显示
  const activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) {
    const tab = activeTab.dataset.tab;
    if (tab === 'words') showStudyHistory();
    else if (tab === 'translate') showTranslateHistory();
    else if (tab === 'wrongbook') loadWrongBook('wrong-words');
    else if (tab === 'favorites') loadFavorites();
    else if (tab === 'writing' && typeof refreshWritingForExamLevel === 'function') refreshWritingForExamLevel();
    else if (tab === 'chat') { stopPolling(); loadChat(); }
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
  select.innerHTML = '';
  users.forEach(u => {
    const option = document.createElement('option');
    option.value = u;
    option.textContent = u;
    select.appendChild(option);
  });
  select.value = getCurrentUserId();
  select.onchange = () => switchUser(select.value);

  const examSelect = document.getElementById('examLevelSelect');
  if (examSelect) {
    examSelect.value = getExamLevel();
    examSelect.onchange = () => switchExamLevel(examSelect.value);
  }
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) themeBtn.onclick = toggleThemeMode;
  updateExamLevelText();
  applyThemeMode();
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
