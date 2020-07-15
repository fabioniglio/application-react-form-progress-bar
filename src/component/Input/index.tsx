import React, { useState, useCallback } from 'react';

import { InputControl } from '../Inputcontrol';

import { Container } from './styles';

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

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(props => {
    setIsFocused(false);

    setIsFilled(!!props.value);
  }, []);

  return (
    <Container isErrored={!!errors} isFilled={isFilled} isFocused={isFocused}>
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
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required={required}
          {...{ noValidate: true }}
        />
      </InputControl>
    </Container>
  );
};
