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
  margin: 24px 0;
  height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 40px;
  color: #204051;
  margin: 24px 0;
  text-align: center;
`;

export const Error = styled.div`
  span {
    color: #c53030;
  }
`;

export const ButtonContainer = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 670px;
  justify-content: space-between;
`;
