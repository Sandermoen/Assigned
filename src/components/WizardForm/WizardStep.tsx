import React, { Fragment } from 'react';
import { ObjectSchema } from 'yup';

interface Props {
  children: React.ReactNode;
  validationSchema?: ObjectSchema;
  onSubmit?: Function;
}

const WizardStep: React.FC<Props> = ({ children }) => (
  <Fragment>{children}</Fragment>
);

export default WizardStep;
