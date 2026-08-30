import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://partmirror.com'),
  title: {
    default: 'PartMirror — Your part, precisely placed',
    template: '%s — PartMirror',
  },
  description: 'A live, camera-guided hair parting tool for iPhone.',
  applicationName: 'PartMirror',
  openGraph: {
    type: 'website',
    siteName: 'PartMirror',
    title: 'PartMirror',
    description: 'Your part. Precisely placed.',
    url: 'https://partmirror.com',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'PartMirror — Your part. Precisely placed.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PartMirror',
    description: 'Your part. Precisely placed.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
