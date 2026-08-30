'use client';

import { useRouter } from 'next/navigation';
import type { SiteSection } from './content';

type LanguageOption = { locale: string; language: string };

export function LanguageSwitcher({
  currentLocale,
  currentSection,
  label,
  options,
}: {
  currentLocale: string;
  currentSection: SiteSection;
  label: string;
  options: LanguageOption[];
}) {
  const router = useRouter();

  return (
    <label className="language-switcher">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={currentLocale}
        onChange={(event) => {
          const suffix = currentSection === 'home' ? '' : `/${currentSection}`;
          router.push(`/${event.target.value}${suffix}`);
        }}
      >
        {options.map((option) => (
          <option key={option.locale} value={option.locale}>
            {option.language}
          </option>
        ))}
      </select>
    </label>
  );
}
