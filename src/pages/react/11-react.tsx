import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/05-react/11-react.md?raw';

const ReactDicasVaga: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/react/projeto-pratico"
      backText="Voltar: Projeto Prático"
      goRoute="/node/introducao"
      goText="Próximo: Introdução ao NodeJS"
    />
  );
};

export default ReactDicasVaga;
