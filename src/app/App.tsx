import React from 'react';

import '../utils/fontAwesomeLibrary';

import GlobalStyle from './app.styles';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload. saving
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;