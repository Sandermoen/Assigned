import React from 'react';

import { InputContainer, StyledInput, IconContainer } from './Input.styles';

const Input: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <InputContainer>
    {children && <IconContainer>{children}</IconContainer>}
    <StyledInput placeholder="Search for a class..." />
  </InputContainer>
);

export default Input;
