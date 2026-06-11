'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONS } from '../../lib/questions';
import Footer from '../../components/Footer';

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));

  const q = QUESTIONS[step];
  const progress = (step / QUESTIONS.length) * 100;

  function selectOption(optionIndex) {
    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);

    // brief pause so the selection state is visible, then advance
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        // Session-only storage in browser memory — never sent to a database.
        sessionStorage.setItem('fov_answers', JSON.stringify(next));
        router.push('/results');
      }
    }, 220);
  }

  function goBack() {
    if (step === 0) router.push('/');
    else setStep(step - 1);
  }

  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div className="quiz-header">
        <button className="btn-ghost" onClick={goBack}
          style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 16, fontWeight: 600, cursor: 'pointer', padding: 4 }}>
          ‹ Back
        </button>
        <span className="caption" style={{ fontWeight: 600 }}>
          {step + 1} of {QUESTIONS.length}
        </span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="card question-card mt-16" key={q.id}>
        <p className="caption" style={{ textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 700, color: 'var(--accent)' }}>
          {q.label}
        </p>
        <h2 className="h2 mt-8">{q.text}</h2>
        <div className="mt-16">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`option-btn${answers[step] === i ? ' selected' : ''}`}
              onClick={() => selectOption(i)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>

      <p className="caption center mt-16">
        🔒 No personal data stored — answers stay in your browser
      </p>

      <Footer />
    </main>
  );
}
