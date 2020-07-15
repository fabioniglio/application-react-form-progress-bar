import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { InputControlText } from '../../component/Input';

import { Container, AnimationContainer } from './styles';

import Button from '../../component/Button';

const Formphone: React.FC = () => {
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
      phone: target.value,
    });
    console.log(form);
  };

  return (
    <AnimationContainer>
      <Container>
        <InputControlText
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone"
          required={true}
          onChange={handleChange}
        />
        <Button onClick={nextStep}>Next</Button>
      </Container>
    </AnimationContainer>
  );
};

export default Formphone;
