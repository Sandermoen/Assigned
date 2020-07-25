import React, { useState } from 'react';

import {
  Container,
  ProgressContainer,
  Icon,
  // StyledLogo,
  FormContainer,
  CheckBoxContainer,
  ProgressionTitle,
  ProgressionIcon,
} from './SignUpForm.styles';

// import logo from '../../assets/img/logo.png';
import steps from './steps';

import CheckBox from '../../components/CheckBox/CheckBox';
import WizardForm from '../../components/WizardForm/WizardForm';

const SignUpForm: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <Container>
      <ProgressContainer>
        {/* <StyledLogo src={logo} /> */}
        {steps.map((s, idx) => {
          const active = idx === step;
          return (
            <CheckBoxContainer key={s.title}>
              <CheckBox checked={idx < step ? 1 : 0} active={active}>
                {idx >= step && idx + 1}
              </CheckBox>
              <ProgressionTitle active={active}>{s.title}</ProgressionTitle>
              {active && <ProgressionIcon />}
            </CheckBoxContainer>
          );
        })}
        <Icon />
      </ProgressContainer>
      <FormContainer>
        <WizardForm steps={steps} setStep={setStep} />
      </FormContainer>
    </Container>
  );
};

export default SignUpForm;
