import React, { useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { Container, Input } from './styles';

export interface Props {
  id: string;
  name: string;
  value?: string;
  label?: string;
  type?: 'text' | 'email' | 'phone';

  placeholder?: string;
  required?: boolean;
  errors?: boolean;
  valid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhone?: (
    value: string,
    data: {},
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

export const InputControlText = (props: Props): JSX.Element => {
  const {
    id,
    required,
    value,
    placeholder,
    type,
    name,
    errors,
    valid,
    onChange,
    onChangePhone,
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
      {type !== 'phone' && (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required={required}
        />
      )}
      {type === 'phone' && (
        <PhoneInput
          country="de"
          regions={'europe'}
          onChange={onChangePhone}
          searchStyle={{ background: '#232129' }}
          buttonStyle={{ background: '#232129' }}
          dropdownStyle={{ background: '#232129' }}
          containerStyle={{ background: '#232129' }}
          inputStyle={{
            flex: 1,
            border: 0,
            background: '#232129',
            // color: '#f4ede8',
            width: '100%',
          }}
        />
      )}
    </Container>
  );
};
