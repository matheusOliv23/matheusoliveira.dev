import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

const experiences = [
  {
    year: '2022 - Freelancer',
    office: 'Dev Front-End',
    description:
      'Atualmente trabalhando no desenvolvimento de uma plataforma de ensino  utilizando NextJs, Typescript, MaterialUI '
  },
  {
    year: '2022 - Freelancer',
    office: 'Dev Front-End',
    description:
      'Atualmente trabalhando no desenvolvimento de uma plataforma de ensino  utilizando NextJs, Typescript, MaterialUI '
  },
  {
    year: '2022 - Freelancer',
    office: 'Dev Front-End',
    description:
      'Atualmente trabalhando no desenvolvimento de uma plataforma de ensino  utilizando NextJs, Typescript, MaterialUI '
  }
];

function Experience() {
  return (
    <Container>
      <SectionTitle title="04 meses" description="de experiência" />
      <section>
        {experiences.map((experience, index) => (
          <ExperienceItem
            keyId={index}
            year={experience.year}
            office={experience.office}
            description={experience.description}
          />
        ))}
      </section>
    </Container>
  );
}

export default Experience;
