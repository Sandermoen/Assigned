import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitForElement,
} from '../../../utils/testUtils';

import theme from '../../../constants/theme';
import LoginForm from '../LoginForm';

describe('<LoginForm />', () => {
  beforeEach(() => {
    render(<LoginForm />);
  });
  test.each(['Email', 'Password'])(
    'Inputting text updates the %s value',
    (label) => {
      const input = screen.getByLabelText(label) as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input.value).toBe('test');
    }
  );

  test('Displays error message and highlights inputs with errors when no details are filled in', async () => {
    expect.assertions(2);
    fireEvent.click(screen.getByRole('button', { name: /log in/i }));
    await waitForElement(() => screen.getByTestId('notification'));
    const expectedStyle = `border: 2px solid ${theme.tertiary1}`;
    expect(screen.getByLabelText(/email/i)).toHaveStyle(expectedStyle);
    expect(screen.getByLabelText(/password/i)).toHaveStyle(expectedStyle);
  });
});
