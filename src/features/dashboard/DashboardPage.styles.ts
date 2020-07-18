import styled from 'styled-components';

export const PageContainer = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary1};
  color: #ffffff;
  display: flex;
`;

export const Section = styled.section`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 5rem;
`;

export const SubText = styled.h3`
  color: ${(props) => props.theme.secondary1};
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const LeftContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
