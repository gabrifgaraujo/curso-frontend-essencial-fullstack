import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/02-css-essencial/02-css.md?raw';

const CssSeletores: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/css/introducao"
      backText="Voltar: Introdução ao CSS"
      goRoute="/css/box-model"
      goText="Próximo: Box Model"
    />
  );
};

export default CssSeletores;
