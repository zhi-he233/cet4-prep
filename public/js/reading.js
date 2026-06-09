// ========== 阅读训练模块 ==========
let currentPaper = null;
let readingView = 'list';
let wordTooltipEl = null;

function unescapeText(t) { return (t||'').replace(/\\n/g, '<br>').replace(/\n/g, '<br>').replace(/\\t/g, ' '); }

function initReading() {
  if (!wordTooltipEl) {
    wordTooltipEl = document.createElement('div');
    wordTooltipEl.className = 'word-tooltip';
    wordTooltipEl.style.display = 'none';
    document.body.appendChild(wordTooltipEl);
  }
}

async function loadPaperList() {
  readingView = 'list';
  const container = document.getElementById('readingContent');
  container.innerHTML = '<p>加载试卷列表中...</p>';
  const data = await API.get('/api/papers');
  let papers = (data.papers || []).filter(p => p.sectionCount > 0);
  let html = '<div class="reading-subnav">';
  html += '<button class="sub-tab-btn active" data-reading="papers">📄 真题试卷</button>';
  html += '<button class="sub-tab-btn" data-reading="articles">📰 每日阅读</button>';
  html += '</div><div id="readingPapersView">';
  if (papers.length === 0) {
    html += '<div class="empty-state"><p>暂无试卷数据</p><button class="btn-primary" id="paperImportBtn">📤 导入试卷 JSON</button></div>';
  } else {
    html += '<div class="paper-list">';
    const levels = { cet4: '四级', cet6: '六级' };
    papers.forEach(p => {
      const tags = ['writing','reading','translation'].filter(t => (p.sections||[]).some(s => s.type===t))
        .map(s => '<span class="section-tag section-'+s+'">'+(s==='writing'?'写作':s==='reading'?'阅读':'翻译')+'</span>').join('');
      html += '<div class="paper-card" data-id="'+p._id+'"><div class="paper-title">'+p.title+'</div><div class="paper-meta">'+(levels[p.level]||p.level)+' · '+p.year+'年'+p.month+'月 · 第'+(p.set||1)+'套</div><div class="paper-tags">'+tags+'</div></div>';
    });
    html += '</div><button class="btn-secondary" id="paperImportBtn" style="margin-top:1rem;">📤 导入试卷 JSON</button>';
  }
  html += '</div><div id="readingArticlesView" style="display:none;">';
  html += buildDailyArticlesHtml();
  html += '<button class="btn-primary btn-sm" id="loadAIArticleBtn" style="margin-top:0.5rem;">🤖 AI 生成新文章</button></div>';
  container.innerHTML = html;
  container.querySelectorAll('.reading-subnav .sub-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      container.querySelectorAll('.reading-subnav .sub-tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('readingPapersView').style.display = this.dataset.reading==='papers'?'block':'none';
      document.getElementById('readingArticlesView').style.display = this.dataset.reading==='articles'?'block':'none';
    });
  });
  container.querySelectorAll('.paper-card').forEach(card => card.addEventListener('click', () => loadPaper(card.dataset.id)));
  container.querySelectorAll('.article-card').forEach(card => card.addEventListener('click', () => loadDailyArticle(card.dataset.article)));
  const upBtn = document.getElementById('paperImportBtn'); if (upBtn) upBtn.addEventListener('click', handlePaperImport);
  const aiBtn = document.getElementById('loadAIArticleBtn'); if (aiBtn) aiBtn.addEventListener('click', loadAIDailyArticle);
  initReading();
}

function buildDailyArticlesHtml() {
  const articles = [
    { id: 'ai', title: 'Artificial Intelligence in Daily Life', level: 'cet4', preview: 'AI is transforming how we live, work, and learn...' },
    { id: 'climate', title: 'Climate Change and Young People', level: 'cet4', preview: 'Young people around the world are taking action on climate change...' },
    { id: 'reading', title: 'The Lost Art of Deep Reading', level: 'cet6', preview: 'In an age of constant distractions, deep reading has become increasingly rare...' },
    { id: 'space', title: 'China Space Exploration Journey', level: 'cet6', preview: 'China has made remarkable progress in space exploration...' }
  ];
  const levels = { cet4: '四级', cet6: '六级' };
  return articles.map(a => '<div class="article-card" data-article="'+a.id+'"><span class="article-level level-'+a.level+'">'+levels[a.level]+'</span><div class="article-title">'+a.title+'</div><div class="article-preview">'+a.preview+'</div></div>').join('');
}

async function loadDailyArticle(articleId) {
  const articles = {
    ai: { title: 'Artificial Intelligence in Daily Life', level: 'cet4', paragraphs: ['Artificial intelligence (AI) is no longer a concept confined to science fiction. It has quietly integrated into our daily routines, from the voice assistants on our phones to the recommendation algorithms that suggest what we should watch or buy next.', 'Many experts believe that AI will fundamentally reshape the job market. Routine tasks are increasingly being automated, but new opportunities in data science and AI ethics are emerging.', 'AI-powered tools have become indispensable. Language apps personalize lessons, health apps provide early warnings, and navigation systems optimize routes in real time.']},
    climate: { title: 'Climate Change and Young People', level: 'cet4', paragraphs: ['Around the world, young people are emerging as powerful voices in the fight against climate change. From school strikes to social media campaigns, the younger generation is demanding action.', 'Rising global temperatures and extreme weather events point to an accelerating crisis. Yet many young activists feel frustrated by a lack of political will.', 'Despite challenges, renewable energy is becoming cheaper, more countries are committing to carbon neutrality, and public awareness has never been higher.']},
    reading: { title: 'The Lost Art of Deep Reading', level: 'cet6', paragraphs: ['In an era dominated by social media and bite-sized content, deep reading is becoming rare. The slow, immersive engagement with text requires attention that digital environments discourage.', 'Neuroscientific research suggests the brain processes information differently on screens versus paper. Screen reading encourages scanning while paper reading facilitates deeper comprehension.', 'The decline of deep reading affects academic performance and our capacity for empathy. Reclaiming this habit may be one of the most important cultural challenges of our time.']},
    space: { title: 'China Space Exploration Journey', level: 'cet6', paragraphs: ['China space program has achieved remarkable milestones, from the Chang lunar missions to the Tiangong space station. Each achievement represents years of research and innovation.', 'Technologies developed for space exploration find applications in everyday life: satellite systems improve forecasting, materials science contributes to better products.', 'Looking ahead, China has ambitious plans for Mars missions and asteroid exploration. The program emphasizes international cooperation.']}
  };
  const article = articles[articleId];
  if (!article) return;
  currentPaper = null; readingView = 'article';
  const levels = { cet4: '四级', cet6: '六级' };
  const container = document.getElementById('readingContent');
  const passageHtml = article.paragraphs.map(p => '<p>'+unescapeText(p).split(' ').map(w => '<span class="clickable-word">'+w+'</span>').join(' ')+'</p>').join('');
  container.innerHTML = '<div class="reading-header"><button class="btn-secondary" id="backToReadingList">← 返回列表</button><span class="article-level level-'+article.level+'">'+levels[article.level]+'</span><h2>'+article.title+'</h2></div><div class="reading-passage" id="readingPassage">'+passageHtml+'</div><div id="readingTranslateBox" class="reading-translate-box" style="display:none;"></div>';
  document.getElementById('backToReadingList').addEventListener('click', loadPaperList);
  bindWordClicks(); bindSentenceSelection();
}

async function loadAIDailyArticle() {
  const container = document.getElementById('readingContent');
  container.innerHTML = '<p style="text-align:center;padding:2rem;">🤖 AI 正在生成一篇新鲜文章...</p>';
  const data = await API.get('/api/reading/daily');
  if (data.error) { container.innerHTML = '<p>生成失败: '+data.error+'</p>'; return; }
  currentPaper = null; readingView = 'article';
  const paragraphs = data.article.split('\n\n').filter(p => p.trim());
  const passageHtml = paragraphs.map(p => '<p>'+unescapeText(p).split(' ').map(w => '<span class="clickable-word">'+w+'</span>').join(' ')+'</p>').join('');
  const levels = { cet4: '四级', cet6: '六级' };
  container.innerHTML = '<div class="reading-header"><button class="btn-secondary" id="backToReadingList">← 返回列表</button><span class="article-level level-'+data.level+'">'+levels[data.level]+' · AI 生成</span><h2>📰 每日阅读</h2><button class="btn-primary btn-sm" id="refreshAIArticle">🔄 换一篇</button></div><div class="reading-passage" id="readingPassage">'+passageHtml+'</div><div id="readingTranslateBox" class="reading-translate-box" style="display:none;"></div>';
  document.getElementById('backToReadingList').addEventListener('click', loadPaperList);
  document.getElementById('refreshAIArticle').addEventListener('click', loadAIDailyArticle);
  bindWordClicks(); bindSentenceSelection();
}

async function loadPaper(paperId) {
  readingView = 'paper';
  const container = document.getElementById('readingContent');
  container.innerHTML = '<p>加载试卷中...</p>';
  const data = await API.get('/api/papers/'+paperId);
  if (data.error) { container.innerHTML = '<p>加载失败: '+data.error+'</p>'; return; }
  currentPaper = data.paper;
  renderPaper(container);
}

function renderPaper(container) {
  const p = currentPaper;
  const levels = { cet4: '四级', cet6: '六级' };
  let html = '<div class="reading-header"><button class="btn-secondary" id="backToReadingList">← 返回列表</button><h2>'+p.title+'</h2><div class="paper-meta">'+(levels[p.level]||p.level)+' '+p.year+'年'+p.month+'月 第'+(p.set||1)+'套</div></div>';
  if (p.sections) {
    p.sections.forEach((sec, idx) => {
      if (sec.type === 'listening') return;
      html += '<div class="paper-section"><h3 class="section-heading">'+sec.title+'</h3>';
      if (sec.type === 'reading') {
        html += '<div class="paper-sbs-layout">';
        if (sec.passage) html += '<div class="paper-sbs-passage"><div class="reading-passage" id="passage-'+idx+'">'+unescapeText(sec.passage).split(' ').map(w => '<span class="clickable-word">'+w+'</span>').join(' ')+'</div></div>';
        if (sec.questions && sec.questions.length > 0) {
          html += '<div class="paper-sbs-questions"><div class="paper-questions">';
          sec.questions.forEach((q, qi) => {
            html += '<div class="quiz-question-item" data-sec="'+idx+'" data-q="'+qi+'"><div class="q-text">'+(qi+1)+'. '+unescapeText(q.question)+'</div>';
            if (q.options && q.options.length > 0) {
              html += '<div class="q-options">';
              q.options.forEach(opt => {
                const letter = opt.substring(0, opt.indexOf(')') > -1 ? opt.indexOf(')') : 2);
                html += '<button class="q-opt-btn" data-answer="'+letter.trim()+'">'+unescapeText(opt)+'</button>';
              });
              html += '</div>';
            }
            html += '<div class="q-feedback" id="q-fb-'+idx+'-'+qi+'" style="display:none;"></div></div>';
          });
          html += '</div></div>';
        }
        html += '</div>';
      } else {
        if (sec.passage) html += '<div class="exam-passage">'+unescapeText(sec.passage)+'</div>';
        if (sec.questions && sec.questions.length > 0) {
          html += '<div class="paper-questions">';
          sec.questions.forEach((q, qi) => {
            html += '<div class="quiz-question-item"><div class="q-text">'+(qi+1)+'. '+unescapeText(q.question)+'</div></div>';
          });
          html += '</div>';
        }
      }
      html += '</div>';
    });
  }
  html += '<div id="readingTranslateBox" class="reading-translate-box" style="display:none;"></div>';
  container.innerHTML = html;
  document.getElementById('backToReadingList').addEventListener('click', loadPaperList);
  bindWordClicks(); bindSentenceSelection(); bindQuizOptions();
}

function bindQuizOptions() {
  document.querySelectorAll('.q-opt-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.querySelectorAll('.q-opt-btn').forEach(b => { b.disabled = true; b.classList.remove('selected','correct','wrong'); });
      this.classList.add('selected');
      const chosenAnswer = this.dataset.answer;
      const qDiv = this.closest('.quiz-question-item');
      const secIdx = parseInt(qDiv.dataset.sec);
      const qIdx = parseInt(qDiv.dataset.q);
      const section = currentPaper.sections[secIdx];
      let correctAnswer = null;
      if (section && section.questions && section.questions[qIdx]) correctAnswer = section.questions[qIdx].answer ? section.questions[qIdx].answer.trim()[0] : null;
      const fb = document.getElementById('q-fb-'+secIdx+'-'+qIdx);
      if (!fb) return;
      fb.style.display = 'block';
      if (correctAnswer && chosenAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
        this.classList.add('correct');
        fb.innerHTML = '<span style="color:green;">✓ 正确！</span> <button class="btn-sm" style="margin-left:0.5rem;font-size:0.75rem;padding:0.2rem 0.5rem;" onclick="explainQuestion('+secIdx+','+qIdx+')">💡 解析</button>';
      } else {
        this.classList.add('wrong');
        parent.querySelectorAll('.q-opt-btn').forEach(b => { if (b.dataset.answer.toUpperCase() === (correctAnswer||'').toUpperCase()) b.classList.add('correct'); });
        fb.innerHTML = '<span style="color:red;">✗ 错误，正确答案是 '+correctAnswer+'</span> <button class="btn-sm" style="margin-left:0.5rem;font-size:0.75rem;padding:0.2rem 0.5rem;" onclick="explainQuestion('+secIdx+','+qIdx+')">💡 解析</button>';
      }
    });
  });
}

async function explainQuestion(secIdx, qi) {
  const sec = currentPaper.sections[secIdx];
  const q = sec.questions[qi];
  const fb = document.getElementById('q-fb-'+secIdx+'-'+qi);
  if (!fb) return;
  fb.innerHTML = '<span style="color:var(--text-muted);">🤖 AI 解析中...</span>';
  const data = await API.post('/api/reading/explain', { passage: sec.passage||'', question: q.question, options: q.options, answer: q.answer });
  fb.innerHTML = '<div class="result-box" style="margin-top:0.3rem;font-size:0.85rem;">'+(data.explanation ? data.explanation.replace(/\n/g,'<br>') : '解析失败')+'</div>';
}

function bindWordClicks() {
  document.querySelectorAll('.clickable-word').forEach(wordEl => {
    wordEl.addEventListener('click', function(e) {
      e.stopPropagation();
      const word = this.textContent.replace(/[^a-zA-Z-]/g, '');
      if (!word || word.length < 2) { hideTooltip(); return; }
      const lm = lookupLocalWord(word);
      if (lm) showTooltip(e, word, lm.meaning, lm.phonetic);
      else { showTooltip(e, word, '查询中...'); lookupWordFromServer(word).then(r => updateTooltip(word, r)); }
    });
  });
}

function bindSentenceSelection() {
  document.querySelectorAll('.reading-passage').forEach(passage => {
    passage.addEventListener('mouseup', function(e) {
      const sel = window.getSelection(); const text = sel.toString().trim();
      if (text && text.split(' ').length >= 3) {
        const box = document.getElementById('readingTranslateBox');
        if (box) {
          box.style.display = 'block';
          box.innerHTML = '<div class="translate-selected">"'+text.substring(0,100)+(text.length>100?'...':'')+'"</div><button class="btn-sm btn-primary" id="tsBtn">翻译选中句子</button><div id="selTrans"></div>';
          document.getElementById('tsBtn').addEventListener('click', async () => {
            const b = document.getElementById('tsBtn'); b.disabled = true; b.textContent = '翻译中...';
            const r = await API.post('/api/reading/translate', { text, type: 'sentence' });
            document.getElementById('selTrans').textContent = r.translation || r.error || '翻译失败';
            b.style.display = 'none';
          });
        }
      }
    });
  });
  document.addEventListener('click', function(e) { if (!e.target.closest('#readingTranslateBox') && !e.target.closest('.reading-passage')) { const b = document.getElementById('readingTranslateBox'); if (b) b.style.display = 'none'; } });
}

function lookupLocalWord(word) {
  const l = word.toLowerCase();
  if (typeof WORDS !== 'undefined') { const m = WORDS.find(w => w.word && w.word.toLowerCase()===l); if (m) return m; }
  if (typeof DEFAULT_CET6_WORDS !== 'undefined') { const m = DEFAULT_CET6_WORDS.find(w => w.word && w.word.toLowerCase()===l); if (m) return m; }
  return null;
}

async function lookupWordFromServer(word) {
  try { const r = await API.post('/api/reading/translate', { text: word, type: 'word' }); if (r.translation) return { meaning: r.translation }; } catch(e) {}
  return null;
}

function showTooltip(e, word, meaning, phonetic) {
  if (!wordTooltipEl) return;
  wordTooltipEl.innerHTML = '<div class="tt-word">'+word+'</div>'+(phonetic?'<div class="tt-phonetic">'+phonetic+'</div>':'')+'<div class="tt-meaning">'+meaning+'</div><button class="tt-add-btn" data-word="'+word+'" data-meaning="'+meaning+'">+ 加入生词本</button>';
  wordTooltipEl.style.display = 'block';
  const rect = e.target.getBoundingClientRect();
  wordTooltipEl.style.top = (rect.bottom + window.scrollY + 5) + 'px';
  wordTooltipEl.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - 260) + 'px';
  wordTooltipEl.querySelector('.tt-add-btn').addEventListener('click', function() {
    const ww = this.dataset.word; const mm = this.dataset.meaning;
    const wrongWords = getUserJson('wrongbook', []);
    if (!wrongWords.some(x => x.word === ww)) { wrongWords.push({ word: ww, meaning: mm, wrongTime: new Date().toISOString() }); setUserJson('wrongbook', wrongWords); if (typeof syncSingleKeyToServer === 'function') syncSingleKeyToServer('wrongbook'); }
    this.textContent = '✓ 已加入'; this.disabled = true;
  });
}

function updateTooltip(word, result) {
  if (!wordTooltipEl || wordTooltipEl.style.display === 'none') return;
  wordTooltipEl.querySelector('.tt-meaning').textContent = (result && result.meaning) ? result.meaning : '未找到释义';
}

function hideTooltip() { if (wordTooltipEl) wordTooltipEl.style.display = 'none'; }
document.addEventListener('click', function(e) { if (!e.target.closest('.clickable-word') && !e.target.closest('.word-tooltip')) hideTooltip(); });

async function handlePaperImport() {
  const input = document.createElement('input'); input.type = 'file'; input.accept = '.json';
  input.onchange = async (e) => {
    const file = e.target.files[0]; if (!file) return;
    try { const paperData = JSON.parse(await file.text()); const res = await API.post('/api/papers/import', paperData); if (res.error) { alert('导入失败: '+res.error); return; } alert('导入成功！'); loadPaperList(); } catch(e) { alert('JSON 解析失败'); }
  };
  input.click();
}

window.loadPaperList = loadPaperList;
window.initReading = initReading;
window.explainQuestion = explainQuestion;
