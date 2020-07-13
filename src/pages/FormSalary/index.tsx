import React from 'react';

import { useForm } from '../../hooks/FormContext';

const Formsalary: React.FC = () => {
  const { form, formUpdate } = useForm();
  const nextStep = () => {
    let { step } = form;
    console.log(step);
    formUpdate({
      ...form,
      step: step + 1,
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;

    formUpdate({
      ...form,
      salary: target.value,
    });
    console.log(form);
  };

  return (
    <>
      <input type="text" placeholder="Salary" onChange={handleChange} />
      <button onClick={nextStep}>Next</button>
    </>
  );
};

export default Formsalary;
