import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isSupportedLocale, languageAlternates, localeContent, supportedLocales } from '../content';
import { SiteContent } from '../site-content';

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  const content = localeContent(locale);
  return {
    title: content.appName,
    description: content.promotionalText,
    alternates: { canonical: `/${locale}`, languages: languageAlternates('home') },
  };
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  return <SiteContent locale={locale} section="home" />;
}
