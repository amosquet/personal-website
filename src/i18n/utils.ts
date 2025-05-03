import { defaultLocale, type Locale } from "@/i18n/i18n";
import { uiStrings, type TypeUIStrings } from "./uiStrings";

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