import { Step } from '../../components/WizardForm/WizardForm';

const steps: Step[] = [
  {
    title: 'Personal Details',
    description: 'Details about yourself - we do not share these with others.',
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
    validation: (values) => {
      interface Error {
        firstName?: string;
        lastName?: string;
        password?: string;
        confirmPassword?: string;
        email?: string;
      }
      const error: Error = {};
      if (!values.firstName) {
        error.firstName = 'Please provide a first name.';
      }
      if (!values.lastName) {
        error.lastName = 'Please provide a last name';
      }
      if (!values.password) {
        error.password = 'Please provide a password';
      }
      if (!values.confirmPassword) {
        error.confirmPassword = 'Please confirm your password.';
      }
      if (values.confirmPassword !== values.password) {
        error.confirmPassword = 'Passwords do not match';
      }
      if (!values.email) {
        error.email = 'Please provide an email.';
      }
      return error;
    },
    fields: [
      { name: 'firstName', type: 'text', placeholder: 'First name' },
      { name: 'lastName', type: 'text', placeholder: 'Last name' },
      { name: 'password', type: 'password', placeholder: 'Password' },
      {
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'Confirm password',
      },
      { name: 'email', type: 'text', placeholder: 'Email' },
    ],
  },
  {
    title: 'Second name',
    description: 'Give it to me please.',
    initialValues: {
      secondName: '',
    },
    validation: (values) => {
      interface Error {
        secondName?: string;
      }
      const error: Error = {};
      if (!values.secondName) {
        error.secondName = 'Please provide a second name.';
      }
      return error;
    },
    fields: [
      {
        name: 'secondName',
        type: 'text',
        placeholder: 'Second name',
      },
    ],
  },
];

export default steps;
