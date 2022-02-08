import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';


function Experience() {
  return (
    <Container>
      <SectionTitle title="04 meses" description="de experiência" />
      <section>
        <ExperienceItem
          year="2022 - Freelancer"
          office="Dev Front-End"
          description="Atualmente trabalhando no desenvolvimento de uma plataforma de ensino  utilizando NextJs, Typescript, MaterialUI "
        />
        <ExperienceItem
          year="2022"
          office="Aberto a oportunidades"
          description="Trabalho atualmente como freelancer e posso tranquilamente conciliar meus horários com uma nova oportunidade de trabalho para ganhar mais experiência e adquirir conhecimento. "
        />
      </section>
    </Container>
  );
}

export default Experience;
