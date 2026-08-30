import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const sourceMessages = {
  navHome: 'Home',
  navSupport: 'Support',
  navPrivacy: 'Privacy',
  navTerms: 'Terms',
  languageLabel: 'Language',
  eyebrow: 'A clearer way to find your line',
  headlineOne: 'Your part.',
  headlineTwo: 'Precisely placed.',
  ctaHow: 'See how it works',
  ctaSupport: 'Get support',
  localTitle: 'Designed to stay private',
  localBody: 'Camera processing and head tracking happen on your iPhone. No account or cloud upload is required.',
  supportEyebrow: 'Help center',
  supportTitle: 'PartMirror Support',
  supportIntro: 'Quick answers for setting up the camera guide, capturing a look, and keeping your photos private.',
  contactTitle: 'Contact PartMirror',
  contactPending: 'support@partmirror.com',
  faqTitle: 'Common questions',
  faqCompatibilityQ: 'Which iPhones are supported?',
  faqCompatibilityA: 'PartMirror requires iOS 17 or later and an iPhone with a TrueDepth front camera.',
  faqCameraQ: 'Why does PartMirror need camera access?',
  faqCameraA: 'The front camera tracks your head and places the parting guide. Camera processing stays on your iPhone.',
  faqGuideQ: 'What should I do if the guide does not appear?',
  faqGuideA: 'Center your face in good, even lighting, keep your full hairline visible, and confirm camera access in Settings.',
  faqLooksQ: 'Where are My Looks saved?',
  faqLooksA: 'Saved looks remain in private storage on your iPhone unless you choose to share or export them.',
  faqMirrorQ: 'Why do saved photos and videos look mirrored?',
  faqMirrorA: 'PartMirror intentionally saves the same mirror orientation shown in the live camera preview.',
  faqDeleteQ: 'How do I delete a saved look?',
  faqDeleteA: 'Open My Looks, open the look menu, and choose Delete. Removing the app also removes its private local library.',
  privacyEyebrow: 'Your data',
  privacyTitle: 'Privacy Policy',
  effectiveDate: 'Effective August 30, 2026',
  privacyIntro: 'This policy describes the current PartMirror iPhone app and this website.',
  privacyCollectionTitle: 'Data collection',
  privacyCollectionBody: 'PartMirror version 1.0.0 does not collect personal data. It has no account system, analytics, advertising SDK, or remote server upload.',
  privacyCameraTitle: 'Camera and face tracking',
  privacyCameraBody: 'Front-camera frames and face-tracking information are processed on your iPhone to place the guide. PartMirror does not send camera frames, face geometry, or tracking information to us.',
  privacyMediaTitle: 'Photos, videos, and My Looks',
  privacyMediaBody: 'Photos and videos are created only when you choose to capture them. Saved looks remain in private app storage. If you share or export media, iOS and the service you choose handle it under their own policies.',
  privacyPhotosTitle: 'Photos permission',
  privacyPhotosBody: 'When you choose Export, PartMirror requests permission to add the selected photo or video to Photos. It does not scan your full photo library.',
  privacyRetentionTitle: 'Retention and deletion',
  privacyRetentionBody: 'Because the app sends no camera or media data to us, we do not retain that data. You can delete saved looks inside the app or remove all local app data by uninstalling PartMirror.',
  privacyAdsTitle: 'Advertising and analytics',
  privacyAdsBody: 'The current release does not display advertising and does not include advertising or analytics services. We will update this policy before enabling any future service that changes these practices.',
  privacyChildrenTitle: 'Children',
  privacyChildrenBody: 'PartMirror is not directed specifically to children under 13, and we do not knowingly collect personal data from children.',
  privacyChangesTitle: 'Changes to this policy',
  privacyChangesBody: 'We may update this policy as PartMirror changes. The effective date above will identify the latest version.',
  privacyContactTitle: 'Privacy contact',
  privacyContactPending: 'support@partmirror.com',
  termsEyebrow: 'Using PartMirror',
  termsTitle: 'Terms of Use',
  termsIntro: 'By using PartMirror, you agree to these terms and Apple’s Standard Licensed Application End User License Agreement.',
  termsLicenseTitle: 'License and eligibility',
  termsLicenseBody: 'PartMirror gives you a personal, limited, non-transferable license to use the app on Apple devices you own or control, subject to the App Store rules and applicable law.',
  termsGuidanceTitle: 'Styling guidance',
  termsGuidanceBody: 'PartMirror provides a visual styling guide. Tracking and placement can vary with lighting, camera visibility, device position, hair, and movement. You remain responsible for how you use the guide and for your styling decisions.',
  termsContentTitle: 'Your photos and videos',
  termsContentBody: 'You keep ownership of media you create. You are responsible for content you capture, share, or export and for respecting the rights and privacy of other people.',
  termsSubscriptionTitle: 'PartMirror Ad-Free',
  termsSubscriptionBody: 'If PartMirror Ad-Free is offered, it costs $9.99 per year unless the App Store shows another localized price. Payment is charged to your Apple Account and renews automatically unless cancelled at least 24 hours before the current period ends. You can restore purchases and manage or cancel the subscription in your Apple Account settings. Apple billing, grace-period, refund, and revocation rules apply.',
  termsUseTitle: 'Acceptable use',
  termsUseBody: 'Do not misuse PartMirror, interfere with the app, attempt unauthorized access, reverse engineer it where prohibited, or use it in a way that violates law or another person’s rights.',
  termsDisclaimerTitle: 'Availability and disclaimers',
  termsDisclaimerBody: 'PartMirror is provided as available without a guarantee that the guide will be uninterrupted or error-free. To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of the app.',
  termsChangesTitle: 'Changes and termination',
  termsChangesBody: 'We may improve, change, suspend, or discontinue features and may update these terms. You may stop using PartMirror at any time.',
  termsContactTitle: 'Questions about these terms',
  termsContactPending: 'support@partmirror.com',
  appleEula: 'Apple Standard EULA',
  legalTranslationNote: 'Translations are provided for convenience. If a translated version conflicts with the English version, the English version controls where permitted by law.',
  footerRights: 'All rights reserved.',
};

const googleLanguage = {
  'ar-SA': 'ar', 'bn-BD': 'bn', ca: 'ca', cs: 'cs', da: 'da', 'de-DE': 'de', el: 'el',
  'es-ES': 'es', 'es-MX': 'es', fi: 'fi', 'fr-CA': 'fr', 'fr-FR': 'fr', 'gu-IN': 'gu',
  he: 'iw', hi: 'hi', hr: 'hr', hu: 'hu', id: 'id', it: 'it', ja: 'ja', 'kn-IN': 'kn',
  ko: 'ko', 'ml-IN': 'ml', 'mr-IN': 'mr', ms: 'ms', 'nl-NL': 'nl', no: 'no', 'or-IN': 'or',
  'pa-IN': 'pa', pl: 'pl', 'pt-BR': 'pt', 'pt-PT': 'pt', ro: 'ro', ru: 'ru', sk: 'sk',
  'sl-SI': 'sl', sv: 'sv', 'ta-IN': 'ta', 'te-IN': 'te', th: 'th', tr: 'tr', uk: 'uk',
  'ur-PK': 'ur', vi: 'vi', 'zh-Hans': 'zh-CN', 'zh-Hant': 'zh-TW',
};

const rtlLocales = new Set(['ar-SA', 'he', 'ur-PK']);
const messageEntries = Object.entries(sourceMessages);
const protectedTerms = [
  ['PartMirror', 'ZXQPARTMIRRORZXQ'],
  ['TrueDepth', 'ZXQTRUEDEPTHZXQ'],
  ['My Looks', 'ZXQMYLOOKSZXQ'],
  ['App Store', 'ZXQAPPSTOREZXQ'],
  ['Apple Account', 'ZXQAPPLEACCOUNTZXQ'],
  ['iPhone', 'ZXQIPHONEZXQ'],
  ['iOS', 'ZXQIOSZXQ'],
  ['Apple', 'ZXQAPPLEZXQ'],
];

function protectTerms(value) {
  return protectedTerms.reduce(
    (output, [term, token]) => output.replaceAll(term, token),
    value,
  );
}

function restoreTerms(value) {
  return [...protectedTerms].reverse().reduce(
    (output, [term, token]) => output.replaceAll(token, term),
    value,
  );
}

async function translateMessages(locale) {
  if (locale.startsWith('en-')) return sourceMessages;
  const target = googleLanguage[locale];
  if (!target) throw new Error(`Missing translation language for ${locale}`);
  const body = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: target,
    dt: 't',
    q: messageEntries.map(([, value]) => protectTerms(value)).join('\n'),
  });
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch('https://translate.googleapis.com/translate_a/single', {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const translated = payload[0].map((part) => part[0]).join('').split('\n');
      if (translated.length !== messageEntries.length) {
        throw new Error(`Expected ${messageEntries.length} translated lines, got ${translated.length}`);
      }
      return Object.fromEntries(
        messageEntries.map(([key], index) => [key, restoreTerms(translated[index])]),
      );
    } catch (error) {
      if (attempt === 3) throw error;
      await new Promise((resolve) => setTimeout(resolve, attempt * 800));
    }
  }
}

const files = (await readdir('source-localizations')).filter((name) => name.endsWith('.json')).sort();
const output = {};
for (const [index, file] of files.entries()) {
  const store = JSON.parse(await readFile(join('source-localizations', file), 'utf8'));
  output[store.locale] = {
    locale: store.locale,
    language: store.language,
    direction: rtlLocales.has(store.locale) ? 'rtl' : 'ltr',
    appName: store.app_name,
    subtitle: store.subtitle,
    tagline: store.tagline,
    promotionalText: store.promotional_text,
    description: store.description,
    screenshots: store.screenshots,
    messages: await translateMessages(store.locale),
  };
  console.log(`[${index + 1}/${files.length}] ${store.locale}`);
  await new Promise((resolve) => setTimeout(resolve, 120));
}

await writeFile('app/site-locales.json', `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${Object.keys(output).length} localized website records.`);
