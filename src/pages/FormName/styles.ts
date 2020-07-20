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
  text-align: center;
  color: #204051;
  margin-bottom: 16px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
  height: 500px;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 24px;
    width: 70%;
  }

  span {
    color: #c53030;
  }
`;
