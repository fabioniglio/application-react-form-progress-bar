import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { Container, AnimationContainer } from './styles';

import Button from '../../components/Button';

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
        <h2>Click on the button to start filling the form!</h2>

        <Button text={'Start'} onClick={enterForm} />
      </AnimationContainer>
    </Container>
  );
};

export default Confirm;
