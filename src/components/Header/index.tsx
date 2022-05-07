/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Navlink from './Navlink';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <Navlink titulo="Home" rota="/" />
        <Navlink titulo="Projetos" rota="/projetos" includes />
      </ul>
    </Container>
  );
}

export default Header;
