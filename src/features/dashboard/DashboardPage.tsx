import React from 'react';

import { Section, Container } from './DashboardPage.styles';

import ClassSelector from './ClassSelector';
import Assignments from './Assignments';
import PageContainer from '../../components/PageContainer/PageContainer';

const DashboardPage: React.FC = () => (
  <PageContainer>
    <Container>
      <Section>
        <ClassSelector />
      </Section>
      <Section>
        <Assignments />
      </Section>
    </Container>
  </PageContainer>
);

export default DashboardPage;
