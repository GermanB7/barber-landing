// src/app/components/ServicesSection.js
"use client"; // Añade esta línea para que sea un Client Component

import { useState } from 'react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('haircut');

  const services = {
    haircut: [
      { name: 'Classic haircut', price: '$7.50', description: 'Sapien nunc amet ultricies pulvinar aliquet.' },
      { name: 'Haircut and shampoo', price: '$5.00', description: 'Venenatis hac curae malesuada a scelerisque.' },
      { name: 'Beard and moustache', price: '$6.75', description: 'Dolores sit ipsum velit purus aliquet massa.' }
    ],
    shaving: [
      { name: 'Head massage', price: '$4.50', description: 'Ut enim ad minim veniam quis nostrud.' },
      { name: 'Beard trimming', price: '$5.00', description: 'Venenatis hac curae malesuada a scelerisque.' }
    ],
    trimming: [
      { name: 'Hair treatment', price: '$6.75', description: 'Dolores sit ipsum velit purus aliquet.' }
    ],
    hairstyling: [
      { name: 'Full hair styling', price: '$10.00', description: 'Complete hair styling with finishing touches.' }
    ]
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Services</h2>
        <p className="text-lg mb-12">Combining traditional techniques with modern styles, providing cut, color, and shave services.</p>

        {/* Pestañas */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('haircut')}
            className={`py-2 px-4 ${activeTab === 'haircut' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-900'} font-semibold border-b-2`}
          >
            Haircut
          </button>
          <button
            onClick={() => setActiveTab('shaving')}
            className={`py-2 px-4 ${activeTab === 'shaving' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-900'} font-semibold border-b-2`}
          >
            Shaving
          </button>
          <button
            onClick={() => setActiveTab('trimming')}
            className={`py-2 px-4 ${activeTab === 'trimming' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-900'} font-semibold border-b-2`}
          >
            Trimming
          </button>
          <button
            onClick={() => setActiveTab('hairstyling')}
            className={`py-2 px-4 ${activeTab === 'hairstyling' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-900'} font-semibold border-b-2`}
          >
            Hairstyling
          </button>
        </div>

        {/* Lista de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services[activeTab].map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-lg font-semibold text-yellow-500">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
