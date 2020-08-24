import React from 'react';

import { Group } from './LabelGroup.styles';

interface Props {
  children: React.ReactNode;
}

const LabelGroup: React.FC<Props> = ({ children }) => <Group>{children}</Group>;

export default LabelGroup;
