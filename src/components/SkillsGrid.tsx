import { useEffect, useRef } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import Playstyle from "./skills/Playstyle";
import Core from "./skills/Core";

export default function SkillsGrid() {
  const { t } = useLanguage();

  return (
    <>
      <GlobalStyle />
      <Wrapper></Wrapper>
    </>
  );
}
