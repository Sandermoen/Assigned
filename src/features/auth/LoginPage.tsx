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

const LoginPage: React.FC = () => {
  const pageVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: '-100vw',
      transition: {
        duration: 1.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  return (
    <PageContainer
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
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
