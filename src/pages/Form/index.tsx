import React, { useState } from 'react';
import FormName from '../FormName';
import FormEmail from '../FormEmail';
import Formphone from '../FormPhone';

import { useForm } from '../../hooks/FormContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  step: number;
}

const Form: React.FC = () => {
  const { form } = useForm();

  switch (form.step) {
    case 1:
      return <FormName />;
      break;

    case 2:
      return <FormEmail />;
      break;
    case 3:
      return <Formphone />;
      break;

    default:
      return <h1>Test</h1>;
      break;
  }
};

export default Form;
