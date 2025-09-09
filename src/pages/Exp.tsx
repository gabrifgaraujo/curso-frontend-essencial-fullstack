import React from "react";
import {
  FaGraduationCap,
  FaCode,
  FaCogs,
  FaProjectDiagram,
  FaCubes,
  FaDatabase,
  FaPuzzlePiece,
  FaLayerGroup,
  FaMagic,
  FaClock,
  FaServer,
  FaWrench,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

type Topic = {
  id: number;
  title: string;
  description: string[];
  icon: React.ReactNode;
  gradientFromClass: string;
  gradientToClass: string;
  textColorClass: string;
  link: string;
};

const topics: Topic[] = [
  {
    id: 1,
    title: "Introdução ao TypeScript",
    description: [
      "O que é TypeScript e por que usá-lo?",
      "Configurando o ambiente de desenvolvimento",
      "Compilando TypeScript para JavaScript",
      "Visão geral do arquivo tsconfig.json",
    ],
    icon: <FaGraduationCap className="text-xl text-white" />,
    gradientFromClass: "from-[#3178C6]",
    gradientToClass: "to-[#4D87CB]",
    textColorClass: "text-[#3178C6]",
    link: "/intro",
  },
  {
    id: 2,
    title: "Tipos Primitivos e Inferência de Tipo",
    description: [
      "Tipos básicos: string, number, boolean",
      "Arrays e Tuplas",
      "Os tipos any e unknown",
      "Inferência de tipo",
    ],
    icon: <FaCode className="text-xl text-white" />,
    gradientFromClass: "from-[#2C6DB3]",
    gradientToClass: "to-[#4683C4]",
    textColorClass: "text-[#2C6DB3]",
    link: "/fundamentos",
  },
  {
    id: 3,
    title: "Funções e Objetos",
    description: [
      "Tipando parâmetros e retornos de funções",
      "Parâmetros opcionais e padrão",
      "Tipando objetos",
      "Interfaces vs Type Aliases",
    ],
    icon: <FaCogs className="text-xl text-white" />,
    gradientFromClass: "from-[#2561A8]",
    gradientToClass: "to-[#3F77BD]",
    textColorClass: "text-[#2561A8]",
    link: "/hooks",
  },
  {
    id: 4,
    title: "Interfaces e Tipos (Type Aliases)",
    description: [
      "Definindo contratos com interfaces",
      "Propriedades opcionais e readonly",
      "Tipos de União (|) e Interseção (&)",
      "Diferenças e casos de uso: interface vs type",
    ],
    icon: <FaProjectDiagram className="text-xl text-white" />,
    gradientFromClass: "from-[#1F559D]",
    gradientToClass: "to-[#386BB2]",
    textColorClass: "text-[#1F559D]",
    link: "/roteamento",
  },
  {
    id: 5,
    title: "Generics",
    description: [
      "Criando funções e classes genéricas",
      "Restrições em Generics (extends)",
      "Interfaces genéricas",
      "Exemplos práticos de uso",
    ],
    icon: <FaCubes className="text-xl text-white" />,
    gradientFromClass: "from-[#194A92]",
    gradientToClass: "to-[#325FA7]",
    textColorClass: "text-[#194A92]",
    link: "/gerenciamento-estado",
  },
  {
    id: 6,
    title: "Tipos Avançados e Mapeados",
    description: [
      "Tipos Utilitários (Partial, Pick, Omit, etc.)",
      "Tipos Mapeados (in keyof)",
      "Tipos Condicionais",
      "typeof e keyof",
    ],
    icon: <FaDatabase className="text-xl text-white" />,
    gradientFromClass: "from-[#134087]",
    gradientToClass: "to-[#2C539C]",
    textColorClass: "text-[#134087]",
    link: "/consumo-api",
  },
  {
    id: 7,
    title: "Módulos, Namespaces e Decorators",
    description: [
      "Organizando o código com Módulos ES6",
      "Namespaces (uso legado)",
      "Introdução a Decorators",
      "Exemplo de decorator de método",
    ],
    icon: <FaPuzzlePiece className="text-xl text-white" />,
    gradientFromClass: "from-[#0E367C]",
    gradientToClass: "to-[#274791]",
    textColorClass: "text-[#0E367C]",
    link: "/estilizacao",
  },
  {
    id: 8,
    title: "Integrando TypeScript com React",
    description: [
      "Configurando um projeto React com TypeScript",
      "Tipando componentes de função (React.FC)",
      "Tipando Hooks (useState, useRef)",
      "Tipando eventos do DOM",
    ],
    icon: <FaMagic className="text-xl text-white" />,
    gradientFromClass: "from-[#0D3478]",
    gradientToClass: "to-[#26458D]",
    textColorClass: "text-[#0D3478]",
    link: "/testes",
  },
  {
    id: 9,
    title: "Consumindo APIs com Segurança",
    description: [
      "Definindo tipos para respostas de API",
      "Criando funções de requisição com Generics",
      "Lidando com erros e estados de carregamento",
      "Exemplo prático com fetch",
    ],
    icon: <FaLayerGroup className="text-xl text-white" />,
    gradientFromClass: "from-[#F7B731]",
    gradientToClass: "to-[#F9C851]",
    textColorClass: "text-[#F7B731]",
    link: "/vite",
  },
  {
    id: 10,
    title: "Testes em Aplicações TypeScript",
    description: [
      "Configurando o ambiente com Vitest e Testing Library",
      "Escrevendo testes unitários e de integração",
      "Mockando módulos e funções",
      "Testando componentes que consomem APIs",
    ],
    icon: <FaRocket className="text-xl text-white" />,
    gradientFromClass: "from-[#1F559D]",
    gradientToClass: "to-[#386BB2]",
    textColorClass: "text-[#1F559D]",
    link: "/projeto-pratico",
  },
  {
    id: 11,
    title: "Projeto Prático - Lista de Tarefas",
    description: [
      "Estruturação do projeto",
      "Definição dos tipos e interfaces",
      "Desenvolvimento dos componentes React com TypeScript",
      "Gerenciamento de estado local",
    ],
    icon: <FaServer className="text-xl text-white" />,
    gradientFromClass: "from-[#D38D21]",
    gradientToClass: "to-[#E5A229]",
    textColorClass: "text-[#D38D21]",
    link: "/dicas",
  },
  {
    id: 12,
    title: "Próximos Passos e Carreira",
    description: [
      "Tópicos avançados para explorar (Zod, etc.)",
      "TypeScript no mercado de trabalho",
      "Dicas para se destacar em entrevistas técnicas",
      "Recursos adicionais e comunidades",
    ],
    icon: <FaWrench className="text-xl text-white" />,
    gradientFromClass: "from-[#2C6DB3]",
    gradientToClass: "to-[#4683C4]",
    textColorClass: "text-[#2C6DB3]",
    link: "/proximospassos",
  },
];

const Exp: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 p-6">
      <header className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-[#3178C6] to-[#4D87CB] p-1.5 rounded-full mb-6">
          <div className="bg-gray-900 rounded-full p-3">
            <FaGraduationCap className="text-4xl text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3178C6] to-[#4D87CB]">
          Guia Completo de TypeScript
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Um guia completo para desenvolvedores que desejam dominar o TypeScript,
          desde os fundamentos até tópicos avançados, com foco em práticas reais
          de mercado.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map(
          ({
            id,
            title,
            description,
            icon,
            gradientFromClass,
            gradientToClass,
            textColorClass,
            link,
          }) => (
            <article
              key={id}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex items-center mb-5">
                <div
                  className={`p-2 rounded-lg mr-4 bg-gradient-to-r ${gradientFromClass} ${gradientToClass}`}
                >
                  {icon}
                </div>
                <h2
                  className={`text-xl font-bold ${textColorClass}`}
                >{`${id}. ${title}`}</h2>
              </div>

              <ul className="space-y-3">
                {description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`${textColorClass} mr-2`}>•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to={link} className="absolute inset-0 rounded-2xl" />
            </article>
          )
        )}
      </section>
    </div>
  );
};

export default Exp;