import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 5rem;
`;

export const SubText = styled.h3`
  color: ${(props) => props.theme.secondary1};
  font-size: 2rem;
  font-weight: 500;
`;

export const Container = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
