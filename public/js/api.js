const API = {
  async post(url, data) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(`请求失败 ${res.status}`);
      return await res.json();
    } catch (e) {
      alert('请求出错：' + e.message);
      return { error: e.message };
    }
  }
};