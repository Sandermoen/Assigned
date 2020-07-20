import React from 'react';

import { PageContainer, Section } from './DashboardPage.styles';

import ClassSelector from './ClassSelector';
import Assignments from './Assignments';

const DashboardPage: React.FC = () => (
  <PageContainer>
    <Section>
      <ClassSelector />
    </Section>
    <Section>
      <Assignments />
    </Section>
  </PageContainer>
);

export default DashboardPage;
