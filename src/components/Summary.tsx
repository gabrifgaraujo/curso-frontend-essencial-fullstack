import Sumario from '../../public/sumario.md';
import Markdown from "./Markdown";
import NavButton from '../components/NavButton';

const Summary: React.FC = () => {
  return (
    <>
      <div className="flex gap-3  mb-0">
        <NavButton to="/" text="Voltar ao Início" type="back" />
        <NavButton to="/html/introducao" text="Próximo" type="go" />
      </div>
      <div className="flex flex-col items-center">
        <Markdown content={Sumario as unknown as string} />
      </div>
      <div className="flex gap-3 mb-0">
        <NavButton to="/" text="Voltar ao Início" type="back" />
        <NavButton to="/html/introducao" text="Próximo" type="go" />
      </div>
    </>
  );
};

export default Summary;
