import type { MetadataRoute } from 'next';
import { sectionPath, supportedLocales, type SiteSection } from './content';

import { guideEdition, guideLocales, guidePath } from './guide-catalog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const sections: SiteSection[] = ['home', 'support', 'privacy', 'terms'];
  const localized = supportedLocales.flatMap((locale) =>
    sections.map((section) => ({
      url: `https://partmirror.com${sectionPath(locale, section)}`,
      lastModified: new Date('2026-10-07'),
      changeFrequency: section === 'home' ? ('monthly' as const) : ('yearly' as const),
      priority: section === 'home' ? 0.8 : 0.6,
    })),
  );
  const guideUrls = guideLocales.flatMap((language) => [
    { url: `https://partmirror.com${guidePath(language)}` },
    ...guideEdition(language).guides.map(({ slug }) => ({ url: `https://partmirror.com${guidePath(language, slug)}` })),
  ]);
  return [
    { url: 'https://partmirror.com', lastModified: new Date('2026-10-07'), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://partmirror.com/support', lastModified: new Date('2026-10-07'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://partmirror.com/privacy', lastModified: new Date('2026-10-07'), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://partmirror.com/privacy/android/', lastModified: new Date('2026-10-07'), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://partmirror.com/terms', lastModified: new Date('2026-10-07'), changeFrequency: 'yearly', priority: 0.8 },
    ...localized,
    ...guideUrls,
  ];
}
