import { notFound } from 'next/navigation';
import { isSupportedLocale } from '../../../content';
import { defaultGuideLocale, getGuide, guideEdition, guideLocales } from '../../../guide-catalog';
import { GuideArticle, guideMetadata } from '../../../guide-pages';

type ArticleProps = { params: Promise<{ entry: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideLocales.filter((locale) => locale !== defaultGuideLocale).flatMap((locale) =>
    guideEdition(locale).guides.map(({ slug }) => ({ entry: locale, slug })),
  );
}

async function article(params: ArticleProps['params']) {
  const { entry: locale, slug } = await params;
  if (!isSupportedLocale(locale) || locale === defaultGuideLocale) notFound();
  const guide = getGuide(locale, slug);
  if (!guide) notFound();
  return { locale, guide };
}

export async function generateMetadata({ params }: ArticleProps) {
  const { locale, guide } = await article(params);
  return guideMetadata(locale, guide);
}

export default async function LocalizedGuideArticle({ params }: ArticleProps) {
  return <GuideArticle {...await article(params)} />;
}
