"use client";
import { createContext, useContext, useState } from "react";
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import it from "@/locales/it.json";

const translations = { pt, en, es, it };
export type Locale = keyof typeof translations;

const LanguageContext = createContext<{
  locale: Locale;
  t: (key: string) => string;
  setLocale: (l: Locale) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
  const t = (key: string) => translations[locale][key] ?? key;
  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext)!;
