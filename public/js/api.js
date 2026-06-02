const API = {
  async post(url, data) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) {
        // 优先展示后端返回的 error 字段，否则显示状态码
        return { error: json.error || `请求失败 (${res.status})` };
      }
      return json;
    } catch (e) {
      console.error('网络错误:', e);
      return { error: '网络连接失败，请检查网络或后端服务状态' };
    }
  }
};