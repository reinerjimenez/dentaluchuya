"use client";

import { Star, Quote } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "María Fernández",
    location: "Tingo María",
    service: "Diseño de Sonrisa",
    rating: 5,
    text: "¡Me cambiaron la vida! Llevaba años con complejos por mi sonrisa. El equipo del Dr. Fernando fue increíblemente profesional y cariñoso. Ahora sonrío con total confianza.",
    initial: "MF",
  },
  {
    name: "Carlos Mendoza",
    location: "Aucayacu",
    service: "Implantes Dentales",
    rating: 5,
    text: "El proceso fue rápido y sin dolor. Esperaba semanas de molestia pero me recuperé en días. Tecnología de primer nivel y un equipo que te hace sentir en familia.",
    initial: "CM",
  },
  {
    name: "Lucía Paredes",
    location: "Tingo María",
    service: "Ortodoncia",
    rating: 5,
    text: "Después de 14 meses de tratamiento, mi sonrisa es perfecta. El seguimiento fue constante, siempre atentos a cada detalle. 100% recomendada, no busquen más.",
    initial: "LP",
  },
  {
    name: "Rodrigo Saavedra",
    location: "Aucayacu",
    service: "Blanqueamiento",
    rating: 5,
    text: "Resultados inmediatos y duraderos. En solo 1 hora mis dientes quedaron varios tonos más blancos. Vale cada sol invertido. El ambiente de la clínica es de primer nivel.",
    initial: "RS",
  },
  {
    name: "Ana Torres",
    location: "Tingo María",
    service: "Odontopediatría",
    rating: 5,
    text: "Llevé a mi hija de 6 años con miedo al dentista. La Dra. y su equipo la hicieron sentir tan cómoda que ahora ¡ella misma pide ir! Gracias por tanta paciencia y profesionalismo.",
    initial: "AT",
  },
  {
    name: "Jorge Huamán",
    location: "Aucayacu",
    service: "Rehabilitación Oral",
    rating: 5,
    text: "Vine con un caso muy complejo. Me dieron un plan de tratamiento detallado, cumplieron cada plazo y el resultado superó mis expectativas. Clínica de nivel internacional.",
    initial: "JH",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[number] }) => (
  <div
    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col"
  >
    {/* Quote icon */}
    <Quote className="text-gold/30 mb-4" size={36} />

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={16} className="fill-gold text-gold" />
      ))}
    </div>

    {/* Text */}
    <p className="text-gray-600 leading-relaxed flex-1 mb-6 italic">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Tag */}
    <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider mb-6">
      {testimonial.service}
    </span>

    {/* Author */}
    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
      <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-neutral-950 font-bold text-sm shrink-0">
        {testimonial.initial}
      </div>
      <div>
        <p className="font-bold text-gray-900">{testimonial.name}</p>
        <p className="text-xs text-gray-600">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm"
          >
            Testimonios Reales
          </span>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Pacientes que{" "}
            <span className="text-gold-dark">Transformaron</span> su Vida
          </h2>
          <p className="text-gray-500 text-lg">
            Más de 10,000 sonrisas felices nos respaldan. Estas son algunas de sus historias.
          </p>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-3 gap-2 sm:gap-8 max-w-2xl mx-auto mb-16"
        >
          {[
            { value: "10,000+", label: "Pacientes Atendidos" },
            { value: "4.9★", label: "Calificación Promedio" },
            { value: "98%", label: "Índice de Satisfacción" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold-dark">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, visibleCount).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < TESTIMONIALS.length && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setVisibleCount(TESTIMONIALS.length)}
              className="bg-gold-gradient text-neutral-950 min-h-11 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform premium-shadow"
            >
              Ver más testimonios
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
