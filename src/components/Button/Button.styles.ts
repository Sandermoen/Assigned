import styled from 'styled-components';

import { border } from '../../utils/cssUtils';
import { Props } from './Button';

export const StyledButton = styled.button<Props>`
  padding: 1.3rem 4rem;
  min-width: 10rem;
  text-align: center;
  border: none;
  font-size: 1.7rem;
  font-weight: 700;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.transparent ? 'none' : '0 2px 5px 0 rgba(0, 0, 0, 0.3)'};
  background-color: ${(props) =>
    props.transparent
      ? 'transparent'
      : props.inverted
      ? props.theme.white
      : props.theme.primary1};
  color: ${(props) =>
    props.inverted ? props.theme.secondary1 : props.theme.white};
  position: relative;
  margin: 2rem 0;
  display: flex;
  align-items: center;

  &:focus,
  &:active {
    outline: none;
    &::after {
      display: inline-block;
    }
  }

  ${border}
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.icon['2x']};
`;
