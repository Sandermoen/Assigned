import React from 'react';

import { Title } from './FormTitle.styles';

interface Props {
  children: React.ReactNode;
}
const FormTitle: React.FC<Props> = ({ children }) => <Title>{children}</Title>;

export default FormTitle;
