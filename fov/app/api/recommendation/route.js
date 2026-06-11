import { QUESTIONS } from '../../../lib/questions';
import { scoreAnswers, topReasons } from '../../../lib/scoring';
import { getEconomicSnapshot } from '../../../lib/economic-data';
import { buildPrompt } from '../../../lib/ai-prompt';

export const dynamic = 'force-dynamic';

// Privacy: this endpoint receives only anonymous option indexes (0-2 per
// question). No names, emails, amounts, or identifiers are accepted or stored.

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }

  const { answers } = body || {};
  if (!Array.isArray(answers) || answers.length !== QUESTIONS.length) {
    return json({ error: 'Expected 10 answers' }, 400);
  }

  const score = scoreAnswers(answers);
  const reasons = topReasons(score);
  const econ = await getEconomicSnapshot();

  let narrative = null;
  let source = 'built-in';

  if (process.env.ANTHROPIC_API_KEY) {
    narrative = await generateWithAI({ answers, score, reasons, econ });
    if (narrative) source = 'ai';
  }
  if (!narrative) {
    narrative = generateFallback({ score, econ });
  }

  return json({
    direction: score.direction,
    confidence: score.confidence,
    scores: { fixed: score.fixed, variable: score.variable },
    reasons,
    ...narrative,
    economy: econ,
    source,
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

// ---- AI generation (Anthropic API) ----------------------------------------

async function generateWithAI({ answers, score, reasons, econ }) {
  try {
    const answersSummary = QUESTIONS.map(
      (q, i) => `- ${q.label}: "${q.options[answers[i]].text}"`
    ).join('\n');

    const prompt = buildPrompt({ answersSummary, score, reasons, econ });

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: process.env.AI_MODEL || 'claude-sonnet-4-6',
        max_tokens: 700,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) throw new Error(`Anthropic API: ${res.status}`);

    const data = await res.json();
    const text = data.content?.[0]?.text || '';
    const match = text.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : text);

    if (!parsed.explanation) throw new Error('Missing explanation');
    return {
      explanation: parsed.explanation,
      economicNote: parsed.economicNote || '',
      reminder: parsed.reminder || REMINDER,
    };
  } catch (err) {
    console.error('AI generation failed, using built-in engine:', err.message);
    return null;
  }
}

// ---- Built-in deterministic engine (no API key required) -------------------

const REMINDER =
  'This is educational guidance only. Please speak with a licensed mortgage professional before making any mortgage decision — your full financial picture, qualification, and lender policies all matter.';

function generateFallback({ score, econ }) {
  const explanations = {
    Fixed: `Based on your answers, a fixed-rate mortgage may be the better fit for you right now. You told us you value predictability — knowing exactly what your payment will be each month. A fixed rate locks in your rate for the full term, so changes at the Bank of Canada won't affect what you pay. That peace of mind tends to matter most for borrowers in your situation, even if a variable rate could potentially cost less over time.`,
    Variable: `Based on your answers, a variable-rate mortgage may be worth a serious look. You showed comfort with some risk, room in your budget to absorb payment changes, and an interest in benefiting if rates drop. Variable rates move with your lender's prime rate, and they historically come with much smaller penalties if you sell, refinance, or break your mortgage early — flexibility that matched several of your answers.`,
    Balanced: `Your answers point in both directions — some favour the certainty of a fixed rate, while others favour the flexibility and potential savings of a variable rate. That's common, and it's not a bad place to be. It may be worth exploring middle-ground options too, like a shorter fixed term or a hybrid (part fixed, part variable) mortgage. A conversation with a mortgage professional will help sort out which factors matter most to you.`,
  };

  const economicNote = `As of ${econ.asOf}, the Bank of Canada policy rate is ${econ.policyRate.value} and prime is ${econ.primeRate.value}, with the 5-year Government of Canada bond yield around ${econ.bond5y.value}. Fixed mortgage rates generally follow bond yields, while variable rates move with prime. ${econ.outlook.value}`;

  return {
    explanation: explanations[score.direction],
    economicNote,
    reminder: REMINDER,
  };
}
