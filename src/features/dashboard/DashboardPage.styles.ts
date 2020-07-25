import styled from 'styled-components';

import backgroundFiller from '../../assets/img/background-filler1.png';

export const Section = styled.section`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-image: url(${backgroundFiller});
`;
