import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdChevronLeft } from 'react-icons/md';

interface Props {
  expanded: boolean;
}

export const ToggleExpandedButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.primary1};
  cursor: pointer;
  transform-origin: center;

  opacity: 0;
  transition: opacity 300ms ease-out;

  & > * {
    font-size: 3rem;
  }

  &:focus {
    outline: none;
  }
`;

export const Container = styled(motion.nav)<Props>`
  height: 100vh;
  background-color: ${(props) => props.theme.secondary1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  position: relative;

  &:hover ${ToggleExpandedButton} {
    opacity: 1;
  }
`;

export const TopContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${(props) => (props.expanded ? 0 : 'auto')};

  & > :not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Username = styled.h4`
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.primary1};
`;

export const NotificationBellContainer = styled(motion.span)`
  color: ${(props) => props.theme.primary1};
  width: ${(props) => props.theme.icon['2x']};
  height: ${(props) => props.theme.icon['2x']};
  cursor: pointer;

  & > :first-child {
    width: 100%;
    height: 100%;
  }
`;

export const ListItem = styled(motion.li)`
  list-style-type: none;
  margin-bottom: 4rem;
`;

export const LinkText = styled(motion.h4)<{ selected: boolean }>`
  font-weight: ${(props) => (props.selected ? 700 : 600)};
`;

export const Link = styled(NavLink)<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
  text-decoration: none;
  font-size: 2rem;
  color: ${(props) =>
    props.selected ? props.theme.primary1 : props.theme.secondary2};
  transition: color 200ms;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: ${(props) => props.theme.primary1};
  }
`;

export const IconContainer = styled(motion.span)`
  width: ${(props) => props.theme.icon['6x']};
  height: ${(props) => props.theme.icon['6x']};

  & > :first-child {
    width: 100%;
    height: 100%;
  }
`;

export const AvatarImage = styled(motion.img)`
  border-radius: 100px;
  width: 4rem;
  height: 4rem;
`;
