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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
  }

  button {
    margin-top: 20px;
  }
`;
