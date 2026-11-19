import type { Metadata } from 'next';
import { languageAlternates } from './content';
import { SiteContent } from './site-content';

const title = 'Hair Parting Guide App for iPhone';
const description = 'Use a live camera guide to line up a straight middle part or try a left or right side part. Save and compare your looks on a compatible iPhone.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/', languages: languageAlternates('home') },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'PartMirror',
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'PartMirror hair parting guide app' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
};

export default function HomePage() {
  return <SiteContent locale="en-US" section="home" />;
}
