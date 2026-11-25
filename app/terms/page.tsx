import type { Metadata } from 'next';
import { languageAlternates, sectionPath } from '../content';
import { SiteContent } from '../site-content';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of the PartMirror iPhone app.',
  alternates: { canonical: sectionPath('en-US', 'terms'), languages: languageAlternates('terms') },
};

export default function TermsPage() {
  return <SiteContent locale="en-US" section="terms" />;
}
