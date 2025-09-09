import Markdown from "../components/Markdown";
import GoButton from "../components/GoButton";
import BackButton from "../components/BackButton";
import gerencia from "../assets/05_gerenciamento_estado_avancado.md";

const GerenciamentoEstado: React.FC = () => {
    return ( 
        <>
        <div className="flex gap-3 mt-15 mb-0">
            <BackButton backRoute="/roteamento" backText="Voltar"/>
            <GoButton goRoute="/consumo-api" goText="Próximo: Tipos Avançados e Mapeados"/>
        </div>
        <div className="flex flex-col items-center">
            <Markdown content={gerencia} />
        </div>
        <div className="flex gap-3 mt-15 mb-0">
            <BackButton backRoute="/roteamento" backText="Voltar"/>
            <GoButton goRoute="/consumo-api" goText="Próximo: Tipos Avançados e Mapeados"/>
        </div>
        </>
     );
}
 
export default GerenciamentoEstado;
