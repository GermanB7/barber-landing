import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AppointmentSection from './components/AppointmentSection';
import ImageGallery from './components/ImageGallery'; // Galería de imágenes
import PricingAndTestimonialSection from './components/PricingAndTestimonialSection'; // Precios + Testimonios

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsSection />
      <AppointmentSection />
      <ImageGallery /> {/* Galería de imágenes */}
      <PricingAndTestimonialSection /> {/* Precios + Testimonios */}
    </div>
  );
}
