import { render } from '@testing-library/react';
import { NavlinkContainer } from 'src/components/Header/styles';
import Navlink from '../components/Header/Navlink';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        pathname: '/'
      };
    }
  };
});

describe('Componente Navlink', () => {
  test('Navlink renderizando corretamente', () => {
    const { debug } = render(<Navlink rota="/" titulo="Home" />);
    debug();
  });

  test('Buscando os nomes dos links', () => {
    const { getByText } = render(
      <div>
        <Navlink rota="/" titulo="Home" />
        <Navlink rota="/" titulo="Projetos" />
      </div>
    );
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Projetos')).toBeInTheDocument();
  });
});
