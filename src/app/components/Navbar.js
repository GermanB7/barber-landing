"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Usamos Link para la navegación en Next.js

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para cambiar el fondo cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white">
          ELEVATION LOUNGE
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            Home
          </Link>
          <Link href="/services" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            Services
          </Link>
          <Link href="/about-us" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            About us
          </Link>
          <Link href="#news" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            News
          </Link>
          {/* Enlace corregido a Shop */}
          <Link href="/shop" className="text-white border border-transparent rounded-full py-2 px-4 hover:border-white transition duration-200">
            Shop
          </Link>
        </nav>

        {/* Botón "Contact us" */}
        <div className="hidden md:block">
          <Link href="#contact" className="bg-transparent border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300">
            Contact us
          </Link>
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
            <Link href="/" className="text-white hover:text-gray-600 transition duration-200" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-gray-600 transition duration-200" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/about-us" className="text-white hover:text-gray-600 transition duration-200" onClick={() => setMenuOpen(false)}>
              About us
            </Link>
            <Link href="#news" className="text-white hover:text-gray-600 transition duration-200" onClick={() => setMenuOpen(false)}>
              News
            </Link>
            {/* Enlace corregido en el menú móvil */}
            <Link href="/shop" className="text-white hover:text-gray-600 transition duration-200" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-600 transition duration-200" onClick={() => setMenuOpen(false)}>
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
