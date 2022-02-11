import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  titulo: string;
  tipo: string;
  imgUrl: string;
  rota: string;
}

export default function ProjetosItem({
  titulo,
  tipo,
  imgUrl,
  rota
}: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${rota}`}>
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
