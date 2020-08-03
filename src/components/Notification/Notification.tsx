import React from 'react';
import { GoAlert } from 'react-icons/go';

import {
  NotificationContainer,
  NotificationContent,
  IconContainer,
} from './Notification.styles';

type NotificationTypes = 'pending' | 'rejected' | 'fulfilled';

export interface Props {
  type: NotificationTypes;
  children: React.ReactNode;
}

const Notification: React.FC<Props> = ({ type, children }) => (
  <NotificationContainer type={type}>
    <IconContainer>
      <GoAlert />
    </IconContainer>
    <NotificationContent>{children}</NotificationContent>
  </NotificationContainer>
);

export default Notification;
