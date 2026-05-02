"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 64px;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;

  background: linear-gradient(135deg, #ff3b3b, #7c3aed);
  color: white;
  cursor: pointer;
`;

export default function CharacterPage({ character }: any) {
  return (
    <Container>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Title>{character.name}</Title>
        <p>{character.class}</p>

        <Button>Select Character</Button>

        <div>
          <p>HP: {character.stats.hp}</p>
          <p>Dex: {character.stats.dexterity}</p>
        </div>
      </motion.div>
    </Container>
  );
}
