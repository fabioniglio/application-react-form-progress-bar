import React, { useState } from 'react';

import { useForm } from '../../hooks/FormContext';

import { InputControlText } from '../../component/Input';

const FormName: React.FC = () => {
  const { form, formUpdate } = useForm();
  const [error, setError] = useState(false);
  const nextStep = () => {
    const validate = validateInput();

    if (validate) {
      let { step } = form;
      console.log(step);
      formUpdate({
        ...form,
        step: step + 1,
      });
    } else {
      setError(true);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLTextAreaElement;

    formUpdate({
      ...form,
      name: target.value,
    });
    console.log(form);
    if (form.name) {
      setError(false);
    }
  };

  const validateInput = (): boolean => {
    if (form.name === '') {
      return false;
    }
    return true;
  };

  return (
    <>
      <InputControlText
        id="name"
        name="name"
        type="text"
        required={true}
        placeholder="Full Name"
        onChange={handleChange}
      />
      {error && <span>Missing Name</span>}
      <button onClick={nextStep}>Next</button>
    </>
  );
};

export default FormName;
