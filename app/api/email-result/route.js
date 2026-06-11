// Emails the quiz result to the user (optional, consent-based) and sends a
// completion notification to the site owner.
//
// Privacy/CASL design:
// - The user's email is used once to send their result. It is NOT stored.
// - The owner notification includes the user's email ONLY if the user ticked
//   the follow-up consent checkbox. Otherwise the notification is anonymous.
//
// Requires RESEND_API_KEY (resend.com — free tier). Without it, this endpoint
// returns 503 and the results page shows a friendly message.

export const dynamic = 'force-dynamic';

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'norris.yu@elitelending.ca';
const FROM = process.env.EMAIL_FROM || 'FOV <onboarding@resend.dev>';

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return json({ error: 'Email is not configured yet.' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }

  const { email, consent, result } = body || {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }
  if (!result?.direction) {
    return json({ error: 'Missing result data.' }, 400);
  }

  const userSend = sendEmail({
    to: email,
    subject: `Your FOV Result: ${result.direction} Rate Direction`,
    html: userEmailHtml(result),
  });

  const ownerSend = sendEmail({
    to: NOTIFY_EMAIL,
    subject: `FOV quiz completed — ${result.direction} (${result.confidence} confidence)`,
    html: ownerEmailHtml(result, consent ? email : null),
  });

  const [userRes] = await Promise.allSettled([userSend, ownerSend]);

  if (userRes.status === 'rejected') {
    console.error('User email failed:', userRes.reason?.message);
    return json({ error: 'Could not send the email. Please try again.' }, 502);
  }
  return json({ ok: true });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

async function sendEmail({ to, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from: FROM, to: [to], subject, html }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend ${res.status}: ${text}`);
  }
  return res.json();
}

// ---- Email templates -------------------------------------------------------

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

function userEmailHtml(result) {
  const reasons = (result.reasons || [])
    .map((r) => `<li style="margin-bottom:6px;">${esc(r)}</li>`)
    .join('');
  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1c1c1e;">
    <h1 style="font-size:22px;">FOV — Fix or Variable Mortgage Guide</h1>
    <p style="font-size:16px;">Your result: <strong>${esc(result.direction)} rate direction</strong> (${esc(result.confidence)} confidence)</p>
    <h2 style="font-size:17px;">Why this direction</h2>
    <ol style="font-size:15px;padding-left:20px;">${reasons}</ol>
    <h2 style="font-size:17px;">In plain English</h2>
    <p style="font-size:15px;">${esc(result.explanation || '')}</p>
    <h2 style="font-size:17px;">Today's rate environment</h2>
    <p style="font-size:15px;">${esc(result.economicNote || '')}</p>
    <p style="font-size:14px;background:#e6ede2;padding:12px 16px;border-radius:10px;">${esc(result.reminder || '')}</p>
    <hr style="border:none;border-top:1px solid #e5e5ea;margin:24px 0;">
    <p style="font-size:12px;color:#8e8e93;">
      Created by Norris Yu · <a href="https://www.norrisyumortgage.com">norrisyumortgage.com</a><br><br>
      This tool is for educational guidance only and does not constitute mortgage,
      financial, legal, or investment advice. Mortgage suitability depends on your
      full financial situation, lender policies, qualification, and market
      conditions. Please speak with a licensed mortgage professional before making
      any mortgage decision. Your email was used once to send this result and has
      not been stored.
    </p>
  </div>`;
}

function ownerEmailHtml(result, userEmail) {
  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1c1c1e;">
    <h2 style="font-size:18px;">FOV quiz completed</h2>
    <p style="font-size:15px;">
      Result: <strong>${esc(result.direction)}</strong> · Confidence: <strong>${esc(result.confidence)}</strong><br>
      Scores — Fixed: ${esc(result.scores?.fixed ?? '?')} / Variable: ${esc(result.scores?.variable ?? '?')}
    </p>
    ${
      userEmail
        ? `<p style="font-size:15px;background:#eafbf0;padding:12px 16px;border-radius:10px;">
             ✅ <strong>Lead (consented to follow-up):</strong> ${esc(userEmail)}
           </p>`
        : `<p style="font-size:14px;color:#8e8e93;">User did not opt in to follow-up — no contact details shared.</p>`
    }
  </div>`;
}
