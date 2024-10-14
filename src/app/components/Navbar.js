"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para cambiar el fondo cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`} // Fondo cambia dependiendo de si se hizo scroll
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          ELEVATION LOUNGE
        </div>

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            Home
          </a>
          <a href="#" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            Services
          </a>
          <a href="#" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            About us
          </a>
          <a href="#" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            News
          </a>
          <a href="#" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            Shop
          </a>
        </nav>

        {/* Botón "Contact us" */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-transparent border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300">
            Contact us
          </a>
        </div>

        {/* Icono del menú móvil */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Icono de menú de hamburguesa */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-md absolute top-16 left-0 w-full z-50">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-white hover:text-gray-600 transition duration-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-600 transition duration-200">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-600 transition duration-200">
              About us
            </a>
            <a href="#" className="text-white hover:text-gray-600 transition duration-200">
              News
            </a>
            <a href="#" className="text-white hover:text-gray-600 transition duration-200">
              Shop
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
