import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './rootReducer';
import { selectCurrentUser, authenticate } from '../features/auth/authSlice';
import GlobalStyle from './App.styles';
import LoginPage from '../features/auth/LoginPage';

const App: React.FC = () => {
  const currentUser = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) {
      dispatch(authenticate());
    }
  }, [currentUser, dispatch]);

  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        {currentUser && (
          <Route exact path="/">
            <h1>Protected route</h1>
          </Route>
        )}
        <Route exact path="/login" component={LoginPage} />
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
