import React, { useEffect } from 'react';
import { ObjectSchema } from 'yup';
import { useFormikContext } from 'formik';
import { motion } from 'framer-motion';

import { FormValidationErrors } from './WizardForm';

import { transition } from '../../utils/animationUtils';

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

  const stepVariant = {
    initial: { y: '2rem', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '2rem', opacity: 0 },
  };

  return (
    <motion.div
      variants={stepVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default WizardStep;
