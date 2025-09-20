import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/07-js.md?raw';

const JsObjetos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/funcoes"
      backText="Voltar: Funções"
      goRoute="/js/condicionais"
      goText="Próximo: Condicionais"
    />
  );
};

export default JsObjetos;
