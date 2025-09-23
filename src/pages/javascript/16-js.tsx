import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/16-js.md?raw';

const JsArrowFunctions: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/projeto-lista-tarefas"
      backText="Voltar: Projeto To-Do"
      goRoute="/js/desestruturacao"
      goText="Próximo: Desestruturação"
    />
  );
};

export default JsArrowFunctions;
