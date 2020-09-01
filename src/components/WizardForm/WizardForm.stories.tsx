import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import WizardForm, { Props } from './WizardForm';
import WizardStep from './WizardStep';
import Input from '../Input/Input';
import Label from '../Label/Label';
import FormGroup from '../Form/FormGroup/FormGroup';

export default {
  title: 'Composite/WizardForm',
  component: WizardForm,
} as Meta;

const Template: Story<Props> = (args) => <WizardForm {...args} />;

export const SingleStep = Template.bind({});
SingleStep.args = {
  initialValues: {
    email: '',
    password: '',
  },
  children: (
    <WizardStep>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </FormGroup>
    </WizardStep>
  ),
};

export const MultiStep = Template.bind({});
MultiStep.args = {
  initialValues: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  },
  children: [
    <WizardStep key={0}>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </FormGroup>
    </WizardStep>,
    <WizardStep key={1}>
      <FormGroup>
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" name="firstName" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastName">Last name</Label>
        <Input id="lastName" name="lastName" type="text" />
      </FormGroup>
    </WizardStep>,
  ],
};
