import type { Metadata } from 'next';
import { languageAlternates, sectionPath } from '../content';
import { SiteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PartMirror protects camera, tracking, photo, and video privacy.',
  alternates: { canonical: sectionPath('en-US', 'privacy'), languages: languageAlternates('privacy') },
};

export default function PrivacyPage() {
  return <SiteContent locale="en-US" section="privacy" />;
}
