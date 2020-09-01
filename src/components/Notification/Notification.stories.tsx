import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Notification, { Props } from './Notification';

export default {
  title: 'Single/Notification',
  component: Notification,
} as Meta;

const Template: Story<Props> = (args) => <Notification {...args} />;

export const Pending = Template.bind({});
Pending.args = {
  type: 'pending',
  children: 'Pending notification',
};

export const Fulfilled = Template.bind({});
Fulfilled.args = {
  type: 'fulfilled',
  children: 'Fulfilled notification',
};

export const Rejected = Template.bind({});
Rejected.args = {
  type: 'rejected',
  children: 'Rejected notification',
};
