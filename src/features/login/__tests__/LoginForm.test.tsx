import React from 'react';
import { render, fireEvent, cleanup } from '../../../utils/testUtils';

import LoginForm from '../LoginForm';

afterEach(cleanup);

describe('<LoginForm />', () => {
  test.each(['Email', 'Password'])(
    'Inputting text updates the %s value',
    (label) => {
      const { getByLabelText } = render(<LoginForm />);
      const input = getByLabelText(label) as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input.value).toBe('test');
    }
  );
});
