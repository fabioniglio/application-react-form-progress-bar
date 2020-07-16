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
  margin-bottom: 16px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
`;
