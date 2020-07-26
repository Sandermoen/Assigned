import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    line-height: 1.6;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
