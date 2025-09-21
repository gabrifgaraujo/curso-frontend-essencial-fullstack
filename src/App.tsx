// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Summary from './components/Summary';
import Sobre from './components/Sobre';

// Importando as páginas de conteúdo
import HtmlIntro from './pages/html/01-html';
import HtmlPrimeiroDoc from './pages/html/02-html';
import HtmlEstrutura from './pages/html/03-html';
import HtmlLinksImagens from './pages/html/04-html';
import HtmlSemantico from './pages/html/05-html';
import HtmlProjeto from './pages/html/PROJETO-blog';

import CssIntro from './pages/css/01-css';
import CssSeletores from './pages/css/02-css';
import CssBoxModel from './pages/css/03-css';
import CssCoresUnidades from './pages/css/04-css';
import CssTextos from './pages/css/05-css';
import CssIntroFlexbox from './pages/css/06-css';
import CssFlexContainer from './pages/css/07-css';
import CssFlexItems from './pages/css/08-css';
import CssProjeto from './pages/css/PROJETO-estilizando-blog';

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
import JsProjeto from './pages/javascript/PROJETO-todo-list';

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
    <BrowserRouter basename="/curso-frontend-essencial/">
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
            <Route path="/js/projeto-lista-tarefas" element={<JsProjeto />} />

            <Route path="*" element={<div className="text-center text-red-500 text-2xl">Página não encontrada</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
