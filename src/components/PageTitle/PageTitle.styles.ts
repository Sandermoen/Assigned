import styled from 'styled-components';

import { Props } from './PageTitle';

export const Title = styled.h1<Props>`
  font-weight: 600;
  font-size: 5rem;
  color: ${(props) =>
    props.color === 'primary' ? props.theme.primary1 : props.theme.tertiary1};
`;
