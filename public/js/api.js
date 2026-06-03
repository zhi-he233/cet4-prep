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