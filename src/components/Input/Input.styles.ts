import styled from 'styled-components';

import { Props } from './Input';

export const StyledInput = styled.input<Props>`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.primary1};
  color: ${(props) => props.theme.white};
  border-radius: 20px;
  border: none;
  font-family: inherit;
  font-size: 1.5rem;
  border: 2px solid
    ${(props) => (props.highlight ? props.theme.tertiary1 : 'transparent')};
  transition: border-color 200ms ease-out;

  &:focus,
  &:active {
    outline: none;
    border-color: ${(props) => props.theme.white};
  }
`;
