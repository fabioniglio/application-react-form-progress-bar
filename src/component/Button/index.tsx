import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  typeButton?: 'next' | 'back' | undefined;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  typeButton,
  ...rest
}) => (
  <Container typeButton={typeButton} type="button" {...rest}>
    {loading ? 'Loading...' : children}
  </Container>
);

export default Button;
