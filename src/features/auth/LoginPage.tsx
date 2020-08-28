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
export const transition = {
  x: { type: 'spring', stiffness: 500, damping: 200 },
  when: 'beforeChildren',
};

const LoginPage: React.FC = () => {
  return (
    <PageContainer>
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
      <LoginContainer
        variants={formVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        <LoginForm />
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
