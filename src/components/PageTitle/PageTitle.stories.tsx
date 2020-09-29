import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PageTitle, { Props } from './PageTitle';

export default {
  title: 'Single/PageTitle',
  component: PageTitle,
} as Meta;

const Template: Story<Props> = (args) => <PageTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Primary page title',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  children: 'Tertiary page title',
};
