import React from 'react';

import {
  Container,
  Header,
  SubHeader,
  AssignmentList,
  AssignmentHeader,
  AssignmentContainer,
} from './Assignments.styles';

import Pill from '../../components/Pill/Pill';
import CheckBox from '../../components/CheckBox/CheckBox';
import Divider from '../../components/Divider/Divider';

const Assignments: React.FC = () => (
  <Container>
    <Header>Assignments</Header>

    <AssignmentContainer>
      <SubHeader>Today</SubHeader>
      <Divider />
      <AssignmentList>
        <li>
          <CheckBox checked={1} />
          <AssignmentHeader>
            Developing systems of linear equations
          </AssignmentHeader>
          <Pill variant="success">Approved</Pill>
        </li>
        <li>
          <CheckBox checked={1} />
          <AssignmentHeader>
            Draw an industrial landscape in grayscale
          </AssignmentHeader>
          <Pill variant="pending">Pending Grade</Pill>
        </li>
        <li>
          <CheckBox />
          <AssignmentHeader>Draw a person in motion</AssignmentHeader>
          <Pill variant="incomplete">10 Hours Left</Pill>
        </li>
      </AssignmentList>
    </AssignmentContainer>

    <AssignmentContainer>
      <SubHeader>Upcoming</SubHeader>
      <Divider />
      <AssignmentList>
        <li>
          <CheckBox checked={1} />
          <AssignmentHeader>
            Developing systems of linear equations
          </AssignmentHeader>
          <Pill variant="success">Approved</Pill>
        </li>
        <li>
          <CheckBox checked={1} />
          <AssignmentHeader>
            Draw an industrial landscape in grayscale
          </AssignmentHeader>
          <Pill variant="pending">Pending Grade</Pill>
        </li>
        <li>
          <CheckBox />
          <AssignmentHeader>Draw a person in motion</AssignmentHeader>
          <Pill variant="incomplete">10 Hours Left</Pill>
        </li>
      </AssignmentList>
    </AssignmentContainer>
  </Container>
);

export default Assignments;
