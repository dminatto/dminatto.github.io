"use client";

import styled from "styled-components";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProfileHeader from "./ProfileHeader";
import ProfileHero from "./ProfileHero";
import SkillNav from "./SkillNav";
import SkillsGrid from "./SkillsGrid";

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

export default function SoftwareEngineerProfile() {
	return (
		<Container>
			<Glow />
			<Layout>
				<div style={{ justifySelf: "end" }}>
					<ProfileHeader />
				</div>

				<ProfileHero />

				<div>
					<SkillsGrid />
				</div>
			</Layout>

			<NavFooter>
				<SkillNav />
			</NavFooter>
		</Container>
	);
}
