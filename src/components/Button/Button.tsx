import React, { Fragment } from 'react';

import { StyledButton } from './Button.styles';

import Spinner from '../Spinner/Spinner';

export interface Props {
  color?: 'orange' | 'purple' | 'white';
  children?: React.ReactNode;
  onClick?: Function;
  loading?: boolean;
  disabled?: boolean;
  style?: Record<string, string | number>;
}

const Button: React.FC<Props> = ({
  color = 'purple',
  onClick,
  children,
  loading,
  disabled,
  style,
}) => (
  <StyledButton
    color={color}
    onClick={onClick ? (event) => onClick(event) : undefined}
    type="submit"
    disabled={disabled}
    style={style}
  >
    <Fragment>{loading ? <Spinner /> : children}</Fragment>
  </StyledButton>
);

export default Button;
