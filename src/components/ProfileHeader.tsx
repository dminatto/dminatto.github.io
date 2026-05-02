"use client";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;500&display=swap');
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  body {
    background: #1a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Barlow', sans-serif;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0px #e0241a00; }
  50%       { box-shadow: 0 0 18px #e0241a55; }
`;

const Card = styled.div`
  position: relative;
  width: 380px;
  background: linear-gradient(160deg, #1e0b0b 0%, #120606 60%, #0e0404 100%);
  border: 1px solid #2a1010;
  border-radius: 4px;
  padding: 32px 28px 28px;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease both;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 80% 10%,
      #3a100855 0%,
      transparent 65%
    );
    pointer-events: none;
  }
`;

const BackgroundNumber = styled.div`
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Barlow Condensed", sans-serif;
  font-size: 200px;
  font-weight: 900;
  color: #ffffff06;
  line-height: 1;
  pointer-events: none;
  user-select: none;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

const IndexLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: #fff;
  line-height: 1;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff55;
  }
`;

const Divider = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, #ffffff20, transparent);
`;

const RoleLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e0241a;
  margin-bottom: 8px;
`;

const HeroName = styled.h1`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 64px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.95;
  letter-spacing: -0.01em;
  margin-bottom: 24px;
  color: #fff;

  .dim {
    color: #ffffff33;
  }
`;

const QuoteLine = styled.div`
  width: 3px;
  background: #e0241a;
  border-radius: 2px;
  flex-shrink: 0;
  align-self: stretch;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: #ffffffaa;
  font-weight: 400;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SelectButton = styled.button`
  background: #e0241a;
  color: #fff;
  border: none;
  padding: 12px 22px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition:
    background 0.18s,
    transform 0.12s;
  animation: ${glowPulse} 3s ease-in-out infinite;

  &:hover {
    background: #ff2d22;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const PreviewButton = styled.button`
  background: transparent;
  color: #ffffffbb;
  border: 1px solid #ffffff25;
  padding: 11px 20px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition:
    border-color 0.18s,
    color 0.18s,
    transform 0.12s;

  &:hover {
    border-color: #ffffff55;
    color: #fff;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const PlayIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 7px;
  border-color: transparent transparent transparent currentColor;
`;

const Title = styled.h1`
  font-size: clamp(32px, 10vw, 56px);
  margin: 0 0 12px 0;
  line-height: 1.1;
  background: linear-gradient(135deg, #991b1b, #dc2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  color: #a1a1aa;
  font-size: clamp(16px, 3vw, 20px);
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const Contact = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0 0 24px 0;
`;

const Button = styled.button`
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #991b1b, #dc2626);
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(153, 27, 27, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function ProfileHeader() {
	const xpYears = new Date().getFullYear() - 2013;

	return (
		<>
			<GlobalStyle />
			<Card>
				<BackgroundNumber>13</BackgroundNumber>

				<TopRow>
					<IndexLabel>
						{xpYears}
						<span>/XP</span>
					</IndexLabel>
					<Divider />
				</TopRow>

				<RoleLabel>Software Engineer</RoleLabel>

				<HeroName>
					Daniele
					<br />
					Mina<span className="dim">tto</span>
				</HeroName>

				<DescriptionWrapper>
					<QuoteLine />
					<Description>
						Known for her piercing debug-gaze and perfectionist eyes, Daniele
						strides through digital realms armored in silent precision. A
						polyglot master of all arcane languages—from Node.js runes to Python
						scrolls—she orchestrates symphony-like microservices and deploys
						ironclad site citadels from chaotic code, erecting unbreakable
						fortresses that echo optimized empires. Her obsidian keyboard,
						etched with the sigils of a thousand deploys, strikes silence into
						broken systems before her will alone bends architecture to
						perfection.
					</Description>
				</DescriptionWrapper>

				<Actions>
					<PreviewButton>
						<PlayIcon /> Contact
					</PreviewButton>
				</Actions>
			</Card>
		</>
	);
}
