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
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          margin: '0 auto',
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  ),
];
