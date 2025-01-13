"use client";

import { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("haircut");

  const services = {
    haircut: [
      { name: "Classic Haircut", price: "$20", description: "Corte de pelo clásico con estilo moderno." },
      { name: "Haircut and Shampoo", price: "$25", description: "Corte de pelo y lavado para un acabado perfecto." },
      { name: "Beard Trim", price: "$15", description: "Recorte y moldeado de barba." },
    ],
    shaving: [
      { name: "Clean Shave", price: "$15", description: "Afeitado completo con toalla caliente." },
      { name: "Beard Trimming", price: "$10", description: "Ajuste y forma para una barba impecable." },
    ],
    hairstyling: [
      { name: "Full Hair Styling", price: "$30", description: "Peinado completo para cualquier ocasión." },
      { name: "Coloring", price: "$50", description: "Coloración personalizada para hombres modernos." },
    ],
    treatments: [
      { name: "Scalp Treatment", price: "$35", description: "Tratamiento para el cuero cabelludo y crecimiento del cabello." },
      { name: "Hair Spa", price: "$40", description: "Relajante tratamiento de spa para el cabello." },
    ],
  };

  const renderTabButtons = () => (
    <div className="flex justify-center mb-8 space-x-4">
      {Object.keys(services).map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`py-2 px-6 rounded-full font-semibold transition-all duration-200 ${
            activeTab === category
              ? "bg-yellow-500 text-gray-900 shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );

  const renderServiceCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services[activeTab].map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md border hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <p className="text-lg font-semibold text-yellow-500">{service.price}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="py-16 text-gray-900"
      style={{
        background: `linear-gradient(135deg, #8B4513, #D2B48C, #F4A460)`,
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Nuestros Servicios</h1>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-700">
          Explora todos los servicios de alta calidad que ofrecemos en Elevation Lounge. Desde cortes de cabello hasta
          tratamientos capilares, tenemos algo para cada caballero.
        </p>

        {/* Carrusel de Imágenes */}
        <div className="mb-16">
          <ImageCarousel />
        </div>

        {/* Renderizado de pestañas y servicios */}
        {renderTabButtons()}
        {renderServiceCards()}
      </div>
    </section>
  );
}
