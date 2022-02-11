import Header from '../../components/Header';
import ProjetosItem from '../../components/ProjetosItem';
import { ProjetosContainer } from '../../styles/ProjetoStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetosItem
          titulo="Projeto 01"
          tipo="Website"
          rota="teste"
          imgUrl="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
        />
        <ProjetosItem
          titulo="Projeto 01"
          tipo="Website"
          rota="teste"
          imgUrl="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
        />
        <ProjetosItem
          titulo="Projeto 01"
          tipo="Website"
          rota="teste"
          imgUrl="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
        />
        <ProjetosItem
          titulo="Projeto 01"
          tipo="Website"
          rota="teste"
          imgUrl="https://thumbs.dreamstime.com/z/high-tech-technology-background-8247407.jpg"
        />
      </main>
    </ProjetosContainer>
  );
}
