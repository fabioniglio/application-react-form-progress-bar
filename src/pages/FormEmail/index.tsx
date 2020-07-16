import React, { useState } from 'react';

import { useForm } from '../../hooks/FormContext';

import { InputControlText } from '../../component/Input';

import {
  Container,
  AnimationContainer,
  Title,
  ButtonContainer,
} from './styles';

import Button from '../../component/Button';

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
        <Title>What is your Email?</Title>
        <InputControlText
          id="name"
          name="email"
          type="email"
          value={form.email}
          placeholder="E-mail"
          required={true}
          onChange={handleChange}
        />
        {error && <span>Missing Email</span>}
        <ButtonContainer>
          <Button text={'Back'} typeButton="back" onClick={previousStep} />
          <Button text={'Next'} typeButton="next" onClick={nextStep} />
        </ButtonContainer>
      </Container>
    </AnimationContainer>
  );
};

export default FormEmail;
