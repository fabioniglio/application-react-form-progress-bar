import React from 'react';

import { useForm } from '../../hooks/FormContext';

const Confirm: React.FC = () => {
  const { form, formUpdate } = useForm();
  const enterForm = () => {
    let { step } = form;
    console.log(step);
    formUpdate({
      ...form,
      step: step + 1,
    });
  };

  return (
    <>
      <h2>Welcome!</h2>
      <p>Click on the button to start filling the form</p>

      <button onClick={enterForm}>Enter</button>
    </>
  );
};

export default Confirm;
