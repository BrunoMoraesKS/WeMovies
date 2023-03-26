import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Loader = styled.img`
  z-index: 9999;

  animation: ${spin} 1s linear infinite;
`;
