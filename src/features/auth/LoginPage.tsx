import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../app/rootReducer';
import { selectCurrentUser } from '../../features/auth/authSlice';

import {
  PageContainer,
  Logo,
  ShowcaseContainer,
  LoginContainer,
  ShowcaseImg,
  Showcase,
  ShowcaseTitle,
} from './LoginPage.styles';

import mockup from '../../assets/img/mockup.png';

import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const currentUser = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );

  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);

  return (
    <PageContainer>
      <ShowcaseContainer>
        <Logo>assigned</Logo>
        <Showcase>
          <ShowcaseImg src={mockup} />
          <ShowcaseTitle>The future of learning</ShowcaseTitle>
        </Showcase>
      </ShowcaseContainer>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
