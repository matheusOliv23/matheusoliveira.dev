import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import ProjetosItem from '../../components/ProjetosItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetoStyles';
import Prismic from '@prismicio/client';

interface IProjeto {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  img: string;
  link: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetosItem
            key={projeto.id}
            titulo={projeto.titulo}
            tipo={projeto.tipo}
            id={projeto.id}
            imgUrl={projeto.img}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    id: projeto.uid,
    titulo: projeto.data.titulo,
    tipo: projeto.data.tipo,
    descricao: projeto.data.descricao,
    img: projeto.data.img.url,
    link: projeto.data.link.url
  }));

  return {
    props: { projetos },
    revalidate: 86400 //conteúdo vai revalidar a cada 24h
  };
};
