import React from 'react';

import {
  PageContainer,
  Section,
  Heading,
  SubText,
  LeftContainer,
} from './DashboardPage.styles';

import Input from '../../components/Input/Input';

const DashboardPage: React.FC = () => (
  <PageContainer>
    <Section>
      <LeftContainer>
        <Heading>Hi Samantha</Heading>
        <SubText>Welcome back, we missed you!</SubText>
        <Input icon="search" />
      </LeftContainer>
    </Section>
    <Section>
      <h1>Dashboard page</h1>
    </Section>
  </PageContainer>
);

export default DashboardPage;
