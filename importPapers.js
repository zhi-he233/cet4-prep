require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const db = require('./db');

const EXAM_BASE = path.join(process.env.USERPROFILE, 'Desktop', '【2026备考】英语四六级历年真题 + 四六级核心高频词汇表');

const SOURCES = [
  { level: 'cet4', base: path.join(EXAM_BASE, '大学生英语四级历年真题（已更新至2025年12月）', '【2013年-2025年12月】历年四级真题+答案解析+听力音频') },
  { level: 'cet6', base: path.join(EXAM_BASE, '大学生英语六级历年真题（已更新至2025年12月）', '【2013年-2025年12月】历年六级真题+答案解析+听力音频') }
];

function cleanPdfText(text) {
  return text
    .replace(/([a-zA-Z]) ([a-zA-Z])/g, '$1$2')
    .replace(/\n{2,}/g, '\n\n')
    .replace(/\n /g, '\n');
}

function parseYearMonth(dirName) {
  const m = dirName.match(/(\d{4})年(\d{2})月/);
  return m ? { year: parseInt(m[1]), month: parseInt(m[2]) } : { year: 0, month: 0 };
}

async function extractPaper(filePath) {
  const buf = fs.readFileSync(filePath);
  const data = await pdfParse(buf);
  return { pages: data.numpages, text: cleanPdfText(data.text) };
}

async function parseWithAI(text, level, title) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error('DEEPSEEK_API_KEY not set');

  const labels = { cet4: '四级', cet6: '六级' };
  const snippet = text.substring(0, 8000);

  const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: `你是${labels[level]}真题解析专家。请将真题文本解析为结构化JSON。要求识别各部分并提取阅读文章和题目。输出严格JSON，不要额外解释。格式：{"sections":[{"type":"writing|reading|translation","title":"...","passage":"...","questions":[{"question":"...","options":["A) ...","B) ..."],"answer":"A"}]}]}` },
        { role: 'user', content: `标题：${title}\n级别：${labels[level]}\n文本：\n${snippet}` }
      ],
      temperature: 0.3,
      max_tokens: 3000
    })
  });

  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  const json = await res.json();
  const content = json.choices[0].message.content;

  const match = content.match(/\{[\s\S]*\}/);
  if (match) {
    try { return JSON.parse(match[0]); } catch (e) { return { raw: content, error: e.message }; }
  }
  return { raw: content, error: 'no JSON found' };
}

async function importOnePdf(filePath, level, year, month, setNum) {
  const name = path.basename(filePath, '.pdf');
  const labels = { cet4: '四级', cet6: '六级' };
  const title = `${year}年${month}月${labels[level]}真题第${setNum}套`;

  console.log(`Processing: ${title}`);

  // Check if already exists
  const existing = await db.papers.findOne({ title });
  if (existing) {
    console.log(`  -> Already imported, skipping`);
    return { title, status: 'skipped' };
  }

  try {
    const extracted = await extractPaper(filePath);
    console.log(`  -> Extracted ${extracted.text.length} chars from ${extracted.pages} pages`);

    const parsed = await parseWithAI(extracted.text, level, title);
    console.log(`  -> AI parsed: ${parsed.sections ? parsed.sections.length + ' sections' : 'raw response'}`);

    if (parsed.sections && parsed.sections.length > 0) {
      await db.papers.insert({
        title, level, year, month, set: setNum,
        sections: parsed.sections,
        rawText: extracted.text.substring(0, 10000),
        createdAt: new Date()
      });
      console.log(`  -> SAVED to database`);
      return { title, status: 'imported', sections: parsed.sections.length };
    } else if (parsed.raw) {
      // Save raw for manual review
      await db.papers.insert({
        title, level, year, month, set: setNum,
        sections: [],
        rawText: extracted.text.substring(0, 10000),
        aiResponse: parsed.raw,
        createdAt: new Date()
      });
      console.log(`  -> Saved raw (AI parse failed, JSON: ${parsed.error || 'unknown'})`);
      return { title, status: 'raw_only' };
    }
  } catch (e) {
    console.error(`  -> ERROR: ${e.message}`);
    return { title, status: 'error', error: e.message };
  }
}

async function main() {
  console.log('========================================');
  console.log('  四六级真题批量导入工具');
  console.log('========================================\n');

  for (const source of SOURCES) {
    console.log(`Scanning: ${source.level.toUpperCase()}`);

    if (!fs.existsSync(source.base)) {
      console.log(`  Directory not found: ${source.base}`);
      continue;
    }

    const subDirs = fs.readdirSync(source.base).filter(d => d.match(/【\d{4}年\d{2}月】/));

    for (const dir of subDirs.slice(-4)) { // Last 4 periods (2 years)
      const { year, month } = parseYearMonth(dir);
      const dirPath = path.join(source.base, dir);
      const pdfFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.pdf') && f.includes('真题') && !f.includes('解析'));;

      for (const pdfFile of pdfFiles.slice(0, 1)) { // Only 1st set per period for demo
        const setMatch = pdfFile.match(/第(\d)套/);
        const setNum = setMatch ? parseInt(setMatch[1]) : 1;
        await importOnePdf(path.join(dirPath, pdfFile), source.level, year, month, setNum);
      }
    }
  }

  console.log('\nDone!');
  db.papers.find({}).sort({ year: -1 }).then(papers => {
    console.log(`Total papers in DB: ${papers.length}`);
    papers.forEach(p => console.log(`  ${p.title} - ${(p.sections||[]).length} sections`));
  });
}

main().catch(e => { console.error(e); process.exit(1); });
