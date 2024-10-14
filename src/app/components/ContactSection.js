// src/app/components/ContactSection.js

export default function ContactSection() {
    return (
      <section className="bg-[#4a3f35] text-white py-16 px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Text and Button */}
          <div>
            <h2 className="text-4xl font-bold mb-4">SERVICE BEYOND EXPECTATION</h2>
            <p className="text-lg mb-6">
              Our barbershop is the territory created purely for men who appreciate premium quality, 
              time, and flawless look. We’ll help you to look stylish and confident in the most discreet way.
            </p>
            <button className="bg-[#f7a856] text-black py-3 px-6 font-semibold rounded-md hover:bg-[#f58e42] transition-colors">
              Submit request →
            </button>
          </div>
  
          {/* Right Side: Map, Location, Contact */}
          <div className="flex flex-col space-y-8">
            <div className="bg-[#4f453c] p-6 rounded-md">
              <img 
                src="/images/map-placeholder.png" 
                alt="Map showing location" 
                className="w-full h-auto rounded-md"
              />
            </div>
  
            {/* Location Info */}
            <div className="bg-[#4f453c] p-6 rounded-md flex items-center">
              <div className="text-white text-2xl mr-4">📍</div>
              <div>
                <h3 className="font-semibold text-xl">LOCATION</h3>
                <p>128 Winston st, Upper West Side, Manhattan, New York, NY 05120</p>
              </div>
            </div>
  
            {/* Contact Info */}
            <div className="bg-[#4f453c] p-6 rounded-md flex items-center">
              <div className="text-white text-2xl mr-4">📞</div>
              <div>
                <h3 className="font-semibold text-xl">+1 234 5678</h3>
                <p>Monday – Saturday: 9am – 8pm</p>
                <p>Sunday: 9am – 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  