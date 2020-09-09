import React from 'react';

import { TooltipContainer } from './Tooltip.styles';

export interface Props {
  children: React.ReactNode;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  show?: boolean;
}

const Tooltip: React.FC<Props> = ({ show, children, direction = 'right' }) => (
  <TooltipContainer show={show} direction={direction}>
    {children}
  </TooltipContainer>
);

export default Tooltip;
