import { notFound } from 'next/navigation';
import { getGuide, GuideArticle, guideMetadata, guideParams } from '../../../guide-pages';

type GuidePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideParams('pt-PT');
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  return guideMetadata('pt-PT', slug);
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide('pt-PT', slug);
  if (!guide) notFound();
  return <GuideArticle language="pt-PT" guide={guide} />;
}
