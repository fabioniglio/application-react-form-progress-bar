import React, { useState } from 'react';

import LinearWithValueLabel from '../../component/ProgressBar';

import Form from '../Form';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const Home: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState<FormData>();
  const [step, setStep] = useState(1);

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
