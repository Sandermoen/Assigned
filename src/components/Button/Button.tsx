import React from 'react';

import { StyledButton } from './Button.styles';

export interface Props {
  color: 'orange' | 'purple';
  children: React.ReactNode;
  onClick?: Function;
}

const Button: React.FC<Props> = ({ color, children, onClick }) => (
  <StyledButton
    color={color}
    onClick={onClick ? (event) => onClick(event) : undefined}
    type="submit"
  >
    {children}
  </StyledButton>
);

export default Button;
