import React from 'react';

import { Button, Container, ButtonSubText } from './ClassButton.styles';

import { firstLetters } from '../../utils/stringUtils';
import { randomGradient } from '../../utils/cssUtils';

const ClassButton: React.FC<{
  to: string;
  name: string;
  notification?: boolean;
}> = ({ to, name, notification }) => (
  <Container>
    <Button
      to={to}
      notification={notification ? 1 : 0}
      style={{ backgroundImage: `${randomGradient()}` }}
    >
      {firstLetters(name)}
    </Button>

    <ButtonSubText>{name}</ButtonSubText>
  </Container>
);

export default ClassButton;
