import React from 'react';

import { StyledDiv, Props } from './Pill.styles';

const Pill: React.FC<
  {
    children: React.ReactNode;
  } & Props
> = ({ children, variant }) => (
  <StyledDiv variant={variant}>{children}</StyledDiv>
);

export default Pill;
