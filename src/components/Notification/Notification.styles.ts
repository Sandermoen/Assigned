import styled from 'styled-components';

import { Props } from './Notification';

export const NotificationContainer = styled.div<Props>`
  width: 100%;
  padding: 2rem 3rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.type === 'rejected'
      ? props.theme.tertiary1
      : props.type === 'fulfilled'
      ? props.theme.green1
      : props.theme.yellow1};
  position: absolute;
  top: 0;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const NotificationContent = styled.div`
  text-align: center;
  flex-basis: 100%;
`;

export const IconContainer = styled.span`
  font-size: ${(props) => props.theme.icon['2x']};
  display: flex;
`;
