import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: React.ElementType;
  path: string;
  exact?: boolean;
  authenticated?: boolean;
}

const UnauthenticatedRoute: React.FC<Props> = ({
  component: C,
  authenticated,
  path,
  exact,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      !authenticated ? <C {...props} /> : <Redirect to={`/`} />
    }
  />
);

export default UnauthenticatedRoute;
