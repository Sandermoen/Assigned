import React, { useState, Fragment, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { MdChevronRight } from 'react-icons/md';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {
  FieldContainer,
  Title,
  SubTitle,
  ButtonContainer,
  NextButton,
  StyledForm,
} from './WizardForm.styles';

type Validation = (values: {
  [key: string]: string;
}) => { [key: string]: string } | {};

interface Field {
  type: string;
  name: string;
  placeholder?: string;
  component?: React.ReactNode;
}

export interface Step {
  title: string;
  description: string;
  validation: Validation;
  fields: Field[];
  initialValues: { [key: string]: string };
}

type SetStep = (step: number) => void;

const WizardForm: React.FC<{ steps: Step[]; setStep?: SetStep }> = ({
  steps,
  setStep,
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [finalValues, setFinalValues] = useState<{ [key: string]: string }>({});
  const currentStep = steps[currentStepIdx];

  useEffect(() => {
    if (Object.keys(finalValues).length !== 0) {
      if (currentStepIdx === steps.length - 1) {
        console.log('SUBMITTED', finalValues);
      } else {
        setCurrentStepIdx((previous) => previous + 1);
      }
    }
    // eslint-disable-next-line
  }, [finalValues, steps, setCurrentStepIdx]);

  useEffect(() => {
    setStep && setStep(currentStepIdx);
  }, [currentStepIdx, setStep]);

  return (
    <Fragment>
      <Title>{currentStep.title}</Title>
      <SubTitle>{currentStep.description}</SubTitle>
      <Formik
        initialValues={currentStep.initialValues}
        onSubmit={(values) => {
          currentStep.initialValues = { ...values };
          setFinalValues((previous) => ({ ...previous, ...values }));
        }}
        validate={currentStep.validation}
        enableReinitialize
      >
        {({ values }) => (
          <StyledForm>
            <FieldContainer>
              {currentStep.fields.map((field, idx) => (
                <Fragment key={field.name}>
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    component={field.component || Input}
                    value={values[field.name] || ''}
                    style={
                      idx === currentStep.fields.length - 1 &&
                      (idx + 1) % 2 !== 0 && {
                        flexBasis: '100%',
                      }
                    }
                  />
                </Fragment>
              ))}
            </FieldContainer>
            <ButtonContainer>
              {currentStepIdx !== 0 && (
                <Button
                  transparent
                  inverted
                  onClick={(event: Event) => {
                    event.preventDefault();
                    setCurrentStepIdx((previous) => previous - 1);
                  }}
                >
                  Previous Step
                </Button>
              )}
              <NextButton inverted icon={<MdChevronRight />}>
                {currentStepIdx === steps.length - 1 ? 'Submit' : 'Next'}
              </NextButton>
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </Fragment>
  );
};

export default WizardForm;
