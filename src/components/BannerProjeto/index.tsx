/* eslint-disable react/self-closing-comp */
import { Container } from './styles';

interface BannerProjetoProps {
  titulo: string;
  tipo: string;
  imgUrl: string;
}

function BannerProjeto({ titulo, tipo, imgUrl }: BannerProjetoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay"></div>
      <section>
        <h1>{titulo}</h1>
        <h2>{tipo}</h2>
      </section>
    </Container>
  );
}

export default BannerProjeto;
