import styled from 'styled-components';

import { Props } from './RadioButton';

export const Input = styled.input`
  display: none;
`;

export const RadioLabel = styled.label<Pick<Props, 'disabled'>>`
  background-color: ${(props) => props.theme.primary1};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 20rem;
  word-wrap: break-word;
  text-align: center;
  height: 15rem;
  padding: 2rem;
  margin: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  font-family: inherit;
  border: 2px solid transparent;
  transition: border-color 200ms ease-out;

  ${Input}:checked + & {
    background-color: ${(props) => props.theme.tertiary1};
  }

  ${Input}:hover + & {
    border-color: ${(props) => props.theme.white};
  }
`;
