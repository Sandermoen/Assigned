import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { border } from '../../utils/cssUtils';

export const Container = styled.div`
  text-align: center;
`;

export const ButtonSubText = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.secondary1};
`;

interface Props {
  // Not using boolean here as a workaround for this issue:
  // https://github.com/styled-components/styled-components/issues/1198
  notification?: 1 | 0;
}

export const Button = styled(Link)<Props>`
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  width: 10rem;
  height: 10rem;
  font-size: 3rem;
  font-weight: 700;
  backface-visibility: hidden;
  position: relative;
  margin-bottom: 1rem;

  &:focus,
  &:active {
    outline: none;
    &::after {
      display: inline-block;
    }
  }

  &::before {
    content: '';
    display: ${(props) => (props.notification ? 'inline-block' : 'none')};
    border-radius: 100px;
    background-color: ${(props) => props.theme.white};
    border: 3px solid ${(props) => props.theme.primary1};
    position: absolute;
    top: -5px;
    right: -5px;
    width: 2rem;
    height: 2rem;
  }
  ${border};
`;
