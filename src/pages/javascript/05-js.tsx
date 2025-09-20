import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/05-js.md?raw';

const JsArrays: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/strings"
      backText="Voltar: Strings"
      goRoute="/js/funcoes"
      goText="Próximo: Funções"
    />
  );
};

export default JsArrays;
