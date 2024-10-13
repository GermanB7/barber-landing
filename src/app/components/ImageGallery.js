// src/app/components/ImageGallery.js
export default function ImageGallery() {
    return (
      <section className="py-16 bg-beige-100 text-black">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold mb-4">Discover Our Works</h2>
          <p className="text-lg mb-8 max-w-md">
            Our team of experienced barbers is dedicated to their craft. We stay updated with the latest techniques and styles to ensure you get the best service possible.
          </p>
  
          {/* Galería de Imágenes */}
          <div className="grid grid-cols-3 gap-6">
            <img src="/images/barber-1.jpg" alt="Barber work 1" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/barber-2.jpg" alt="Barber work 2" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/barber-3.jpg" alt="Barber work 3" className="w-full h-64 object-cover rounded-lg" />
          </div>
  
          {/* Indicadores y controles */}
          <div className="flex justify-between items-center mt-4">
            <span>(15/3)</span>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full border-2 border-black">&larr;</button>
              <button className="p-2 rounded-full border-2 border-black">&rarr;</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  