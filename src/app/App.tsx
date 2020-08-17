import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Switch, Route } from 'react-router-dom';

import { RootState } from './rootReducer';
import { AppDispatch } from './store';
import { selectCurrentUser, authenticate } from '../features/auth/authSlice';
import GlobalStyle from './App.styles';
import LoginPage from '../features/auth/LoginPage';

import AuthenticatedRoute from '../components/AuthenticatedRoute/AuthenticatedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute/UnauthenticatedRoute';
import LoadingPage from '../features/loading/LoadingPage';
import AuthenticatedPage from '../features/auth/AuthenticatedPage';

const App: React.FC = () => {
  const currentUser = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );
  const [authenticating, setAuthenticating] = useState(true);
  const isAuthenticated = Boolean(currentUser);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const doAuth = async () => {
      if (!currentUser) {
        try {
          const result = await dispatch(authenticate());
          unwrapResult(result);
          // eslint-disable-next-line no-empty
        } catch (err) {
        } finally {
          setAuthenticating(false);
        }
      }
    };
    doAuth();
  }, [currentUser, dispatch]);

  return (
    <div className="App">
      <GlobalStyle />
      {authenticating ? (
        <LoadingPage />
      ) : (
        <Switch>
          <AuthenticatedRoute
            exact
            path="/"
            authenticated={isAuthenticated}
            component={AuthenticatedPage}
          />
          <UnauthenticatedRoute
            exact
            path="/login"
            authenticated={isAuthenticated}
            component={LoginPage}
          />
          <Route>
            <h1>Page not found</h1>
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
