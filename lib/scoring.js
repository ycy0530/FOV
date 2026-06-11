import { QUESTIONS } from './questions';

// answers: array of option indexes, one per question (in QUESTIONS order).
export function scoreAnswers(answers) {
  let fixed = 0;
  let variable = 0;
  const tags = { fixed: [], variable: [] };

  QUESTIONS.forEach((q, i) => {
    const opt = q.options[answers[i]];
    if (!opt) return;
    fixed += opt.f;
    variable += opt.v;
    if (opt.f > opt.v) tags.fixed.push(opt.tag);
    else if (opt.v > opt.f) tags.variable.push(opt.tag);
  });

  const diff = fixed - variable;
  const margin = Math.abs(diff);

  let direction = 'Balanced';
  if (diff >= 3) direction = 'Fixed';
  else if (diff <= -3) direction = 'Variable';

  let confidence = 'Low';
  if (margin >= 8) confidence = 'High';
  else if (margin >= 5) confidence = 'Medium';
  if (direction === 'Balanced') confidence = margin >= 2 ? 'Medium' : 'Low';

  return { fixed, variable, diff, direction, confidence, tags };
}

// Top 3–5 reasons supporting the recommended direction (or both sides if balanced).
export function topReasons(score) {
  if (score.direction === 'Fixed') return score.tags.fixed.slice(0, 5);
  if (score.direction === 'Variable') return score.tags.variable.slice(0, 5);
  const mixed = [];
  const max = Math.max(score.tags.fixed.length, score.tags.variable.length);
  for (let i = 0; i < max && mixed.length < 5; i++) {
    if (score.tags.fixed[i]) mixed.push(score.tags.fixed[i]);
    if (score.tags.variable[i] && mixed.length < 5) mixed.push(score.tags.variable[i]);
  }
  return mixed.slice(0, 5);
}
