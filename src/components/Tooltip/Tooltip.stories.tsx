import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Tooltip, { Props } from './Tooltip';

export default {
  title: 'Single/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<Props> = (args) => (
  <h1 style={{ color: 'white', position: 'relative', marginTop: '50vh' }}>
    Some text <Tooltip show {...args}></Tooltip>
  </h1>
);

export const Top = Template.bind({});
Top.args = {
  direction: 'top',
  children: ['This is a top aligned tooltip'],
};

export const Bottom = Template.bind({});
Bottom.args = {
  direction: 'bottom',
  children: ['This is a bottom aligned tooltip'],
};

export const Left = Template.bind({});
Left.args = {
  direction: 'left',
  children: ['This is a left aligned tooltip'],
};

export const Right = Template.bind({});
Right.args = {
  direction: 'right',
  children: ['This is a right aligned tooltip'],
};
