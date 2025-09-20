// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPlay, FaRocket, FaBookOpen } from 'react-icons/fa';

// Dados dos módulos para fácil manutenção
const modules = [
  {
    title: "1. HTML Essencial",
    icon: <FaHtml5 className="text-orange-400" />,
    link: "/html/introducao",
    topics: [
      "Estrutura de páginas web",
      "Tags para textos, listas e links",
      "Uso de imagens e mídia",
      "HTML Semântico e acessibilidade",
    ],
  },
  {
    title: "2. CSS e Flexbox",
    icon: <FaCss3Alt className="text-blue-400" />,
    link: "/css/introducao",
    topics: [
      "Seletores e o Box Model",
      "Cores, fontes e unidades",
      "Layouts modernos com Flexbox",
      "Design responsivo básico",
    ],
  },
  {
    title: "3. JavaScript e DOM",
    icon: <FaJsSquare className="text-yellow-400" />,
    link: "/js/introducao",
    topics: [
      "Variáveis, tipos e operadores",
      "Funções e estruturas de controle",
      "Manipulação de elementos (DOM)",
      "Eventos e interatividade",
    ],
  },
];

const Home: React.FC = () => {
  const [lastRoute, setLastRoute] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedRoute = localStorage.getItem('lastFrontendRoute');
    if (savedRoute && savedRoute !== '/') {
      setLastRoute(savedRoute);
    }
  }, []);

  const handleContinue = () => {
    if (lastRoute) {
      navigate(lastRoute);
    }
  };

  return (
    <div className="space-y-20 pt-16">
      {/* Seção de Herói */}
      <section className="text-center">
        <div className="inline-block bg-gray-800 p-4 rounded-full mb-6">
          <FaBookOpen className="text-sky-400" size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Guia Completo de Frontend Essencial
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Um guia abrangente para iniciar no desenvolvimento web, dominando HTML, CSS e JavaScript para construir suas primeiras aplicações.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/summary" 
            className="flex items-center gap-2 bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-transform transform hover:scale-105"
          >
            <FaPlay />
            Começar a Aprender
          </Link>
          {lastRoute && (
            <button 
              onClick={handleContinue}
              className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Continuar de onde parei
            </button>
          )}
        </div>
      </section>

      {/* Links Rápidos para Módulos */}
      <section className="flex flex-wrap justify-center gap-3 md:gap-4">
        {modules.map(mod => (
          <Link 
            key={mod.title}
            to={mod.link}
            className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-full transition-all"
          >
            {React.cloneElement(mod.icon, { size: 20 })}
            <span>{mod.title.split('. ')[1]}</span>
          </Link>
        ))}
      </section>

      {/* Grid de Módulos */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod) => (
          <Link 
            to={mod.link} 
            key={mod.title} 
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-900 p-3 rounded-lg">
                {React.cloneElement(mod.icon, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold text-white">{mod.title}</h3>
            </div>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              {mod.topics.map(topic => <li key={topic}>{topic}</li>)}
            </ul>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
