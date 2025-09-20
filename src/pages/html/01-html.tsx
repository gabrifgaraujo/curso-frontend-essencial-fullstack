import React from 'react';
import ContentPage from '../../components/ContentPage';
// CORREÇÃO: Caminho do import atualizado
import content from '/public/01-html-essencial/01-html.md?raw';

const HtmlIntro: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/summary"
      backText="Voltar ao Sumário"
      goRoute="/html/primeiro-documento"
      goText="Próximo: Primeiro Documento"
    />
  );
};

export default HtmlIntro;
