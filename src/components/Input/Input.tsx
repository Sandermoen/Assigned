import React from 'react';

import { InputContainer, StyledInput, IconContainer } from './Input.styles';

interface Props {
  children?: React.ReactNode;
  placeholder: string;
  type?: string;
  field?: object;
  value?: string | number;
  style?: { [key: string]: string };
}

const Input: React.FC<Props> = ({
  children,
  placeholder,
  type,
  field,
  value,
  style,
}) => (
  <InputContainer style={style ? style : {}}>
    <IconContainer>{children && children}</IconContainer>
    <StyledInput
      placeholder={placeholder}
      type={type || 'text'}
      {...field}
      value={value}
    />
  </InputContainer>
);

export default Input;
