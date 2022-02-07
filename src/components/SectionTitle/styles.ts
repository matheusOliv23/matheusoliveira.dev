import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  border-left: 3px solid ${({ theme }) => theme.primary};
  padding-left: 1rem;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 4.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 3.5rem;
    font-weight: 300;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1500px) {
    h1 {
      font-size: 2.1rem;
    }
    h2 {
      font-size: 2.1rem;
    }
  }
`;
