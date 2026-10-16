import { readFile, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
const sources = JSON.parse(await readFile('house-promotion-sources.json', 'utf8'));
const locales = JSON.parse(await readFile('app/site-locales.json', 'utf8'));
const results = {};
const languageAliases = {'ar-SA':'ar','zh-Hans':'zh-CN','zh-Hant':'zh-TW','no':'no','pt-PT':'pt','pt-BR':'pt','es-MX':'es','fr-CA':'fr'};
const jobs = Object.keys(locales);
async function translate(locale) {
  if (locale.startsWith('en-')) return {...sources};
  const payload = JSON.stringify({language:languageAliases[locale] ?? locale.split('-')[0],entries:Object.entries(sources)});
  return await new Promise((resolve,reject) => {
    const p=spawn('/usr/bin/python3',['translate-site-batch.py']); let out='',err='';
    p.stdout.on('data',b=>out+=b);p.stderr.on('data',b=>err+=b);
    p.on('close',code=>{try {if(code) throw new Error(err);resolve(JSON.parse(out));} catch(e){reject(e)}});
    p.stdin.end(payload);
  });
}
async function worker(){while(jobs.length){const locale=jobs.shift();results[locale]=await translate(locale);await writeFile('house-promotion-translations.json',JSON.stringify({sources,locales:results},null,2)+'\n');console.log('Translated',locale);}}
await Promise.all(Array.from({length:2},worker));
const siteKeys=Object.keys(sources).filter(k=>!k.startsWith('store')&&!k.startsWith('product'));
for(const [locale,content] of Object.entries(locales)){
  for(const key of siteKeys) content.messages[key]=results[locale][key];
}
await writeFile('house-promotion-translations.json',JSON.stringify({sources,locales:results},null,2)+'\n');
await writeFile('app/site-locales.json',JSON.stringify(locales,null,2)+'\n');
