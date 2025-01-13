"use client";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Pomada para el Cabello",
      price: "$25",
      description: "Pomada de fijación fuerte para un look impecable.",
      image: "https://via.placeholder.com/300x400",
      isNew: true,
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
      bestSeller: true,
    },
    {
      id: 4,
      name: "Cera Mate",
      price: "$22",
      description: "Cera con acabado mate para un look natural.",
      image: "https://via.placeholder.com/300x400",
    },
  ];

  return (
    <section className="text-gray-900">
      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(https://via.placeholder.com/1200x400)` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-2">Nuestros Productos</h1>
          <p className="text-lg max-w-2xl">
            Descubre nuestra selección de productos de alta calidad para el cuidado personal.
          </p>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className="py-16 bg-gray-100 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Etiqueta para destacar productos */}
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Nuevo
                  </span>
                )}
                {product.bestSeller && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Más Vendido
                  </span>
                )}

                {/* Imagen del producto */}
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />

                {/* Detalles del producto */}
                <h3 className="text-2xl font-semibold mb-2 text-center">{product.name}</h3>
                <p className="text-xl text-yellow-500 text-center mb-2">{product.price}</p>
                <p className="text-gray-600 text-center mb-4">{product.description}</p>

                {/* Botón */}
                <div className="flex justify-center">
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
