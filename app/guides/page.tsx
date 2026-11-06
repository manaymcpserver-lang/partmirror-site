import { GuideIndex, guideMetadata } from '../guide-pages';

export const metadata = guideMetadata('en');

export default function GuidesPage() {
  return <GuideIndex language="en" />;
}
