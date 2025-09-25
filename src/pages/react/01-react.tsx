import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/05-react/01-react.md?raw';

const ReactIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/dicas-vaga"
      backText="Voltar: Dicas para Vaga"
      goRoute="/react/fundamentos"
      goText="Avançar: Fundamentos"
    />
  );
};

export default ReactIntro;
