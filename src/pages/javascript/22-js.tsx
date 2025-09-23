import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/03-javascript/22-js.md?raw';

const JsCallbacks: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/js/hoisting"
      backText="Voltar: Hoisting"
      goRoute="/js/promises"
      goText="Próximo: Promises"
    />
  );
};

export default JsCallbacks;
