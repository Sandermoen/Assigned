import React from 'react';

import { StyledDiv, Props, Icon } from './CheckBox.styles';

const CheckBox: React.FC<Props> = ({ checked }) => (
  <StyledDiv checked={checked}>
    <Icon />
  </StyledDiv>
);

export default CheckBox;
