import { css } from 'styled-components';

const gradients = [
  'linear-gradient(30deg,#0095ff,#673AB7)',
  'linear-gradient(30deg, rgb(187, 123, 222), rgb(243, 141, 54))',
  'linear-gradient(30deg, rgb(0, 255, 204), rgb(0, 130, 210))',
];

export const randomGradient = (): string => {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  const gradient = gradients[randomIndex];
  return gradient;
};

export const hexToRgb = (hex: string): string | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)},
       ${parseInt(result[3], 16)}`
    : null;
};

export const border = css`
  &::after {
    content: '';
    display: none;
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    box-shadow: ${(props) =>
      `0 0 10px 5px rgba(${hexToRgb(props.theme.black)}, 0.1)`};
    border-radius: 20px;
    position: absolute;
    z-index: 1;
  }
`;
