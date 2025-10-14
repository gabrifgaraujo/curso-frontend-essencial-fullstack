// src/components/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  currentPath: string;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, currentPath, onClick, mobile = false }) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-1 py-2 font-medium transition-all duration-300 ${
        mobile ? 'text-3xl' : 'text-lg'
      } ${isActive ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
      )}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const scrollYRef = useRef<number | null>(null);

  // Sombrinha do header ao rolar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock de scroll — técnica robusta: fixa o body e salva o scroll
  useEffect(() => {
    if (isMenuOpen) {
      // salva posição
      scrollYRef.current = window.scrollY || document.documentElement.scrollTop || 0;

      // evita jump do layout ao esconder a scrollbar
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      // fixa body no lugar
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      // restaura
      const prev = scrollYRef.current ?? 0;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.scrollTo(0, prev);
      scrollYRef.current = null;
    }

    // cleanup caso o componente desmonte
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  // Fecha menu automaticamente ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);

  const isHomePage = location.pathname === '/';
  const headerStyle = isHomePage && !scrolled ? 'bg-transparent' : 'bg-gray-900/80 backdrop-blur-sm shadow-lg';

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerStyle} ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
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

          {/* Nav Desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Início' },
              { path: '/summary', label: 'Sumário' },
              { path: '/sobre', label: 'Sobre' }
            ].map((item) => (
              <NavLink key={item.path} to={item.path} currentPath={location.pathname}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Botão Mobile */}
          <button className="md:hidden text-white z-50" onClick={toggleMenu} aria-label="Abrir menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Overlay / Menu Mobile */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed top-0 left-0 right-0 w-full flex flex-col items-center justify-center"
              style={{ height: '100dvh', background: 'rgba(17,24,39,0.95)', zIndex: 9999 }}
            >
              {/* Botão fechar dentro do overlay */}
              <button
                className="absolute top-6 right-6 text-white"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <FaTimes size={28} />
              </button>

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
