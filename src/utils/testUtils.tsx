import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from '../app/store';
import theme from '../constants/theme';

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Record<string, unknown>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
