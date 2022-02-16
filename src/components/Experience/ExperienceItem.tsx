import React from 'react';
import { ItemContainer } from './styles';

interface ExperienceProps {
  year: string;
  office: string;
  description: string;
}

export default function ExperienceItem({
  year,
  office,
  description
}: ExperienceProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{office}</h2>

        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
