import styled from 'styled-components';

export const InputContainer = styled.div`
  background-color: #2f4858;
  border-radius: 15px;
  width: 30rem;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: inherit;
  border: none;
  padding: 1.3rem;
  color: #ffffff;
  font-size: 2rem;

  &::placeholder {
    color: currentColor;
  }
`;

export const IconContainer = styled.div`
  color: white;
  padding-left: 2rem;
`;
