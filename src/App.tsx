import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Summary from './components/Summary';
import Sobre from './components/Sobre';

// HTML
import HtmlIntro from './pages/html/01-html';
import HtmlPrimeiroDoc from './pages/html/02-html';
import HtmlEstrutura from './pages/html/03-html';
import HtmlLinksImagens from './pages/html/04-html';
import HtmlSemantico from './pages/html/05-html';
import HtmlProjeto from './pages/html/PROJETO-blog';

// CSS
import CssIntro from './pages/css/01-css';
import CssSeletores from './pages/css/02-css';
import CssBoxModel from './pages/css/03-css';
import CssCoresUnidades from './pages/css/04-css';
import CssTextos from './pages/css/05-css';
import CssIntroFlexbox from './pages/css/06-css';
import CssFlexContainer from './pages/css/07-css';
import CssFlexItems from './pages/css/08-css';
import CssProjeto from './pages/css/PROJETO-estilizando-blog';

// JavaScript
import JsIntro from './pages/javascript/01-js';
import JsVariaveis from './pages/javascript/02-js';
import JsOperadores from './pages/javascript/03-js';
import JsStrings from './pages/javascript/04-js';
import JsArrays from './pages/javascript/05-js';
import JsFuncoes from './pages/javascript/06-js';
import JsObjetos from './pages/javascript/07-js';
import JsCondicionais from './pages/javascript/08-js';
import JsLoops from './pages/javascript/09-js';
import JsIntroDom from './pages/javascript/10-js';
import JsSelecionando from './pages/javascript/11-js';
import JsManipulandoEstilos from './pages/javascript/12-js';
import JsEventos from './pages/javascript/13-js';
import JsEventosPratica from './pages/javascript/14-js';
import JsCriandoRemovendo from './pages/javascript/15-js';
import JsArrowFunctions from './pages/javascript/16-js'
import JsDesestruturacao from './pages/javascript/17-js'
import JsRestSpread from './pages/javascript/18-js'
import JsMapFilterReduce from './pages/javascript/19-js'
import JsClasses from './pages/javascript/20-js'
import JsHoisting from './pages/javascript/21-js'
import JsCallbacks from './pages/javascript/22-js'
import JsPromises from './pages/javascript/23-js'
import JsFetch from './pages/javascript/24-js'
import JsAsyncAwait from './pages/javascript/25-js'
import JsModulos from './pages/javascript/26-js'
import JsProjeto from './pages/javascript/PROJETO-todo-list';

// Algoritmos
import IntroducaoAlgoritmos from './pages/algoritmos/01-algoritmos'
import EstruturasLineares from './pages/algoritmos/02-algoritmos'
import NaoLineares from './pages/algoritmos/03-algoritmos'
import BuscaEOrdenacao from './pages/algoritmos/04-algoritmos'
import Arquitetura from './pages/algoritmos/05-algoritmos'
import ProjetoAlgoritmos from './pages/algoritmos/PROJETO-algoritmos'

// TypeScript
import TsIntro from './pages/typescript/01-ts';
import TiposBasicos from './pages/typescript/02-ts'
import ObjetosEFuncoes from './pages/typescript/03-ts'
import Interfaces from './pages/typescript/04-ts'
import Generics from './pages/typescript/05-ts'
import TiposAvancados from './pages/typescript/06-ts'
import Modulos from './pages/typescript/07-ts'
import TypescriptReact from './pages/typescript/08-ts'
import ConsumoAPI from './pages/typescript/09-ts'
import Testes from './pages/typescript/10-ts'
import TsProjeto from './pages/typescript/11-ts'

// React
import ReactIntro from './pages/react/01-react';
import ReactFundamentos from './pages/react/02-react';
import ReactHooks from './pages/react/03-react';
import ReactRoteamento from './pages/react/04-react';
import ReactGerenciamentoEstado from './pages/react/05-react';
import ReactConsumoApi from './pages/react/06-react';
import ReactEstilizacao from './pages/react/07-react';
import ReactTestes from './pages/react/08-react';
import ReactBuildVite from './pages/react/09-react';
import ReactProjetoPratico from './pages/react/10-react';
import ReactDicasVaga from './pages/react/11-react';

//UX
import UxIntro from './pages/ux/01-ux';
import PrincipiosUX from './pages/ux/02-ux';
import ArquiteturaUX from './pages/ux/03-ux';
import Gestalt from './pages/ux/04-ux';
import TipografiaUX from './pages/ux/05-ux';
import ProtoUX from './pages/ux/06-ux';
import NielsenUX from './pages/ux/07-ux';
import DesignThinking from './pages/ux/08-ux';
import Acessibilidade from './pages/ux/09-ux';
import EmocionalUX from './pages/ux/10-ux';

//Web Services
import WebServicesIntro from './pages/webServices/01-ws';
import RestWS from './pages/webServices/02-ws';
import Requisicoes from './pages/webServices/03-ws';
import WSConsumoAPI from './pages/webServices/04-ws';
import EnviandoDados from './pages/webServices/05-ws';
import Erros from './pages/webServices/06-ws';
import Autenticacao from './pages/webServices/07-ws';

// Node
import NodeIntro from './pages/node/01-node';
import NodeFundamentos from './pages/node/02-node';
import NodeFrameworks from './pages/node/03-node';
import BancodeDados from './pages/node/04-node';
import BoasPraticas from './pages/node/05-node';
import Deploy from './pages/node/06-node';

// Metodos Ágeis
import AgeisIntro from './pages/MetodosAgeis/01-ma';
import MetodosAgeis from './pages/MetodosAgeis/02-ma';
import SCRUM from './pages/MetodosAgeis/03-ma';

// IA
import IntroIA from './pages/IA/01-ia';
import Produtividade from './pages/IA/02-ia';
import Prompt from './pages/IA/03-ia';
import UsoEtico from './pages/IA/04-ia';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se há uma rota de redirecionamento salva
    const redirectRoute = sessionStorage.getItem('redirect');
    if (redirectRoute) {
      // Remove a informação para não redirecionar novamente em futuros reloads
      sessionStorage.removeItem('redirect');
      
      // Extrai o nome do repositório para que a navegação funcione corretamente
      const repoName = '/' + window.location.pathname.split('/')[1];
      const targetPath = redirectRoute.replace(repoName, '');

      // Navega para a rota correta dentro do React Router
      navigate(targetPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

// Hook para salvar a última rota visitada
function SaveLastRoute() {
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem('lastFrontendRoute', location.pathname);
  }, [location]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <SaveLastRoute />
      <RedirectHandler />
      <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
        <Header />
        <main className="container mx-auto px-4 pt-28 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/sobre" element={<Sobre />} />

            {/* Rotas de HTML */}
            <Route path="/html/introducao" element={<HtmlIntro />} />
            <Route path="/html/primeiro-documento" element={<HtmlPrimeiroDoc />} />
            <Route path="/html/estruturando-conteudo" element={<HtmlEstrutura />} />
            <Route path="/html/links-e-imagens" element={<HtmlLinksImagens />} />
            <Route path="/html/semantico" element={<HtmlSemantico />} />
            <Route path="/html/projeto-blog" element={<HtmlProjeto />} />

            {/* Rotas de CSS */}
            <Route path="/css/introducao" element={<CssIntro />} />
            <Route path="/css/seletores" element={<CssSeletores />} />
            <Route path="/css/box-model" element={<CssBoxModel />} />
            <Route path="/css/cores-e-unidades" element={<CssCoresUnidades />} />
            <Route path="/css/textos" element={<CssTextos />} />
            <Route path="/css/intro-flexbox" element={<CssIntroFlexbox />} />
            <Route path="/css/flexbox-container" element={<CssFlexContainer />} />
            <Route path="/css/flexbox-items" element={<CssFlexItems />} />
            <Route path="/css/projeto-blog" element={<CssProjeto />} />

            {/* Rotas de JavaScript */}
            <Route path="/js/introducao" element={<JsIntro />} />
            <Route path="/js/variaveis" element={<JsVariaveis />} />
            <Route path="/js/operadores" element={<JsOperadores />} />
            <Route path="/js/strings" element={<JsStrings />} />
            <Route path="/js/arrays" element={<JsArrays />} />
            <Route path="/js/funcoes" element={<JsFuncoes />} />
            <Route path="/js/objetos" element={<JsObjetos />} />
            <Route path="/js/condicionais" element={<JsCondicionais />} />
            <Route path="/js/loops" element={<JsLoops />} />
            <Route path="/js/intro-dom" element={<JsIntroDom />} />
            <Route path="/js/selecionando-elementos" element={<JsSelecionando />} />
            <Route path="/js/manipulando-estilos" element={<JsManipulandoEstilos />} />
            <Route path="/js/eventos" element={<JsEventos />} />
            <Route path="/js/eventos-pratica" element={<JsEventosPratica />} />
            <Route path="/js/criando-removendo-elementos" element={<JsCriandoRemovendo />} />
            <Route path="/js/arrow-functions" element={<JsArrowFunctions />} />
            <Route path="/js/desestruturacao" element={<JsDesestruturacao />} />
            <Route path="/js/rest-spread" element={<JsRestSpread />} />
            <Route path="/js/map-filter-reduce" element={<JsMapFilterReduce />} />
            <Route path="/js/classes" element={<JsClasses />} />
            <Route path="/js/hoisting" element={<JsHoisting />} />
            <Route path="/js/callbacks" element={<JsCallbacks />} />
            <Route path="/js/promises" element={<JsPromises />} />
            <Route path="/js/fetch" element={<JsFetch />} />
            <Route path="/js/async-await" element={<JsAsyncAwait />} />
            <Route path="/js/modulos" element={<JsModulos />} />
            <Route path="/js/projeto-lista-tarefas" element={<JsProjeto />} />

            {/* Rotas de Algoritmos*/}
            <Route path="/algoritmos/introducao" element={<IntroducaoAlgoritmos />} />
            <Route path="/algoritmos/estruturas-lineares" element={<EstruturasLineares />} />
            <Route path="/algoritmos/estruturas-nao-lineares" element={<NaoLineares />} />
            <Route path="/algoritmos/busca-e-ordenacao" element={<BuscaEOrdenacao />} />
            <Route path="/algoritmos/arquitetura" element={<Arquitetura />} />
            <Route path="/algoritmos/projeto-algoritmos" element={<ProjetoAlgoritmos />} />

            {/* Rotas de TypeScript */}
            <Route path="/ts/introducao" element={<TsIntro />} />
            <Route path="/ts/tipos-basicos" element={<TiposBasicos />} />
            <Route path="/ts/objetos-e-funcoes" element={<ObjetosEFuncoes />} />
            <Route path="/ts/interfaces" element={<Interfaces />} />
            <Route path="/ts/generics" element={<Generics />} />
            <Route path="/ts/tipos-avancados" element={<TiposAvancados />} />
            <Route path="/ts/modulos" element={<Modulos />} />
            <Route path="/ts/typescript-com-react" element={<TypescriptReact />} />
            <Route path="/ts/consumo-de-api" element={<ConsumoAPI />} />
            <Route path="/ts/testes" element={<Testes />} />
            <Route path="/ts/projeto-typescript" element={<TsProjeto />} />

            {/* Rotas de React */}
            <Route path="/react/introducao" element={<ReactIntro />} />
            <Route path="/react/fundamentos" element={<ReactFundamentos />} />
            <Route path="/react/hooks" element={<ReactHooks />} />
            <Route path="/react/roteamento" element={<ReactRoteamento />} />
            <Route path="/react/gerenciamento-estado" element={<ReactGerenciamentoEstado />} />
            <Route path="/react/consumo-api" element={<ReactConsumoApi />} />
            <Route path="/react/estilizacao" element={<ReactEstilizacao />} />
            <Route path="/react/testes" element={<ReactTestes />} />
            <Route path="/react/build-vite" element={<ReactBuildVite />} />
            <Route path="/react/projeto-pratico" element={<ReactProjetoPratico />} />
            <Route path="/react/dicas-vaga" element={<ReactDicasVaga />} />

            {/* Rotas de UX */}
            <Route path="/ux/introducao" element={<UxIntro />} />
            <Route path="/ux/principios" element={<PrincipiosUX />} />
            <Route path="/ux/arquitetura" element={<ArquiteturaUX />} />
            <Route path="/ux/lei-de-gestalt" element={<Gestalt />} />
            <Route path="/ux/tipografia" element={<TipografiaUX />} />
            <Route path="/ux/prototipagem" element={<ProtoUX />} />
            <Route path="/ux/nielsen" element={<NielsenUX />} />
            <Route path="/ux/design-thinking" element={<DesignThinking />} />
            <Route path="/ux/acessibilidade" element={<Acessibilidade />} />
            <Route path="/ux/design-emocional" element={<EmocionalUX />} />

            {/* Rotas de Web Services */}
            <Route path="/ws/introducao" element={<WebServicesIntro />} />
            <Route path="/ws/rest" element={<RestWS />} />
            <Route path="/ws/requisicoes" element={<Requisicoes />} />
            <Route path="/ws/consumo-de-api" element={<WSConsumoAPI />} />
            <Route path="/ws/enviando-dados" element={<EnviandoDados />} />
            <Route path="/ws/tratamento-de-erros" element={<Erros />} />
            <Route path="/ws/autenticacao" element={<Autenticacao />} />

            {/* Rotas de Node */}
            <Route path="/node/introducao" element={<NodeIntro />} />
            <Route path="/node/fundamentos" element={<NodeFundamentos />} />
            <Route path="/node/frameworks" element={<NodeFrameworks />} />
            <Route path="/node/banco-de-dados" element={<BancodeDados />} />
            <Route path="/node/boas-praticas" element={<BoasPraticas />} />
            <Route path="/node/deploy" element={<Deploy />} />

            {/* Rotas de Métodos Ágeis */}
            <Route path="/ma/introducao" element={<AgeisIntro />} />
            <Route path="/ma/metodos-ageis" element={<MetodosAgeis />} />
            <Route path="/ma/scrum" element={<SCRUM />} />

            {/* Rotas de IA */}
            <Route path="/ia/introducao" element={<IntroIA />} />
            <Route path="/ia/produtividade" element={<Produtividade />} />
            <Route path="/ia/engenharia-de-prompt" element={<Prompt />} />
            <Route path="/ia/uso-etico" element={<UsoEtico />} />

            <Route path="*" element={<div className="text-center text-red-500 text-2xl">Página não encontrada</div>} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
