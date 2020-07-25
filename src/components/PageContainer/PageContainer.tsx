import React from 'react';

import { StyledPageContainer } from './PageContainer.styles';

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <StyledPageContainer>{children}</StyledPageContainer>;

export default PageContainer;
