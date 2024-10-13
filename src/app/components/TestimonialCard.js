// src/app/components/TestimonialCard.js
export default function TestimonialCard() {
    return (
      <section className="py-16 bg-orange-400 text-black">
        <div className="container mx-auto flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
            <p className="text-lg italic mb-4 leading-relaxed">
              "I've been coming to this barbershop for over five years now, and I've never been disappointed. The barbers here are skilled, friendly, and always know the latest trends. Every visit is a great experience!"
            </p>
            <p className="font-bold">John D.</p>
  
            {/* Indicadores */}
            <div className="flex space-x-4 mt-4">
              <button className="p-2 rounded-full border-2 border-black">&larr;</button>
              <button className="p-2 rounded-full border-2 border-black">&rarr;</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  