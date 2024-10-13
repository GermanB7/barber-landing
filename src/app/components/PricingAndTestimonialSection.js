// src/app/components/PricingAndTestimonialSection.js
export default function PricingAndTestimonialSection() {
    return (
      <section className="py-16 bg-beige-100 text-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Sección de Precios */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-8">Our Prices</h2>
            <ul className="text-lg">
              <li className="flex justify-between items-center border-b border-gray-400 py-4">
                <span className="text-xl font-semibold">Haircut</span>
                <span className="text-xl">$40</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-400 py-4">
                <span className="text-xl font-semibold">Shave</span>
                <span className="text-xl">$35</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-400 py-4">
                <span className="text-xl font-semibold">Haircut + Shave</span>
                <span className="text-xl">$70</span>
              </li>
              <li className="flex justify-between items-center py-4">
                <span className="text-xl font-semibold">Beard Trim</span>
                <span className="text-xl">$15</span>
              </li>
            </ul>
          </div>
  
          {/* Tarjeta de Testimonios */}
          <div className="md:w-1/2 bg-orange-400 p-8 rounded-xl shadow-lg"> {/* Cambiamos a 'rounded-xl' */}
            <p className="text-lg italic mb-4 leading-relaxed text-white">
              "I've been coming to this barbershop for over five years now, and I've never been disappointed. The barbers here are skilled, friendly, and always know the latest trends. Every visit is a great experience!"
            </p>
            <p className="font-bold text-white">John D.</p>
  
            {/* Indicadores */}
            <div className="flex space-x-4 mt-4">
              <button className="p-2 rounded-full border-2 border-white text-white">&larr;</button>
              <button className="p-2 rounded-full border-2 border-white text-white">&rarr;</button>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  