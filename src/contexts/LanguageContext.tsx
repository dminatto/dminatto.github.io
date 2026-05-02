"use client";
import { createContext, useContext, useState } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import it from "@/locales/it.json";
import pt from "@/locales/pt.json";

const translations = { pt, en, es, it };
export type Locale = keyof typeof translations;

const LanguageContext = createContext<{
  locale: Locale;
  t: (key: TranslationKey) => string;
  setLocale: (locale: Locale) => void;
} | null>(null);

type TranslationKey = keyof typeof pt;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = (key: TranslationKey): string =>
    (translations[locale] as Record<TranslationKey, string>)[key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext)!;
