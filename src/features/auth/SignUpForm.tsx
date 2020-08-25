import React, { useState, Fragment } from 'react';
import * as Yup from 'yup';

import { Field } from 'formik';

import { FormValidationErrors } from '../../components/WizardForm/WizardForm';

import WizardForm from '../../components/WizardForm/WizardForm';
import WizardStep from '../../components/WizardForm/WizardStep';
import FormGroup from '../../components/Form/FormGroup/FormGroup';
import LabelGroup from '../../components/Form/LabelGroup/LabelGroup';
import FormTitle from '../../components/Form/FormTitle/FormTitle';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';

const SignUpForm: React.FC = () => {
  const [errors, setErrors] = useState<FormValidationErrors | null>(null);
  return (
    <Fragment>
      <FormTitle>Sign Up</FormTitle>
      <WizardForm
        initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
        onSubmit={() => console.log('form submit')}
        onError={(errors) => setErrors(errors)}
      >
        <WizardStep
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email.')
              .required('Email is a required field.'),
            password: Yup.string().required('Password is a required field.'),
          })}
        >
          <FormGroup>
            <LabelGroup>
              <Label htmlFor="email">Email</Label>
            </LabelGroup>
            <Field
              component={Input}
              id="email"
              name="email"
              type="email"
              highlight={errors && errors.email}
            />
          </FormGroup>
          <FormGroup>
            <LabelGroup>
              <Label htmlFor="password">Password</Label>
            </LabelGroup>
            <Field
              component={Input}
              id="password"
              name="password"
              type="password"
              highlight={errors && errors.password}
            />
          </FormGroup>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('First name is a required field.'),
            lastName: Yup.string().required('Last name is a required field.'),
          })}
        >
          <FormGroup>
            <LabelGroup>
              <Label htmlFor="firstName">First name</Label>
            </LabelGroup>
            <Field
              component={Input}
              id="firstName"
              name="firstName"
              type="text"
              highlight={errors && errors.firstName}
            />
          </FormGroup>

          <FormGroup>
            <LabelGroup>
              <Label htmlFor="lastName">Last name</Label>
            </LabelGroup>
            <Field
              component={Input}
              id="lastName"
              name="lastName"
              type="text"
              highlight={errors && errors.lastName}
            />
          </FormGroup>
        </WizardStep>
      </WizardForm>
    </Fragment>
  );
};

export default SignUpForm;
