
Claude finished the response
anyway i can hide the "reel" post from my main grid profile on IG?

Jun 12
Yes — Instagram lets you do this in two ways:

Before posting: On the final "New reel" share screen, tap the toggle or option that says "Also share to feed" (or "Show on profile grid" depending on your app version) and turn it off. The reel will still appear in your Reels tab and in the Reels feed, just not on your main grid.

After posting: Open the reel → tap the three dots (•••) → tap "Remove from profile grid" (sometimes shown as "Manage" → remove from grid). The reel stays live in your Reels tab and keeps its views/likes — it just disappears from the main grid.

If you ever want it back, same three-dot menu → "Add to profile grid."

Handy for keeping your grid clean with just your polished mortgage/real estate content while still pushing reels for reach.

does it make sense to post reel for public and regular post for friends and families and separate it this way?

Jun 12

Synthesized Instagram strategy for segmented audience engagement
Synthesized Instagram strategy for segmented audience engagement
It makes sense in theory, but the way Instagram works makes it awkward in practice on a single account. A few things to consider:

The problem with mixing on one account: Reels and posts share the same audience controls — your account is either public or private as a whole. You can't make reels public while keeping feed posts followers-only on the same profile. The closest workaround is "Close Friends" for stories (and now some feed posts support close friends audiences), but it's clunky for regular grid posts and doesn't fit the "friends and family" use case well.

What most people in your position do instead: Run two accounts.

Public/professional account — reels and posts focused on mortgage and real estate content, optimized for reach, clean grid, clear brand. This is where your business content lives.
Private personal account — friends and family only, post whatever you want without thinking about how it looks to a prospective client or referral partner.
This split is pretty standard for realtors, brokers, and advisors, and it has real benefits beyond audience separation:

Algorithm clarity — Instagram learns what your account is "about." Mixing kid photos and rate updates confuses the signal and hurts your reach on the business content.
Professional optics — clients and referral partners checking you out see a focused, credible profile.
Privacy — your family content never accidentally reaches strangers through a viral reel.
If you really want one account: keep the grid professional, remove reels from the grid (like we just covered), and use Close Friends stories for the personal stuff. But honestly, the two-account setup is cleaner and less mental overhead long-term.

Given you're actively building a mortgage content presence, I'd lean toward making your current account the public business one and spinning up a small private account for personal posts.

i used Fable 5 to built me FOV mortagge web app for client to determine if they better fit fix or variable. but now the model is not available and i cannot continue the chat

9:27 AM
That's a frustrating spot to be in — Fable likely used a specific model version that's been deprecated or swapped out.

A few options:

To recover your work:

Check if Fable exported or saved your app's code anywhere (most no-code AI builders let you export HTML/JS or deploy to a link). If you have the deployed URL, the app itself may still work even if the chat is dead.
Look for a "View code" or "Export" button in Fable — grab whatever source code you can before it disappears.
To continue building:

If you can get the code out, just paste it here and I can pick up exactly where Fable left off. I can read, edit, and extend it natively.
If you can't export it, describe what the app does/looks like and I can rebuild it from scratch pretty quickly — a fixed vs. variable mortgage calculator is something I can build cleanly as a React artifact right here.
Rebuilding here has some advantages:

No dependency on a third-party AI builder's model availability
You own the code and can host it anywhere
I can add mortgage-specific logic like current rate assumptions, break-even analysis, prepayment penalty estimates, etc.
Do you still have access to the Fable project at all, or has the chat/session fully locked you out? And do you remember what features the app had?

i actually deployed the website already

9:27 AM
Oh then you're in good shape! The deployed site still works independently of Fable — the chat dying doesn't affect the live app at all.

The only thing you've lost is the ability to make changes through Fable's chat interface. So your options going forward:

If you want to edit/update the app:

Share the deployed URL here and I can look at it and recreate the full codebase from what I see
Or if Fable gave you any exported files, drop them here and I'll work from those
Either way I can take over as your "editor" going forward — no more Fable dependency
If the app is working as-is and you just need small tweaks:

Share the URL, tell me what you want changed, and I'll write you updated code you can redeploy (on Vercel, Netlify, GitHub Pages, wherever it's hosted)
If you want to start fresh with more features:

I can rebuild the fixed vs. variable FOV mortgage tool here as a React artifact, potentially better than what Fable produced — with things like:
Rate differential break-even calculator
Prepayment penalty comparison
BC-specific context (posted rates, prime, etc.)
Your Elite Lending / Team Elite branding
What's the situation — happy with the current app and just want to be able to edit it, or looking to level it up?

fixorvariable.com

this is what i wanna updated

got some feedback from clients and they think the questions are too generic, can we make it seem a bit sophistiacted and have some real life exmaples? what do you think

9:28 AM
Let me pull up the site first and see what we're working with.


Searched the web
Searched the web
I can see the structure. I can only see Q1 through the fetch, but I get the picture — the questions are pretty abstract (risk tolerance, comfort with uncertainty, etc.) which is exactly why clients find them generic.

Your clients' feedback makes total sense. Here's my thinking on how to fix it:

The problem with the current questions:

"How would you describe your comfort with financial risk?" — everyone thinks they're more risk tolerant than they actually are
Abstract answers like "I can handle moderate ups and downs" don't connect to real mortgage behaviour
The upgrade: anchor every question to a real dollar scenario

For example, instead of:

"How would you describe your comfort with financial risk?"

Replace with:

"Prime rate drops 0.50% and your variable payment goes down ~$150/month. Six months later it jumps back up $200/month. How do you feel?"

Relieved when it drops, stressed when it rises — I'd rather just know what I'm paying
I'd be fine — the average probably works out
I'd actually love this — I'd put the savings aside when rates drop
This makes the quiz feel like it was built by someone who actually does mortgages — not a generic finance quiz.

Can you share what all 10 questions currently are? The fetch only captured Q1. You can either paste them here or walk through the quiz and screenshot/copy them — then I'll rewrite all 10 with real-life scenarios and we can rebuild the whole thing.

but what about the coding and everything. argh

10:47 AM
Haha yeah fair — you don't want to rebuild the whole thing from scratch just to update some question text.

Here's the good news: since it's already deployed, the code exists somewhere. A few quick ways to get it:

Option 1 — View Page Source (easiest)

Go to fixorvariable.com
Right click → "View Page Source"
Copy all that code and paste it here
I'll make the question updates directly in the code and hand it back to you ready to redeploy
Option 2 — Check where it's hosted

Is it on Vercel, Netlify, GitHub Pages? Fable usually deploys to one of these
If it's Vercel or Netlify, you might still have a dashboard with the project files
You could download the files from there
Option 3 — Fable export

Go back into Fable even if the chat is dead — sometimes the project files are still accessible in the project settings or a "files" tab even when the AI chat is broken
Of those three, Option 1 is the fastest — just right click the page, copy the source, paste it here. Even if it's a React app it'll give me enough to work with or at least reverse-engineer the structure.

Which hosting platform did Fable deploy it to? That'll help narrow it down.

its hosted on vercel

10:48 AM
Perfect — Vercel makes this easy. A couple of options:

Option 1 — Pull the code from Vercel dashboard

Go to vercel.com → your project → "Source" tab
You should see all your files there — download or copy them
Option 2 — If it's connected to a GitHub repo (most likely)

Fable almost certainly pushed the code to a GitHub repo when it deployed to Vercel
Go to github.com and check your repos — look for something named fixorvariable or similar
If it's there, just share the repo link and I can see exactly what we're working with
Option 3 — View Source shortcut

Even without any of the above, just go to fixorvariable.com, right click → View Page Source, paste it here
For a quiz app this size it's probably all readable and I can work from that directly
The GitHub route is cleanest because then once I give you updated code, you just commit it and Vercel auto-deploys. No manual uploading needed.

Do you remember if Fable asked you to connect GitHub during the setup? Check your GitHub repos real quick — it's probably sitting right there.

where is the repo link for option 2

10:49 AM
Go to github.com → once you're logged in, look at the top right corner → click your profile picture → "Your repositories"

You should see a list of all your repos — look for one named something like fixorvariable or fov or whatever Fable named it.

Alternatively, the faster way:

From Vercel directly:

Go to vercel.com/dashboard
Click on your fixorvariable project
Look for a GitHub icon or "Connected Git Repository" link — it'll take you straight to the repo
Once you find it, just paste the GitHub URL here and I'll take a look at the code directly.

here?

https://github.com/ycy0530/FOV

10:50 AM
Yes, perfect — let me pull that up now.


Fetched: GitHub - ycy0530/FOV: Fix or variable rate.
Fetched: GitHub - ycy0530/FOV: Fix or variable rate.
Got it — Next.js 14 app, and the questions live in lib/questions.js. Let me grab that file directly.


Searched the web
Searched the web
Search didn't help — GitHub raw files need direct access. Easiest fix: can you just go to your GitHub repo, click into lib/questions.js, and paste the contents here?

Or even faster — go to:

https://github.com/ycy0530/FOV/blob/main/lib/questions.js
Click the file, then hit the "Raw" button at the top right, and copy/paste everything here.

Once I see the actual question text and scoring structure, I can rewrite all 10 questions with real-life BC mortgage scenarios, give you back the updated questions.js file, and you just replace it in GitHub → Vercel auto-deploys. That's it — no rebuilding anything.


// FOV questionnaire — 10 questions, 4 graded options each (V2). // Each option carries points toward fixed (f) and/or variable (v) suitability. export const QUESTIONS = [ { id: 'risk', label: 'Risk tolerance', text: 'How would you describe your comfort with financial risk?', opti

pasted

11:55 AM
Perfect, got the full file. The scoring structure is clean — I just need to rewrite the question text and option text to be more scenario-based while keeping all the f/v points and tag values exactly the same.

Here's my proposed rewrite for all 10 questions with real-life BC mortgage context:

Q1 — Risk tolerance

"Prime rate moves 0.75% in a single BoC announcement — your variable payment jumps ~$200/month overnight. Your reaction?"

Q2 — Payment changes

"Your neighbour locked in at 4.99% fixed. You're variable at 5.45% today but could be at 4.70% in 12 months — or 5.80%. How do you feel about that trade-off?"

Q3 — Mortgage knowledge

"When you hear 'prime minus 0.90%', do you know what that means for your actual payment?"

Q4 — Ownership timeline

"Be honest — how long are you actually staying in this home before selling or upsizing?"

Q5 — Income stability

"If rates rose $400/month tomorrow, would your income reliably cover it without touching savings?"

Q6 — Cash flow flexibility

"After your mortgage, property tax, strata (if applicable), groceries, childcare, and car payments — how much is left over monthly?"

Q7 — Rate-rise concern

"In 2022–2023, the BoC raised rates 10 times in 18 months. Variable holders saw payments spike $800–$1,200/month on a $700K mortgage. How would that have affected you?"

Q8 — Rate-drop outlook

"The BoC has already cut rates several times since 2024. Do you think there's more room to drop over your next 3–5 year term?"

Q9 — Certainty vs savings

"Historically, variable rate borrowers have saved money over fixed — but not always, and not without stress. What would you rather have: a guarantee, or a shot at savings?"

Q10 — Breaking early

"Fixed mortgage penalties can run $15,000–$30,000+ on a $700K mortgage if you break early. Variable penalties are typically just 3 months interest (~$3,000–$5,000). How certain are you about staying the full term?"

Want me to go ahead and write the updated questions.js with these? I'll keep every f, v, tag, and id value identical — just the displayed text changes. You drop the file into GitHub and Vercel redeploys automatically. Nothing else touches.

how about answers

12:02 PM
Good call — the answers need to match the new question tone or it feels off. Here's the full picture for all 10:

Q1 — Rate jump reaction

I'd be stressed and regret not locking in
I'd be uneasy but manage
I'd be fine — rates move both ways
I'd see it as temporary and stay the course
Q2 — Neighbour comparison

I'd take the fixed — I don't want to think about it
I'd lean fixed — the certainty is worth it
I'd probably go variable — the savings potential is real
Variable all day — I'll take the lower rate and ride it
Q3 — "Prime minus 0.90%"

No idea what that means
I know it's tied to the Bank of Canada somehow
Yes — I understand how prime moves and what it means for my payment
Yes — I follow BoC announcements and track rate cycles
Q4 — How long staying

Probably under 3 years — this is a stepping stone
3–5 years, then likely upsizing or moving
5–10 years, this feels like a medium-term home
This is our long-term home, 10+ years
Q5 — Income covers rate spike

No — it would be a real problem
It would be tight and stressful
Yes, with some adjustments
Easily — we have strong, stable dual income or job security
Q6 — Monthly buffer

Very little — most months are fully spoken for
A few hundred, but not much wiggle room
A comfortable cushion — maybe $500–$1,000 free
Plenty — cash flow is not a concern for us
Q7 — 2022–23 rate spike scenario

That would have been devastating — I can't absorb that
Really difficult — I'd have had to cut back significantly
Tough but manageable — I would have figured it out
Fine — I have the income and savings to handle it
Q8 — More BoC cuts coming?

Yes — I think rates will keep dropping and I want to benefit
Probably — I lean toward more cuts ahead
Not sure — could go either way from here
No — I think rates stay flat or even tick back up
Q9 — Guarantee vs savings shot

Give me the guarantee — I sleep better knowing the number
I lean toward certainty, but savings are tempting
I lean toward savings — some risk is fine
I want the savings potential, even if it comes with uncertainty
Q10 — Breaking early penalty

Very likely — job change, growing family, or life plans could shift things
Possibly — hard to predict that far out
Unlikely — I plan to see the full term through
Definitely not — our plans are set
Want me to now write the complete updated questions.js file with both the new question text and answer text, ready to drop straight into GitHub?

but how about the results? how does it tell users which term should they go with

12:03 PM
Good question — let me grab the results/scoring logic too so I understand the full picture.


Failed to fetch: https://github.com/ycy0530/FOV/blob/main/lib/scoring.js
Failed to fetch: https://github.com/ycy0530/FOV/blob/main/lib/scoring.js
Can you paste the contents of these two files the same way you did questions.js?

lib/scoring.js — how it calculates the result
app/results/page.js — what the user actually sees on the results screen
Just go to each file in your GitHub repo, hit Raw, and paste here. That'll give me the full picture of how the result is generated and displayed — then I can tell you if the result output also needs upgrading to match the new question tone, or if it's already solid.

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
Show more
12:04 PM
Good — scoring logic is clean and simple. Now can you paste app/results/page.js as well? That's the part the user actually sees — the result screen with the direction, confidence, reasons, and any AI narrative text.

Once I see that I'll have the complete picture and can tell you:

Whether the result output needs upgrading too
How the AI narrative in lib/ai-prompt.js ties into it
Can you grab both of those files?

import Link from 'next/link';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <main className="landing">
      <div className="app-icon">FOV</div>

      <div className="center">
        <h1 className="h1">FOV</h1>
        <p className="subtitle mt-8">Fix or Variable Mortgage Guide</p>
        <p className="caption mt-8">
          Created by Norris Yu, Mortgage Broker
        </p>
      </div>

      <div className="card center">
        <h2 className="h2">Fixed or variable?</h2>
        <p className="subtitle mt-8" style={{ fontSize: 16 }}>
          Answer 10 quick questions. Get an instant educational mortgage rate
          direction — written in plain English and matched to today&apos;s
          Canadian rate environment.
        </p>
        <Link href="/quiz" className="btn btn-primary mt-24">
          Start
        </Link>
        <p className="caption mt-16">Quick results in under 2 minutes</p>
      </div>

      <div className="trust-grid">
        <div className="trust-item"><span className="dot">🔒</span> No personal data stored</div>
        <div className="trust-item"><span className="dot">⚡️</span> Results in under 2 minutes</div>
        <div className="trust-item"><span className="dot">🎓</span> Educational guidance only</div>
        <div className="trust-item"><span className="dot">🇨🇦</span> Built for Canadian borrowers</div>
      </div>

      <Footer />
    </main>
  );
}
Show more
12:04 PM
That's the landing page — I need the results page specifically. Can you grab this file:

app/results/page.js
And also grab:

lib/ai-prompt.js
Those two will show me what the user sees after completing the quiz — the direction output, confidence level, reasons, and the AI-written narrative. That's the part that might also need upgrading to match the new question tone.


'use client'; import { useEffect, useRef, useState } from 'react'; import { useRouter } from 'next/navigation'; import Link from 'next/link'; import Footer from '../../components/Footer'; const LOADING_MESSAGES = [ 'Reading your answers…', 'Checking today’s Canadian rate environment…', 'Writ

pasted

12:05 PM
Now I have the full picture. The results page is actually well built — it shows:

Direction (Fixed / Variable / Balanced) with confidence level
Why this direction — the tags from each answer
In plain English — AI-written narrative
Live rate environment — BoC data
Next step reminder
The tags (reasons) are what need upgrading the most — right now they're generic like "You prefer predictability over potential upside". They should match the new scenario-based tone.

Can you also paste lib/ai-prompt.js? That's the AI narrative template — it probably needs a refresh too to reference the real-life scenarios. Then I'll write you all the updated files in one shot:

lib/questions.js — new scenario questions + answers
Updated tag text on every answer (the "Why this direction" reasons)
lib/ai-prompt.js — upgraded narrative prompt
That's literally all that needs to change. The scoring, results page, API route — all stays the same.

// AI prompt template for FOV recommendations.

export function buildPrompt({ answersSummary, score, reasons, econ }) {
  return `You are an educational assistant for FOV (Fix or Variable), a tool that helps Canadian mortgage borrowers understand whether a fixed-rate or variable-rate mortgage may suit them better. You are NOT giving financial advice — only plain-English educational guidance.

BORROWER PROFILE (from a 10-question quiz; no personal data collected):
${answersSummary}

SCORING RESULT:
- Direction: ${score.direction}
- Confidence: ${score.confidence}
- Fixed score: ${score.fixed} / Variable score: ${score.variable}

KEY FACTORS:
${reasons.map((r, i) => `${i + 1}. ${r}`).join('\n')}

CURRENT CANADIAN RATE ENVIRONMENT (as of ${econ.asOf}):
- Bank of Canada policy rate: ${econ.policyRate.value}${econ.policyRate.isPlaceholder ? ' (placeholder)' : ''}
- Prime rate: ${econ.primeRate.value}${econ.primeRate.isPlaceholder ? ' (placeholder)' : ''}
- 5-year GoC bond yield: ${econ.bond5y.value}${econ.bond5y.isPlaceholder ? ' (placeholder)' : ''}
- Inflation: ${econ.inflation.value} (placeholder)
- Employment: ${econ.employment.value} (placeholder)
- Outlook: ${econ.outlook.value}

TASK:
Write a recommendation for this borrower. Respond with ONLY valid JSON in this exact shape:
{
  "explanation": "3-5 short sentences in warm, plain English a first-time buyer would understand. Explain why the ${score.direction} direction fits their answers. No jargon without a quick explanation.",
  "economicNote": "2-3 sentences connecting today's Canadian rate environment to their situation. Mention that fixed rates track bond yields and variable rates track prime/the BoC policy rate.",
  "reminder": "1-2 sentences reminding them this is educational only and to speak with a licensed mortgage professional."
}

Rules:
- Canadian context only (Bank of Canada, prime rate, 5-year terms).
- Plain English, grade-8 reading level, warm and trustworthy tone.
- Never guarantee outcomes or predict rates with certainty.
- Do not invent numbers beyond those provided.`;
}
Show more
12:06 PM
Perfect — now I have everything. The AI prompt is actually solid, it just needs the answersSummary to reflect the new scenario-based answers so the narrative feels grounded.

Here's my plan — one clean update across 2 files only:

lib/questions.js — new scenario questions, answers, and upgraded tags
lib/ai-prompt.js — minor tweak to make the answersSummary more descriptive
The scoring, results page, API route, everything else — untouched.

Ready to write both files now?


Check skills directory
Check skills directory
Let me write both files now.


Created 2 files, read a file
Created 2 files, read a file
Both files are ready. Here's exactly what to do:

Step 1 — Replace the files in GitHub

Go to your repo → lib/questions.js → click the pencil ✏️ icon → select all → paste the new content → commit
Do the same for lib/ai-prompt.js
Step 2 — Vercel auto-deploys

Within ~60 seconds of committing, Vercel picks it up and redeploys automatically. No manual steps needed.
What changed and why:

questions.js — Every question now uses a real scenario. Q7 references the actual 2022–23 rate spike with real dollar amounts. Q10 mentions real penalty ranges ($15K–$30K fixed vs ~$3–5K variable). The answer tags (the "Why this direction" reasons on the results screen) are also rewritten to be specific and BC-relevant instead of generic.

ai-prompt.js — Added one key instruction: the AI now knows the quiz used real-life scenarios, so it'll reference specific factors (their income situation, how they reacted to the rate spike, their timeline) instead of writing a generic paragraph. The result narrative will feel like it was written for that specific person.


Questions
JS 

Ai prompt
JS 





Claude is AI and can make mistakes. Please double-check responses.
Ai prompt · JS
// AI prompt template for FOV recommendations.
 
export function buildPrompt({ answersSummary, score, reasons, econ }) {
  return `You are an educational assistant for FOV (Fix or Variable), a tool that helps Canadian mortgage borrowers understand whether a fixed-rate or variable-rate mortgage may suit them better. You are NOT giving financial advice — only plain-English educational guidance.
 
BORROWER PROFILE (from a 10-question scenario-based quiz; no personal data collected):
${answersSummary}
 
SCORING RESULT:
- Direction: ${score.direction}
- Confidence: ${score.confidence}
- Fixed score: ${score.fixed} / Variable score: ${score.variable}
 
KEY FACTORS DRIVING THIS RESULT:
${reasons.map((r, i) => `${i + 1}. ${r}`).join('\n')}
 
CURRENT CANADIAN RATE ENVIRONMENT (as of ${econ.asOf}):
- Bank of Canada policy rate: ${econ.policyRate.value}${econ.policyRate.isPlaceholder ? ' (placeholder)' : ''}
- Prime rate: ${econ.primeRate.value}${econ.primeRate.isPlaceholder ? ' (placeholder)' : ''}
- 5-year GoC bond yield: ${econ.bond5y.value}${econ.bond5y.isPlaceholder ? ' (placeholder)' : ''}
- Inflation: ${econ.inflation.value} (placeholder)
- Employment: ${econ.employment.value} (placeholder)
- Outlook: ${econ.outlook.value}
 
TASK:
Write a recommendation for this borrower. The quiz used real-life scenarios (e.g. how they would have handled the 2022–23 rate spike, penalty awareness, actual budget headroom) — so your explanation should feel grounded and specific, not generic. Respond with ONLY valid JSON in this exact shape:
{
  "explanation": "3–5 sentences in warm, plain English a first-time buyer would understand. Reference 1–2 of the specific scenario factors that drove this result (e.g. their income stability, how they reacted to the rate spike scenario, their timeline, or their budget cushion). Explain why the ${score.direction} direction fits their situation. No jargon without a quick explanation.",
  "economicNote": "2–3 sentences connecting today's Canadian rate environment to their situation. Mention that fixed rates track the 5-year Government of Canada bond yield, and variable rates track prime, which moves with the Bank of Canada policy rate. Be specific about the current rate environment where data is available.",
  "reminder": "1–2 sentences reminding them this is educational only and to speak with a licensed mortgage professional before making any mortgage decision."
}
 
Rules:
- Canadian context only (Bank of Canada, prime rate, 5-year terms, BC/Canadian market).
- Plain English, grade-8 reading level, warm and trustworthy tone.
- Never guarantee outcomes or predict rates with certainty.
- Do not invent numbers beyond those provided.
- Reference the borrower's actual scenario answers to make the explanation feel personal, not templated.`;
}
 
