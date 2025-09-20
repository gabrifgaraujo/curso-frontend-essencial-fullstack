import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/02-css-essencial/PROJETO-estilizando-blog.md?raw';

const CssProjeto: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/flexbox-items"
      backText="Voltar: Flexbox Items"
      goRoute="/js/introducao"
      goText="Próximo Módulo: JavaScript"
    />
  );
};

export default CssProjeto;
