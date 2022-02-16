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
        <title>Home | Matheus Oliveira</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e este é o meu site oficial com meus projetos e experiências que terei ao longo da minha jornada."
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
          content="Sou um desenvolvedor Front-end e este é o meu site oficial com meus projetos e experiências que terei ao longo da minha jornada."
        />
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
