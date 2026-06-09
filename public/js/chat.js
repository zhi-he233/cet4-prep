// ========== 交流角 ==========

let chatPollTimer = null;
let lastMessageId = null;

function loadChat() {
  const container = document.getElementById('chatContent');
  container.innerHTML = `
    <div class="chat-container">
      <div class="chat-header">
        <span>💬 交流角</span>
        <span class="chat-subtitle">正在以 <strong>${getCurrentUserId()}</strong> 身份进行${getExamLabel()}备考交流</span>
      </div>
      <div class="chat-messages" id="chatMessagesBox"></div>
      <div class="chat-input-row">
        <input type="text" id="chatInput" placeholder="输入消息..." maxlength="500">
        <button id="chatSendBtn" class="btn-primary">发送</button>
      </div>
    </div>
  `;

  // 绑定发送
  const sendBtn = document.getElementById('chatSendBtn');
  const chatInput = document.getElementById('chatInput');

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // 开始轮询
  fetchMessages();
  startPolling();
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  const user = getCurrentUserId();
  input.value = '';

  try {
    const res = await fetch('/api/chat/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, text })
    });
    const data = await res.json();
    if (data.success) {
      // 立即获取最新消息
      await fetchMessages();
    } else {
      alert('发送失败：' + (data.error || ''));
    }
  } catch (e) {
    alert('发送失败，请检查连接');
  }
  input.focus();
}

async function fetchMessages() {
  const box = document.getElementById('chatMessagesBox');
  if (!box) return;

  try {
    const res = await fetch('/api/chat/messages');
    const data = await res.json();
    if (!data.messages) return;

    const msgs = data.messages;
    if (msgs.length > 0) {
      const last = msgs[msgs.length - 1];
      if (last.id === lastMessageId) return; // 无新消息
      lastMessageId = last.id;
    }

    const currentUser = getCurrentUserId();
    box.innerHTML = msgs.map(m => {
      const isMe = m.user === currentUser;
      const time = new Date(m.time).toLocaleTimeString();
      return `
        <div class="chat-msg ${isMe ? 'chat-msg-me' : 'chat-msg-other'}">
          <div class="chat-msg-user">${isMe ? '我' : m.user}</div>
          <div class="chat-msg-text">${escapeHtml(m.text)}</div>
          <div class="chat-msg-time">${time}</div>
        </div>
      `;
    }).join('');

    // 滚动到底部
    box.scrollTop = box.scrollHeight;
  } catch (e) {
    console.error('获取消息失败', e);
  }
}

function startPolling() {
  stopPolling();
  chatPollTimer = setInterval(fetchMessages, 3000); // 每 3 秒轮询
}

function stopPolling() {
  if (chatPollTimer) {
    clearInterval(chatPollTimer);
    chatPollTimer = null;
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
