import React from 'react';

import { Group } from './FormGroups.styles';

interface Props {
  children: React.ReactNode;
}

const FormGroup: React.FC<Props> = ({ children }) => <Group>{children}</Group>;

export default FormGroup;
