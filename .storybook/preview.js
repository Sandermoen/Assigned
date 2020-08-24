import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/constants/theme';
import GlobalStyle from '../src/app/App.styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
