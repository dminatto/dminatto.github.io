"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative; /* 🔥 ISSO É O MAIS IMPORTANTE */

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const Item = styled.div<{ active?: boolean }>`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  overflow: hidden;

  border: ${({ active }) => (active ? "2px solid #FF3B3B" : "none")};

  transform: ${({ active }) => (active ? "scale(1.1)" : "scale(1)")};
  transition: 0.2s;
`;

export default function Carousel() {
	return (
		<Wrapper>
			{[1, 2, 3, 4, 5].map((i) => (
				<Item key={i} active={i === 1}>
					<img src={`/char-${i}.png`} width="100%" />
				</Item>
			))}
		</Wrapper>
	);
}
