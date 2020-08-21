import React, { Fragment } from 'react';

import { RadioLabel, Input } from './RadioButton.styles';

export interface Props {
  value: string;
  icon: React.ReactNode;
  id: string;
  name: string;
}

const RadioButton: React.FC<Props> = ({ value, icon, id, name }) => (
  <Fragment>
    <Input type="radio" name={name} id={id} />
    <RadioLabel htmlFor={id}>
      {icon} {value}
    </RadioLabel>
  </Fragment>
);

export default RadioButton;
