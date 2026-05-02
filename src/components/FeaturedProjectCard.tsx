"use client";
import styled from "styled-components";

const Card = styled.div`
  padding: 28px;
  border-radius: 20px;
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid rgba(153, 27, 27, 0.5); /* Vermelho escuro */
  backdrop-filter: blur(10px);
`;

const Title = styled.h3`
  margin: 0 0 12px;
  font-size: 20px;
  color: white;
`;

const Desc = styled.p`
  color: #a1a1aa;
  margin: 0 0 16px;
  line-height: 1.6;
`;

const Link = styled.a`
  display: inline-block;
  color: #dc2626; /* Vermelho médio escuro */
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export default function FeaturedProjectCard() {
	return (
		<Card>
			<Title>Projeto em Destaque: App de E-commerce Mobile</Title>
			<Desc>
				Full-stack com Flutter, Node.js & Firebase. 50k+ downloads na App Store.
				Foco em UX/UI acessível.
			</Desc>
			<Link href="https://github.com/anaoliveira/ecommerce-app">GitHub →</Link>
		</Card>
	);
}
