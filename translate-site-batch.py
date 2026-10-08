#!/usr/bin/env python3
"""Translate public website copy only; machine translation needs native review."""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

TERMS = ['US$4.99', 'PartMirror', 'TrueDepth', 'Google AdMob', 'Google',
         'Apple Account', 'App Store', 'GitHub Pages', 'My Looks', 'iPhone', 'iOS', 'Apple']


def translate(entries, language):
    prepared, swaps = [], []
    for index, (_, text) in enumerate(entries):
        protected = {}
        for term in TERMS:
            if term in text:
                token = f'__PM{len(protected)}__'
                protected[token] = term
                text = text.replace(term, token)
        prepared.append(f'[{index:03}] {text}' if len(entries) > 1 else text)
        swaps.append(protected)
    url = 'https://translate.googleapis.com/translate_a/single?' + urllib.parse.urlencode({
        'client': 'gtx', 'sl': 'en', 'tl': language, 'dt': 't', 'q': '\n'.join(prepared)
    })
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(request, timeout=30) as response:
                data = json.load(response)
            result = ''.join(part[0] or '' for part in data[0])
            parts = re.split(r'[\[［【]\s*(\d{3})\s*[\]］】]\s*', result)
            values = ({int(parts[i]): parts[i + 1].strip() for i in range(1, len(parts), 2)}
                      if len(entries) > 1 else {0: result.strip()})
            if set(values) != set(range(len(entries))):
                raise ValueError('Translation boundaries changed')
            output = {}
            for index, (key, _) in enumerate(entries):
                text = re.sub(r'__\s*PM\s*(\d+)\s*__', lambda m: f'__PM{m.group(1)}__', values[index])
                for token, term in swaps[index].items():
                    if token not in text:
                        raise ValueError(f'Protected term changed: {token}')
                    text = text.replace(token, term)
                if '__PM' in text or not text.strip():
                    raise ValueError('Invalid translation')
                output[key] = text
            return output
        except Exception as error:
            if isinstance(error, ValueError) and len(entries) > 1:
                middle = len(entries) // 2
                return translate(entries[:middle], language) | translate(entries[middle:], language)
            if attempt == 2:
                raise
            time.sleep(attempt + 1)


if __name__ == '__main__':
    payload = json.load(sys.stdin)
    print(json.dumps(translate(payload['entries'], payload['language']), ensure_ascii=False))
