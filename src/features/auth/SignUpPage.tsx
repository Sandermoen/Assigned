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

import { transition } from './LoginPage';

const formVariant = {
  initial: { x: 0, y: '5rem', opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  exit: { x: '100%' },
};
const showcaseVariant = {
  ...formVariant,
  initial: { x: 0, y: 0, opacity: 1 },
  exit: { x: '-100%' },
};

const SignUpPage: React.FC = () => (
  <PageContainer>
    <LoginContainer
      variants={formVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <SignUpForm />
    </LoginContainer>
    <ShowcaseContainer
      variants={showcaseVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <Logo>assigned</Logo>
      <Showcase>
        <ShowcaseImg src={mockup} />
        <ShowcaseTitle>The future of learning</ShowcaseTitle>
      </Showcase>
    </ShowcaseContainer>
  </PageContainer>
);

export default SignUpPage;
