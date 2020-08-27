import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitForElement,
} from '../../../utils/testUtils';
import { Field } from 'formik';
import * as Yup from 'yup';

import WizardForm from '../../WizardForm/WizardForm';
import WizardStep from '../../WizardForm/WizardStep';

describe('<WizardForm />', () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const mockSubmit = jest.fn();
  beforeEach(() => {
    mockSubmit.mockReset();
  });

  describe('One step', () => {
    beforeEach(() => {
      render(
        <WizardForm initialValues={initialValues} onSubmit={mockSubmit}>
          <WizardStep
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().required(),
            })}
          >
            <h1>first step</h1>
            <label htmlFor="email">Email</label>
            <Field name="email" id="email" type="text" />
            <label htmlFor="password">Password</label>
            <Field name="password" id="password" type="password" />
          </WizardStep>
        </WizardForm>
      );
    });

    test('Renders form', () => {
      screen.getByRole('form');
    });

    test('Displays error notification when submitting a form with invalid inputs', async () => {
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
      await waitForElement(() => screen.getByTestId('notification'));
    });

    test('Does not go to a previous step that does not exist', () => {
      fireEvent.click(screen.getByRole('button', { name: /previous/i }));
      screen.getByRole('heading', { name: /first step/i });
    });

    test('Unable to proceed to a next step when there isnt one', () => {
      expect(screen.queryByRole('button', { name: /next/i })).toBeNull();
    });

    test('Submits form with correct values', async () => {
      expect.assertions(2);
      const credentials = { email: 'test@gmail.com', password: 'test' };
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: credentials.email },
      });
      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: credentials.password },
      });
      await waitForElement(() =>
        fireEvent.click(screen.getByRole('button', { name: /submit/i }))
      );
      expect(mockSubmit).toHaveBeenCalledWith(credentials);
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('Multiple steps', () => {
    beforeEach(() => {
      render(
        <WizardForm initialValues={initialValues} onSubmit={mockSubmit}>
          <WizardStep>
            <h1>first step</h1>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
          </WizardStep>
          <WizardStep>
            <h1>second step</h1>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
          </WizardStep>
        </WizardForm>
      );
    });

    test('Does not show submit button when not on last step', () => {
      expect(screen.queryByRole('button', { name: /submit/i })).toBeNull();
    });

    describe('Button functionality', () => {
      beforeEach(() => {
        screen.getByRole('heading', { name: /first step/i });
        fireEvent.change(screen.getByLabelText(/email/i), {
          target: { value: 'test@gmail.com' },
        });
        fireEvent.click(screen.getByRole('button', { name: /next/i }));
      });

      test('Clicking the `Next` button advances to the next step', async () => {
        await waitForElement(() =>
          screen.getByRole('heading', { name: /second step/i })
        );
      });

      test('Clicking the `Previous` button regresses to the previous step', async () => {
        fireEvent.click(screen.getByRole('button', { name: /previous/i }));
        await waitForElement(() =>
          screen.getByRole('heading', { name: /first step/ })
        );
      });

      test('Shows submit button on last step', async () => {
        await waitForElement(() =>
          screen.getByRole('button', { name: /submit/i })
        );
      });
    });
  });
});
