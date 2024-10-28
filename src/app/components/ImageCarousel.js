// src/app/components/ImageCarousel.js
"use client";

import { useState, useEffect } from 'react';

const images = [
  "/images/service1.jpg",
  "/images/service2.jpg",
  "/images/service3.jpg",
  "/images/service4.jpg",
  // Añade más rutas de imágenes según sea necesario
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 rounded-lg shadow-lg overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Service ${currentIndex + 1}`}
        className="w-full h-64 object-cover"
      />
      {/* Controles de navegación */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ml-2 hover:bg-opacity-75 transition"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full mr-2 hover:bg-opacity-75 transition"
      >
        &#9654;
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
