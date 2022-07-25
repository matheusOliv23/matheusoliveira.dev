import {
  Container,
  TextContainer,
  InfosContainer,
  CodeItem,
  Circulo,
  Img,
  Icons
} from './styles';
import picture from '../../assets/toonmecom_17d154.jpg';
import { motion } from 'framer-motion/dist/framer-motion';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

function Homehero() {
  return (
    <Container data-aos="fade-up">
      <TextContainer>
        <h1>Matheus Oliveira</h1>
      </TextContainer>
      <Circulo>
        <Img src={picture} alt="Foto do autor" />
      </Circulo>
      <Icons>
        <a
          href="https://www.linkedin.com/in/matheushenrioliveira/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/matheusOliv23" target="_blanck">
          <AiOutlineGithub />
        </a>
      </Icons>
      <TextContainer>
        <h2>Desenvolvedor Front End</h2>
      </TextContainer>
    </Container>
  );
}

export default Homehero;
