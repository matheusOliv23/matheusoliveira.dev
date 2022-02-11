import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          id="testes"
          img="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          id="testes"
          img="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          id="testes"
          img="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
        />
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
