import React from 'react';

import { HeaderContainer, WaveImage, Header } from './ClassPage.styles';
import wave from '../../assets/img/wave.png';

import PageContainer from '../../components/PageContainer/PageContainer';

const ClassPage: React.FC = () => (
  <PageContainer>
    <HeaderContainer>
      <WaveImage src={wave} />
      <div style={{ zIndex: 2, position: 'relative' }}>
        <Header>Geography</Header>
        <h1>test</h1>
      </div>
    </HeaderContainer>
  </PageContainer>
);

export default ClassPage;
