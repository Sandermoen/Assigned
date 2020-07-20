import styled from 'styled-components';

export const PageContainer = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary1};
  color: ${(props) => props.theme.white};
  display: flex;
`;

export const Section = styled.section`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`;
