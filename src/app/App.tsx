import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from './App.styles';
import DashboardPage from '../features/dashboard/DashboardPage';
import ClassPage from '../features/class/ClassPage';
import SignUpForm from '../features/signup/SignUpForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/class" component={ClassPage} />
        <Route path="/signup" component={SignUpForm} />
      </Switch>
    </div>
  );
};

export default App;
