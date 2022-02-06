import { ReactNode } from 'react';
import Navlink from './Navlink';

import { Container } from './styles';

const menus = [
  { name: 'Home', rota: '/' },
  { name: 'Projetos', rota: '/projetos' },
  { name: 'Contato', rota: '/contato' }
];

function Header() {
  return (
    <Container>
      <ul>
        {menus.map((menu, index) => (
          <Navlink key={index} title={menu.name} path={menu.rota} />
        ))}
      </ul>
    </Container>
  );
}

export default Header;
