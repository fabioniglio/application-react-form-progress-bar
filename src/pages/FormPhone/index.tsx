import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { InputControlText } from '../../component/Input';

import { Container, AnimationContainer } from './styles';

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
    <Container>
      <AnimationContainer>
        <InputControlText
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone"
          required={true}
          onChange={handleChange}
        />
        <button onClick={nextStep}>Next</button>
      </AnimationContainer>
    </Container>
  );
};

export default Formphone;
