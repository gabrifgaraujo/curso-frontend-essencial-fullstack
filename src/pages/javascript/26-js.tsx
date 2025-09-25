import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/26-js.md?raw';

const JsModulos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/async-await"
      backText="Voltar: Async/Await"
      goRoute="/ts/introducao"
      goText="TypeScript"
    />
  );
};

export default JsModulos;
