import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 100%;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.primary2};
  font-size: 8rem;
`;
