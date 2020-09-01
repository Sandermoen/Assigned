import React, { Fragment } from 'react';
import { FieldInputProps } from 'formik';

import { RadioLabel, Input } from './RadioButton.styles';

export interface Props {
  value: string;
  icon: React.ReactNode;
  id: string;
  name: string;
  field?: FieldInputProps<string>;
}

const RadioButton: React.FC<Props> = ({ value, icon, id, name, field }) => (
  <Fragment>
    <Input type="radio" name={name} id={id} value={value} {...field} />
    <RadioLabel htmlFor={id}>
      {icon} {value}
    </RadioLabel>
  </Fragment>
);

export default RadioButton;
