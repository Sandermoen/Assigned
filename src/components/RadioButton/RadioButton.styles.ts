import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  background-color: ${(props) => props.theme.primary1};
  width: 10rem;
  word-wrap: break-word;
  text-align: center;
  height: auto;
  padding: 2rem;
  margin: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 200ms ease-out;

  ${Input}:checked + & {
    background-color: ${(props) => props.theme.tertiary1};
  }

  ${Input}:hover + & {
    border-color: ${(props) => props.theme.white};
  }
`;
