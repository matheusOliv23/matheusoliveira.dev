import { lighten } from 'polished';
import styled from 'styled-components';

interface NavlinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  height: 4rem;
  font-size: 1.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight}; // a borda abaixo do navbar

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavlinkContainer = styled.li<NavlinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive
        ? props.theme.primary
        : props.theme
            .textHighlight}; //muda a cor do link caso ele esteja ativo ou não
    transition: 0.5s;

    /* &:hover {
      color: ${props =>
      props.isActive
        ? lighten(0.2, props.theme.primary)
        : lighten(
            0.2,
            props.theme.secondary
          )}; // muda o hover caso o link esteja ativo ou não
    } */
  }
`;
