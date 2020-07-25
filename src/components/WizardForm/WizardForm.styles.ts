import styled from 'styled-components';
import { Form } from 'formik';

import Button from '../Button/Button';

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex-basis: calc(50% - 1rem);
  }
  & > * {
    &:not(:nth-child(even)) {
      margin-right: 2rem;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 4rem;
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.secondary1};
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: auto;
`;

export const NextButton = styled(Button)`
  margin-left: auto;
`;
