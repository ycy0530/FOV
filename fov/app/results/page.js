'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Footer from '../../components/Footer';

const LOADING_MESSAGES = [
  'Reading your answers…',
  'Checking today’s Canadian rate environment…',
  'Writing your recommendation…',
];

const BADGE = {
  Fixed: { cls: 'badge-fixed', icon: '🔒', title: 'Fixed Rate Direction' },
  Variable: { cls: 'badge-variable', icon: '📈', title: 'Variable Rate Direction' },
  Balanced: { cls: 'badge-balanced', icon: '⚖️', title: 'Balanced — Worth a Closer Look' },
};

const CONFIDENCE_LEVEL = { Low: 1, Medium: 2, High: 3 };

export default function Results() {
  const router = useRouter();
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [msgIndex, setMsgIndex] = useState(0);
  const fetched = useRef(false);

  useEffect(() => {
    const raw = sessionStorage.getItem('fov_answers');
    if (!raw) {
      router.replace('/');
      return;
    }
    if (fetched.current) return;
    fetched.current = true;

    const ticker = setInterval(
      () => setMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length),
      1800
    );

    fetch('/api/recommendation', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ answers: JSON.parse(raw) }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('Request failed'))))
      .then(setResult)
      .catch(() => setError('Something went wrong generating your result. Please try again.'))
      .finally(() => clearInterval(ticker));

    return () => clearInterval(ticker);
  }, [router]);

  async function share() {
    const text = `FOV — Fix or Variable Mortgage Guide\nMy result: ${result.direction} (${result.confidence} confidence)\n\nEducational guidance only. Try it yourself:`;
    const url = window.location.origin;
    if (navigator.share) {
      try { await navigator.share({ title: 'FOV — Fix or Variable', text, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      alert('Result copied to clipboard');
    }
  }

  if (error) {
    return (
      <main className="loader-wrap">
        <p className="subtitle">{error}</p>
        <Link href="/quiz" className="btn btn-primary" style={{ maxWidth: 240 }}>Retake Quiz</Link>
      </main>
    );
  }

  if (!result) {
    return (
      <main className="loader-wrap">
        <div className="spinner" />
        <div>
          <h2 className="h2">Building your result</h2>
          <p className="subtitle mt-8" style={{ fontSize: 15 }}>{LOADING_MESSAGES[msgIndex]}</p>
        </div>
      </main>
    );
  }

  const badge = BADGE[result.direction] || BADGE.Balanced;
  const level = CONFIDENCE_LEVEL[result.confidence] || 1;
  const liveData = !result.economy.policyRate.isPlaceholder;

  return (
    <main className="stack" style={{ flex: 1 }}>
      {/* Hero result card — designed to be screenshot-shareable */}
      <div className="card center">
        <span className={`result-badge ${badge.cls}`}>
          <span>{badge.icon}</span> {result.direction.toUpperCase()}
        </span>
        <h1 className="h2 mt-16">{badge.title}</h1>
        <p className="subtitle mt-8" style={{ fontSize: 15 }}>
          Based on your 10 answers and today&apos;s rate environment
        </p>

        <div className="mt-24" style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span className="caption" style={{ fontWeight: 700 }}>CONFIDENCE</span>
            <span className="caption" style={{ fontWeight: 700, color: 'var(--accent)' }}>{result.confidence}</span>
          </div>
          <div className="confidence-meter">
            {[1, 2, 3].map((n) => (
              <div key={n} className={`confidence-pill${n <= level ? ' on' : ''}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="card">
        <h2 className="h2">Why this direction</h2>
        <div className="mt-8">
          {result.reasons.map((reason, i) => (
            <div className="reason-row" key={i}>
              <span className="reason-num">{i + 1}</span>
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Plain-English explanation */}
      <div className="card">
        <h2 className="h2">In plain English</h2>
        <p className="mt-8" style={{ fontSize: 15, color: 'var(--text)' }}>{result.explanation}</p>
      </div>

      {/* Rate environment */}
      <div className="card">
        <h2 className="h2">Today&apos;s rate environment</h2>
        <div className="mt-8">
          <div className="econ-row">
            <span>Bank of Canada policy rate</span>
            <span className="econ-value">{result.economy.policyRate.value}</span>
          </div>
          <div className="econ-row">
            <span>Prime rate</span>
            <span className="econ-value">{result.economy.primeRate.value}</span>
          </div>
          <div className="econ-row">
            <span>5-year GoC bond yield</span>
            <span className="econ-value">{result.economy.bond5y.value}</span>
          </div>
          <div className="econ-row">
            <span>Inflation trend</span>
            <span className="econ-value" style={{ fontSize: 13 }}>{result.economy.inflation.value}</span>
          </div>
          <div className="econ-row">
            <span>Employment trend</span>
            <span className="econ-value" style={{ fontSize: 13 }}>{result.economy.employment.value}</span>
          </div>
        </div>
        <p className="caption mt-16">{result.economicNote}</p>
        <p className="caption mt-8">
          {liveData
            ? `Rates sourced live from the Bank of Canada (as of ${result.economy.asOf}).`
            : 'Sample rate data shown — live Bank of Canada feed unavailable.'}
        </p>
      </div>

      {/* Next step */}
      <div className="card center" style={{ background: 'var(--accent-soft)', boxShadow: 'none' }}>
        <p style={{ fontSize: 15, fontWeight: 600 }}>{result.reminder}</p>
      </div>

      <button className="btn btn-primary" onClick={share}>Share My Result</button>
      <Link href="/quiz" className="btn btn-ghost">Retake the Quiz</Link>

      <Footer />
    </main>
  );
}
