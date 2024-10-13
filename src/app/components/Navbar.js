// src/app/components/Navbar.js
export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Barbería Local
          </div>
          {/* Enlaces de navegación */}
          <div className="flex space-x-6 items-center">
            <a href="#services" className="hover:text-yellow-400">Servicios</a>
            <a href="#about" className="hover:text-yellow-400">Nosotros</a>
            <a href="#contact" className="hover:text-yellow-400">Contacto</a>
            {/* Botón destacado */}
            <a href="#booking" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 py-2 px-4 rounded-md font-semibold">
              Booking
            </a>
          </div>
        </div>
      </nav>
    );
  }
  