"use client";

import styled, { createGlobalStyle, keyframes } from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import ProfileHeader from "./ProfileHeader";
import ProfileHero from "./ProfileHero";
import SkillNav from "./SkillNav";
import Core from "./skills/Core";
import Playstyle from "./skills/Playstyle";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #110606;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    font-family: 'Barlow', sans-serif;
  }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(16px, 4vh, 48px) clamp(16px, 3vw, 48px);
  box-sizing: border-box;

  background-color: #1a0608;
  background-image:
    linear-gradient(
      45deg,
      transparent 49.5%,
      #3a1018 49.5%,
      #3a1018 50.5%,
      transparent 50.5%
    ),
    linear-gradient(
      -45deg,
      transparent 49.5%,
      #3a1018 49.5%,
      #3a1018 50.5%,
      transparent 50.5%
    );
  background-size: 28px 28px;
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  /* glow vermelho central */
  background: radial-gradient(
    ellipse 70% 55% at 50% 50%,
    rgba(180, 10, 20, 0.45) 0%,
    rgba(120, 5, 10, 0.18) 45%,
    transparent 75%
  );

  /* escurece as bordas */
  box-shadow: inset 0 0 120px 60px #0d0205;
`;

const Layout = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: clamp(24px, 4vw, 40px);

  width: 100%;
  max-width: none;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 32px;
    justify-items: center;
  }

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const NavFooter = styled.div`
  position: fixed;
  bottom: 32px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 50;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${fadeUp} 0.4s ease both;
`;

export default function SoftwareEngineerProfile() {
  return (
    <Container>
      <GlobalStyle />
      <Glow />
      <LanguageSwitcher />
      <Layout>
        <div style={{ justifySelf: "end", alignSelf: "center" }}>
          <ProfileHeader />
        </div>

        <div style={{ alignSelf: "end", paddingBottom: "80px" }}>
          <ProfileHero />
        </div>

        <div style={{ justifySelf: "start", alignSelf: "center" }}>
          <Wrapper>
            <Playstyle />
            <Core />
          </Wrapper>
        </div>
      </Layout>

      <NavFooter>
        <SkillNav />
      </NavFooter>
    </Container>
  );
}
