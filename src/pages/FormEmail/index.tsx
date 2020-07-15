import React, { useState } from 'react';

import { useForm } from '../../hooks/FormContext';

import { InputControlText } from '../../component/Input';

import { Container, AnimationContainer } from './styles';

const FormEmail: React.FC = () => {
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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;

    formUpdate({
      ...form,
      email: target.value,
    });
    console.log(form);
  };

  const validateInput = (): boolean => {
    if (form.email === '') {
      return false;
    }
    return true;
  };

  return (
    <AnimationContainer>
      <Container>
        <InputControlText
          id="name"
          name="email"
          type="email"
          placeholder="E-mail"
          required={true}
          onChange={handleChange}
        />
        {error && <span>Missing Email</span>}
        <button onClick={nextStep}>Next</button>
      </Container>
    </AnimationContainer>
  );
};

export default FormEmail;
