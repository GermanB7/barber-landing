// src/app/components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-gray-100 py-12 text-gray-700">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo y dirección */}
          <div>
            <h2 className="font-bold text-2xl mb-4">MODERN MANE</h2>
            <p>Wood Lane Forest Hills, NY 11375</p>
            <p>(123) 456-7890</p>
            <p>reserve@modernmane.com</p>
            <p>info@modernmane.com</p>
            <div className="flex space-x-4 mt-4">
              {/* Aquí los iconos de redes sociales */}
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-black">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
  
          {/* Menú */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul>
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Gallery</a></li>
              <li><a href="#" className="hover:text-black">News</a></li>
            </ul>
          </div>
  
          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-black">Menu</a></li>
              <li><a href="#" className="hover:text-black">Opportunities</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Location & Contact</a></li>
            </ul>
          </div>
  
          {/* Horarios y botón de reserva */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Operational</h3>
            <p>Mon-Fri: 8:00AM - 4:00PM</p>
            <p>Sat-Sun: 8:00AM - 4:00PM</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400 transition-colors">
              Reserve now
            </button>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Copyright © MODERN MANE. All Rights Reserved. | Usman A.</p>
        </div>
      </footer>
    );
  }
  