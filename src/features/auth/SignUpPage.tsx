import React from 'react';
import { FaUserGraduate, FaUser } from 'react-icons/fa';

import RadioButton from '../../components/RadioButton/RadioButton';

const SignUpPage: React.FC = () => (
  <form>
    <RadioButton
      value="Student"
      id="student"
      name="radio"
      icon={<FaUserGraduate />}
    />
    <RadioButton value="Teacher" id="teacher" name="radio" icon={<FaUser />} />
  </form>
);

export default SignUpPage;
