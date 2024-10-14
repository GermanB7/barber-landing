import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AppointmentSection from './components/AppointmentSection';
import ImageGallery from './components/ImageGallery'; // Galería de imágenes
import PricingAndTestimonialSection from './components/PricingAndTestimonialSection'; // Precios + Testimonios
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsSection />
      <AppointmentSection />
      <ImageGallery /> {/* Galería de imágenes */}
      <ContactSection />
      <PricingAndTestimonialSection /> {/* Precios + Testimonios */}
      <Footer />
    </div>
  );
}
