import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  isSupportedLocale,
  languageAlternates,
  localeContent,
  supportedLocales,
  type SiteSection,
} from '../../content';
import { SiteContent } from '../../site-content';

const localizedSections = ['support', 'privacy', 'terms'] as const;
type LocalizedSection = (typeof localizedSections)[number];

function isLocalizedSection(value: string): value is LocalizedSection {
  return localizedSections.includes(value as LocalizedSection);
}

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) => localizedSections.map((section) => ({ locale, section })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isSupportedLocale(locale) || !isLocalizedSection(section)) return {};
  const content = localeContent(locale);
  const m = content.messages;
  const title = section === 'support' ? m.supportTitle : section === 'privacy' ? m.privacyTitle : m.termsTitle;
  const description = section === 'support' ? m.supportIntro : section === 'privacy' ? m.privacyIntro : m.termsIntro;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/${section}`,
      languages: languageAlternates(section as SiteSection),
    },
  };
}

export default async function LocalizedSectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;
  if (!isSupportedLocale(locale) || !isLocalizedSection(section)) notFound();
  return <SiteContent locale={locale} section={section} />;
}
