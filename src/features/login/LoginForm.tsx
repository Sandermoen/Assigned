import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../features/login/loginSlice';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <Fragment>
      <LoginTitle>Log in</LoginTitle>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(login({ email, password }));
        }}
      >
        <FormGroup>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Input id="email" type="email" value={email} onChange={setEmail} />
        </FormGroup>

        <FormGroup>
          <LabelGroup>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <ForgotPassword to="/recover">Forgot password?</ForgotPassword>
          </LabelGroup>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
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
