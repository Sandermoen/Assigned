import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MdAssignment,
  MdHome,
  MdSchool,
  MdChatBubble,
  MdSettings,
  MdNotifications,
} from 'react-icons/md';

import {
  Container,
  Link,
  ListItem,
  IconContainer,
  LinkText,
  AvatarImage,
  TopContainer,
  Username,
  NotificationBellContainer,
} from './Sidebar.styles';
import defaultAvatar from '../../assets/img/defaultAvatar.jpg';

import Button from '../../components/Button/Button';

const Sidebar: React.FC = () => {
  const links = [
    { to: '/', text: 'Home', icon: <MdHome /> },
    { to: '/assignments', text: 'Assignments', icon: <MdAssignment /> },
    { to: '/classes', text: 'Classes', icon: <MdSchool /> },
    { to: '/messages', text: 'Messages', icon: <MdChatBubble /> },
    { to: '/settings', text: 'Settings', icon: <MdSettings /> },
  ];
  const location = useLocation();
  return (
    <Container>
      <TopContainer>
        <AvatarImage src={defaultAvatar} />
        <Username>Samantha</Username>
        <NotificationBellContainer>
          <MdNotifications />
        </NotificationBellContainer>
      </TopContainer>
      <ul>
        {links.map((link) => (
          <ListItem key={link.to}>
            <Link to={link.to} selected={location.pathname === link.to}>
              <IconContainer>{link.icon}</IconContainer>
              <LinkText selected={location.pathname === link.to}>
                {link.text}
              </LinkText>
            </Link>
          </ListItem>
        ))}
      </ul>
      <Button color="orange">Join Classroom</Button>
    </Container>
  );
};

export default Sidebar;
