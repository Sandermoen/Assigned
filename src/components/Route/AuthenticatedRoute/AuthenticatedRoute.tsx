import React from 'react';
import { Route } from 'react-router-dom';

import MotionRedirect from '../../MotionRedirect/MotionRedirect';

interface Props {
  component: React.ElementType;
  path: string;
  exact?: boolean;
  authenticated?: boolean;
}

const AuthenticatedRoute: React.FC<Props> = ({
  component: C,
  authenticated,
  path,
  exact,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      authenticated ? <C {...props} /> : <MotionRedirect to={`/login`} />
    }
  />
);

export default AuthenticatedRoute;
