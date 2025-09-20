import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/03-js.md?raw';

const JsOperadores: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/variaveis"
      backText="Voltar: Variáveis e Dados"
      goRoute="/js/strings"
      goText="Próximo: Strings"
    />
  );
};

export default JsOperadores;
