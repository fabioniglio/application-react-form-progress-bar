import React from 'react';
import { render } from '@testing-library/react';

import { InputControlText } from '../../components/Input';

describe('Input Component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <InputControlText id={'email'} name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });
});
