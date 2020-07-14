import React, { useState } from 'react';

import { InputControl } from '../Inputcontrol';

export interface Props {
  id: string;
  name: string;
  value?: string;
  label?: string;
  type?: 'text' | 'email' | 'phone';
  status?: 'success' | 'danger';
  placeholder?: string;
  required?: boolean;
  errors?: string;
  valid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputControlText = (props: Props): JSX.Element => {
  const {
    id,
    required,
    value,
    placeholder,
    type,
    name,
    status,
    errors,
    valid,
    onChange,
  } = props;

  return (
    <InputControl
      id={id}
      type={type}
      status={status}
      errors={errors}
      valid={valid}
    >
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={true}
        required={required}
        {...{ noValidate: true }}
      />
    </InputControl>
  );
};
