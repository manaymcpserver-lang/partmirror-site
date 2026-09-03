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
  faqAdsQ: 'PartMirror Ad-Free',
  faqAdsA: 'Remove all advertising throughout PartMirror.',
  faqPrivacyQ: 'Advertising',
  faqPrivacyA: 'You can manage ad privacy choices in Settings when Google\'s privacy options are available, manage or cancel subscriptions through the App Store, revoke Photos permission in iOS Settings, and delete saved looks inside PartMirror.',
  privacyEyebrow: 'Your data',
  privacyTitle: 'Privacy Policy',
  effectiveDate: 'Effective September 3, 2026',
  privacyIntro: 'This policy describes the PartMirror iPhone app, its advertising and subscription features, and this website.',
  privacyCollectionTitle: 'Data collection',
  privacyCollectionBody: 'PartMirror uses Google AdMob and Google\'s consent tools to deliver non-personalized banner ads. The ad services may receive device and network information, but PartMirror never supplies camera images, face geometry, saved looks, names, or part recipes for ad targeting.',
  privacyCameraTitle: 'TrueDepth data and purpose',
  privacyCameraBody: 'PartMirror uses Apple\'s TrueDepth front camera and ARKit to process live camera frames, depth measurements, face pose, face geometry, and derived points such as the face axis, face width, hairline, and scalp guide points. It uses this information only to place, shape, stabilize, and correctly hide parts of the on-screen hair-parting guide. It is not used to identify a person, authenticate, create a profile, target advertising, or train machine-learning models.',
  privacyFaceStorageTitle: 'TrueDepth storage and retention',
  privacyFaceStorageBody: 'In App Store build 39 and later, live TrueDepth data—including depth measurements, face pose, face geometry, and derived tracking points—is held only in memory during the active camera session. It is not written to files or retained after the session ends. Camera frames used for live tracking are not saved unless you deliberately press the photo or video capture control. The resulting ordinary photo or video is stored only in My Looks on your iPhone until you delete it or uninstall PartMirror; it does not contain a reusable TrueDepth face mesh or depth map.',
  privacyFaceSharingTitle: 'TrueDepth sharing and disclosure',
  privacyFaceSharingBody: 'PartMirror does not transmit TrueDepth data to our servers and does not share camera frames, depth measurements, face pose, face geometry, or derived tracking points with Google AdMob or any other third party. AdMob receives no TrueDepth data. If you choose to share or export a saved photo or video, iOS and the destination you select handle only that media under their own policies.',
  privacyMediaTitle: 'Photos, videos, and My Looks',
  privacyMediaBody: 'Photos and videos are created only when you choose to capture them. Saved looks remain in private app storage. If you share or export media, iOS and the service you choose handle it under their own policies.',
  privacyPhotosTitle: 'Photos permission',
  privacyPhotosBody: 'When you choose Export, PartMirror requests permission to add the selected photo or video to Photos. It does not scan your full photo library.',
  privacyRetentionTitle: 'Retention and deletion',
  privacyRetentionBody: 'We do not receive or retain TrueDepth data, camera frames, or My Looks media. You can delete saved looks inside the app. Uninstalling PartMirror removes its private local library and all other app data from the iPhone.',
  privacyAdsTitle: 'Advertising and analytics',
  privacyAdsBody: 'The free version uses Google AdMob and Google\'s consent tools to deliver non-personalized banner ads. Google may process an IP address, device identifiers, advertising data, product interactions, performance data, and diagnostics. PartMirror never supplies camera images, face geometry, saved looks, names, or part recipes for advertising. Subscribers do not receive ads, and PartMirror does not start AdMob while verified ad-free access is active.',
  privacyPurchasesTitle: 'PartMirror Ad-Free',
  privacyPurchasesBody: 'Apple processes PartMirror Ad-Free purchases and subscription management. PartMirror reads Apple-verified subscription status only to remove or restore advertising. PartMirror does not operate an account system or store payment-card details.',
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
  termsSubscriptionBody: 'PartMirror Ad-Free costs $9.99 per year in the United States unless the App Store shows another localized price. Payment is charged to your Apple Account and renews automatically unless cancelled at least 24 hours before the current period ends. Cancelling stops the next renewal but keeps access through the paid period unless Apple refunds or revokes it. You can restore purchases and manage or cancel the subscription in your Apple Account settings. Apple billing, grace-period, refund, and revocation rules apply.',
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
const refreshedMessageKeys = new Set([
  'privacyFaceStorageTitle',
  'privacyFaceStorageBody',
  'privacyFaceSharingTitle',
  'privacyFaceSharingBody',
]);
let translationServiceUnavailable = false;
const existingOutput = JSON.parse(await readFile('app/site-locales.json', 'utf8'));
const appLocalizationPath = process.env.PARTMIRROR_LOCALIZABLE_PATH
  ?? '../App/Resources/Localizable.xcstrings';
const appStrings = JSON.parse(
  await readFile(appLocalizationPath, 'utf8'),
).strings;
const appSourceKeyByMessage = {
  faqAdsQ: 'PartMirror Ad-Free',
  faqAdsA: 'Remove all advertising throughout PartMirror.',
  faqPrivacyQ: 'Advertising',
  faqPrivacyA: 'You can manage ad privacy choices in Settings when Google\'s privacy options are available, manage or cancel subscriptions through the App Store, revoke Photos permission in iOS Settings, and delete saved looks inside PartMirror.',
  privacyCollectionBody: 'PartMirror uses Google AdMob and Google\'s consent tools to deliver non-personalized banner ads. The ad services may receive device and network information, but PartMirror never supplies camera images, face geometry, saved looks, names, or part recipes for ad targeting.',
  privacyAdsBody: 'The free version uses Google AdMob and Google\'s consent tools to deliver non-personalized banner ads. Google may process an IP address, device identifiers, advertising data, product interactions, performance data, and diagnostics. PartMirror never supplies camera images, face geometry, saved looks, names, or part recipes for advertising. Subscribers do not receive ads, and PartMirror does not start AdMob while verified ad-free access is active.',
  privacyPurchasesTitle: 'PartMirror Ad-Free',
  privacyPurchasesBody: 'Apple processes PartMirror Ad-Free purchases and subscription management. PartMirror reads Apple-verified subscription status only to remove or restore advertising. PartMirror does not operate an account system or store payment-card details.',
};
const appLocale = {
  'ar-SA': 'ar', 'bn-BD': 'bn', 'de-DE': 'de', 'fr-FR': 'fr', 'gu-IN': 'gu',
  'kn-IN': 'kn', 'ml-IN': 'ml', 'mr-IN': 'mr', 'nl-NL': 'nl', no: 'nb',
  'or-IN': 'or', 'pa-IN': 'pa', 'sl-SI': 'sl', 'ta-IN': 'ta', 'te-IN': 'te',
  'ur-PK': 'ur',
};

function appTranslation(locale, messageKey) {
  const sourceKey = appSourceKeyByMessage[messageKey];
  if (!sourceKey) return undefined;
  const localization = appLocale[locale] ?? locale;
  return appStrings[sourceKey]?.localizations?.[localization]?.stringUnit?.value;
}
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
  const existingMessages = { ...(existingOutput[locale]?.messages ?? {}) };
  for (const [key] of messageEntries) {
    const translated = appTranslation(locale, key);
    if (translated) existingMessages[key] = translated;
  }
  const entriesToTranslate = messageEntries.filter(
    ([key]) => refreshedMessageKeys.has(key) || !existingMessages[key],
  );
  if (entriesToTranslate.length === 0) return existingMessages;
  const englishFallback = {
    ...existingMessages,
    ...Object.fromEntries(entriesToTranslate.map(([key, value]) => [key, value])),
  };
  if (translationServiceUnavailable) return englishFallback;
  const body = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: target,
    dt: 't',
    q: entriesToTranslate.map(([, value]) => protectTerms(value)).join('\n'),
  });
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      const response = await fetch('https://translate.googleapis.com/translate_a/single', {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });
      if (response.status === 429) {
        translationServiceUnavailable = true;
        return englishFallback;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const translated = payload[0].map((part) => part[0]).join('').split('\n');
      if (translated.length !== entriesToTranslate.length) {
        throw new Error(`Expected ${entriesToTranslate.length} translated lines, got ${translated.length}`);
      }
      return {
        ...existingMessages,
        ...Object.fromEntries(
          entriesToTranslate.map(([key], index) => [key, restoreTerms(translated[index])]),
        ),
      };
    } catch (error) {
      if (attempt === 6) return englishFallback;
      await new Promise((resolve) => setTimeout(resolve, attempt * 5000));
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
  await new Promise((resolve) => setTimeout(resolve, 1500));
}

await writeFile('app/site-locales.json', `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${Object.keys(output).length} localized website records.`);
