import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Heading, SubText, Container } from './ClassSelector.styles';

import Input from '../../components/Input/Input';
import ClassList from '../../components/ClassList/ClassList';

const ClassSelector: React.FC = () => (
  <Container>
    <Heading>Hi Samantha</Heading>
    <SubText>Welcome back, we missed you!</SubText>
    <Input>
      <MdSearch size="24px" />
    </Input>
    <ClassList />
  </Container>
);

export default ClassSelector;
