import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/04-typescript/05-ts.md?raw';

const Generics: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/interfaces"
      backText="Voltar: Interfaces"
      goRoute="/ts/tipos-avancados"
      goText="Próximo: Tipos Avançados"
    />
  );
};

export default Generics;