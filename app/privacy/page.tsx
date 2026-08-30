import type { Metadata } from 'next';
import { languageAlternates } from '../content';
import { SiteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PartMirror protects camera, tracking, photo, and video privacy.',
  alternates: { canonical: '/privacy', languages: languageAlternates('privacy') },
};

export default function PrivacyPage() {
  return <SiteContent locale="en-US" section="privacy" />;
}
