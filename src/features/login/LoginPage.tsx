import React from 'react';

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

const LoginPage: React.FC = () => (
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

export default LoginPage;
