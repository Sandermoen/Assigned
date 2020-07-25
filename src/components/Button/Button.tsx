import React from 'react';

import { StyledButton, IconContainer } from './Button.styles';

export interface Props {
  inverted?: boolean;
  transparent?: boolean;
  children: React.ReactNode;
  onClick?: Function;
  icon?: React.ReactElement;
  className?: string;
}

const Button: React.FC<Props> = ({
  inverted,
  children,
  onClick,
  icon,
  transparent,
  className,
}) => (
  <StyledButton
    inverted={inverted}
    transparent={transparent}
    onClick={onClick ? (event) => onClick(event) : undefined}
    type="submit"
    className={className}
  >
    {children}
    <IconContainer>{icon}</IconContainer>
  </StyledButton>
);

export default Button;
