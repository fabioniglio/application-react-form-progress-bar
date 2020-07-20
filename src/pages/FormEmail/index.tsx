import React, { useState } from 'react';

import { useForm } from '../../hooks/FormContext';

import { InputControlText } from '../../components/Input';

import {
  Container,
  AnimationContainer,
  Title,
  ButtonContainer,
  Error,
} from './styles';

import Button from '../../components/Button';

const FormEmail: React.FC = () => {
  const { form, formUpdate } = useForm();
  const [error, setError] = useState(false);

  const nextStep = () => {
    const validate = validateInput();

    if (validate) {
      setError(false);
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

  const previousStep = () => {
    let { step } = form;
    formUpdate({
      ...form,
      step: step - 1,
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;

    formUpdate({
      ...form,
      email: target.value,
    });
    if (form.email) {
      setError(false);
    }
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
        <Title>What is your email?</Title>
        <InputControlText
          id="name"
          name="email"
          type="email"
          value={form.email}
          placeholder="E-mail"
          required={true}
          onChange={handleChange}
          errors={error}
        />
        {error && (
          <Error>
            <span>Missing Email</span>
          </Error>
        )}
        <ButtonContainer>
          <Button text={'Back'} typeButton="back" onClick={previousStep} />
          <Button text={'Next'} typeButton="next" onClick={nextStep} />
        </ButtonContainer>
      </Container>
    </AnimationContainer>
  );
};

export default FormEmail;
