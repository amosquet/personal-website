import { defaultLocale, locales, sectionLocales, type Locale } from "@/i18n/i18n";
import { uiStrings, type TypeUIStrings } from "./uiStrings";

export function sectionAvailableLocales(section: string): readonly string[] {
    return sectionLocales[section] ?? locales;
}

export function localizedSectionPath(locale: Locale, section: string): string {
    const available = sectionAvailableLocales(section);
    const target = available.includes(locale) ? locale : defaultLocale;
    return section ? `/${target}/${section}/` : `/${target}/`;
}

export function useTranslations(lang: Locale) {
    return function t(key: keyof typeof uiStrings[typeof defaultLocale]) {
      return uiStrings[key]?.[lang] || uiStrings[key]?.[defaultLocale];
    }
  }

export function useSpecificTranslations(
    specificUIStrings: TypeUIStrings,
    lang: Locale
  ) {
    return function t(
      key: keyof (typeof specificUIStrings)[typeof defaultLocale]
    ) {
      return (
        specificUIStrings[key]?.[lang] || specificUIStrings[key]?.[defaultLocale]
      );
    };
}