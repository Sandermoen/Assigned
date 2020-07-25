import React from 'react';

import { StyledDiv, Props, Icon } from './CheckBox.styles';

const CheckBox: React.FC<Props> = ({ checked, active, children }) => (
  <StyledDiv checked={checked} active={active}>
    {children || <Icon />}
  </StyledDiv>
);

export default CheckBox;
