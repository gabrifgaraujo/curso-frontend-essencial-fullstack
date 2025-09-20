// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  currentPath: string;
  onClick?: () => void;
  mobile?: boolean;
}

// Componente para os links de navegação, com indicador de página ativa
const NavLink: React.FC<NavLinkProps> = ({ to, children, currentPath, onClick, mobile = false }) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-1 py-2 font-medium transition-all duration-300 ${
        mobile ? 'text-3xl' : 'text-lg'
      } ${
        isActive ? 'text-sky-400' : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></span>
      )}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Efeito de sombra e cor no header ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Deixa o header transparente apenas no topo da página inicial
  const isHomePage = location.pathname === '/';
  const headerStyle = isHomePage && !scrolled
    ? 'bg-transparent'
    : 'bg-gray-900/80 backdrop-blur-sm shadow-lg';

  // Rola a página para o topo ao clicar no logo
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerStyle} ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo e Título */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 z-50">
            <div className="flex items-center gap-1 bg-gray-800 p-2 rounded-lg shadow-inner">
              <FaHtml5 className="text-orange-500" size={20} />
              <FaCss3Alt className="text-blue-500" size={20} />
              <FaJsSquare className="text-yellow-400" size={20} />
            </div>
            <span className="text-xl font-bold text-white">
              Frontend <span className="text-sky-400">Essencial</span>
            </span>
          </Link>
          
          {/* Navegação para Desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Início' },
              { path: '/summary', label: 'Sumário' },
              { path: '/sobre', label: 'Sobre' }
            ].map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                currentPath={location.pathname}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          {/* Botão do Menu Mobile */}
          <button 
            className="md:hidden text-white z-50"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {/* Menu Mobile (Overlay) */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-gray-900/95 z-40 flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center space-y-10">
                {[
                  { path: '/', label: 'Início' },
                  { path: '/summary', label: 'Sumário' },
                  { path: '/sobre', label: 'Sobre' }
                ].map((item) => (
                  <NavLink 
                    key={item.path} 
                    to={item.path} 
                    currentPath={location.pathname}
                    onClick={closeMenu}
                    mobile
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
