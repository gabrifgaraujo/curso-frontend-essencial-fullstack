import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/04-typescript/01-ts.md?raw';

const TsIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/modulos"
      backText="Voltar: Módulos"
      goRoute="/ts/tipos-basicos"
      goText="Próximo: Tipos Básicos"
    />
  );
};

export default TsIntro;
