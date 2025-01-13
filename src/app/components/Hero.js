import Image from "next/image";
import barberiaImage from "../assets/barberia-2.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Imagen de fondo optimizada */}
      <Image
        src={barberiaImage}
        alt="Barbería clásica y moderna"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0"
      />
      
      {/* Capa oscura para mejorar visibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Testimonio breve */}
        <p className="italic text-lg text-gray-300 mb-4">
          "La mejor barbería para un look impecable." - Cliente satisfecho
        </p>

        <h1 className="text-6xl font-extrabold mb-4 leading-tight">
          Experimenta el estilo clásico y moderno
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          Cuidado profesional para mantener tu look perfecto
        </p>

        {/* Botón */}
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-md btn-transition"
        >
          Reserva tu cita
        </a>
      </div>
    </section>
  );
}
