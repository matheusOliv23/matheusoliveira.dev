import {
  Container,
  TextContainer,
  InfosContainer,
  CodeItem,
  Circulo,
  Img
} from './styles';
import picture from '../../assets/toonmecom_17d154.jpg';
import { motion } from 'framer-motion/dist/framer-motion';

function Homehero() {
  return (
    <Container data-aos="fade-up">
      <TextContainer>
        <h1>Matheus Oliveira</h1>
      </TextContainer>
      <Circulo>
        <Img src={picture} alt="Foto do autor" />
      </Circulo>
      <TextContainer>
        <h2>Desenvolvedor Front End</h2>
      </TextContainer>
    </Container>
  );
}

export default Homehero;
