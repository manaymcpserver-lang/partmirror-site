import type { Metadata } from 'next';
import { languageAlternates, sectionPath } from '../content';
import { SiteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help with PartMirror camera guides, captures, My Looks, and privacy.',
  alternates: { canonical: sectionPath('en-US', 'support'), languages: languageAlternates('support') },
};

export default function SupportPage() {
  return <SiteContent locale="en-US" section="support" />;
}
