import React from 'react';

import { StyledInput } from './Input.styles';

const Input: React.FC<{
  value?: string | number;
  id?: string;
  type?: string;
}> = ({ value, id, type }) => (
  <StyledInput value={value} id={id} type={type || 'text'} />
);

export default Input;
