import React from 'react';

import { StyledLabel } from './Label.styles';

import LabelGroup from '../Form/LabelGroup/LabelGroup';

interface Props {
  children: React.ReactNode;
  htmlFor: string;
}

const Label: React.FC<Props> = ({ children, htmlFor }) => (
  <LabelGroup>
    <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
  </LabelGroup>
);

export default Label;
