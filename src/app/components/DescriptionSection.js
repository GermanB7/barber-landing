// src/app/components/DescriptionSection.js
export default function DescriptionSection() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Imagen */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/images/barbershop.jpg" alt="Barbería" className="rounded-lg shadow-lg" />
          </div>
          {/* Texto */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4"> {/* Cambiado el color a text-gray-900 */}
              Experimenta el look y estilo de la barbería tradicional
            </h2>
            <p className="text-lg text-gray-700 mb-6"> {/* Cambiado el color a text-gray-700 */}
              Ven y descubre de qué se trata todo el alboroto. Si buscas precisión y un corte de alta calidad, este es tu lugar. Nuestros barberos están altamente entrenados y son muy versátiles.
            </p>
            <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-6 rounded-md font-semibold">
              Empieza ahora
            </a>
          </div>
        </div>
      </section>
    );
  }
  