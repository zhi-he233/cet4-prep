// ========== 阅读训练模块 ==========
let currentPaper = null;
let readingView = 'list';
let wordTooltipEl = null;

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
  html += '<button class="sub-tab-btn active" data-reading="papers">�� 真题试卷</button>';
  html += '<button class="sub-tab-btn" data-reading="articles">�� 每日阅读</button>';
  html += '</div>';
  html += '<div id="readingPapersView">';
  if (papers.length === 0) {
    html += '<div class="empty-state"><p>暂无试卷数据</p><p class="teach-hint">运行真题导入脚本后即可查看历年真题</p><button class="btn-primary" id="paperImportBtn">�� 导入试卷 JSON</button></div>';
  } else {
    html += '<div class="paper-list">';
    const levels = { cet4: '四级', cet6: '六级' };
    papers.forEach(p => {
      const sections = ['writing', 'reading', 'translation'].filter(t => (p.sections||[]).some(s => s.type === t));
      const sectionTags = sections.map(s => '<span class="section-tag section-'+s+'">' + (s==='writing'?'写作':s==='reading'?'阅读':'翻译') + '</span>').join('');
      html += '<div class="paper-card" data-id="'+p._id+'"><div class="paper-title">'+p.title+'</div><div class="paper-meta">'+(levels[p.level]||p.level)+' '+p.year+'年'+p.month+'月 第'+p.set+'套</div><div class="paper-tags">'+sectionTags+'</div></div>';
    });
    html += '</div>';
    html += '<button class="btn-secondary" id="paperImportBtn" style="margin-top:1rem;">�� 导入试卷 JSON</button>';
  }
  html += '</div>';
  html += '<div id="readingArticlesView" style="display:none;">';
  html += buildDailyArticlesHtml();
  html += '</div>';
  container.innerHTML = html;
  container.querySelectorAll('.reading-subnav .sub-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      container.querySelectorAll('.reading-subnav .sub-tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('readingPapersView').style.display = this.dataset.reading === 'papers' ? 'block' : 'none';
      document.getElementById('readingArticlesView').style.display = this.dataset.reading === 'articles' ? 'block' : 'none';
    });
  });
  container.querySelectorAll('.paper-card').forEach(card => {
    card.addEventListener('click', () => loadPaper(card.dataset.id));
  });
  container.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => loadDailyArticle(card.dataset.article));
  });
  const uploadBtn = document.getElementById('paperImportBtn');
  if (uploadBtn) uploadBtn.addEventListener('click', handlePaperImport);
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
    ai: { title: 'Artificial Intelligence in Daily Life', level: 'cet4', text: 'Artificial intelligence (AI) is no longer a concept confined to science fiction. It has quietly integrated into our daily routines, from the voice assistants on our phones to the recommendation algorithms that suggest what we should watch or buy next. While these technologies offer unprecedented convenience, they also raise important questions about privacy, employment, and human autonomy.\n\nMany experts believe that AI will fundamentally reshape the job market in the coming decade. Routine tasks that once required human labor are increasingly being automated. However, this transformation also creates new opportunities. Jobs in data science, AI ethics, and human-machine interaction are growing rapidly. The key challenge lies in ensuring that the benefits of AI are distributed fairly across society.\n\nOn a personal level, AI-powered tools have become indispensable for many people. Language learning apps use AI to personalize lessons, health apps analyze patterns to provide early warnings, and navigation systems optimize routes in real time. The question is no longer whether AI will change our lives, but how we can guide that change in a positive direction.' },
    climate: { title: 'Climate Change and Young People', level: 'cet4', text: 'Around the world, young people are emerging as powerful voices in the fight against climate change. From school strikes to social media campaigns, the younger generation is demanding action from governments and corporations. They argue that their future is at stake, and that the current pace of change is far too slow.\n\nThe concerns of young people are backed by scientific evidence. Rising global temperatures, extreme weather events, and declining biodiversity all point to an accelerating crisis. Yet many young activists report feeling frustrated by what they see as a lack of political will. They believe that short-term economic interests are being prioritized over long-term environmental sustainability.\n\nDespite these challenges, there are reasons for optimism. Renewable energy technologies are becoming cheaper and more efficient. More countries are committing to carbon neutrality goals. And perhaps most importantly, public awareness of environmental issues has never been higher. Young people are not just protesting, they are also innovating, creating sustainable businesses, and influencing the choices of their families and communities.' },
    reading: { title: 'The Lost Art of Deep Reading', level: 'cet6', text: 'In an era dominated by social media feeds, instant messaging, and bite-sized content, the practice of deep reading is becoming increasingly rare. Deep reading, the slow, immersive engagement with a text that allows for reflection and critical thinking, requires a kind of attention that our digital environment actively discourages.\n\nNeuroscientific research suggests that the brain processes information differently when reading on screens versus paper. Screen reading tends to encourage scanning and skimming, while paper reading facilitates deeper comprehension and retention. This has significant implications for education, where students are increasingly expected to read complex materials on digital devices.\n\nThe decline of deep reading affects not only academic performance but also our capacity for empathy. Studies have shown that reading literary fiction improves our ability to understand the mental states of others. When we rush through texts, we miss the nuanced emotional and psychological insights that great literature offers. Reclaiming the habit of deep reading may be one of the most important cultural challenges of our time.' },
    space: { title: 'China Space Exploration Journey', level: 'cet6', text: 'China space program has achieved a series of remarkable milestones in recent years, establishing the nation as a major power in space exploration. From the successful landing of the Chang lunar missions to the construction of the Tiangong space station, each achievement represents years of scientific research and technological innovation.\n\nThe significance of China space program extends beyond national pride. The technologies developed for space exploration often find applications in everyday life. Satellite systems improve weather forecasting, communications, and navigation. Materials science innovations from space research contribute to better consumer products. And the data collected from space missions advances our understanding of the universe.\n\nLooking ahead, China has ambitious plans for the future. These include missions to Mars, asteroid exploration, and continued development of the space station. The program also emphasizes international cooperation, with the space station being open to experiments from scientists around the world. As humanity reaches further into space, China is positioning itself as both a leader and a collaborator in this grand endeavor.' }
  };
  const article = articles[articleId];
  if (!article) return;
  currentPaper = null; readingView = 'article';
  const levels = { cet4: '四级', cet6: '六级' };
  const container = document.getElementById('readingContent');
  container.innerHTML = '<div class="reading-header"><button class="btn-secondary" id="backToReadingList">�� 返回列表</button><span class="article-level level-'+article.level+'">'+levels[article.level]+'</span><h2>'+article.title+'</h2></div><div class="reading-passage" id="readingPassage">'+article.text.split('\n\n').map(p => '<p>'+p.replace(/\n/g, '<br>').split(' ').map(w => '<span class="clickable-word">'+w+'</span>').join(' ')+'</p>').join('')+'</div><div id="readingTranslateBox" class="reading-translate-box" style="display:none;"></div>';
  document.getElementById('backToReadingList').addEventListener('click', loadPaperList);
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
  let html = '<div class="reading-header"><button class="btn-secondary" id="backToReadingList">�� 返回列表</button><h2>'+p.title+'</h2><div class="paper-meta">'+(levels[p.level]||p.level)+' '+p.year+'年'+p.month+'月 第'+(p.set||1)+'套</div></div>';
  if (p.sections) {
    p.sections.forEach((sec, idx) => {
      if (sec.type === 'listening') return;
      html += '<div class="paper-section"><h3 class="section-heading">'+sec.title+'</h3>';
      if (sec.passage) {
        html += '<div class="reading-passage" id="passage-'+idx+'">'+sec.passage.split(' ').map(w => '<span class="clickable-word">'+w+'</span>').join(' ')+'</div>';
      }
      if (sec.questions && sec.questions.length > 0) {
        html += '<div class="paper-questions">';
        sec.questions.forEach((q, qi) => {
          html += '<div class="quiz-question-item" data-sec="'+idx+'" data-q="'+qi+'"><div class="q-text">'+(qi+1)+'. '+q.question+'</div>';
          if (q.options && q.options.length > 0) {
            html += '<div class="q-options">';
            q.options.forEach(opt => {
              const letter = opt.substring(0, opt.indexOf(')') > -1 ? opt.indexOf(')') : 2);
              html += '<button class="q-opt-btn" data-answer="'+letter.trim()+'">'+opt+'</button>';
            });
            html += '</div>';
          }
          html += '<div class="q-feedback" id="q-fb-'+idx+'-'+qi+'" style="display:none;"></div></div>';
        });
        html += '</div>';
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
      if (section && section.questions && section.questions[qIdx]) {
        correctAnswer = section.questions[qIdx].answer ? section.questions[qIdx].answer.trim()[0] : null;
      }
      const fb = document.getElementById('q-fb-'+secIdx+'-'+qIdx);
      if (fb) {
        fb.style.display = 'block';
        if (correctAnswer && chosenAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
          this.classList.add('correct');
          fb.innerHTML = '<span style="color:green;">�� 正确！</span>';
        } else {
          this.classList.add('wrong');
          parent.querySelectorAll('.q-opt-btn').forEach(b => {
            if (b.dataset.answer.toUpperCase() === (correctAnswer||'').toUpperCase()) b.classList.add('correct');
          });
          fb.innerHTML = '<span style="color:red;">�� 错误，正确答案是 '+correctAnswer+'</span>';
        }
      }
    });
  });
}

function bindWordClicks() {
  document.querySelectorAll('.clickable-word').forEach(wordEl => {
    wordEl.addEventListener('click', function(e) {
      e.stopPropagation();
      const word = this.textContent.replace(/[^a-zA-Z-]/g, '');
      if (!word || word.length < 2) { hideTooltip(); return; }
      const localMatch = lookupLocalWord(word);
      if (localMatch) {
        showTooltip(e, word, localMatch.meaning, localMatch.phonetic);
      } else {
        showTooltip(e, word, '查询中...');
        lookupWordFromServer(word).then(result => { updateTooltip(word, result); });
      }
    });
  });
}

function bindSentenceSelection() {
  document.querySelectorAll('.reading-passage').forEach(passage => {
    passage.addEventListener('mouseup', function(e) {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      if (text && text.split(' ').length >= 3) {
        const box = document.getElementById('readingTranslateBox');
        if (box) {
          box.style.display = 'block';
          box.innerHTML = '<div class="translate-selected">\"' + text.substring(0, 100) + (text.length>100?'...':'') + '\"</div><button class="btn-sm btn-primary" id="translateSelectedBtn">翻译选中句子</button><div id="selectedTranslation"></div>';
          document.getElementById('translateSelectedBtn').addEventListener('click', async () => {
            const btn = document.getElementById('translateSelectedBtn');
            btn.disabled = true; btn.textContent = '翻译中...';
            const res = await API.post('/api/reading/translate', { text, type: 'sentence' });
            document.getElementById('selectedTranslation').textContent = res.translation || res.error || '翻译失败';
            btn.style.display = 'none';
          });
        }
      }
    });
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#readingTranslateBox') && !e.target.closest('.reading-passage')) {
      const box = document.getElementById('readingTranslateBox');
      if (box) box.style.display = 'none';
    }
  });
}

function lookupLocalWord(word) {
  const lower = word.toLowerCase();
  if (typeof WORDS !== 'undefined') {
    const match = WORDS.find(w => w.word && w.word.toLowerCase() === lower);
    if (match) return match;
  }
  if (typeof DEFAULT_CET6_WORDS !== 'undefined') {
    const match = DEFAULT_CET6_WORDS.find(w => w.word && w.word.toLowerCase() === lower);
    if (match) return match;
  }
  return null;
}

async function lookupWordFromServer(word) {
  try {
    const res = await API.post('/api/reading/translate', { text: word, type: 'word' });
    if (res.translation) return { meaning: res.translation };
  } catch (e) {}
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
    const w = this.dataset.word; const m = this.dataset.meaning;
    const wrongWords = getUserJson('wrongbook', []);
    if (!wrongWords.some(x => x.word === w)) {
      wrongWords.push({ word: w, meaning: m, wrongTime: new Date().toISOString() });
      setUserJson('wrongbook', wrongWords);
      syncSingleKeyToServer('wrongbook');
    }
    this.textContent = '�� 已加入'; this.disabled = true;
  });
}

function updateTooltip(word, result) {
  if (!wordTooltipEl || wordTooltipEl.style.display === 'none') return;
  if (result && result.meaning) wordTooltipEl.querySelector('.tt-meaning').textContent = result.meaning;
  else wordTooltipEl.querySelector('.tt-meaning').textContent = '未找到释义';
}

function hideTooltip() {
  if (wordTooltipEl) wordTooltipEl.style.display = 'none';
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.clickable-word') && !e.target.closest('.word-tooltip')) hideTooltip();
});

async function handlePaperImport() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    try {
      const paperData = JSON.parse(text);
      const res = await API.post('/api/papers/import', paperData);
      if (res.error) { alert('导入失败: ' + res.error); return; }
      alert('导入成功！'); loadPaperList();
    } catch (e) { alert('JSON 解析失败'); }
  };
  input.click();
}

window.loadPaperList = loadPaperList;
window.initReading = initReading;
