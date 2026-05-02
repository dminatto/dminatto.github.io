import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

/**
 * 1. Define an interface for your custom transient props.
 * The '$' prefix tells styled-components not to pass the prop to the HTML element.
 */
interface SkillProps {
  $active?: boolean;
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #110606;
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 32px;
  }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px #e0241a55, inset 0 0 8px #e0241a22; }
  50%       { box-shadow: 0 0 22px #e0241a99, inset 0 0 14px #e0241a44; }
`;

const overlayIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const modalIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.94); }
  to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(3px);
  z-index: 100;
  animation: ${overlayIn} 0.2s ease both;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: 420px;
  background: linear-gradient(160deg, #1e0b0b 0%, #120606 100%);
  border: 1px solid #e0241a44;
  border-radius: 4px;
  padding: 32px 28px 28px;
  animation: ${modalIn} 0.22s ease both;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 80% 0%,
      #3a100833 0%,
      transparent 65%
    );
    pointer-events: none;
    border-radius: 4px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ModalCategory = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e0241a;
  margin-bottom: 6px;
`;

const ModalTitle = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 42px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  line-height: 1;
`;

const CloseButton = styled.button`
  background: #2a1010;
  border: 1px solid #3e1a1a;
  border-radius: 2px;
  color: #ffffff66;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0;
  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    background: #3a1010;
    color: #fff;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, #e0241a44, transparent);
  margin-bottom: 20px;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const TechTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2a1010;
  border: 1px solid #3e1a1a;
  border-radius: 3px;
  padding: 10px 12px;
  transition:
    border-color 0.15s,
    background 0.15s;

  &:hover {
    background: #341212;
    border-color: #e0241a66;
  }
`;

const TechDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e0241a;
  flex-shrink: 0;
`;

const TechName = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #ffffffcc;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;
  background: #1a0a0a;
  padding: 10px 12px;
  border-radius: 4px;
  position: relative;
  z-index: 1;
`;

/**
 * 2. Pass the interface <SkillProps> to the styled elements
 */
const Item = styled.button<SkillProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 90px;
  height: 80px;
  background: ${({ $active }) => ($active ? "#2a0c0c" : "#1e1212")};
  border: ${({ $active }) =>
    $active ? "1.5px solid #e0241a" : "1.5px solid #2e1a1a"};
  border-radius: 4px;
  cursor: pointer;
  transition:
    background 0.18s,
    border-color 0.18s,
    transform 0.12s;
  animation: ${({ $active }) => ($active ? glowPulse : "none")} 2.5s ease-in-out
    infinite;
  padding: 0;

  &:hover {
    background: #2a0c0c;
    border-color: ${({ $active }) => ($active ? "#e0241a" : "#aa1a14")};
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const Label = styled.span<SkillProps>`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? "#fff" : "#ffffff55")};
  transition: color 0.18s;
  ${Item}:hover & {
    color: #ffffffcc;
  }
`;

const IconWrap = styled.div<SkillProps>`
  color: ${({ $active }) => ($active ? "#e0241a" : "#ffffff44")};
  transition: color 0.18s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Item}:hover & {
    color: ${({ $active }) => ($active ? "#e0241a" : "#ffffff88")};
  }
  svg {
    width: 26px;
    height: 26px;
  }
`;

const FrontendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const BackendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
const ArchitectureIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const CloudIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);
const MobileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const skills = [
  {
    id: "frontend",
    label: "Frontend",
    Icon: FrontendIcon,
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
      "Vite",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    Icon: BackendIcon,
    techs: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    id: "architecture",
    label: "Architecture",
    Icon: ArchitectureIcon,
    techs: ["Microservices", "SQS", "EKS", "Kafka", "Redis", "PostgreSQL"],
  },
  {
    id: "cloud",
    label: "Cloud",
    Icon: CloudIcon,
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    id: "mobile",
    label: "Mobile",
    Icon: MobileIcon,
    techs: ["React Native", "Expo", "Flutter", "iOS", "Android", "PWA"],
  },
];

export default function SkillNav() {
  const [active, setActive] = useState<string | null>(null);
  const [modal, setModal] = useState<(typeof skills)[0] | null>(null);

  const openModal = (skill: (typeof skills)[0]) => {
    setActive(skill.id);
    setModal(skill);
  };
  const closeModal = () => {
    setModal(null);
    setActive(null);
  };

  return (
    <>
      <GlobalStyle />

      {modal && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <ModalHeader>
              <div>
                <ModalCategory>Tecnologias</ModalCategory>
                <ModalTitle>{modal.label}</ModalTitle>
              </div>
              <CloseButton onClick={closeModal}>✕</CloseButton>
            </ModalHeader>
            <Divider />
            <TechGrid>
              {modal.techs.map((t) => (
                <TechTag key={t}>
                  <TechDot />
                  <TechName>{t}</TechName>
                </TechTag>
              ))}
            </TechGrid>
          </Modal>
        </>
      )}

      <Nav>
        {skills.map((skill) => (
          <Item
            key={skill.id}
            $active={active === skill.id}
            onClick={() => openModal(skill)}
          >
            <IconWrap $active={active === skill.id}>
              <skill.Icon />
            </IconWrap>
            <Label $active={active === skill.id}>{skill.label}</Label>
          </Item>
        ))}
      </Nav>
    </>
  );
}
