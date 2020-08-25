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

import SignUpForm from './SignUpForm';
import mockup from '../../assets/img/mockup.png';

const SignUpPage: React.FC = () => (
  <PageContainer>
    <LoginContainer>
      <SignUpForm />
    </LoginContainer>
    <ShowcaseContainer>
      <Logo>assigned</Logo>
      <Showcase>
        <ShowcaseImg src={mockup} />
        <ShowcaseTitle>The future of learning</ShowcaseTitle>
      </Showcase>
    </ShowcaseContainer>
  </PageContainer>
);

export default SignUpPage;
