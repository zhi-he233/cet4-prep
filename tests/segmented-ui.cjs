const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const port = 8091;
const base = `http://localhost:${port}`;
const source = '如今，社交媒体已深度融入人们的日常生活。过度依赖网络也带来了注意力分散等问题。因此，保持理性使用已经成为重要课题。';
const outputDir = path.join(__dirname, '..', 'uploads', 'assessment-check');
fs.mkdirSync(outputDir, { recursive: true });

async function main() {
  const server = spawn(process.execPath, ['server.js'], {
    cwd: path.join(__dirname, '..'), env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe']
  });
  let browser;
  try {
    await new Promise((resolve, reject) => {
      server.once('error', reject);
      server.once('exit', (code) => reject(new Error(`Test server exited: ${code}`)));
      server.stdout.once('data', resolve);
    });
    browser = await chromium.launch({ channel: 'msedge', headless: true });
    const context = await browser.newContext({ serviceWorkers: 'block', viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    let submitted;
    let fail = false;
    await page.route('**/api/translate/random?*', (route) => route.fulfill({ json: { sentence: source } }));
    await page.route('**/api/translate/evaluate', async (route) => {
      submitted = route.request().postDataJSON();
      if (fail) return route.fulfill({ status: 502, json: { error: 'AI评分格式不完整，请重新评分。你的输入已保留。' } });
      const scores = [6, 0, 12];
      const segments = submitted.segments.map((segment, index) => ({
        ...segment, score: scores[index], maxScore: 15,
        issues: [index === 1 ? '本段未翻译。' : '**拼写错误** <img src=x onerror=alert(1)>'],
        suggestions: ['将 `pepole` 改成 people。'], reference: `**Reference ${index + 1}.**`
      }));
      return route.fulfill({ json: {
        evaluation: '综合得分：6/15分',
        assessment: { version: 1, totalScore: 6, maxScore: 15, summary: '**注意信息完整度**', segments }
      } });
    });
    await page.goto(base);
    await page.waitForSelector('.segment-translation-input');
    assert.equal(await page.locator('.segment-translation-input').count(), 3);
    await page.locator('.segment-translation-input').nth(0).fill('Now, social media changes life.');
    await page.locator('.segment-translation-input').nth(2).fill('We should use the internet rationally.');
    await page.click('#evaluateTranslationBtn');
    await page.waitForSelector('.segment-feedback:not([hidden])');
    assert.equal(submitted.segments[1].english, '');
    assert.match(submitted.segments[2].english, /rationally/);
    assert.equal(await page.locator('.segment-feedback:not([hidden])').count(), 3);
    assert.match(await page.locator('#segment-feedback-1').innerText(), /0 \/ 15 分/);
    assert.match(await page.locator('#segment-feedback-2').innerText(), /12 \/ 15 分/);
    assert.doesNotMatch(await page.locator('#tab-translate').innerText(), /\*\*|`/);
    assert.equal(await page.locator('.segment-feedback img').count(), 0);
    assert.equal(await page.locator('#fallbackInputSection').isVisible(), false);
    assert.match(await page.locator('#translateResult').innerText(), /6 \/ 15 分/);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.screenshot({ path: path.join(outputDir, 'mobile.png'), fullPage: true });
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.screenshot({ path: path.join(outputDir, 'desktop.png'), fullPage: true });

    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('local_cet4_translateHistory')));
    assert.equal(stored[0].assessment.segments[1].english, '');
    const roundTrip = await page.evaluate((records) => normalizeHistoryRecords(records), stored);
    assert.equal(roundTrip[0].assessment.totalScore, 6);
    await page.locator('[data-tab="history"]').click();
    await page.locator('button:has-text("查看对比")').first().click();
    assert.equal(await page.locator('.segment-feedback:not([hidden])').count(), 3);
    assert.equal(await page.locator('.segment-translation-input').nth(1).inputValue(), '');
    assert.match(await page.locator('.segment-translation-input').nth(2).inputValue(), /rationally/);
    await page.locator('.segment-translation-input').first().fill('Edited translation.');
    assert.equal(await page.locator('.segment-feedback:not([hidden])').count(), 0);
    fail = true;
    await page.click('#evaluateTranslationBtn');
    await page.waitForFunction(() => document.getElementById('translateResult').textContent.includes('格式不完整'));
    assert.equal(await page.locator('.segment-translation-input').first().inputValue(), 'Edited translation.');
    assert.equal(await page.locator('#evaluateTranslationBtn').isEnabled(), true);

    await page.evaluate(() => {
      const records = getTranslateHistory();
      records.push({ chinese: '旧题。', english: 'Old.', evaluation: '**得分：** 5/15\n**建议：** 继续练习。', time: new Date().toISOString() });
      saveTranslateHistory(getCurrentUserId(), records);
      showTranslateHistory();
    });
    await page.locator('[data-tab="history"]').click();
    await page.locator('button:has-text("查看对比")').first().click();
    assert.doesNotMatch(await page.locator('#translateReviewPanel').innerText(), /\*\*/);
    assert.deepEqual(errors, []);
    console.log('Browser checks passed: segment alignment, blank segment, inline feedback, safe plain text, history round trip, edits, failures, legacy records, mobile layout.');

    if (process.env.CHECK_LIVE_AI === '1') {
      const segments = [
        { chinese: '阅读可以帮助学生扩大词汇量。', english: 'Reading can help students expand their vocabulary.' },
        { chinese: '它也能培养独立思考的能力。', english: '' },
        { chinese: '许多学校鼓励每天阅读。', english: 'Many schools encourage students to read every day.' }
      ];
      const response = await context.request.post(`${base}/api/translate/evaluate`, {
        data: { level: 'cet4', chinese: segments.map((item) => item.chinese).join(''), segments }, timeout: 90000
      });
      const data = await response.json();
      assert.equal(response.status(), 200, data.error);
      assert.equal(data.assessment.segments.length, 3);
      assert.equal(data.assessment.segments[1].score, 0);
      assert.equal(data.assessment.segments[1].english, '');
      assert.doesNotMatch(data.evaluation, /\*\*|`/);
      console.log(`Live DeepSeek check passed: ${data.assessment.segments.map((item) => item.score).join(', ')}; average ${data.assessment.totalScore}/15.`);
    }
  } finally {
    if (browser) await browser.close();
    server.kill();
    if (server.exitCode === null) await new Promise((resolve) => server.once('exit', resolve));
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
