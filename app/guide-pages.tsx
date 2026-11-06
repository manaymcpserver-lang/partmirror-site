import type { Metadata } from 'next';
import Link from 'next/link';
import { AppStoreBadge } from './app-store-badge';
import { localeContent } from './content';
import type { Guide } from './guide-content';
import { defaultGuideLocale, guideEdition, guideLocales, guidePath, guidePathForTopic } from './guide-catalog';
import { LanguageSwitcher } from './language-switcher';
import { SiteFooter, SiteHeader } from './site-content';

export function guideMetadata(locale: string, guide?: Guide): Metadata {
  const { title, description } = guide ?? guideEdition(locale).messages;
  const url = guidePath(locale, guide?.slug);
  const languages = Object.fromEntries(guideLocales.map((language) => [language, guidePathForTopic(language, guide?.topic)]));

  return {
    title,
    description,
    alternates: { canonical: url, languages: { ...languages, 'x-default': languages[defaultGuideLocale] } },
    openGraph: { title, description, url, type: guide ? 'article' : 'website', siteName: 'PartMirror' },
  };
}

function GuideFrame({ locale, children }: { locale: string; children: React.ReactNode }) {
  const content = localeContent(locale);
  return (
    <main lang={locale} dir={content.direction}>
      <SiteHeader content={content} />
      {children}
      <SiteFooter content={content} />
    </main>
  );
}

function GuideLanguagePicker({ locale, topic }: { locale: string; topic?: Guide['topic'] }) {
  const content = localeContent(locale);
  return (
    <div className="guide-language">
      <LanguageSwitcher
        currentLocale={locale}
        label={content.messages.languageLabel}
        options={guideLocales.map((language) => ({
          locale: language, language: localeContent(language).language, href: guidePathForTopic(language, topic),
        }))}
      />
    </div>
  );
}

export function GuideIndex({ locale }: { locale: string }) {
  const { messages, guides } = guideEdition(locale);
  return (
    <GuideFrame locale={locale}>
      <div className="document-page">
        <header className="document-hero guide-hero">
          <p className="eyebrow">{messages.brand}</p>
          <h1>{messages.title}</h1>
          <p>{messages.description}</p>
          <GuideLanguagePicker locale={locale} />
        </header>
        <ul className="guide-list">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={guidePath(locale, guide.slug)}>
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

export function GuideArticle({ locale, guide }: { locale: string; guide: Guide }) {
  const { messages, guides } = guideEdition(locale);
  return (
    <GuideFrame locale={locale}>
      <article className="document-page">
        <header className="document-hero guide-hero">
          <p className="eyebrow"><Link href={guidePath(locale)}>{messages.brand}</Link></p>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <GuideLanguagePicker locale={locale} topic={guide.topic} />
        </header>
        <div className="guide-body">
          {guide.sections.map(({ heading, paragraphs }) => (
            <section key={heading}>
              <h2>{heading}</h2>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section>
            <h2>{messages.questions}</h2>
            {guide.faqs.map(({ question, answer }) => (
              <div className="guide-answer" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </section>
          {guide.sources?.length ? (
            <section>
              <h2>{messages.sources}</h2>
              <ul className="guide-links">
                {guide.sources.map(({ label, url }) => <li key={url}><a href={url}>{label}</a></li>)}
              </ul>
            </section>
          ) : null}
          <aside className="guide-download" aria-labelledby="guide-download-title">
            <h2 id="guide-download-title">{messages.download}</h2>
            <p>{messages.downloadText}</p>
            <AppStoreBadge locale={locale} />
          </aside>
          <nav aria-labelledby="related-guides-title">
            <h2 id="related-guides-title">{messages.more}</h2>
            <ul className="guide-links">
              {guides.filter((item) => item.slug !== guide.slug).map((item) => (
                <li key={item.slug}><Link href={guidePath(locale, item.slug)}>{item.title}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </GuideFrame>
  );
}
