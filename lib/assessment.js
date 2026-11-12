function plainText(value) {
  return String(value ?? '').replace(/\*\*|__|`/g, '').replace(/^#{1,6}\s+/gm, '').trim();
}

function prepareSegments(body) {
  if (typeof body.chinese !== 'string' || !body.chinese.trim() || body.chinese.length > 5000) {
    throw new Error('请提供中文原文（最多5000字）');
  }
  const input = body.segments === undefined
    ? [{ chinese: body.chinese, english: body.translation }]
    : body.segments;
  if (!Array.isArray(input) || !input.length || input.length > 30) {
    throw new Error('请提供1-30个翻译句段');
  }
  const segments = input.map((item, index) => {
    if (!item || typeof item.chinese !== 'string' || !item.chinese.trim()
        || typeof item.english !== 'string' || item.english.length > 10000) {
      throw new Error('句段原文或英文翻译格式不正确');
    }
    return { id: index + 1, chinese: item.chinese.trim(), english: item.english.trim() };
  });
  if (segments.map((item) => item.chinese).join('').replace(/\s/g, '') !== body.chinese.replace(/\s/g, '')) {
    throw new Error('句段与中文原文不一致，请刷新后重试');
  }
  if (!segments.some((item) => item.english)) throw new Error('请输入至少一段英文翻译');
  return segments;
}

function normalizeAssessment(content, submitted) {
  const parsed = JSON.parse(content.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, ''));
  if (!Array.isArray(parsed.segments) || parsed.segments.length !== submitted.length) {
    throw new Error('AI返回的句段数量不匹配');
  }
  const ids = new Set(parsed.segments.map((item) => item?.id));
  if (ids.size !== submitted.length) throw new Error('AI返回了重复的句段编号');
  const segments = submitted.map((source) => {
    const result = parsed.segments.find((item) => item?.id === source.id);
    if (!result || typeof result.score !== 'number' || !Number.isFinite(result.score)
        || result.score < 0 || result.score > 15 || !plainText(result.reference)
        || !Array.isArray(result.issues) || !Array.isArray(result.suggestions)
        || [...result.issues, ...result.suggestions].some((item) => typeof item !== 'string')) {
      throw new Error('AI返回的句段评分格式不完整');
    }
    return {
      ...source,
      score: source.english ? Math.round(result.score * 10) / 10 : 0,
      maxScore: 15,
      issues: source.english ? result.issues.map(plainText).filter(Boolean) : ['本段未翻译，信息缺失。'],
      suggestions: result.suggestions.map(plainText).filter(Boolean),
      reference: plainText(result.reference)
    };
  });
  return {
    version: 1,
    totalScore: Math.round(segments.reduce((sum, item) => sum + item.score, 0) / segments.length * 10) / 10,
    maxScore: 15,
    summary: plainText(parsed.summary),
    segments
  };
}

function assessmentToText(assessment) {
  return [
    `综合得分：${assessment.totalScore}/15分（各段平均）`,
    assessment.summary,
    ...assessment.segments.map((item) => [
      `第${item.id}段：${item.score}/15分`,
      `中文原文：${item.chinese}`,
      `你的翻译：${item.english || '未翻译'}`,
      `主要问题：${item.issues.join('；') || '未发现明显问题'}`,
      `修改建议：${item.suggestions.join('；') || '保持当前表达'}`,
      `参考译文：${item.reference}`
    ].join('\n')),
    `标准翻译：${assessment.segments.map((item) => item.reference).join(' ')}`
  ].filter(Boolean).join('\n\n');
}

module.exports = { prepareSegments, normalizeAssessment, assessmentToText };
