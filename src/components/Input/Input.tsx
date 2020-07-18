import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { InputContainer, StyledInput, IconContainer } from './Input.styles';

const Input: React.FC<{ icon?: IconProp }> = ({ icon }) => (
  <InputContainer>
    {icon && (
      <IconContainer>
        <FontAwesomeIcon icon={icon} size="2x" />
      </IconContainer>
    )}
    <StyledInput placeholder="Search for a class..." />
  </InputContainer>
);

export default Input;
