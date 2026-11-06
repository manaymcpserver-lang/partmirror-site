import { notFound } from 'next/navigation';
import { defaultGuideLocale, guideEdition, guideForEntry, guideLocales } from '../../guide-catalog';
import { GuideArticle, GuideIndex, guideMetadata } from '../../guide-pages';

type EntryProps = { params: Promise<{ entry: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...guideLocales.filter((locale) => locale !== defaultGuideLocale).map((locale) => ({ entry: locale })),
    ...guideEdition(defaultGuideLocale).guides.map(({ slug }) => ({ entry: slug })),
  ];
}

export async function generateMetadata({ params }: EntryProps) {
  const { entry } = await params;
  const page = guideForEntry(entry);
  if (!page) notFound();
  return guideMetadata(page.locale, page.guide);
}

export default async function GuideEntry({ params }: EntryProps) {
  const { entry } = await params;
  const page = guideForEntry(entry);
  if (!page) notFound();
  return page.guide ? <GuideArticle {...page} guide={page.guide} /> : <GuideIndex locale={page.locale} />;
}
