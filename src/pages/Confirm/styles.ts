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

  margin-top: 20px;

  button {
    margin-top: 20px;
    width: 60%;
  }
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  margin-top: auto 20px 0 0;

  h2 {
    margin-top: 20px;
    text-align: center;
  }

  h3 {
    margin-top: 10px;
    text-align: center;
  }
`;
