"use client";

import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";

export default function Providers({ children }: any) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<LanguageProvider>{children}</LanguageProvider>
		</ThemeProvider>
	);
}
