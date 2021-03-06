import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { RootState } from './rootReducer';
import { AppDispatch } from './store';
import { selectCurrentUser, authenticate } from '../features/auth/authSlice';
import GlobalStyle from './App.styles';

import LoadingPage from '../features/loading/LoadingPage';
import LoginPage from '../features/auth/LoginPage';
import SignUpPage from '../features/auth/SignUpPage';
import HomePage from '../features/home/HomePage';
import Sidebar from '../features/sidebar/Sidebar';
import AuthRoute from '../components/AuthRoute/AuthRoute';

const App: React.FC = () => {
  const currentUser = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );
  const [authenticating, setAuthenticating] = useState(true);
  const isAuthenticated = Boolean(currentUser);

  const location = useLocation();
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
          // Avoid awkward flash of logo in cases of short auth time
          setTimeout(() => {
            setAuthenticating(false);
          }, 500);
        }
      }
    };
    doAuth();
  }, [currentUser, dispatch]);

  return (
    <div
      className="App"
      style={isAuthenticated ? { display: 'flex' } : undefined}
    >
      <GlobalStyle />
      {currentUser && <Sidebar firstName={currentUser.firstName} />}
      <AnimatePresence exitBeforeEnter>
        {authenticating ? (
          <LoadingPage />
        ) : (
          <Switch key={location.key} location={location}>
            <AuthRoute exact path="/" authenticated={isAuthenticated}>
              <HomePage firstName={currentUser?.firstName} />
            </AuthRoute>
            <AuthRoute path="/assignments" authenticated={isAuthenticated}>
              <h1>Assignments</h1>
            </AuthRoute>
            <AuthRoute
              path="/login"
              authenticated={isAuthenticated}
              requireAuth={false}
            >
              <LoginPage />
            </AuthRoute>
            <AuthRoute
              path="/signup"
              authenticated={isAuthenticated}
              requireAuth={false}
            >
              <SignUpPage />
            </AuthRoute>
            <Route>
              <h1>Page not found</h1>
            </Route>
          </Switch>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
