import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/theus-edit.png';

function Homehero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Foto do autor" />

      <div>
        <TextContainer>
          <h1 data-aos="zoom-in">Olá</h1>
          <h2 data-aos="zoom-in">Me chamo Matheus</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos="fade-right">
            <span className="comment">//Sobre mim</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Matheus</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Oliveira</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="fade-left">
            <span className="comment">//Região</span>
            <span className="purple">localizacao</span> {'\u007B'}
            <div>
              cidade: <span className="blue">Sete Lagoas</span>
            </div>
            <div>
              estado: <span className="blue">Minas Grais</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default Homehero;
