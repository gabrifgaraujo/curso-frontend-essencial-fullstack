import React from 'react';
import ContentPage from '../../components/ContentPage';
import content from '/public/06-node/02-node.md?raw';

const NodeFundamentos: React.FC = () => {
  return (
    <ContentPage
      content={content}
      backRoute="/node/introducao"
      backText="Voltar: Introdução"
      goRoute="/node/frameworks"
      goText="Próximo: Frameworks e API"
    />
  );
};

export default NodeFundamentos;
