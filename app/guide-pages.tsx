import type { Metadata } from 'next';
import Link from 'next/link';
import { AppStoreBadge } from './app-store-badge';
import { localeContent } from './content';
import { guides, type Guide } from './guide-content';
import { guidesPt } from './guide-content-pt';
import { SiteFooter, SiteHeader } from './site-content';

const editions = {
  en: {
    locale: 'en-US', path: '/guides/', guides,
    title: 'Hair Parting Guides',
    description: 'Learn to make a straight middle part, try a side part, or change your part with simple techniques you can use at home.',
    brand: 'PartMirror guides', language: 'Read in Portuguese',
    questions: 'Common questions', sources: 'Further reading', more: 'More hair parting guides',
    download: 'Check your part with PartMirror',
    downloadText: 'Use the live guide to line up your part, then compare saved looks on a compatible iPhone.',
  },
  'pt-PT': {
    locale: 'pt-PT', path: '/guides/pt-PT/', guides: guidesPt,
    title: 'Guias para fazer a risca no cabelo',
    description: 'Aprende a fazer uma risca direita ao meio, a experimentar a risca ao lado e a mudar a risca em casa.',
    brand: 'Guias PartMirror', language: 'Ler em inglês',
    questions: 'Perguntas frequentes', sources: 'Para saber mais', more: 'Mais guias sobre a risca do cabelo',
    download: 'Confere a tua risca com o PartMirror',
    downloadText: 'Alinha a risca com a guia em tempo real e compara os looks que guardaste num iPhone compatível.',
  },
};

export type GuideLanguage = keyof typeof editions;

function otherLanguage(language: GuideLanguage): GuideLanguage {
  return language === 'en' ? 'pt-PT' : 'en';
}

export function guidePath(language: GuideLanguage, slug?: string) {
  return slug ? `${editions[language].path}${slug}/` : editions[language].path;
}

export function guideParams(language: GuideLanguage) {
  return editions[language].guides.map(({ slug }) => ({ slug }));
}

export function getGuide(language: GuideLanguage, slug: string) {
  return editions[language].guides.find((guide) => guide.slug === slug);
}

function counterpartSlug(language: GuideLanguage, slug: string) {
  const guide = getGuide(language, slug);
  return editions[otherLanguage(language)].guides.find((item) => item.topic === guide?.topic)?.slug;
}

export function guideMetadata(language: GuideLanguage, slug?: string): Metadata {
  const edition = editions[language];
  const guide = slug ? getGuide(language, slug) : undefined;
  const { title, description } = guide ?? edition;
  const url = guidePath(language, slug);
  const other = otherLanguage(language);
  const alternative = guidePath(other, slug ? counterpartSlug(language, slug) : undefined);

  return {
    title,
    description,
    alternates: { canonical: url, languages: { [language]: url, [other]: alternative } },
    openGraph: { title, description, url, type: guide ? 'article' : 'website', siteName: 'PartMirror' },
  };
}

function GuideFrame({ language, children }: { language: GuideLanguage; children: React.ReactNode }) {
  const content = localeContent(editions[language].locale);
  return (
    <main lang={language}>
      <SiteHeader content={content} />
      {children}
      <SiteFooter content={content} />
    </main>
  );
}

function LanguageLink({ language, slug }: { language: GuideLanguage; slug?: string }) {
  const other = otherLanguage(language);
  return (
    <Link className="guide-language" href={guidePath(other, slug ? counterpartSlug(language, slug) : undefined)} hrefLang={other}>
      {editions[language].language}
    </Link>
  );
}

export function GuideIndex({ language }: { language: GuideLanguage }) {
  const edition = editions[language];
  return (
    <GuideFrame language={language}>
      <div className="document-page">
        <header className="document-hero guide-hero">
          <p className="eyebrow">{edition.brand}</p>
          <h1>{edition.title}</h1>
          <p>{edition.description}</p>
          <LanguageLink language={language} />
        </header>
        <ul className="guide-list">
          {edition.guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={guidePath(language, guide.slug)}>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </GuideFrame>
  );
}

export function GuideArticle({ language, guide }: { language: GuideLanguage; guide: Guide }) {
  const edition = editions[language];
  return (
    <GuideFrame language={language}>
      <article className="document-page">
        <header className="document-hero guide-hero">
          <p className="eyebrow"><Link href={edition.path}>{edition.brand}</Link></p>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <LanguageLink language={language} slug={guide.slug} />
        </header>
        <div className="guide-body">
          {guide.sections.map(({ heading, paragraphs }) => (
            <section key={heading}>
              <h2>{heading}</h2>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section>
            <h2>{edition.questions}</h2>
            {guide.faqs.map(({ question, answer }) => (
              <div className="guide-answer" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </section>
          {guide.sources?.length ? (
            <section>
              <h2>{edition.sources}</h2>
              <ul className="guide-links">
                {guide.sources.map(({ label, url }) => <li key={url}><a href={url}>{label}</a></li>)}
              </ul>
            </section>
          ) : null}
          <aside className="guide-download" aria-labelledby="guide-download-title">
            <h2 id="guide-download-title">{edition.download}</h2>
            <p>{edition.downloadText}</p>
            <AppStoreBadge locale={edition.locale} />
          </aside>
          <nav aria-labelledby="related-guides-title">
            <h2 id="related-guides-title">{edition.more}</h2>
            <ul className="guide-links">
              {edition.guides.filter((item) => item.slug !== guide.slug).map((item) => (
                <li key={item.slug}><Link href={guidePath(language, item.slug)}>{item.title}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </GuideFrame>
  );
}
