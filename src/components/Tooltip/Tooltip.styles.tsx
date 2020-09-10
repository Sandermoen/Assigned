import styled, { css } from 'styled-components';

import { Props } from './Tooltip';

const distance = 'calc(100% + 4rem)';

const alignBoxVertical = css<Props>`
  left: 50%;
  transform: translateX(-50%);
  ${(props) =>
    props.direction === 'top' ? `bottom: ${distance}` : `top: ${distance}`}
`;

const alignBoxHorizontal = css<Props>`
  top: 50%;
  transform: translateY(-50%);
  ${(props) =>
    props.direction === 'right' ? `left: ${distance}` : `right: ${distance}`}
`;

const alignSpikeHorizontal = css<Props>`
  top: 50%;
  ${(props) => (props.direction === 'right' ? 'right: 101%' : 'left: 101%')};
  transform: rotate(${(props) => props.direction === 'right' && '-'}90deg);
  transform-origin: top;
`;

const alignSpikeVertical = css<Props>`
  left: 50%;
  transform: translateX(-50%)
    ${(props) => props.direction === 'top' && 'rotate(180deg)'};
  ${(props) => (props.direction === 'top' ? 'top: 100%' : 'bottom: 99%')};
  transform-origin: center;
`;

export const TooltipContainer = styled.div<Props>`
  text-align: center;
  min-width: 15rem;
  min-height: 6.5rem;
  position: absolute;
  ${(props) =>
    props.direction === 'right' || props.direction === 'left'
      ? alignBoxHorizontal
      : alignBoxVertical};
  padding: 2rem;
  background-color: ${(props) => props.theme.primary1};
  border-radius: 15px;
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  font-weight: 500;

  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 300ms ease-out;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    background-color: ${(props) => props.theme.primary1};
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    width: 3.5rem;
    height: 2rem;
    ${(props) =>
      props.direction === 'right' || props.direction === 'left'
        ? alignSpikeHorizontal
        : alignSpikeVertical}
  }
`;
