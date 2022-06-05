import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';


function Experience() {
  return (
    <Container>
      <SectionTitle title="08 meses" description="de experiência" />
      <section>
        <ExperienceItem
          year="2022 - Freelancer"
          office="Dev Front-End"
          description="Trabalhei no desenvolvimento de uma plataforma de ensino  utilizando NextJs, Typescript, MaterialUI "
        />
        <ExperienceItem
          year="2022"
          office="Aberto a oportunidades"
          description="Busco uma oportunidade na área de desenvolvimento web, tanto para me desenvolver profissionalmente quanto para agregar valor para a empresa onde eu estiver"
        />
      </section>
    </Container>
  );
}

export default Experience;
