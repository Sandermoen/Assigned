import React from 'react';

import {
  PageContainer,
  Logo,
  ShowcaseContainer,
  FormContainer,
  ShowcaseImg,
  Showcase,
  ShowcaseTitle,
} from './LoginPage.styles';

import mockup from '../../assets/img/mockup.png';

import LoginForm from './LoginForm';

import { transition } from '../../utils/animationUtils';

const formVariant = {
  initial: { x: 0, y: '5rem', opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  exit: { x: '-100%' },
};
const showcaseVariant = {
  ...formVariant,
  initial: { x: 0, y: 0, opacity: 1 },
  exit: { x: '100%' },
};

const LoginPage: React.FC = () => {
  return (
    <PageContainer key="loginPage">
      <ShowcaseContainer
        variants={showcaseVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        key="loginShowcaseContainer"
      >
        <Logo>assigned</Logo>
        <Showcase>
          <ShowcaseImg src={mockup} />
          <ShowcaseTitle>The future of learning</ShowcaseTitle>
        </Showcase>
      </ShowcaseContainer>
      <FormContainer
        variants={formVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        key="loginFormContainer"
      >
        <LoginForm />
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;
