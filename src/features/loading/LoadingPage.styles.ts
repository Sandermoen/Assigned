import styled from 'styled-components';

export const PageContainer = styled.main`
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.primary2};
  font-size: 8rem;
`;
