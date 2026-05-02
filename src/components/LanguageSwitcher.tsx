"use client";

import styled from "styled-components";
import { type Locale, useLanguage } from "@/contexts/LanguageContext";

const locales: { code: Locale; label: string }[] = [
	{ code: "pt", label: "PT" },
	{ code: "en", label: "EN" },
	{ code: "es", label: "ES" },
	{ code: "it", label: "IT" },
];

const Switcher = styled.div`
  position: fixed;
  top: 20px;
  right: 24px;
  z-index: 100;
  display: flex;
  gap: 6px;
`;

const LangBtn = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#e0241a" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "#e0241a" : "#3a1212")};
  border-radius: 3px;
  color: ${({ $active }) => ($active ? "#fff" : "#ffffff55")};
  padding: 4px 10px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  cursor: pointer;
  transition:
    background 0.15s,
    border-color 0.15s,
    color 0.15s;

  &:hover {
    border-color: #e0241a;
    color: #fff;
  }
`;

export default function LanguageSwitcher() {
	const { locale, setLocale } = useLanguage();

	return (
		<Switcher>
			{locales.map(({ code, label }) => (
				<LangBtn
					key={code}
					$active={locale === code}
					onClick={() => setLocale(code)}
				>
					{label}
				</LangBtn>
			))}
		</Switcher>
	);
}
