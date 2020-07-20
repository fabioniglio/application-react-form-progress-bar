import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  typeButton?: 'next' | 'back' | undefined;
};

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  typeButton,
  ...rest
}) => (
  <Container typeButton={typeButton} type="button" {...rest}>
    <span>{text}</span>
  </Container>
);

export default Button;
