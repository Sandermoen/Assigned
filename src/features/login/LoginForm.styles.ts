import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginTitle = styled.h2`
  font-size: 4.5rem;
  color: ${(props) => props.theme.white};
  margin-bottom: 5rem;
`;

export const StyledForm = styled.form`
  width: 50%;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 5rem;
`;

export const SignUpCTA = styled.h3`
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
