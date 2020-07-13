import React, { useState } from 'react';

import LinearWithValueLabel from '../../component/ProgressBar';

import Form from '../Form';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

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
