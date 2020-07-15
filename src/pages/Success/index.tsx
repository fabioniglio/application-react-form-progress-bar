import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { Container, AnimationContainer } from './styles';

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
    <AnimationContainer>
      <Container>
        <h2>Success!</h2>
        <h3>Thank you for submitting</h3>

        <button onClick={goHome}>Back to Home</button>
      </Container>
    </AnimationContainer>
  );
};

export default Confirm;
