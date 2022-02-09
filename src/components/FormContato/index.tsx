import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title="Gostaria de conversar comigo?"
        description="Preencha o formulário abaixo que logo retornarei."
      />

      <Form />
    </Container>
  );
}

export default FormContato;
