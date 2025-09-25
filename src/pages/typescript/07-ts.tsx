import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/04-typescript/07-ts.md?raw';

const Modulos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/ts/tipos-avancados"
      backText="Voltar: Tipos Avançados"
      goRoute="/ts/typescript-com-react"
      goText="Próximo: TypeScript com React"
    />
  );
};

export default Modulos;