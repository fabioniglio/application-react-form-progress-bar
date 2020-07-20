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

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 32px;
    text-align: center;
  }

  h2 {
    margin-top: 32px;
    text-align: center;
  }

  button {
    margin-top: 48px;
  }
`;
