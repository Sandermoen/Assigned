import React from 'react';

import { Title } from './PageTitle.styles';

export interface Props {
  children: React.ReactNode;
  color?: 'primary' | 'tertiary';
}

const PageTitle: React.FC<Props> = ({ children, color = 'primary' }) => (
  <Title color={color}>{children}</Title>
);

export default PageTitle;
