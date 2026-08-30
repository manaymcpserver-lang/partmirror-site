import type { Metadata } from 'next';
import { languageAlternates } from '../content';
import { SiteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help with PartMirror camera guides, captures, My Looks, and privacy.',
  alternates: { canonical: '/support', languages: languageAlternates('support') },
};

export default function SupportPage() {
  return <SiteContent locale="en-US" section="support" />;
}
