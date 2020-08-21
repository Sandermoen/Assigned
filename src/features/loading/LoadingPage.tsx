import React from 'react';

import { PageContainer, Logo } from './LoadingPage.styles';

const LoadingPage: React.FC = () => (
  <PageContainer initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <Logo>assigned</Logo>
  </PageContainer>
);

export default LoadingPage;
