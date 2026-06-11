# FOV — Fix or Variable Mortgage Guide

iOS-style web app that helps Canadian mortgage borrowers answer 10 quick questions and get an instant, educational recommendation: **Fixed**, **Variable**, or **Balanced** — with confidence level, reasons, and a plain-English explanation tied to today's rate environment.

**Privacy by design:** no names, emails, phone numbers, income amounts, or mortgage amounts are collected. Answers live in browser `sessionStorage` only and are never written to a database.

## Stack

- Next.js 14 (App Router) + React 18
- No CSS framework — single iOS-style design system in `app/globals.css`
- One API route (`/api/recommendation`) for scoring + AI narrative
- Live Bank of Canada data via the free Valet API (no key needed)

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## AI recommendations (optional)

The app works out of the box with a built-in deterministic recommendation engine. To enable AI-written recommendations:

1. Copy `.env.example` to `.env.local`
2. Add your Anthropic API key: `ANTHROPIC_API_KEY=sk-ant-...`

If the AI call fails for any reason, the app automatically falls back to the built-in engine — users always get a result. The prompt template lives in `lib/ai-prompt.js`. To swap providers (OpenAI, Gemini), replace `generateWithAI()` in `app/api/recommendation/route.js`.

## Economic data

| Data point | Status | Source |
|---|---|---|
| BoC policy rate | ✅ LIVE | Bank of Canada Valet API (`V39079`) |
| Prime rate | ✅ LIVE | Valet API (`V80691311`) |
| 5-yr GoC bond yield | ✅ LIVE | Valet API (`BD.CDN.5YR.DQ.YLD`) |
| Inflation trend | 🔌 Placeholder — ready for API integration | Suggested: StatsCan WDS |
| Employment trend | 🔌 Placeholder — ready for API integration | Suggested: StatsCan LFS |
| General outlook | 🔌 Placeholder — ready for API integration | Suggested: BoC MPR summary |

All placeholders are in `lib/economic-data.js`, clearly marked with `TODO` comments and `isPlaceholder: true` flags. Live fetches are cached 1 hour and fall back to labelled sample values if the feed is down.

## Deploy

### Vercel (recommended)

1. Push this folder to a GitHub repo
2. [vercel.com/new](https://vercel.com/new) → import the repo → Deploy (zero config needed)
3. Optional: add `ANTHROPIC_API_KEY` under Project → Settings → Environment Variables

### Netlify

1. Push to GitHub → [app.netlify.com](https://app.netlify.com) → Add new site → Import
2. Netlify auto-detects Next.js. Add env vars under Site configuration → Environment variables.

### Replit

Import the repo, set the run command to `npm run dev`, add `ANTHROPIC_API_KEY` in Secrets.

## Custom domain

### Vercel
1. Buy your domain (e.g. `fixorvariable.ca`) at any registrar — Namecheap, GoDaddy, or directly through Vercel
2. Project → Settings → Domains → Add → enter your domain
3. At your registrar, point DNS:
   - Apex (`fixorvariable.ca`): `A` record → `76.76.21.21`
   - `www`: `CNAME` → `cname.vercel-dns.com`
4. SSL is issued automatically within minutes

### Netlify
1. Site configuration → Domain management → Add custom domain
2. Either switch nameservers to Netlify DNS, or add a `CNAME` to `<yoursite>.netlify.app`
3. HTTPS auto-provisions via Let's Encrypt

## Project structure

```
fov/
├── app/
│   ├── layout.js                  # Root layout + metadata
│   ├── globals.css                # iOS-style design system
│   ├── page.js                    # Landing screen
│   ├── quiz/page.js               # 10-question flow + progress bar
│   ├── results/page.js            # Result screen + loading animation + share
│   └── api/recommendation/route.js # Scoring + economic data + AI narrative
├── components/Footer.js           # Privacy statement + disclaimer
└── lib/
    ├── questions.js               # 10 questions with fixed/variable points
    ├── scoring.js                 # Direction + confidence logic
    ├── economic-data.js           # BoC live feeds + labelled placeholders
    └── ai-prompt.js               # AI prompt template
```

## Scoring logic

Each answer adds 0–2 points to fixed and/or variable suitability. Direction: fixed if `fixed − variable ≥ 3`, variable if `≤ −3`, otherwise balanced. Confidence: High (margin ≥ 8), Medium (≥ 5), Low otherwise.

## Disclaimer

This tool is for educational guidance only and does not constitute mortgage, financial, legal, or investment advice. Mortgage suitability depends on your full financial situation, lender policies, qualification, and market conditions. Please speak with a licensed mortgage professional before making any mortgage decision.
