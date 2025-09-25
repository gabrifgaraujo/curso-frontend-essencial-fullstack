import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/05-react/05-react.md?raw';

const ReactGerenciamentoEstado: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/roteamento"
      backText="Voltar: Roteamento"
      goRoute="/react/consumo-api"
      goText="Avançar: Consumo de APIs"
    />
  );
};

export default ReactGerenciamentoEstado;
