export default function Footer() {
  return (
    <footer className="footer">
      <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>
        Created by Norris Yu ·{' '}
        <a
          href="https://www.norrisyumortgage.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent)', textDecoration: 'none' }}
        >
          norrisyumortgage.com
        </a>
      </p>
      <p style={{ marginTop: 10 }}>
        <strong>No personal information is collected or stored.</strong> Your
        answers stay in your browser for this session only. If you choose to
        email yourself your results, your email is used once to send them and
        is not saved to any database.
      </p>
      <p style={{ marginTop: 10 }}>
        Disclaimer: This tool is for educational guidance only and does not
        constitute mortgage, financial, legal, or investment advice. Mortgage
        suitability depends on your full financial situation, lender policies,
        qualification, and market conditions. Please speak with a licensed
        mortgage professional before making any mortgage decision.
      </p>
    </footer>
  );
}
