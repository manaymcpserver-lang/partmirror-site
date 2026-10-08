import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spawn } from 'node:child_process';

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
  faqAdsQ: "PartMirror Premium",
  faqAdsA: "An annual subscription unlocks live guides, photo and video capture, and My Looks, with no ads. U.S. annual reference price: US$4.99. The App Store displays your current localized price. A 7-day free trial is offered only to eligible Apple Accounts when shown on the purchase sheet.",
  faqPrivacyQ: "How do I manage my subscription and privacy choices?",
  faqPrivacyA: "Manage or cancel your subscription through the App Store, or use Manage Subscription in PartMirror Settings. Restore Purchases checks your Apple Account for existing access. You can revoke Photos permission in iOS Settings and delete saved looks inside PartMirror.",
  privacyEyebrow: 'Your data',
  privacyTitle: 'Privacy Policy',
  effectiveDate: "Effective October 7, 2026",
  privacyIntro: "This policy covers the PartMirror iPhone app, the Premium subscription edition, older ad-enabled versions, and this website.",
  privacyCollectionTitle: 'Data collection',
  privacyCollectionBody: "The Premium subscription edition has no advertising SDK and does not send camera images, face geometry, saved looks, names, or part recipes to an advertising provider. Older ad-enabled versions used Google AdMob and Google’s consent tools for non-personalized banner ads; those services may receive device and network information as described below. This website does not include advertising or analytics trackers. GitHub Pages hosts the website and may process ordinary network requests under its own privacy policy.",
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
  privacyAdsTitle: "Current edition and older advertising versions",
  privacyAdsBody: "The Premium subscription edition contains no Google AdMob SDK or Google consent SDK and does not display or request ads. Older ad-enabled versions may still use Google AdMob and Google’s consent tools to deliver non-personalized banner ads. In those versions, Google may process an IP address, device identifiers, advertising data, product interactions, performance data, and diagnostics. PartMirror does not supply camera images, face geometry, saved looks, names, or part recipes for advertising. In those versions, verified Ad-Free subscribers do not receive ads, and AdMob is not started while that access is active. Where available in an older version, ad privacy choices can be managed in its Settings.",
  privacyPurchasesTitle: "PartMirror Premium and earlier subscriptions",
  privacyPurchasesBody: "Apple processes PartMirror purchases, billing, and subscription management. The Premium edition reads Apple-verified subscription status to grant or restore app access; older ad-enabled versions used that status to remove or restore advertising. Existing annual subscriptions remain subject to their Apple-verified entitlement. PartMirror does not operate an account system or store payment-card details.",
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
  termsSubscriptionTitle: "PartMirror Premium subscription",
  termsSubscriptionBody: "The Premium edition requires an active annual subscription for live guides, photo and video capture, and My Looks. The U.S. annual reference price is US$4.99; the current localized price and any eligible offer shown on the App Store purchase sheet control. A 7-day free trial is available only when Apple confirms eligibility and the purchase sheet displays that offer. If a trial is offered, payment is charged to your Apple Account after the trial unless you cancel at least 24 hours before it ends; otherwise payment is charged when you confirm the purchase. Subscriptions renew automatically unless cancelled at least 24 hours before the current period ends. Cancelling stops the next renewal and keeps access through the paid period unless Apple refunds or revokes it. Restore purchases in PartMirror Settings, and manage or cancel subscriptions through your Apple Account. Apple billing, grace-period, refund, and revocation rules apply. Existing annual subscribers retain access while Apple verifies their entitlement.",
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
const refreshedMessageKeys = new Set(["faqAdsQ","faqAdsA","faqPrivacyQ","faqPrivacyA","effectiveDate","privacyIntro","privacyCollectionBody","privacyAdsTitle","privacyAdsBody","privacyPurchasesTitle","privacyPurchasesBody","termsSubscriptionTitle","termsSubscriptionBody"]);
const existingOutput = JSON.parse(await readFile('app/site-locales.json', 'utf8'));
const translationSources = Object.fromEntries(messageEntries.filter(([key]) => refreshedMessageKeys.has(key)));
const cachePath = 'subscription-copy-cache.json';
const previousCache = JSON.parse(await readFile(cachePath, 'utf8').catch((error) => {
  if (error.code === 'ENOENT') return '{}';
  throw error;
}));
const translationCache = {
  provenance: 'Public machine translation with protected product names and price. Native review outstanding.',
  sources: translationSources,
  locales: JSON.stringify(previousCache.sources) === JSON.stringify(translationSources) ? previousCache.locales : {},
};
function translateBatch(entries, language) {
  return new Promise((resolve, reject) => {
    const child = spawn('python3', ['translate-site-batch.py'], { stdio: ['pipe', 'pipe', 'pipe'] });
    let output = '';
    let error = '';
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (value) => { output += value; });
    child.stderr.on('data', (value) => { error += value; });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code !== 0) { reject(new Error(error || 'Translation failed')); return; }
      try { resolve(JSON.parse(output)); } catch (cause) { reject(cause); }
    });
    child.stdin.end(JSON.stringify({ entries, language }));
  });
}

async function translateMessages(locale) {
  if (locale.startsWith('en-')) return { ...existingOutput[locale]?.messages, ...translationSources };
  const target = googleLanguage[locale];
  if (!target) throw new Error(`Missing translation language for ${locale}`);
  const messages = { ...(existingOutput[locale]?.messages ?? {}) };
  if (translationCache.locales[locale]) return { ...messages, ...translationCache.locales[locale] };
  const changed = messageEntries.filter(([key]) => refreshedMessageKeys.has(key) || !messages[key]);
  let batch = [];
  for (const entry of changed) {
    if (batch.reduce((length, [, value]) => length + value.length, 0) + entry[1].length > 2200) {
      Object.assign(messages, await translateBatch(batch, target));
      batch = [];
    }
    batch.push(entry);
  }
  if (batch.length) Object.assign(messages, await translateBatch(batch, target));
  return messages;
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
    ...existingOutput[store.locale],
    messages: await translateMessages(store.locale),
  };
  translationCache.locales[store.locale] = Object.fromEntries(
    Object.keys(translationSources).map((key) => [key, output[store.locale].messages[key]]),
  );
  await writeFile(cachePath, `${JSON.stringify(translationCache, null, 2)}\n`);
  console.log(`[${index + 1}/${files.length}] ${store.locale}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
}

await writeFile('app/site-locales.json', `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${Object.keys(output).length} localized website records.`);
