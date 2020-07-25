import styled from 'styled-components';

export const StyledPageContainer = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary1};
  color: ${(props) => props.theme.white};
`;
