import React, { Fragment } from 'react';

import { StyledButton } from './Button.styles';

import Spinner from '../Spinner/Spinner';

export interface Props {
  color: 'orange' | 'purple';
  children?: React.ReactNode;
  onClick?: Function;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  color,
  onClick,
  children,
  loading,
  disabled,
}) => (
  <StyledButton
    color={color}
    onClick={onClick ? (event) => onClick(event) : undefined}
    type="submit"
    disabled={disabled}
  >
    <Fragment>{loading ? <Spinner /> : children}</Fragment>
  </StyledButton>
);

export default Button;
