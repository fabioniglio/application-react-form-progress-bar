import React from 'react';

import { useForm } from '../../hooks/FormContext';

import { Container, AnimationContainer } from './styles';

import Button from '../../component/Button';

const Formsalary: React.FC = () => {
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
      salary: target.value,
    });
    console.log(form);
  };

  return (
    <AnimationContainer>
      <Container>
        <div className="RadioButton">
          <input
            name={'salary'}
            type="radio"
            value={'0 - 1.000'}
            onChange={handleChange}
          />
          <label htmlFor="">0 - 1.000</label>
        </div>
        <div className="RadioButton">
          <input
            name={'salary'}
            type="radio"
            value={'1.000 - 2.000'}
            onChange={handleChange}
          />
          <label htmlFor="">1.000 - 2.000</label>
        </div>
        <div className="RadioButton">
          <input
            name={'salary'}
            type="radio"
            value={'2.000 - 3.000'}
            onChange={handleChange}
          />
          <label htmlFor="">2.000 - 3.000</label>
        </div>
        <div className="RadioButton">
          <input
            name={'salary'}
            type="radio"
            value={'3.000 - 4.000'}
            onChange={handleChange}
          />
          <label htmlFor="">3.000 - 4.000</label>
        </div>
        <div className="RadioButton">
          <input
            name={'salary'}
            type="radio"
            value={'Mehr als 4.000'}
            onChange={handleChange}
          />
          <label htmlFor="">Mehr als 4.000</label>
        </div>

        <Button onClick={nextStep}>Next</Button>
      </Container>
    </AnimationContainer>
  );
};

export default Formsalary;
