"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Providers({ children }: any) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
