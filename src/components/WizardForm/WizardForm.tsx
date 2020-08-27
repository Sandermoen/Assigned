import React, { useState, Fragment } from 'react';
import { Formik, FormikErrors } from 'formik';

import { StyledForm, ButtonContainer } from './WizardForm.styles';

import Button from '../Button/Button';
import Notification from '../Notification/Notification';

type Values = Record<string, unknown>;
export type FormValidationErrors = FormikErrors<Record<string, unknown>>;

interface Props {
  children: React.ReactNode;
  onSubmit: (values: Values) => unknown;
  initialValues: Record<string, unknown>;
  submitButtonText?: string;
}

const WizardForm: React.FC<Props> = ({
  children,
  onSubmit,
  initialValues,
  submitButtonText,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[currentStep] as React.ReactElement;
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;

  const next = (values: Values) => {
    setSnapshot(values);
    setCurrentStep((previous) => previous + 1);
  };

  const previous = (values: Values) => {
    setSnapshot(values);
    setCurrentStep((previous) => previous - 1);
  };

  const handleSubmit = async (values: Values) => {
    if (isLastStep) {
      return await onSubmit(values);
    } else {
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
    >
      {(formik) => (
        <Fragment>
          {Object.values(formik.errors).length > 0 && (
            <Notification type="rejected">
              {Object.values(formik.errors).map((error) => (
                <p key={error}>{error}</p>
              ))}
            </Notification>
          )}
          <StyledForm aria-label="form">
            {step}
            <ButtonContainer>
              <Button
                onClick={(event: React.MouseEvent) => {
                  event.preventDefault();
                  if (currentStep > 0) {
                    previous(formik.values);
                  }
                }}
                color="white"
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button color="orange">
                {isLastStep ? submitButtonText || 'Submit' : 'Next'}
              </Button>
            </ButtonContainer>
          </StyledForm>
        </Fragment>
      )}
    </Formik>
  );
};

export default WizardForm;
