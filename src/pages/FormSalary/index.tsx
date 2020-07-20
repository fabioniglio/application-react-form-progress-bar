import React, { useState } from 'react';

import { useForm } from '../../hooks/FormContext';

import {
  Container,
  AnimationContainer,
  Title,
  RadioGroup,
  ButtonContainer,
  Error,
} from './styles';

import Button from '../../component/Button';

const Formsalary: React.FC = () => {
  const [error, setError] = useState(false);

  const { form, formUpdate } = useForm();
  const nextStep = () => {
    const validate = checkIfSalaryIsChecked();

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
      salary: target.value,
    });
    console.log(form);
    if (checkIfSalaryIsChecked()) {
      setError(false);
    }
  };

  const checkIfSalaryIsChecked = (): boolean => {
    if (!form.salary) {
      return false;
    }
    return true;
  };

  return (
    <AnimationContainer>
      <Container>
        <Title>What is your salary range?</Title>
        <RadioGroup>
          <div className="RadioButton">
            <input
              name="salary"
              type="radio"
              value={'0 - 1.000'}
              onChange={handleChange}
            />
            <label htmlFor="">0 - 1.000</label>
          </div>
          <div className="RadioButton">
            <input
              name="salary"
              type="radio"
              value={'1.000 - 2.000'}
              onChange={handleChange}
            />
            <label htmlFor="">1.000 - 2.000</label>
          </div>
          <div className="RadioButton">
            <input
              name="salary"
              type="radio"
              value={'2.000 - 3.000'}
              onChange={handleChange}
            />
            <label htmlFor="">2.000 - 3.000</label>
          </div>
          <div className="RadioButton">
            <input
              name="salary"
              type="radio"
              value={'3.000 - 4.000'}
              onChange={handleChange}
            />
            <label htmlFor="">3.000 - 4.000</label>
          </div>
          <div className="RadioButton">
            <input
              name="salary"
              type="radio"
              value={'Mehr als 4.000'}
              onChange={handleChange}
            />
            <label htmlFor="">Mehr als 4.000</label>
          </div>
        </RadioGroup>
        {error && (
          <Error>
            <span>Select one of the options</span>
          </Error>
        )}
        <ButtonContainer>
          <Button text={'Back'} typeButton="back" onClick={previousStep} />
          <Button text={'Next'} typeButton="next" onClick={nextStep} />
        </ButtonContainer>
      </Container>
    </AnimationContainer>
  );
};

export default Formsalary;
