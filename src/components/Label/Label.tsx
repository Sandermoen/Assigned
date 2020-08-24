import React from 'react';

import { StyledLabel } from './Label.styles';

interface Props {
  children: React.ReactNode;
  htmlFor: string;
}

const Label: React.FC<Props> = ({ children, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
);

export default Label;
