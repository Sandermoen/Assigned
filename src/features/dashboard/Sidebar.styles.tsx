import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  width: 20vw;
  height: 100vh;
  background-color: ${(props) => props.theme.secondary1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 6rem;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > :not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Username = styled.h4`
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.primary1};
`;

export const NotificationBellContainer = styled.span`
  color: ${(props) => props.theme.primary1};
  width: ${(props) => props.theme.icon['2x']};
  height: ${(props) => props.theme.icon['2x']};
  cursor: pointer;

  & > :first-child {
    width: 100%;
    height: 100%;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 4rem;
`;

export const Link = styled(NavLink)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  text-align: left;
  text-decoration: none;
  font-size: 2rem;
  color: ${(props) =>
    props.selected ? props.theme.primary1 : props.theme.secondary2};

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const LinkText = styled.h4<{ selected: boolean }>`
  font-weight: ${(props) => (props.selected ? 700 : 600)};
`;

export const IconContainer = styled.span`
  width: ${(props) => props.theme.icon['6x']};
  height: ${(props) => props.theme.icon['6x']};

  & > :first-child {
    width: 100%;
    height: 100%;
  }
`;

export const AvatarImage = styled.img`
  border-radius: 100px;
  width: 4rem;
  height: 4rem;
`;
