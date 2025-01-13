export default function AppointmentWidget() {
    return (
      <section className="py-16 bg-gradient-to-b from-black to-gray-800">
        <div className="container mx-auto text-center px-4 text-white">
          {/* Encabezado */}
          <h2 className="text-4xl font-extrabold mb-4">Reserva tu Cita</h2>
          <p className="text-lg mb-12">
            Elige un horario disponible directamente desde nuestro calendario.
          </p>
  
          {/* Widget de Calendly */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
              <iframe
                src="https://calendly.com/germanbernal02?embed_domain=yourdomain.com&embed_type=Inline"
                width="100%"
                height="800" 
                frameBorder="0"
                scrolling="yes" 
                className="rounded-lg border border-gray-300"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
  