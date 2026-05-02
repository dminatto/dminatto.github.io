import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: clamp(320px, 55vh, 480px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 24px;
  will-change: transform;
`;

const HeroImage = styled(Image)``;
const random = Math.floor(Math.random() * 11) + 1;
export default function ProfileHero() {
  return (
    <Wrapper
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <HeroImage
        src={`/dani-${random}.png`}
        alt="Daniele Minatto"
        fill
        sizes="100vw"
        priority={true}
        objectFit="contain"
        objectPosition="center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Placeholder tiny (rápido)
      />
    </Wrapper>
  );
}
