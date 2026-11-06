'use client';

import { useRouter } from 'next/navigation';
import type { SiteSection } from './content';

type LanguageOption = { locale: string; language: string; href?: string };

export function LanguageSwitcher({
  currentLocale,
  currentSection = 'home',
  label,
  options,
}: {
  currentLocale: string;
  currentSection?: SiteSection;
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
          const option = options.find(({ locale }) => locale === event.target.value);
          if (option) router.push(option.href ?? `/${option.locale}${suffix}`);
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
