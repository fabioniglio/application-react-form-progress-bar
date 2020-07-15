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
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }

  button {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
`;
