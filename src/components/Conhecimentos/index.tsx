import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { DiCss3Full } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />

      <section>
        <ConhecimentoItem titulo="CSS" icone={<DiCss3Full />} />
        <ConhecimentoItem titulo="HTML" icone={<AiFillHtml5 />} />
        <ConhecimentoItem titulo="Javascript" icone={<IoLogoJavascript />} />
        <ConhecimentoItem titulo="Typescript" icone={<SiTypescript />} />
        <ConhecimentoItem titulo="React" icone={<FaReact />} />
        <ConhecimentoItem titulo="Next" icone={<SiNextdotjs />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
