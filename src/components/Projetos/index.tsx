import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

import { Container } from './styles';

interface IProjeto {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  img: string;
  link: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  console.log(projetos);

  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItem
            title={projeto.titulo}
            type={projeto.tipo}
            id={projeto.id}
            img={projeto.img}
          />
        ))}
      </section>

      <button type="button">
        <Link href="/projetos">
          <a> Todos os projetos </a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
