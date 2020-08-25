import React from 'react';

import { Description } from './FormDescription.styles';

interface Props {
  children: React.ReactNode;
}

const FormDescription: React.FC<Props> = ({ children }) => (
  <Description>{children}</Description>
);

export default FormDescription;
