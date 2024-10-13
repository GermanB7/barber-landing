// src/app/components/AppointmentSection.js
export default function AppointmentSection() {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4"> {/* Cambiado el color a text-gray-900 */}
          Reserva una cita hoy
        </h2>
        <p className="text-lg text-gray-700 mb-6"> {/* Cambiado el color a text-gray-700 */}
          Reservar una cita online es la manera más rápida y sencilla.
        </p>
        <a href="#services" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-6 rounded-md font-semibold">
          Ver todos los servicios
        </a>
      </section>
    );
  }
  