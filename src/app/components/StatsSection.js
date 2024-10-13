// src/app/components/StatsSection.js
export default function StatsSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-center">
          {/* Cada "div" representa una estadística */}
          <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
            <i className="fas fa-cut text-4xl text-yellow-500 mb-2"></i>
            <h3 className="text-3xl font-bold">20</h3>
            <p className="text-gray-700">Skilled Barbers</p>
          </div>
  
          <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
            <i className="fas fa-smile text-4xl text-yellow-500 mb-2"></i>
            <h3 className="text-3xl font-bold">120</h3>
            <p className="text-gray-700">Happy Clients</p>
          </div>
  
          <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
            <i className="fas fa-cut text-4xl text-yellow-500 mb-2"></i>
            <h3 className="text-3xl font-bold">230</h3>
            <p className="text-gray-700">Custom Haircuts</p>
          </div>
  
          <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
            <i className="fas fa-clock text-4xl text-yellow-500 mb-2"></i>
            <h3 className="text-3xl font-bold">15</h3>
            <p className="text-gray-700">Years Experience</p>
          </div>
        </div>
      </section>
    );
  }
  