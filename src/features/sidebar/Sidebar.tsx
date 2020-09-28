import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
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
  ActiveLinkBackground,
} from './Sidebar.styles';
import defaultAvatar from '../../assets/img/defaultAvatar.jpg';

import Button from '../../components/Button/Button';

export interface Props {
  firstName: string;
}

const Sidebar: React.FC<Props> = ({ firstName }) => {
  const shouldExpand = localStorage.getItem('sidebarExpand');
  const [expanded, setExpanded] = useState<boolean | null>(
    shouldExpand === null ? true : JSON.parse(shouldExpand)
  );
  const [selectedLinkPos, setSelectedLinkPos] = useState<number | undefined>(0);
  const location = useLocation();
  const links = [
    {
      to: '/',
      text: 'Home',
      icon: <MdHome />,
      ref: useRef<HTMLLIElement>(null),
    },
    {
      to: '/assignments',
      text: 'Assignments',
      icon: <MdAssignment />,
      ref: useRef<HTMLLIElement>(null),
    },
    {
      to: '/classes',
      text: 'Classes',
      icon: <MdSchool />,
      ref: useRef<HTMLLIElement>(null),
    },
    {
      to: '/messages',
      text: 'Messages',
      icon: <MdChatBubble />,
      ref: useRef<HTMLLIElement>(null),
    },
    {
      to: '/settings',
      text: 'Settings',
      icon: <MdSettings />,
      ref: useRef<HTMLLIElement>(null),
    },
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
    setSelectedLinkPos(
      (links
        .find((link) => link.to === location.pathname)
        ?.ref.current?.getBoundingClientRect().y as number) - 10
    );
    // eslint-disable-next-line
  }, [location.pathname]);

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
        {expanded && <Username>{firstName}</Username>}
        <NotificationBellContainer layout>
          <MdNotifications />
        </NotificationBellContainer>
      </TopContainer>
      <ul
        style={{
          marginBottom: `${expanded ? 0 : 'auto'}`,
        }}
      >
        {links.map((link) => (
          <ListItem key={link.text} ref={link.ref}>
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
        <ActiveLinkBackground
          layout
          expanded={expanded}
          style={{
            top: selectedLinkPos,
          }}
        />
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
