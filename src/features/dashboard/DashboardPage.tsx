import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageContainer } from './DashboardPage.styles';

import Sidebar from './Sidebar';

const DashboardPage: React.FC = () => (
  <PageContainer>
    <Sidebar />
    <Switch>
      <Route exact path="/">
        <h1>Home page</h1>
      </Route>
      <Route path="/assignments">
        <h1>Asisgnments page</h1>
      </Route>
    </Switch>
  </PageContainer>
);

export default DashboardPage;
