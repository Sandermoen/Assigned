import styled from 'styled-components';
import { RiFilePaper2Line } from 'react-icons/ri';
import { MdChevronRight } from 'react-icons/md';

import backgroundFiller from '../../assets/img/background-filler1.png';

export const Container = styled.div`
  display: flex;
`;

export const ProgressContainer = styled.aside`
  width: 80rem;
  background-color: ${(props) => props.theme.white};
  padding: 20rem 10rem 10rem 10rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.primary1};
  background-image: url(${backgroundFiller});
  width: 100%;
  padding: 15rem 20rem;
  display: flex;
  flex-direction: column;
`;

export const StyledLogo = styled.img`
  /* width: 20rem; */
  height: 5rem;
`;

export const Icon = styled(RiFilePaper2Line)`
  color: ${(props) => props.theme.secondary1};
  margin-top: auto;
  font-size: ${(props) => props.theme.icon['10x']};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ProgressionTitle = styled.div<{ active?: boolean }>`
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: ${(props) => (props.active ? '700' : '500')};
  text-transform: uppercase;
  color: ${(props) =>
    props.active ? props.theme.secondary1 : props.theme.grey2};
`;

export const ProgressionIcon = styled(MdChevronRight)`
  margin-left: auto;
  font-size: ${(props) => props.theme.icon['4x']};
  color: ${(props) => props.theme.secondary1};
`;
