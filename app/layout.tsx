import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'XYFlow Interactive Nodes Fix',
  description: 'Minimal repro for @xyflow/react interactive-nodes fix',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
