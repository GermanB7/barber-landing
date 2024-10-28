// src/app/shop/page.js
"use client";

export default function Shop() {
  // Datos de productos (puedes reemplazarlos con datos reales o integrar una API en el futuro)
  const products = [
    {
      id: 1,
      name: "Pomada para el Cabello",
      price: "$25",
      description: "Pomada de fijación fuerte para un look impecable.",
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      name: "Aceite para Barba",
      price: "$20",
      description: "Aceite nutritivo para una barba suave y brillante.",
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      name: "Shampoo Anticaspa",
      price: "$15",
      description: "Shampoo especial para mantener el cuero cabelludo saludable.",
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 4,
      name: "Cera Mate",
      price: "$22",
      description: "Cera con acabado mate para un look natural.",
      image: "https://via.placeholder.com/300x400",
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <section className="text-gray-900">
      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(https://via.placeholder.com/1200x400)` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-2">Nuestros Productos</h1>
          <p className="text-lg max-w-2xl">
            Descubre nuestra selección de productos de alta calidad para el cuidado personal.
          </p>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className="py-16 bg-backgroundLight px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-xl text-accent mb-2">{product.price}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="bg-accent text-white py-2 px-4 rounded-full font-semibold hover:bg-yellow-600 transition duration-200">
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
