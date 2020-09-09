import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  MdAssignment,
  MdHome,
  MdSchool,
  MdChatBubble,
  MdSettings,
  MdNotifications,
  MdChevronLeft,
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
  ToggleExpandedButton,
} from './Sidebar.styles';
import defaultAvatar from '../../assets/img/defaultAvatar.jpg';

import Button from '../../components/Button/Button';

const Sidebar: React.FC = () => {
  const shouldExpand = localStorage.getItem('sidebarExpand');
  const [expanded, setExpanded] = useState<boolean | null>(
    shouldExpand === null ? true : JSON.parse(shouldExpand)
  );
  const location = useLocation();
  const links = [
    { to: '/', text: 'Home', icon: <MdHome /> },
    { to: '/assignments', text: 'Assignments', icon: <MdAssignment /> },
    { to: '/classes', text: 'Classes', icon: <MdSchool /> },
    { to: '/messages', text: 'Messages', icon: <MdChatBubble /> },
    { to: '/settings', text: 'Settings', icon: <MdSettings /> },
  ];

  const containerVariants = {
    expanded: {
      width: '20vw',
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: 'beforeChildren',
        width: { type: 'spring', stiffness: 500, damping: 200 },
      },
    },
    retracted: {
      width: '15rem',
      transition: {
        staggerChildren: 0.1,
        when: 'afterChildren',
        width: { type: 'spring', stiffness: 500, damping: 200 },
      },
    },
  };

  const toggleButtonVariants = {
    expanded: {
      transform: 'translate(-50%, -50%) rotate(0deg)',
    },
    retracted: {
      transform: 'translate(-50%, -50%) rotate(180deg)',
    },
  };

  useEffect(() => {
    localStorage.setItem('sidebarExpand', JSON.stringify(expanded));
  }, [expanded]);

  return (
    <Container
      expanded={expanded}
      variants={containerVariants}
      initial={expanded ? 'expanded' : 'retracted'}
      animate={expanded ? 'expanded' : 'retracted'}
    >
      <ToggleExpandedButton
        onClick={() => setExpanded((previous) => !previous)}
        variants={toggleButtonVariants}
      >
        <MdChevronLeft />
      </ToggleExpandedButton>
      <TopContainer expanded={expanded}>
        <AvatarImage layout src={defaultAvatar} />
        {expanded && <Username>Samantha</Username>}
        <NotificationBellContainer layout>
          <MdNotifications />
        </NotificationBellContainer>
      </TopContainer>
      <ul
        style={{
          marginBottom: `${expanded ? 0 : 'auto'}`,
        }}
      >
        <AnimatePresence>
          {links.map((link) => (
            <ListItem key={link.text}>
              <Link
                key={link.to}
                to={link.to}
                selected={location.pathname === link.to}
              >
                <IconContainer layout>{link.icon}</IconContainer>
                {expanded && (
                  <LinkText selected={location.pathname === link.to}>
                    {link.text}
                  </LinkText>
                )}
              </Link>
            </ListItem>
          ))}
        </AnimatePresence>
      </ul>

      <Button
        color="orange"
        style={{
          visibility: `${expanded ? 'visible' : 'hidden'}`,
          height: '6rem',
        }}
      >
        Join Classroom
      </Button>
    </Container>
  );
};

export default Sidebar;
