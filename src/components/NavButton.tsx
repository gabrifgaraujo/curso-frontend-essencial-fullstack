// src/components/NavButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  text: string;
  type: 'back' | 'go';
}

const NavButton: React.FC<NavButtonProps> = ({ to, text, type }) => {
  const baseClasses = "px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center";
  const typeClasses = type === 'back'
    ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
    : "bg-sky-600 hover:bg-sky-500 text-white";

  return (
    <Link to={to} className={`${baseClasses} ${typeClasses}`}>
      {text}
    </Link>
  );
};

export default NavButton;
