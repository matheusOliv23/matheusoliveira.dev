import Head from 'next/head';
import { useEffect } from 'react';
import Aos from 'aos';
import Header from '../components/Header';
import Homehero from '../components/Homehero';
import { HomeContainer } from '../styles/HomeStyles';
import 'aos/dist/aos.css';
import Experience from '../components/Experience';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';

import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

interface IProjeto {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  img: string;
  link: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Matheus H O</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />

      <main className="container">
        <Homehero />

        <div
          style={{
            width: '100%',
            borderBottom: '3px solid #0EE7B7'
          }}
        />

        <Experience />

        <Projetos projetos={projetos} />

        <div
          style={{
            width: '100%',
            borderBottom: '3px solid #0EE7B7'
          }}
        />

        <Conhecimentos />

        <div
          style={{
            width: '100%',
            borderBottom: '3px solid #0EE7B7'
          }}
        />

        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
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
