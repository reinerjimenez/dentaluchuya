"use client";

import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const GALLERY_ITEMS = [
  {
    src: "/clinicaprin.webp",
    alt: "Instalaciones modernas de la Clínica Dental Uchuya Premium de Mailyng en Tingo María, Huánuco",
    label: "Clínica Principal",
    size: "col-span-2 row-span-2",
  },
  {
    src: "/atencioncal.webp",
    alt: "Evaluación dental profesional en la Clínica Dental Uchuya Premium de Mailyng, Tingo María",
    label: "Atención de Calidad",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/blanqueamient.webp",
    alt: "Resultado de blanqueamiento dental en paciente atendida en Tingo María – sonrisa perfecta",
    label: "Blanqueamiento",
    size: "col-span-1 row-span-1",
  },

  {
    src: "/ortopediatria.webp",
    alt: "Tratamiento de ortopediatría en la Clínica Dental Uchuya Premium de Mailyng, Tingo María y Aucayacu",
    label: "Ortopediatría",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/tecnologia.webp",
    alt: "Tecnología de vanguardia en la Clínica Dental Uchuya Premium de Mailyng, Tingo María y Aucayacu",
    label: "Tecnología de Vanguardia",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/ortodonciameta.webp",
    alt: "Ortodoncia invisible realizado en la Clínica Dental Uchuya Premium de Mailyng – tratamiento de ortodoncia invisible en Aucayacu",
    label: "Ortodoncia Metálica",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/ortodonciainv.webp",
    alt: "Ortodoncia invisible realizado en la Clínica Dental Uchuya Premium de Mailyng – tratamiento de ortodoncia invisible en Tingo María",
    label: "Ortodoncia Invisible",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/clientesfelices.webp",
    alt: "Pacientes felices con sus sonrisas en la Clínica Dental Uchuya Premium de Mailyng, Tingo María",
    label: "Pacientes felices",
    size: "col-span-2 row-span-1",
  },
];

const Gallery = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [lightboxLabel, setLightboxLabel] = useState("");

  return (
    <section id="galeria" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">
              Galería
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
              Nuestros <span className="text-gold-dark">Resultados</span> &amp; Clínica
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
            La excelencia se refleja en cada detalle. Conoce nuestras instalaciones y resultados reales.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, index) => (
            <m.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => {
                setLightboxSrc(item.src);
                setLightboxAlt(item.alt);
                setLightboxLabel(item.label);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setLightboxSrc(item.src);
                  setLightboxAlt(item.alt);
                  setLightboxLabel(item.label);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver imagen ampliada: ${item.label}`}
              className={`${item.size} relative overflow-hidden rounded-3xl group cursor-pointer`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={item.size.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <ZoomIn className="text-white mb-2" size={28} />
                <span className="text-white font-bold text-sm tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            </m.div>
          ))}
        </div>

        {/* CTA under gallery */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-6">
            ¿Quieres ver más resultados? Visíta nuestra página de Facebook.
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <a
              href="https://www.facebook.com/share/1Cf85rz4B8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#0066ff] to-[#0044cc] text-white px-10 py-4 rounded-full font-bold hover:scale-110 transition shadow-[0_10px_20px_rgba(0,102,255,0.3)] hover:shadow-[0_15px_30px_rgba(0,102,255,0.4)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </m.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              aria-label="Cerrar imagen ampliada"
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 rounded-full p-2"
            >
              <X size={28} />
            </button>
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col items-center w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image container: tall on mobile, aspect-video on desktop */}
              <div className="relative w-full h-[75svh] md:h-auto md:aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={lightboxSrc}
                  alt={lightboxAlt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              {/* Label shown on mobile; desktop already shows it on hover */}
              {lightboxLabel && (
                <span className="mt-4 text-white font-bold text-base tracking-wider uppercase md:hidden">
                  {lightboxLabel}
                </span>
              )}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
