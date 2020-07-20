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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  h2 {
    margin-top: 20px;
    text-align: center;
  }

  h3 {
    margin-top: 20px;
    text-align: center;
  }

  button {
    margin-top: 20px;

    width: 60%;
  }
`;
