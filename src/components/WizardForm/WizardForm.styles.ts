import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
  background: black;
`;
