import React from 'react';

import LinearWithValueLabel from '../../components/ProgressBar';

import Form from '../Form';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LinearWithValueLabel />
      <Form />
    </Container>
  );
};

export default Home;
