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
      <Circulo>
        <Img src={picture} alt="Foto do autor" />
      </Circulo>
    </Container>
  );
}

export default Homehero;
