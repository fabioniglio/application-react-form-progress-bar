import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { InputControlText } from '../../component/Input';

import {
  Container,
  AnimationContainer,
  Title,
  ButtonContainer,
} from './styles';

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

  const previousStep = () => {
    let { step } = form;
    formUpdate({
      ...form,
      step: step - 1,
    });
  };

  // const handlechangeCall = useCallback(() => {

  const handleChange = (
    value: string,
    data: {},
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    const target = e.target as HTMLTextAreaElement;
    console.log(target);
    formUpdate({
      ...form,
      phone: target.value,
    });

    console.log(form);
  };

  return (
    <AnimationContainer>
      <Container>
        <Title>What is your phone number?</Title>
        <InputControlText
          id="phone"
          name="phone"
          type="phone"
          value={form.phone}
          placeholder="Phone"
          required={true}
          onChangePhone={handleChange}
        />

        <ButtonContainer>
          <Button typeButton="back" onClick={previousStep}>
            Back
          </Button>
          <Button typeButton="next" onClick={nextStep}>
            Next
          </Button>
        </ButtonContainer>
      </Container>
    </AnimationContainer>
  );
};

export default Formphone;
