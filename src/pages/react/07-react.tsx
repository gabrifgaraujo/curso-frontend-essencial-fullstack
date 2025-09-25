import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/05-react/07-react.md?raw';

const ReactEstilizacao: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/consumo-api"
      backText="Voltar: Consumo de APIs"
      goRoute="/react/testes"
      goText="Avançar: Testes"
    />
  );
};

export default ReactEstilizacao;
