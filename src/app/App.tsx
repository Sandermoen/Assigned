import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from './App.styles';
import LoginPage from '../features/auth/LoginPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;
