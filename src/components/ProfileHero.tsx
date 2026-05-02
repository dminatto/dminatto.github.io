"use client";

import styled from "styled-components";

const Image = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Adapte: contain/escala; cover/preenche */
`;

const Wrapper = styled.div`
  width: 100%;
  height: clamp(320px, 55vh, 480px); /* Responsivo altura */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 24px; /* Opcional: arredondado */
`;
export default function ProfileHero() {
	return (
		<Wrapper>
			<Image
				src="./dani-01.png"
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.4 }}
			/>
		</Wrapper>
	);
}
