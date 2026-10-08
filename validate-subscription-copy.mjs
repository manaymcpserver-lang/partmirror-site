import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const locales = JSON.parse(await readFile('app/site-locales.json', 'utf8'));
const cache = JSON.parse(await readFile('subscription-copy-cache.json', 'utf8'));
assert.equal(Object.keys(locales).length, 50, 'Preserve all website languages');
for (const [locale, content] of Object.entries(locales)) {
  assert.ok(content.screenshots.length >= 5, `${locale}: preserve screenshot showcase`);
  for (const key of Object.keys(cache.sources)) {
    const value = content.messages[key];
    assert.ok(value?.trim(), `${locale}: missing ${key}`);
    assert.ok(!value.includes('\uFFFD'), `${locale}: invalid Unicode in ${key}`);
    assert.ok(!/__\s*PM|ZXQ/.test(value), `${locale}: leaked translation marker in ${key}`);
    assert.ok(!value.includes('9.99'), `${locale}: outdated price in ${key}`);
    assert.equal(value, cache.locales[locale]?.[key], `${locale}: generated copy and cache differ`);
  }
  assert.ok(content.messages.faqAdsA.includes('US$4.99'), `${locale}: annual reference price`);
  assert.ok(content.messages.termsSubscriptionBody.includes('US$4.99'), `${locale}: terms price`);
  assert.ok(content.messages.privacyAdsBody.includes('Google AdMob'), `${locale}: historical disclosure`);
  assert.ok(content.messages.privacyPurchasesBody.includes('Apple'), `${locale}: purchase processor`);
  assert.ok(content.messages.termsSubscriptionBody.includes('App Store'), `${locale}: storefront truth`);
}
console.log('Validated subscription copy, historical disclosures, and preserved screenshots in all 50 locales.');
