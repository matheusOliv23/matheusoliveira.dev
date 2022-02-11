/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import { ProjetoContainer } from '../../../styles/ProjetoContainer';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        titulo="Projeto 01"
        tipo="Website"
        imgUrl="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
      />

      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
          nesciunt! Excepturi veniam dolore sunt cupiditate quod possimus a
          quasi similique exercitationem aspernatur quo repudiandae deserunt ut
          debitis quibusdam, quaerat voluptatibus odit facere harum incidunt
          adipisci earum autem maxime! Necessitatibus temporibus nisi alias quae
          aliquam omnis, quasi eveniet soluta minus, repellat fuga dolores
          repellendus expedita atque accusamus! Eligendi vero eveniet,
          exercitationem architecto temporibus esse sapiente eaque odio mollitia
          laudantium dolor corrupti suscipit eum, consequatur quasi doloribus
          rem ipsam facere sunt molestiae.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
