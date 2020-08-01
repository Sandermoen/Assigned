import styled from 'styled-components';

import { Props } from './Button';

export const StyledButton = styled.button<Props>`
  width: 100%;
  text-align: center;
  padding: 1.5rem;
  border-radius: 100px;
  background-color: ${(props) =>
    props.color === 'orange' ? props.theme.tertiary1 : props.theme.primary2};
  color: ${(props) => props.theme.white};
  font-family: inherit;
  font-size: 2rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 200ms ease-out;

  &:active,
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.white};
  }
`;
