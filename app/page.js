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
