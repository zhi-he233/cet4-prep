const AUTH_TOKEN_KEY = 'cet_auth_token';
const AUTH_USER_KEY = 'cet_auth_user';

const API = {
  async post(url, data) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: getRequestHeaders(),
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
      const separator = url.includes('?') ? '&' : '?';
      const res = await fetch(`${url}${separator}level=${encodeURIComponent(getExamLevel())}`, {
        headers: getRequestHeaders()
      });
      const json = await res.json();
      if (!res.ok) return { error: json.error || `请求失败 (${res.status})` };
      return json;
    } catch (e) {
      return { error: '网络连接失败' };
    }
  }
};

const EXAM_LEVELS = {
  cet4: { label: '四级', title: '四级翻译练习' },
  cet6: { label: '六级', title: '六级翻译练习' }
};

function getRequestHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

function getStoredAuthUser() {
  return parseJson(localStorage.getItem(AUTH_USER_KEY), null);
}

function isLoggedIn() {
  return !!localStorage.getItem(AUTH_TOKEN_KEY) && !!getStoredAuthUser();
}

function getExamLevel() {
  const saved = localStorage.getItem('cet_examLevel') || 'cet4';
  return EXAM_LEVELS[saved] ? saved : 'cet4';
}

function getCurrentUserId() {
  const user = getStoredAuthUser();
  return user?.username || 'local';
}

function getUserStorageKey(name, userId = getCurrentUserId(), level = getExamLevel()) {
  return `${userId}_${level}_${name}`;
}

function parseJson(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

function getUserJson(name, fallback, legacyKey) {
  const key = getUserStorageKey(name);
  const stored = localStorage.getItem(key);
  if (stored) return parseJson(stored, fallback);

  const legacyValue = legacyKey ? localStorage.getItem(legacyKey) : null;
  if (legacyValue) {
    localStorage.setItem(key, legacyValue);
    return parseJson(legacyValue, fallback);
  }

  return fallback;
}

function setUserJson(name, data) {
  localStorage.setItem(getUserStorageKey(name), JSON.stringify(data));
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text || '';
  return div.innerHTML;
}

function updateExamLevelText() {
  const config = EXAM_LEVELS[getExamLevel()];
  document.title = config.title;
  document.querySelectorAll('[data-exam-title]').forEach((el) => {
    el.textContent = config.title;
  });
  document.querySelectorAll('[data-exam-label]').forEach((el) => {
    el.textContent = config.label;
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

function updateNetworkStatus() {
  const online = navigator.onLine;
  document.body.classList.toggle('is-offline', !online);
  const el = document.getElementById('networkStatus');
  if (el) {
    el.textContent = online ? '在线' : '离线';
    el.title = online ? '可以使用 AI 出题和评分' : '离线时可用本地题库练习并保存记录';
  }
}

function toggleThemeMode() {
  localStorage.setItem('cet_theme', getThemeMode() === 'dark' ? 'light' : 'dark');
  applyThemeMode();
}

async function switchExamLevel(level) {
  if (!EXAM_LEVELS[level]) return;
  localStorage.setItem('cet_examLevel', level);
  updateExamLevelText();
  if (typeof loadServerHistoryForCurrentLevel === 'function') await loadServerHistoryForCurrentLevel();
  showTranslateHistory();
  if (typeof loadRandomSentence === 'function') loadRandomSentence();
  const result = document.getElementById('translateResult');
  const review = document.getElementById('translateReviewPanel');
  if (result) result.innerHTML = '';
  if (review) review.style.display = 'none';
}

function initAppShell() {
  const examSelect = document.getElementById('examLevelSelect');
  if (examSelect) {
    examSelect.value = getExamLevel();
    examSelect.addEventListener('change', () => switchExamLevel(examSelect.value));
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) themeBtn.addEventListener('click', toggleThemeMode);

  updateExamLevelText();
  applyThemeMode();
  updateNetworkStatus();
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
}
