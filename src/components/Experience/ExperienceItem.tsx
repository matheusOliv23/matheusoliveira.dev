import React from 'react';
import { ItemContainer } from './styles';

interface ExperienceProps {
  keyId: number;
  year: string;
  office: string;
  description: string;
}

export default function ExperienceItem({
  keyId,
  year,
  office,
  description
}: ExperienceProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{office}</h2>

        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
