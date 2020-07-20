import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { Container, AnimationContainer } from './styles';

import Lottie from 'react-lottie';
import animationData from '../../lotties/5595-success-animation.json';

import Button from '../../component/Button';

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <AnimationContainer>
      <Container>
        <h2>Success!</h2>
        <h3>Thank you for submitting!</h3>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <Button text={'Back to Home'} onClick={goHome} />
      </Container>
    </AnimationContainer>
  );
};

export default Confirm;
