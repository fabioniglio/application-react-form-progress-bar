import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  step: number;
}

const Form: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState<FormData>();
  const [step, setStep] = useState(1);

  const handleProgressBar = () => {
    setProgress(prevProgress => (prevProgress >= 100 ? 10 : prevProgress + 10));
    console.log(progress);
    setStep(prevStep => (prevStep >= 2 ? 1 : prevStep + 1));
    console.log(step);
  };

  switch (step) {
    case 1:
      return (
        <>
          <input type="text" placeholder="name" />
          <button onClick={handleProgressBar}>Increase</button>
        </>
      );
      break;

    case 2:
      return (
        <>
          <input type="text" placeholder="email" />
          <button onClick={handleProgressBar}>Increase</button>
        </>
      );
      break;

    default:
      return <h1>Test</h1>;
      break;
  }
};

export default Form;
