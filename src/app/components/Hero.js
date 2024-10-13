// src/app/components/Hero.js
export default function Hero() {
    return (
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/images/barber-bg.jpg)" }} // Asegúrate de tener la imagen en esa ruta
      >
        {/* Capa oscura para mejorar visibilidad del texto */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-6xl font-extrabold mb-4 leading-tight"> {/* Cambiado a text-6xl y más peso */}
            Experimenta el estilo clásico y moderno
          </h1>
          <p className="text-lg mb-6 max-w-2xl">
            Cuidado profesional para mantener tu look perfecto
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-md"
          >
            Reserva tu cita
          </a>
        </div>
      </section>
    );
  }
  