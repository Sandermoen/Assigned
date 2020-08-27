import React, { Fragment, useEffect } from 'react';
import { ObjectSchema } from 'yup';
import { useFormikContext } from 'formik';

import { FormValidationErrors } from './WizardForm';

interface Props {
  children: React.ReactNode;
  validationSchema?: ObjectSchema;
  onError?: (errors: FormValidationErrors) => void;
}

const WizardStep: React.FC<Props> = ({ children, onError }) => {
  const { errors } = useFormikContext();
  useEffect(() => {
    if (onError) {
      onError(errors);
    }
  }, [errors, onError]);
  return <Fragment>{children}</Fragment>;
};

export default WizardStep;
