import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/01-js.md?raw';

const JsIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/projeto-blog"
      backText="Voltar: Projeto CSS"
      goRoute="/js/variaveis"
      goText="Próximo: Variáveis e Dados"
    />
  );
};

export default JsIntro;
