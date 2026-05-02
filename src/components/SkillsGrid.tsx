import { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

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

const fillArc = keyframes`
  from { stroke-dashoffset: 220; }
  to   { stroke-dashoffset: var(--target); }
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

/* ── Card base ── */
const Card = styled.div`
  background: #1a0a0a;
  border: 1px solid #2a1212;
  border-radius: 6px;
  padding: 20px;
`;

/* ── Specialization card ── */
const SpecLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff44;
  margin-bottom: 6px;
`;

const SpecHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const SpecTitle = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  line-height: 1;
`;

const CodeIcon = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #e0241a;
  letter-spacing: -2px;
  line-height: 1;
  margin-top: 2px;
`;

const SpecDesc = styled.p`
  font-size: 12px;
  line-height: 1.65;
  color: #ffffff77;
`;

/* ── KPI card ── */
const KpiLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff44;
  margin-bottom: 16px;
`;

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const KpiItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const KpiName = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ $highlight }) => ($highlight ? "#e0241a" : "#ffffff44")};
`;

const KpiValue = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 22px;
  font-weight: 900;
  color: #fff;
  line-height: 1;
`;

/* ── Circular progress ── */
const CircleSvg = styled.svg`
  width: 80px;
  height: 80px;
  transform: rotate(-90deg);
`;

const TrackCircle = styled.circle`
  fill: none;
  stroke: #2a1010;
  stroke-width: 5;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: ${({ $highlight }) => ($highlight ? "#e0241a" : "#e0241a88")};
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
  --target: ${({ $offset }) => $offset};
  animation: ${fillArc} 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;

const CircleInner = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const CircleLabel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function KpiCircle({ value, name, highlight, delay }) {
	const radius = 35;
	const circumference = 2 * Math.PI * radius; // ~220
	const offset = circumference - (value / 100) * circumference;

	return (
		<KpiItem>
			<CircleInner>
				<CircleSvg viewBox="0 0 80 80">
					<TrackCircle cx="40" cy="40" r={radius} />
					<ProgressCircle
						cx="40"
						cy="40"
						r={radius}
						$highlight={highlight}
						$offset={offset}
						$delay={delay}
					/>
				</CircleSvg>
				<CircleLabel>
					<KpiValue>{value}</KpiValue>
				</CircleLabel>
			</CircleInner>
			<KpiName $highlight={highlight}>{name}</KpiName>
		</KpiItem>
	);
}

/* ── Core Skill card ── */
const CoreSkillCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #e0241a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

const SkillInfo = styled.div``;

const SkillCategory = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffffff44;
  margin-bottom: 4px;
`;

const SkillName = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
`;

const ArchIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="2" y="7" width="6" height="10" rx="1" />
		<rect x="9" y="3" width="6" height="18" rx="1" />
		<rect x="16" y="9" width="6" height="8" rx="1" />
	</svg>
);

/* ── Main ── */
export default function SkillsGrid() {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				{/* Specialization */}
				<Card>
					<SpecLabel>Specialization</SpecLabel>
					<SpecHeader>
						<SpecTitle>Full Stack</SpecTitle>
						<CodeIcon>&lt;/&gt;</CodeIcon>
					</SpecHeader>
					<SpecDesc>
						Masters of front-end and back-end systems. Highly adaptable. Excels
						in building scalable, robust web applications quickly.
					</SpecDesc>
				</Card>

				{/* KPIs */}
				<Card>
					<KpiLabel>Technical KPIs</KpiLabel>
					<KpiGrid>
						<KpiCircle value={98} name="Code Quality" highlight delay="0s" />
						<KpiCircle value={92} name="Speed" highlight delay="0.1s" />
						<KpiCircle
							value={100}
							name="System Design"
							highlight
							delay="0.2s"
						/>
						<KpiCircle value={88} name="Performance" delay="0.3s" />
					</KpiGrid>
				</Card>

				{/* Core Skill */}
				<CoreSkillCard>
					<SkillIcon>
						<ArchIcon />
					</SkillIcon>
					<SkillInfo>
						<SkillCategory>Core Skill</SkillCategory>
						<SkillName>Scalable Architecture</SkillName>
					</SkillInfo>
				</CoreSkillCard>
			</Wrapper>
		</>
	);
}
