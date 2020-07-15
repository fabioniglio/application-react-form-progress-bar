import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { Container, AnimationContainer, Content } from './styles';

const Confirm: React.FC = () => {
  const { form, formUpdate } = useForm();
  const confirm = () => {
    let { step } = form;
    console.log(step);
    formUpdate({
      ...form,
      step: step + 1,
    });
  };

  return (
    <AnimationContainer>
      <Container>
        <Content>
          <h2>Name </h2>
          <h3>{form.name}</h3>
        </Content>
        <Content>
          <h2>Email </h2>
          <h3>{form.email}</h3>
        </Content>
        <Content>
          <h2>Phone </h2>
          <h3>{form.phone}</h3>
        </Content>
        <Content>
          <h2>salary </h2>
          <h3>{form.salary}</h3>
        </Content>

        <button onClick={confirm}>Confirm</button>
      </Container>
    </AnimationContainer>
  );
};

export default Confirm;
