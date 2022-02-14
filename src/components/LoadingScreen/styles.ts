import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const SpinnerContainer = styled.div`
  .grid {
    width: 5rem;
    height: 5rem;
    position: relative;
    margin: 100px auto;
  }
  .grid-cube {
    width: 33.33%;
    height: 33.33%;
    background-color: ${({ theme }) => theme.primary};
    float: left;
    animation: sk-grid 1.3s infinite ease-in-out;
  }
  .grid-cube:nth-child(1) {
    animation-delay: 0.2s;
  }
  .grid-cube:nth-child(2) {
    animation-delay: 0.3s;
  }
  .grid-cube:nth-child(3) {
    animation-delay: 0.4s;
  }
  .grid-cube:nth-child(4) {
    animation-delay: 0.1s;
  }
  .grid-cube:nth-child(5) {
    animation-delay: 0.2s;
  }
  .grid-cube:nth-child(6) {
    animation-delay: 0.3s;
  }
  .grid-cube:nth-child(7) {
    animation-delay: 0s;
  }
  .grid-cube:nth-child(8) {
    animation-delay: 0.1s;
  }
  .grid-cube:nth-child(9) {
    animation-delay: 0.2s;
  }

  @keyframes sk-grid {
    0%,
    70%,
    100% {
      transform: scale3D(1, 1, 1);
    }
    35% {
      transform: scale3D(0, 0, 1);
    }
  }
`;
