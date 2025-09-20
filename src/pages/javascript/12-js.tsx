import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/12-js.md?raw';

const JsManipulandoEstilos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/selecionando-elementos"
      backText="Voltar: Selecionando Elementos"
      goRoute="/js/eventos"
      goText="Próximo: Eventos"
    />
  );
};

export default JsManipulandoEstilos;
