import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled(motion.main)`
  background-color: ${(props) => props.theme.primary2};
  min-height: 100vh;
  display: flex;
`;

export const Logo = styled.h1`
  font-size: 6rem;
  color: ${(props) => props.theme.primary2};
  margin-top: 5rem;
`;

export const ShowcaseContainer = styled.section`
  background-color: ${(props) => props.theme.white};
  flex-basis: 50%;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
`;

export const ShowcaseImg = styled.img`
  height: 35rem;
  margin-bottom: 5rem;
`;

export const Showcase = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const ShowcaseTitle = styled.h1`
  color: ${(props) => props.theme.primary2};
  font-size: 5rem;
`;

export const LoginContainer = styled.section`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
