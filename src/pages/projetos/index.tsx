import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import ProjetosItem from '../../components/ProjetosItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetoStyles';
import Prismic from '@prismicio/client';
import Head from 'next/head';

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
      <Head>
        <title>Meus Projetos | Matheus Oliveira</title>
        <meta
          name="description"
          content="Aqui é onde fica os meus projetos que desenvolvi."
        />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/Matheus%20Oliveira.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        />
        <meta
          property="og:image:secure_url"
          content="https://og-image.vercel.app/Matheus%20Oliveira.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        />
        <meta
          name="twitter:image"
          content="https://og-image.vercel.app/Matheus%20Oliveira.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        />
        <meta
          name="twitter:image:src"
          content="https://og-image.vercel.app/Matheus%20Oliveira.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        />
        <meta
          property="og:description"
          content="Aqui é onde fica os meus projetos que desenvolvi."
        />
      </Head>
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
