import React from 'react';
import { Route } from 'react-router-dom';

import { PageContainer } from './AuthRoute.styles';

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
}) => {
  const authRouteVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Route
      {...props}
      exact={exact}
      path={path}
      render={() => {
        if (requireAuth) {
          return authenticated ? (
            <PageContainer
              variants={authRouteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {children}
            </PageContainer>
          ) : (
            <MotionRedirect to="/login" />
          );
        } else {
          return !authenticated ? children : <MotionRedirect to="/" />;
        }
      }}
    />
  );
};

export default AuthRoute;
