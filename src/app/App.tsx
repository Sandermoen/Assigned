import React from 'react';

import GlobalStyle from './App.styles';
import DashboardPage from '../features/dashboard/DashboardPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <DashboardPage />
    </div>
  );
};

export default App;
