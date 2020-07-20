import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`

  background: #fff;
  color: #f4ede8;
  border-radius: 10px;

  padding: 16px;
  width: 70%;
  max-width: 450px;


  border: 2px solid #233129;
  color: #636360;

  display: flex;
  align-items: center;

  margin: 24px 0;


  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #000d0f;
      border-color: #000d0f;
    `}
    ${props =>
      props.isFilled &&
      css`
        color: #000d0f;
      `}

  input {
      flex: 1;
      background: transparent;
      border: 0;
      color: #000D0F;
      &::placeholder {
        color: #636360;
      }

    }

`;

export const Input = styled.div`
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #636360;
    }
  }
`;
