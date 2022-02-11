/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/order */
import React from 'react';
import { ProjetoContainer } from './styles';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

interface ProjetoProperties {
  title: string;
  type: string;
  id: string;
  img: string;
}

export default function ProjetoItem({
  title,
  type,
  id,
  img
}: ProjetoProperties) {
  return (
    <ProjetoContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${id}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
