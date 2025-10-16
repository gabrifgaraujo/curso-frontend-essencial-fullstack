import React from 'react';
import Markdown from './Markdown';
import NavButton from './NavButton';

interface ContentPageProps {
  content: string;
  backRoute: string;
  backText: string;
  goRoute: string;
  goText: string;
}

const ContentPage: React.FC<ContentPageProps> = ({ content, backRoute, backText, goRoute, goText }) => {
  return (
    <div className="flex flex-col gap-8">
      
      {/* Botões de Navegação (Topo) */}
      <div className="flex justify-between w-full">
        <NavButton to={backRoute} text={backText} type="back" />
        <NavButton to={goRoute} text={goText} type="go" />
      </div>

      {/* Conteúdo Markdown */}
      <article className="w-full bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700/50">
        <Markdown content={content} />
      </article>

      {/* Botões de Navegação (Rodapé) */}
      <div className="flex justify-between w-full">
        <NavButton to={backRoute} text={backText} type="back" />
        <NavButton to={goRoute} text={goText} type="go" />
      </div>

    </div>
  );
};

export default ContentPage;
