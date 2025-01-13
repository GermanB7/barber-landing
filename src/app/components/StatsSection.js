"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { icon: "fas fa-user-tie", value: "20", label: "Skilled Barbers" },
    { icon: "fas fa-smile-beam", value: "120", label: "Happy Clients" },
    { icon: "fas fa-cut", value: "230", label: "Custom Haircuts" },
    { icon: "fas fa-calendar-alt", value: "15", label: "Years Experience" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="w-1/2 md:w-1/4 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icono */}
            <i
              className={`${stat.icon} text-4xl text-yellow-500 mb-2 transition-transform transform hover:scale-110`}
            ></i>
            
            {/* Número */}
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            
            {/* Etiqueta */}
            <p className="text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
