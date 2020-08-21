import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FaUserGraduate } from 'react-icons/fa';

import RadioButton, { Props } from './RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<Props> = (args) => (
  <Fragment>
    <RadioButton {...args} />
    <RadioButton {...args} id="radio2" />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  icon: <FaUserGraduate />,
  id: 'radio',
  name: 'radio',
  value: 'Student',
};
