import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/PROJETO-todo-list.md?raw';

const JsProjeto: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/criando-removendo-elementos"
      backText="Voltar: Criando e Removendo"
      goRoute="/summary"
      goText="Voltar ao Sumário"
    />
  );
};

export default JsProjeto;
