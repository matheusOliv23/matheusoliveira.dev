import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  > a {
    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.text};
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const Icons = styled.div`
  display: flex;

  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.text};
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const Circulo = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.primary};
  box-shadow: 0px 4px 29px 5px rgba(32, 104, 199, 0.66);
`;

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  /* width: 20rem;
  height: 20rem; */
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'Jetbrains Mono', monospace;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 1.1rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }

  > pre {
    transition: 0.5s;
  }

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.2);
    cursor: pointer;
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
