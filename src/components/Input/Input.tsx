import React from 'react';
import { FieldInputProps } from 'formik';

import { StyledInput } from './Input.styles';

export interface Props {
  highlight?: boolean;
  disabled?: boolean;
  value?: string | number;
  field?: FieldInputProps<string>;
  id?: string;
  type?: string;
  name?: string;
  onChange?: Function;
}

const Input: React.FC<Props> = ({
  field,
  onChange,
  value,
  id,
  type,
  name,
  highlight,
  disabled,
}) => {
  return (
    <StyledInput
      onChange={(event) => onChange && onChange(event)}
      value={value}
      id={id}
      type={type || 'text'}
      name={name}
      highlight={highlight}
      disabled={disabled}
      {...field}
    />
  );
};

export default Input;
