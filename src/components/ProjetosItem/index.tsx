/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  titulo: string;
  tipo: string;
  imgUrl: string;
  id: string;
}

export default function ProjetosItem({
  titulo,
  tipo,
  imgUrl,
  id
}: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl} data-aos="zoom-in">
      <Link href={`/projetos/${id}`}>
        <a>
          <div className="overlay"></div>
          <section>
            <h1>{titulo}</h1>
            <h2>{tipo}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
