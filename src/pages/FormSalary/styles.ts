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
  font-size: 30px;
  color: #204051;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 20px;
  }

  label {
    margin-left: 20px;
  }

  button {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 50%;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-top: 10px;
    color: #c53030;
  }
`;
