import React, { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';

interface ConhecimentoProps {
  titulo: string;
  icone: ReactNode;
}

export default function ConhecimentoItem({ titulo, icone }) {
  return (
    <ConhecimentoContainer>
      <p>{titulo}</p>
      {icone}
    </ConhecimentoContainer>
  );
}
