import React, { useState } from 'react';
import { FaUserGraduate, FaUser } from 'react-icons/fa';
import * as Yup from 'yup';
import { Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { RadioContainer } from './SignUpForm.styles';
import {
  CallToAction,
  HighlightedLink,
  FormContainer,
} from './LoginForm.styles';
import { formVariant, transition } from './LoginForm';
import { FormValidationErrors } from '../../components/WizardForm/WizardForm';
import { SignUpData } from '../../services/users';
import { RootState } from '../../app/rootReducer';
import { selectError, selectStatus, signUp, clearError } from './authSlice';

import WizardForm from '../../components/WizardForm/WizardForm';
import WizardStep from '../../components/WizardForm/WizardStep';
import FormGroup from '../../components/Form/FormGroup/FormGroup';

import FormTitle from '../../components/Form/FormTitle/FormTitle';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import RadioButton from '../../components/RadioButton/RadioButton';

const SignUpForm: React.FC = () => {
  const [
    formValidationErrors,
    setFormValidationErrors,
  ] = useState<FormValidationErrors | null>(null);
  const error = useSelector((state: RootState) => selectError(state));
  const status = useSelector((state: RootState) => selectStatus(state));
  const dispatch = useDispatch();

  return (
    <FormContainer variants={formVariant} exit="exit" transition={transition}>
      <FormTitle>Sign Up</FormTitle>
      <WizardForm
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          role: 'Student',
        }}
        onSubmit={(values) => dispatch(signUp(values as SignUpData))}
        submitButtonText="Sign Up"
        error={error}
      >
        <WizardStep
          onError={(errors) => setFormValidationErrors(errors)}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email.')
              .required('Email is a required field.'),
            password: Yup.string().required('Password is a required field.'),
          })}
        >
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Field
              component={Input}
              id="email"
              name="email"
              type="email"
              highlight={formValidationErrors && formValidationErrors.email}
              disabled={status === 'pending'}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Field
              component={Input}
              id="password"
              name="password"
              type="password"
              highlight={formValidationErrors && formValidationErrors.password}
              disabled={status === 'pending'}
            />
          </FormGroup>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('First name is a required field.'),
            lastName: Yup.string().required('Last name is a required field.'),
          })}
          onError={(errors) => setFormValidationErrors(errors)}
        >
          <FormGroup>
            <Label htmlFor="firstName">First name</Label>
            <Field
              component={Input}
              id="firstName"
              name="firstName"
              type="text"
              highlight={formValidationErrors && formValidationErrors.firstName}
              disabled={status === 'pending'}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="lastName">Last name</Label>
            <Field
              component={Input}
              id="lastName"
              name="lastName"
              type="text"
              highlight={formValidationErrors && formValidationErrors.lastName}
              disabled={status === 'pending'}
            />
          </FormGroup>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object().shape({
            role: Yup.string().required('Please select a role.'),
          })}
        >
          <RadioContainer>
            <Field
              component={RadioButton}
              icon={<FaUserGraduate />}
              id="student"
              name="role"
              value="Student"
              type="radio"
              disabled={status === 'pending'}
            />
            <Field
              component={RadioButton}
              icon={<FaUser />}
              id="teacher"
              name="role"
              value="Teacher"
              type="radio"
              disabled={status === 'pending'}
            />
          </RadioContainer>
        </WizardStep>
      </WizardForm>
      <CallToAction>
        Already have an account?{' '}
        <HighlightedLink to="/login" onClick={() => dispatch(clearError())}>
          Log in
        </HighlightedLink>
      </CallToAction>
    </FormContainer>
  );
};

export default SignUpForm;
