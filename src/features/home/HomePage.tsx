import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle';

interface Props {
  firstName?: string;
}

const HomePage: React.FC<Props> = ({ firstName }) => (
  <PageTitle>
    Hello, <b>{firstName}</b>
  </PageTitle>
);

export default HomePage;
