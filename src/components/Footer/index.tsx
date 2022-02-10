import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

import { Container } from './styles';

function handleRedirecionar(url: string) {
  window.open(url);
}

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

        <section>
          <AiOutlineLinkedin
            onClick={() =>
              handleRedirecionar(
                'https://www.linkedin.com/in/matheus-h-oliveira-803a42111/'
              )
            }
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirecionar('https://github.com/matheusOliv23')
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
