/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import { ProjetoContainer } from '../../../styles/ProjetoContainer';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';

import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../../services/prismic';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProjeto {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  img: string;
  link: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        titulo={projeto.titulo}
        tipo={projeto.tipo}
        imgUrl={projeto.img}
      />

      <main>
        <p>{projeto.descricao}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'projeto')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      id: projeto.uid
    }
  }));
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { id } = context.params;

  const response = await prismic.getByUID('projeto', String(id), {});

  const projeto = {
    id: response.uid,
    titulo: response.data.titulo,
    tipo: response.data.tipo,
    img: response.data.img.url,
    descricao: response.data.descricao,
    link: response.data.link.url
  };

  return {
    props: { projeto },
    revalidate: 86400 //conteúdo vai revalidar a cada 24h
  };
};
