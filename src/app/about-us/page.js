import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="https://via.placeholder.com/1200x600" // Imagen de fondo (sustituir con imagen real)
          alt="Hero Placeholder"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        {/* Degradado superpuesto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Un Estilo Clásico, Una Experiencia Moderna</h1>
          <p className="text-lg mb-6 max-w-2xl">
            En Elevation Lounge, creemos en el poder de un corte de calidad y una experiencia personalizada.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-md transition-all duration-300"
          >
            Reserva tu cita
          </a>
        </div>
      </div>

      {/* Historia y Filosofía */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-100 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Nuestro Legado</h2>
            <p className="text-lg text-gray-700">
              Desde nuestros comienzos, hemos creído en el arte del cuidado personal. Nuestros barberos están
              comprometidos con la excelencia, y cada cliente es tratado con el máximo respeto y profesionalismo.
            </p>
          </div>
          <Image
            src="https://via.placeholder.com/400x300" // Imagen real
            alt="Team Placeholder"
            width={400}
            height={300}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Galería de Imágenes */}
      <div className="py-16 bg-white px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Nuestro Espacio</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image
            src="https://via.placeholder.com/400x300" // Imagen real
            alt="Gallery Image 1"
            width={400}
            height={300}
            className="rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="https://via.placeholder.com/400x300" // Imagen real
            alt="Gallery Image 2"
            width={400}
            height={300}
            className="rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="https://via.placeholder.com/400x300" // Imagen real
            alt="Gallery Image 3"
            width={400}
            height={300}
            className="rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
