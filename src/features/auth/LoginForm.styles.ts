import styled from 'styled-components';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FormContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  width: 50%;
`;

export const CallToAction = styled.h3`
  color: ${(props) => props.theme.white};
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
`;

export const HighlightedLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.yellow1};
`;

export const ForgotPassword = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  font-weight: 400;
`;
