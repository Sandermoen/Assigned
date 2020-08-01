import React from 'react';

import { StyledInput } from './Input.styles';

const Input: React.FC<{
  value?: string | number;
  id?: string;
  type?: string;
  onChange?: Function;
}> = ({ value, id, type, onChange }) => (
  <StyledInput
    value={value}
    id={id}
    type={type || 'text'}
    onChange={(event) => onChange && onChange(event.target.value)}
  />
);

export default Input;
