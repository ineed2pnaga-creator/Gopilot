import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Base Auto-Sell Trading Agent',
  description: 'Rule-based auto-sell trading bot for Base network',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}