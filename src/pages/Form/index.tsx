import React from 'react';
import FormName from '../FormName';
import FormEmail from '../FormEmail';
import Formphone from '../FormPhone';
import Formsalary from '../FormSalary';
import Confirm from '../Confirm';
import Success from '../Success';
import Welcome from '../Welcome';

import { useForm } from '../../hooks/FormContext';

const Form: React.FC = () => {
  const { form } = useForm();

  switch (form.step) {
    case 0:
      return <Welcome />;

    case 1:
      return <FormName />;

    case 2:
      return <FormEmail />;

    case 3:
      return <Formphone />;

    case 4:
      return <Formsalary />;

    case 5:
      return <Confirm />;

    case 6:
      return <Success />;

    default:
      return <FormName />;
  }
};

export default Form;
