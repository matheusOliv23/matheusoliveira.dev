import { Container } from './styles';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function Footer() {
  return (
    <Container>
      <div className="container">
        <button onClick={handleScrollTop} type="button">
          Voltar ao topo
        </button>
      </div>
    </Container>
  );
}

export default Footer;
