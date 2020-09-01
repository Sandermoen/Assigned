import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { Props } from './Input';

export default {
  title: 'Single/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Highlighted = Template.bind({});
Highlighted.args = {
  highlight: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
