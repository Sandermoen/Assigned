import React from 'react';
import { FieldInputProps } from 'formik';

import { StyledInput } from './Input.styles';

export interface Props {
  value?: string | number;
  field?: FieldInputProps<string>;
  id?: string;
  type?: string;
  name?: string;
  onChange?: Function;
  highlight: boolean;
}

const Input: React.FC<Props> = ({
  field,
  onChange,
  value,
  id,
  type,
  name,
  highlight,
}) => {
  return (
    <StyledInput
      onChange={(event) => onChange && onChange(event)}
      value={value}
      id={id}
      type={type || 'text'}
      name={name}
      highlight={highlight}
      {...field}
    />
  );
};

export default Input;
