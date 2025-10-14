import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '../../assets/06-node/06-node.md?raw';

const Deploy: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/node/boas-praticas"
      backText="Voltar: Boas Práticas"
      goRoute="/summary"
      goText="Voltar: Sumário"
    />
  );
};

export default Deploy;
