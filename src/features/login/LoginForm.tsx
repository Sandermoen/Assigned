import React, { Fragment } from 'react';

import {
  LoginTitle,
  StyledForm,
  StyledLabel,
  FormGroup,
  SignUpCTA,
  HighlightedLink,
  LabelGroup,
  ForgotPassword,
} from './LoginForm.styles';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const LoginForm: React.FC = () => {
  return (
    <Fragment>
      <LoginTitle>Log in</LoginTitle>
      <StyledForm>
        <FormGroup>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Input id="email" type="email" />
        </FormGroup>

        <FormGroup>
          <LabelGroup>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <ForgotPassword to="/recover">Forgot password?</ForgotPassword>
          </LabelGroup>
          <Input id="password" type="password" />
        </FormGroup>

        <FormGroup>
          <Button color="orange">Log in</Button>
        </FormGroup>
        <SignUpCTA>
          Don&apos;t have an account?{' '}
          <HighlightedLink to="/signup">Sign up</HighlightedLink>
        </SignUpCTA>
      </StyledForm>
    </Fragment>
  );
};

export default LoginForm;
