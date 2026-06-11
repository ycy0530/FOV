import './globals.css';

export const metadata = {
  title: 'FOV — Fix or Variable Mortgage Guide',
  description:
    'Answer 10 quick questions and get an instant, educational read on whether a fixed or variable mortgage rate may suit you better. Built for Canadian borrowers. No personal data stored.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f2f2f7',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body>
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
