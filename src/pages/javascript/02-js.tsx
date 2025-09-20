import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/02-js.md?raw';

const JsVariaveis: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/introducao"
      backText="Voltar: Introdução ao JS"
      goRoute="/js/operadores"
      goText="Próximo: Operadores"
    />
  );
};

export default JsVariaveis;
