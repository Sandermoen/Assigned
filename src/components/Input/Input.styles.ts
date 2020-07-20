import styled from 'styled-components';

import { border } from '../../utils/cssUtils';

export const InputContainer = styled.div`
  background-color: #2f4858;
  border-radius: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  ${border};

  &:focus-within {
    &::after {
      display: inline-block;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: inherit;
  border: none;
  padding: 1.5rem 1.3rem 1.5rem 0;
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  z-index: 2;

  &::placeholder {
    color: currentColor;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
`;
