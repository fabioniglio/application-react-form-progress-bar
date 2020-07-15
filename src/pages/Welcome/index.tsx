import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { Container, AnimationContainer } from './styles';

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
    <Container>
      <AnimationContainer>
        <h1>Welcome!</h1>
        <p>Click on the button to start filling the form!</p>

        <button onClick={enterForm}>Start</button>
      </AnimationContainer>
    </Container>
  );
};

export default Confirm;
