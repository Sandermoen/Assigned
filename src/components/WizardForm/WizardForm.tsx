import React, { useState, Fragment } from 'react';
import { Formik, Field as FormikField } from 'formik';

import { StyledForm } from './WizardForm.styles';

import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import Label from '../Label/Label';

interface Field {
  type: 'email' | 'text' | 'password';
  id: string;
  name: string;
  component: 'Input' | 'RadioButton';
  icon?: React.ReactNode;
  label?: string;
}

interface Props {
  steps: Array<{
    initialValues: Record<string, string | number>;
    fields: Record<string, Field>;
  }>;
}

const WizardForm: React.FC<Props> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const currentFields = steps[currentStep];
  return (
    <Formik
      initialValues={currentFields.initialValues}
      onSubmit={(values) => console.log(values)}
      enableReinitialize
    >
      {(props) => (
        <StyledForm>
          {Object.keys(currentFields.fields).map((key) => {
            const { component, ...rest } = currentFields.fields[key];
            return (
              <Fragment key={rest.id}>
                {rest.label && <Label htmlFor={rest.id}>{rest.label}</Label>}
                <FormikField
                  component={component === 'Input' ? Input : RadioButton}
                  value={props.values[key]}
                  {...rest}
                />
              </Fragment>
            );
          })}
          <button
            onClick={(event) => {
              event.preventDefault();
              if (steps.length - 1 > currentStep) {
                setCurrentStep((previous) => previous + 1);
              }
            }}
          >
            Next
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              if (currentStep !== 0) {
                setCurrentStep((previous) => previous - 1);
              }
            }}
          >
            Previous
          </button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default WizardForm;
