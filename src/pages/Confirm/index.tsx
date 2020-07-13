import React from 'react';

import { useForm } from '../../hooks/FormContext';

const Confirm: React.FC = () => {
  const { form, formUpdate } = useForm();
  const confirm = () => {
    let { step } = form;
    console.log(step);
    formUpdate({
      ...form,
      step: step + 1,
    });
  };

  return (
    <>
      <p>{form.name}</p>
      <p>{form.email}</p>
      <p>{form.phone}</p>
      <p>{form.salary}</p>

      <button onClick={confirm}>Confirm</button>
    </>
  );
};

export default Confirm;
