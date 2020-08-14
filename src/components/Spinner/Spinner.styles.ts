import styled from 'styled-components';

import { ReactComponent as Spinner } from '../../assets/svg/spinner.svg';

export const SpinnerSVG = styled(Spinner)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 100%;
  z-index: 2;
`;
