import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';

export interface Props {
  checked?: 1 | 0;
  active?: boolean;
}

export const StyledDiv = styled.div<Props>`
  background-color: ${(props) =>
    props.checked ? props.theme.primary1 : 'transparent'};
  border: ${(props) =>
    props.checked
      ? 'none'
      : props.active
      ? `2px solid ${props.theme.secondary1}`
      : `2px solid ${props.theme.grey2}`};
  border-radius: 200px;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) =>
    props.active ? props.theme.secondary1 : props.theme.grey2};
`;

export const Icon = styled(MdCheck)`
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.icon['2x']};
`;
