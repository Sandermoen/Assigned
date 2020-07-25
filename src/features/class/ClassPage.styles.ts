import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 25rem;
  width: 100%;
  object-fit: cover;
  position: relative;
`;

export const WaveImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const Header = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 5rem;
`;
