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

interface CountryData {
  name: string;
  dialCode: string;
  countryCode: string;
  format: string;
}

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

  const handleChange = (
    value: string,
    data: CountryData | {},
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.persist();
    console.log(value);
    console.log(data);
    const target = e.target as HTMLTextAreaElement;
    console.log(target);
    if (target === null) {
      return;
    }
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
          <Button text={'Back'} typeButton="back" onClick={previousStep} />
          <Button text={'Next'} typeButton="next" onClick={nextStep} />
        </ButtonContainer>
      </Container>
    </AnimationContainer>
  );
};

export default Formphone;
