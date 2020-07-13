import React from 'react';

import LinearWithValueLabel from '../../component/ProgressBar';

import Form from '../Form';

const Home: React.FC = () => {
  return (
    <>
      <h1>Form</h1>
      <br />
      <LinearWithValueLabel />
      <Form />
    </>
  );
};

export default Home;
