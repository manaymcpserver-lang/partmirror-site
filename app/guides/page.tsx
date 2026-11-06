import { defaultGuideLocale } from '../guide-catalog';
import { GuideIndex, guideMetadata } from '../guide-pages';

export const metadata = guideMetadata(defaultGuideLocale);

export default function GuidesPage() {
  return <GuideIndex locale={defaultGuideLocale} />;
}
