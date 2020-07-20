import React, { useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { Container } from './styles';

interface CountryData {
  name: string;
  dialCode: string;
  countryCode: string;
  format: string;
}

export interface Props {
  id: string;
  name: string;
  value?: string;
  label?: string;
  type?: 'text' | 'email' | 'phone';
  placeholder?: string;
  required?: boolean;
  errors?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhone?: (
    value: string,
    data: CountryData | {},
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  isValidPhone?: (value: string, country: object) => boolean;
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
    onChange,
    onChangePhone,
    isValidPhone,
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
          id={id}
          name={name}
          type={type}
          value={value}
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
          value={value}
          onChange={onChangePhone}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          autoFormat={true}
          isValid={isValidPhone}
          countryCodeEditable={false}
          searchStyle={{ background: '#fff' }}
          buttonStyle={{ background: '#fff' }}
          dropdownStyle={{ background: '#fff' }}
          containerStyle={{ background: '#fff' }}
          inputStyle={{
            flex: 1,
            border: 0,
            background: '#fff',
            height: '100%',
            color: '#232129',
            fontWeight: 'bold',
            width: '100%',
          }}
        />
      )}
    </Container>
  );
};
