import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FormName from '../../pages/FormName';

const mockedFormUpdate = jest.fn();

jest.mock('../../hooks/FormContext', () => {
  return {
    useForm: () => ({
      form: jest.fn(),
      formUpdate: mockedFormUpdate,
    }),
  };
});

describe('Form Name Page', () => {
  it('should be able to fill on the input a name', () => {
    const { getByPlaceholderText, getByText } = render(<FormName />);

    const nameField = getByPlaceholderText('Full Name');
    const buttonElement = getByText('Next');

    fireEvent.change(nameField, { target: { value: ' Fabio Niglio' } });

    fireEvent.click(buttonElement);

    expect(mockedFormUpdate).toHaveBeenCalled();
  });
});
