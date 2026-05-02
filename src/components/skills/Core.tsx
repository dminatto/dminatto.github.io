"use client";

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const tooltipIn = keyframes`
  from { opacity: 0; transform: translateX(6px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${fadeUp} 0.4s ease both;
`;

const SectionLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff44;
  margin-bottom: 4px;
`;

const SkillCard = styled.div`
  background: #1a0a0a;
  border: 1px solid #2a1212;
  border-radius: 6px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  position: relative;
  transition:
    border-color 0.18s,
    background 0.18s;

  &:hover {
    background: #200c0c;
    border-color: #e0241a55;
  }
`;

const SkillIcon = styled.div`
  width: 38px;
  height: 38px;
  background: #e0241a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: #fff;
  }
`;

const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

const SkillCategory = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffffff44;
`;

const SkillName = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #1e0c0c;
  border: 1px solid #e0241a55;
  border-radius: 4px;
  padding: 10px 14px;
  width: 220px;
  z-index: 20;
  animation: ${tooltipIn} 0.18s ease both;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background: #1e0c0c;
    border-right: 1px solid #e0241a55;
    border-bottom: 1px solid #e0241a55;
  }
`;

const TooltipText = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 12px;
  line-height: 1.6;
  color: #ffffffaa;
`;

const Card = styled.div`
  background: #1a0a0a;
  border: 1px solid #2a1212;
  border-radius: 6px;
  padding: 20px;
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

const FocusIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="3" />
		<path d="M3 12h2M19 12h2M12 3v2M12 19v2" />
		<path d="M5.64 5.64l1.42 1.42M16.95 16.95l1.41 1.41M16.95 7.05l1.41-1.41M5.64 18.36l1.42-1.42" />
	</svg>
);

const PolyglotIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M2 5h7M9 3v2M4 9c0 3 2 5 5 6" />
		<path d="M9 11c2 2.5 4 3.5 6 4" />
		<path d="M22 19l-5-10-5 10M16.5 15h3" />
	</svg>
);

const CuriousIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="10" />
		<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
		<line x1="12" y1="17" x2="12.01" y2="17" />
	</svg>
);

const PlanningIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
		<line x1="16" y1="2" x2="16" y2="6" />
		<line x1="8" y1="2" x2="8" y2="6" />
		<line x1="3" y1="10" x2="21" y2="10" />
		<line x1="8" y1="14" x2="16" y2="14" />
	</svg>
);

export default function Core() {
	const { t } = useLanguage();
	const [active, setActive] = useState<string | null>(null);
	const skills = [
		{
			category: t("skillArchCategory"),
			name: t("skillArchName"),
			Icon: ArchIcon,
			tooltip: t("skillArchTooltip"),
		},
		{
			category: t("skillFocusCategory"),
			name: t("skillFocusName"),
			Icon: FocusIcon,
			tooltip: t("skillFocusTooltip"),
		},
		{
			category: t("skillPolyCategory"),
			name: t("skillPolyName"),
			Icon: PolyglotIcon,
			tooltip: t("skillPolyTooltip"),
		},
		{
			category: t("skillCuriousCategory"),
			name: t("skillCuriousName"),
			Icon: CuriousIcon,
			tooltip: t("skillCuriousTooltip"),
		},
		{
			category: t("skillPlanningCategory"),
			name: t("skillPlanningName"),
			Icon: PlanningIcon,
			tooltip: t("skillPlanningTooltip"),
		},
	];

	return (
		<>
			<Card>
				<Wrapper>
					<SectionLabel>Core Skills</SectionLabel>
					{skills.map(({ category, name, Icon, tooltip }) => (
						<SkillCard
							key={name}
							onMouseEnter={() => setActive(name)}
							onMouseLeave={() => setActive(null)}
						>
							<SkillIcon>
								<Icon />
							</SkillIcon>
							<SkillInfo>
								<SkillCategory>{category}</SkillCategory>
								<SkillName>{name}</SkillName>
							</SkillInfo>

							{active === name && (
								<Tooltip>
									<TooltipText>{tooltip}</TooltipText>
								</Tooltip>
							)}
						</SkillCard>
					))}
				</Wrapper>
			</Card>
		</>
	);
}
