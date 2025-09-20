import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/15-js.md?raw';

const JsCriandoRemovendo: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/eventos-pratica"
      backText="Voltar: Objeto de Evento"
      goRoute="/js/projeto-lista-tarefas"
      goText="Próximo: Projeto Prático"
    />
  );
};

export default JsCriandoRemovendo;
