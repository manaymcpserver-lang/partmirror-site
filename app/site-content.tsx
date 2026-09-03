import Image from 'next/image';
import Link from 'next/link';
import { LanguageSwitcher } from './language-switcher';
import {
  localeContent,
  locales,
  sectionPath,
  supportedLocales,
  type LocaleContent,
  type SiteSection,
} from './content';

const appleEulaUrl = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

function Header({ content, section }: { content: LocaleContent; section: SiteSection }) {
  const m = content.messages;
  const locale = content.locale;
  const options = supportedLocales.map((key) => ({ locale: key, language: locales[key].language }));

  return (
    <header className="site-header">
      <Link className="brand" href={sectionPath(locale, 'home')} aria-label={`PartMirror — ${m.navHome}`}>
        <Image src="/partmirror-icon.png" alt="" width={42} height={42} priority />
        <span>PartMirror</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link className={section === 'support' ? 'active' : ''} href={sectionPath(locale, 'support')}>{m.navSupport}</Link>
        <Link className={section === 'privacy' ? 'active' : ''} href={sectionPath(locale, 'privacy')}>{m.navPrivacy}</Link>
        <Link className={section === 'terms' ? 'active' : ''} href={sectionPath(locale, 'terms')}>{m.navTerms}</Link>
        <LanguageSwitcher
          currentLocale={locale}
          currentSection={section}
          label={m.languageLabel}
          options={options}
        />
      </nav>
    </header>
  );
}

function Footer({ content }: { content: LocaleContent }) {
  const m = content.messages;
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image src="/partmirror-icon.png" alt="" width={32} height={32} />
        <span>PartMirror</span>
      </div>
      <p>© 2026 PartMirror. {m.footerRights}</p>
      <div>
        <Link href={sectionPath(content.locale, 'support')}>{m.navSupport}</Link>
        <Link href={sectionPath(content.locale, 'privacy')}>{m.navPrivacy}</Link>
        <Link href={sectionPath(content.locale, 'terms')}>{m.navTerms}</Link>
      </div>
    </footer>
  );
}

function Home({ content }: { content: LocaleContent }) {
  const m = content.messages;
  const features = [content.screenshots[1], content.screenshots[3], content.screenshots[4]];
  const screenshotPath = (position: number) =>
    `/screenshots/${content.locale}/screenshot-${String(position).padStart(2, '0')}.jpg`;

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{m.eyebrow}</p>
          <h1>{m.headlineOne}<br />{m.headlineTwo}</h1>
          <p className="lede">{content.promotionalText}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#how-it-works">{m.ctaHow}</a>
            <Link className="text-link" href={sectionPath(content.locale, 'support')}>{m.ctaSupport} <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-product" aria-hidden="true">
          <div className="hero-shot hero-shot-left">
            <Image src={screenshotPath(4)} alt="" width={480} height={1044} priority />
          </div>
          <div className="hero-shot hero-shot-main">
            <Image src={screenshotPath(1)} alt="" width={480} height={1044} priority />
          </div>
          <div className="hero-shot hero-shot-right">
            <Image src={screenshotPath(6)} alt="" width={480} height={1044} priority />
          </div>
        </div>
      </section>

      <section className="product-showcase" id="how-it-works" aria-labelledby="showcase-title">
        <div className="showcase-heading">
          <p className="eyebrow">PartMirror · iPhone</p>
          <h2 id="showcase-title">{content.tagline}</h2>
          <p>{content.promotionalText}</p>
        </div>
        <div className="showcase-grid">
          {content.screenshots.map((shot) => (
            <article className="showcase-card" key={shot.position}>
              <div className="showcase-image">
                <Image
                  src={screenshotPath(shot.position)}
                  alt={`${shot.headline}. ${shot.supporting}`}
                  width={480}
                  height={1044}
                />
              </div>
              <div className="showcase-copy">
                <span>{String(shot.position).padStart(2, '0')}</span>
                <div>
                  <h3>{shot.headline}</h3>
                  <p>{shot.supporting}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-strip" aria-label={m.ctaHow}>
        {features.map((feature, index) => (
          <article key={feature.position}>
            <span className="feature-number">0{index + 1}</span>
            <h2>{feature.headline}</h2>
            <p>{feature.supporting}</p>
          </article>
        ))}
      </section>

      <section className="privacy-callout">
        <span className="privacy-dot" aria-hidden="true" />
        <div>
          <h2>{m.localTitle}</h2>
          <p>{m.localBody}</p>
        </div>
        <Link href={sectionPath(content.locale, 'privacy')}>{m.navPrivacy} <span>↗</span></Link>
      </section>
    </>
  );
}

const supportFaqKeys = [
  ['faqCompatibilityQ', 'faqCompatibilityA'],
  ['faqCameraQ', 'faqCameraA'],
  ['faqGuideQ', 'faqGuideA'],
  ['faqLooksQ', 'faqLooksA'],
  ['faqMirrorQ', 'faqMirrorA'],
  ['faqDeleteQ', 'faqDeleteA'],
  ['faqAdsQ', 'faqAdsA'],
  ['faqPrivacyQ', 'faqPrivacyA'],
] as const;

const supportEmail = 'support@partmirror.com';

function Support({ content }: { content: LocaleContent }) {
  const m = content.messages;
  return (
    <div className="document-page support-page">
      <div className="document-hero">
        <p className="eyebrow">{m.supportEyebrow}</p>
        <h1>{m.supportTitle}</h1>
        <p>{m.supportIntro}</p>
      </div>
      <section className="contact-card">
        <span className="contact-icon" aria-hidden="true">@</span>
        <div>
          <h2>{m.contactTitle}</h2>
          <p><a href={`mailto:${supportEmail}`}>{m.contactPending}</a></p>
        </div>
      </section>
      <section className="faq-section">
        <h2>{m.faqTitle}</h2>
        <div className="faq-grid">
          {supportFaqKeys.map(([question, answer]) => (
            <article key={question}>
              <h3>{m[question]}</h3>
              <p>{m[answer]}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

const privacySections = [
  ['privacyCollectionTitle', 'privacyCollectionBody'],
  ['privacyCameraTitle', 'privacyCameraBody'],
  ['privacyFaceStorageTitle', 'privacyFaceStorageBody'],
  ['privacyFaceSharingTitle', 'privacyFaceSharingBody'],
  ['privacyMediaTitle', 'privacyMediaBody'],
  ['privacyPhotosTitle', 'privacyPhotosBody'],
  ['privacyRetentionTitle', 'privacyRetentionBody'],
  ['privacyAdsTitle', 'privacyAdsBody'],
  ['privacyPurchasesTitle', 'privacyPurchasesBody'],
  ['privacyChildrenTitle', 'privacyChildrenBody'],
  ['privacyChangesTitle', 'privacyChangesBody'],
  ['privacyContactTitle', 'privacyContactPending'],
] as const;

const termsSections = [
  ['termsLicenseTitle', 'termsLicenseBody'],
  ['termsGuidanceTitle', 'termsGuidanceBody'],
  ['termsContentTitle', 'termsContentBody'],
  ['termsSubscriptionTitle', 'termsSubscriptionBody'],
  ['termsUseTitle', 'termsUseBody'],
  ['termsDisclaimerTitle', 'termsDisclaimerBody'],
  ['termsChangesTitle', 'termsChangesBody'],
  ['termsContactTitle', 'termsContactPending'],
] as const;

function LegalDocument({ content, kind }: { content: LocaleContent; kind: 'privacy' | 'terms' }) {
  const m = content.messages;
  const isPrivacy = kind === 'privacy';
  const sections = isPrivacy ? privacySections : termsSections;
  return (
    <article className="document-page legal-page">
      <header className="document-hero">
        <p className="eyebrow">{isPrivacy ? m.privacyEyebrow : m.termsEyebrow}</p>
        <h1>{isPrivacy ? m.privacyTitle : m.termsTitle}</h1>
        <p className="effective-date">{m.effectiveDate}</p>
        <p>{isPrivacy ? m.privacyIntro : m.termsIntro}</p>
        {!isPrivacy && (
          <a className="legal-link" href={appleEulaUrl} target="_blank" rel="noreferrer">
            {m.appleEula} <span>↗</span>
          </a>
        )}
      </header>
      {content.locale !== 'en-US' && <p className="translation-note">{m.legalTranslationNote}</p>}
      <div className="legal-sections">
        {sections.map(([title, body], index) => (
          <section key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{m[title]}</h2>
              <p>
                {body === 'privacyContactPending' || body === 'termsContactPending' ? (
                  <a href={`mailto:${supportEmail}`}>{m[body]}</a>
                ) : m[body]}
              </p>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export function SiteContent({ locale, section }: { locale: string; section: SiteSection }) {
  const content = localeContent(locale);
  return (
    <main lang={content.locale} dir={content.direction}>
      <Header content={content} section={section} />
      {section === 'home' && <Home content={content} />}
      {section === 'support' && <Support content={content} />}
      {section === 'privacy' && <LegalDocument content={content} kind="privacy" />}
      {section === 'terms' && <LegalDocument content={content} kind="terms" />}
      <Footer content={content} />
    </main>
  );
}
