import type { Metadata } from 'next';
import { languageAlternates } from '../content';
import { SiteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of the PartMirror iPhone app.',
  alternates: { canonical: '/terms', languages: languageAlternates('terms') },
};

export default function TermsPage() {
  return <SiteContent locale="en-US" section="terms" />;
}
