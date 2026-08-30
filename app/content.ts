import rawLocales from './site-locales.json';

export type SiteSection = 'home' | 'support' | 'privacy' | 'terms';

export type SiteMessages = Record<string, string>;

export type ScreenshotCopy = {
  position: number;
  headline: string;
  supporting: string;
};

export type LocaleContent = {
  locale: string;
  language: string;
  direction: 'ltr' | 'rtl';
  appName: string;
  subtitle: string;
  tagline: string;
  promotionalText: string;
  description: string;
  screenshots: ScreenshotCopy[];
  messages: SiteMessages;
};

export const locales = rawLocales as Record<string, LocaleContent>;
export const supportedLocales = Object.keys(locales).sort();

export function isSupportedLocale(value: string): value is keyof typeof locales {
  return Object.hasOwn(locales, value);
}

export function localeContent(locale: string): LocaleContent {
  return locales[locale] ?? locales['en-US'];
}

export function sectionPath(locale: string, section: SiteSection): string {
  return section === 'home' ? `/${locale}` : `/${locale}/${section}`;
}

export function languageAlternates(section: SiteSection): Record<string, string> {
  return Object.fromEntries(
    supportedLocales.map((locale) => [locale, `https://partmirror.com${sectionPath(locale, section)}`]),
  );
}
