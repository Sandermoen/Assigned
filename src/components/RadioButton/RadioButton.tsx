import React, { Fragment } from 'react';
import { FieldInputProps } from 'formik';

import { RadioLabel, Input } from './RadioButton.styles';

export interface Props {
  value: string;
  icon: React.ReactNode;
  id: string;
  name: string;
  disabled: boolean;
  field?: FieldInputProps<string>;
}

const RadioButton: React.FC<Props> = ({
  value,
  icon,
  id,
  name,
  disabled,
  field,
}) => (
  <Fragment>
    <Input
      type="radio"
      name={name}
      id={id}
      value={value}
      disabled={disabled}
      {...field}
    />
    <RadioLabel htmlFor={id} disabled={disabled}>
      {icon} {value}
    </RadioLabel>
  </Fragment>
);

export default RadioButton;
