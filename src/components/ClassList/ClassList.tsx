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
    <ClassButton to="#" name="Geography" />
    <ClassButton to="#" name="Physics" notification />
    <ClassButton to="#" name="Calculus II" />
    <ClassButton to="#" name="Statistics" />
    <ClassButton to="#" name="Algebra" />
    <ClassButton to="#" name="8+" />
  </ClassContainer>
);

export default ClassList;
