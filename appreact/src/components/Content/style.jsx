import styled, { keyframes } from 'styled-components';

export const animes = keyframes`

  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Contents = styled.div`
  animation: 0.3s ${animes};
  border-radius: 0.6rem;
  padding: 0 2rem;
`;
