import { useState, useEffect } from 'react';

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { text: "I've been coming to this barbershop for over five years now...", author: "John D." },
    { text: "Absolutely the best place to get a haircut. Friendly staff...", author: "Mike T." },
    { text: "Top-notch service! Never disappointed...", author: "Liam G." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-orange-400 text-black">
      <div className="container mx-auto flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
          <p className="text-lg italic mb-4 leading-relaxed">
            {testimonials[currentIndex].text}
          </p>
          <p className="font-bold">{testimonials[currentIndex].author}</p>
          <div className="flex space-x-4 mt-4">
            <button onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full border-2 border-black">&larr;</button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)} className="p-2 rounded-full border-2 border-black">&rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
