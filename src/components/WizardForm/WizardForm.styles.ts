import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > :not(:last-child) {
    margin-right: 2rem;
  }
`;
