import { isSupportedLocale, supportedLocales } from './content';
import { guides, type Guide } from './guide-content';
import { guidesPt } from './guide-content-pt';
import translations from './guide-translations.json';

const english = {
  title: 'Hair Parting Guides',
  description: 'Learn to make a straight middle part, try a side part, or change your part with simple techniques you can use at home.',
  brand: 'PartMirror guides', nav: 'Hair guides',
  questions: 'Common questions', sources: 'Further reading', more: 'More hair parting guides',
  download: 'Check your part with PartMirror',
  downloadText: 'Use the live guide to line up your part, then compare saved looks on a compatible iPhone.',
};

const portuguese = {
  title: 'Guias para fazer a risca no cabelo',
  description: 'Aprende a fazer uma risca direita ao meio, a experimentar a risca ao lado e a mudar a risca em casa.',
  brand: 'Guias PartMirror', nav: 'Guias de cabelo',
  questions: 'Perguntas frequentes', sources: 'Para saber mais', more: 'Mais guias sobre a risca do cabelo',
  download: 'Confere a tua risca com o PartMirror',
  downloadText: 'Alinha a risca com a guia em tempo real e compara os looks que guardaste num iPhone compatível.',
};

type Edition = { messages: typeof english; guides: Guide[] };

export const defaultGuideLocale = 'en-US';
export const guideLocales = supportedLocales;

export function guideEdition(locale: string): Edition {
  if (locale.startsWith('en-')) return { messages: english, guides };
  if (locale === 'pt-PT') return { messages: portuguese, guides: guidesPt };
  if (!Object.hasOwn(translations, locale)) throw new Error(`Missing guide edition: ${locale}`);
  return (translations as Record<string, Edition>)[locale];
}

export function guidePath(locale: string, slug?: string) {
  const base = locale === defaultGuideLocale ? '/guides/' : `/guides/${locale}/`;
  return slug ? `${base}${slug}/` : base;
}

export function getGuide(locale: string, slug: string) {
  return guideEdition(locale).guides.find((guide) => guide.slug === slug);
}

export function guideForEntry(entry: string) {
  if (entry !== defaultGuideLocale && isSupportedLocale(entry)) return { locale: entry };
  const guide = getGuide(defaultGuideLocale, entry);
  return guide ? { locale: defaultGuideLocale, guide } : undefined;
}

export function guidePathForTopic(locale: string, topic?: Guide['topic']) {
  if (!topic) return guidePath(locale);
  const guide = guideEdition(locale).guides.find((item) => item.topic === topic);
  if (!guide) throw new Error(`Missing ${topic} guide for ${locale}`);
  return guidePath(locale, guide.slug);
}
