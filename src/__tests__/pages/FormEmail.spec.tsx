import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FormEmail from '../../pages/FormEmail';

const mockedFormUpdate = jest.fn();

jest.mock('../../hooks/FormContext', () => {
  return {
    useForm: () => ({
      form: jest.fn(),
      formUpdate: mockedFormUpdate,
    }),
  };
});

describe('Form Email Page', () => {
  it('should be able to fill on the input a email', () => {
    const { getByPlaceholderText, getByText } = render(<FormEmail />);

    const nameField = getByPlaceholderText('E-mail');
    const buttonElement = getByText('Next');

    fireEvent.change(nameField, { target: { value: 'fabioniglio@gmail.com' } });

    fireEvent.click(buttonElement);

    expect(mockedFormUpdate).toHaveBeenCalled();
  });
});
