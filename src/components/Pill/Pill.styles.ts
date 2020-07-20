import styled from 'styled-components';

export interface Props {
  variant: 'success' | 'pending' | 'incomplete';
}

export const StyledDiv = styled.div<Props>`
  width: 13rem;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.variant === 'success'
      ? props.theme.primary1
      : props.variant === 'pending'
      ? props.theme.secondary1
      : props.theme.grey2};
  color: ${(props) => props.theme.white};
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;
