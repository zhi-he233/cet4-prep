const test = require('node:test');
const assert = require('node:assert/strict');
const { prepareSegments, normalizeAssessment, assessmentToText } = require('../lib/assessment');

const submitted = [
  { chinese: '第一句。', english: 'First.' },
  { chinese: '第二句。', english: '' },
  { chinese: '第三句。', english: 'Third.' }
];
const body = { chinese: submitted.map((item) => item.chinese).join(''), segments: submitted };
const resultFor = (id, score) => ({ id, score, issues: ['**拼写错误**'], suggestions: ['使用 `people`'], reference: '**Reference.**' });

test('空白中间段保留编号，旧客户端仍可按整段评分', () => {
  const segments = prepareSegments(body);
  assert.deepEqual(segments.map((item) => [item.id, item.english]), [[1, 'First.'], [2, ''], [3, 'Third.']]);
  assert.equal(prepareSegments({ chinese: '一句。', translation: 'One.' })[0].english, 'One.');
  assert.throws(() => prepareSegments({ ...body, segments: submitted.slice(1) }), /不一致/);
  assert.throws(() => prepareSegments({ chinese: '空。', translation: ' ' }), /至少一段/);
});

test('按编号对应AI结果，空白段零分，总分为均分，并清除Markdown', () => {
  const assessment = normalizeAssessment(JSON.stringify({ summary: '**继续练习**', segments: [resultFor(3, 12), resultFor(1, 6), resultFor(2, 10)] }), prepareSegments(body));
  assert.deepEqual(assessment.segments.map((item) => item.score), [6, 0, 12]);
  assert.equal(assessment.totalScore, 6);
  assert.equal(assessment.segments[1].english, '');
  assert.match(assessment.segments[1].issues[0], /未翻译/);
  assert.doesNotMatch(assessmentToText(assessment), /\*\*|`/);
  assert.match(assessmentToText(assessment), /第3段：12\/15分/);
});

test('拒绝缺段、重复编号、非法分数及不完整批改', () => {
  const segments = prepareSegments(body);
  for (const results of [
    [resultFor(1, 6)],
    [resultFor(1, 6), resultFor(1, 8), resultFor(3, 10)],
    [resultFor(1, 99), resultFor(2, 0), resultFor(3, 10)],
    [resultFor(1, '6'), resultFor(2, 0), resultFor(3, 10)],
    [{ ...resultFor(1, 6), reference: '' }, resultFor(2, 0), resultFor(3, 10)]
  ]) assert.throws(() => normalizeAssessment(JSON.stringify({ segments: results }), segments));
});
