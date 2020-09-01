import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { Props } from './Button';

export default {
  title: 'Single/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

export const Orange = Template.bind({});
Orange.args = {
  children: 'Orange Button',
  color: 'orange',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: 'Loading Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};
