import React from 'react';
import { Route } from 'react-router-dom';

import MotionRedirect from '../MotionRedirect/MotionRedirect';

interface Props {
  children: React.ReactNode;
  path: string;
  requireAuth?: boolean;
  exact?: boolean;
  authenticated?: boolean;
}

const AuthRoute: React.FC<Props> = ({
  children,
  requireAuth = true,
  authenticated,
  path,
  exact,
  ...props
}) => (
  <Route
    {...props}
    exact={exact}
    path={path}
    render={() => {
      if (requireAuth) {
        return authenticated ? children : <MotionRedirect to="/login" />;
      } else {
        return !authenticated ? children : <MotionRedirect to="/" />;
      }
    }}
  />
);

export default AuthRoute;
