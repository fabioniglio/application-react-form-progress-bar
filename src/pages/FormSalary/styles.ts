import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);

  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 1s;
`;

export const Title = styled.div`
  font-size: 40px;
  color: #204051;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 20px;
    width: 'auto';
  }

  label {
    margin-left: 20px;
  }

  button {
    margin-top: 20px;
    width: 40%;
  }
`;

export const RadioGroup = styled.div`
  width: 'auto';
`;

export const ButtonContainer = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 670px;
  justify-content: space-between;
`;

export const Error = styled.div`
  span {
    color: #c53030;
  }
`;
