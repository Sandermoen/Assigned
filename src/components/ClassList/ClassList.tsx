import React from 'react';

import {
  ClassContainer,
  ClassHeading,
  ClassHeadingSubText,
} from './ClassList.styles';

import ClassButton from '../ClassButton/ClassButton';

const ClassList: React.FC = () => (
  <ClassContainer>
    <ClassHeading>
      Classes <ClassHeadingSubText>(13)</ClassHeadingSubText>
    </ClassHeading>
    <ClassButton to="/class" name="Geography" />
    <ClassButton to="/class" name="Physics" notification />
    <ClassButton to="/class" name="Calculus II" />
    <ClassButton to="/class" name="Statistics" />
    <ClassButton to="/class" name="Algebra" />
    <ClassButton to="/class" name="8+" />
  </ClassContainer>
);

export default ClassList;
