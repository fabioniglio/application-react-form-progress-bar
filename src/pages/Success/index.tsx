import React from 'react';

import { useForm } from '../../hooks/FormContext';

const Confirm: React.FC = () => {
  const { form, formUpdate } = useForm();
  const goHome = () => {
    let { step } = form;
    console.log(step);
    formUpdate({
      name: '',
      email: '',
      phone: '',
      salary: '',
      step: 0,
      maxSteps: 5,
    });
  };

  return (
    <>
      <h2>Success!</h2>
      <p>Thank you for submitting</p>

      <button onClick={goHome}>Back to Home</button>
    </>
  );
};

export default Confirm;
