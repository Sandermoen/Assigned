import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';

export interface Props {
  checked?: 1 | 0;
}

export const StyledDiv = styled.div<Props>`
  background-color: ${(props) =>
    props.checked ? props.theme.primary1 : 'transparent'};
  border: ${(props) =>
    props.checked ? 'none' : `2px solid ${props.theme.grey2}`};
  border-radius: 200px;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MdCheck)`
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.icon['2x']};
`;
