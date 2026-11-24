"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const GALLERY_ITEMS = [
  {
    src: "/clinicaprin.webp",
    alt: "Identidad visual de la Clínica Dental Uchuya Premium",
    label: "Clínica Dental Uchuya Premium",
    size: "col-span-2 row-span-2",
  },
  {
    src: "/atencioncal.webp",
    alt: "Evaluación de un paciente en el consultorio dental",
    label: "Atención de Calidad",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/blanqueamient.webp",
    alt: "Paciente en un sillón dental durante un blanqueamiento",
    label: "Blanqueamiento",
    size: "col-span-1 row-span-1",
  },

  {
    src: "/ortopediatria.webp",
    alt: "Tratamiento de ortopediatría dental",
    label: "Ortopediatría",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/tecnologia.webp",
    alt: "Equipo de radiografía dental durante una consulta",
    label: "Tecnología de Vanguardia",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/ortodonciameta.webp",
    alt: "Odontólogo examinando la boca de una paciente",
    label: "Ortodoncia Metálica",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/ortodonciainv.webp",
    alt: "Equipo dental atendiendo a una paciente en el consultorio",
    label: "Ortodoncia Invisible",
    size: "col-span-1 row-span-1",
  },
  {
    src: "/clientesfelices.webp",
    alt: "Cuatro mujeres sonrientes en una imagen de la clínica",
    label: "Pacientes felices",
    size: "col-span-2 row-span-1",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="galeria" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <span className="text-gold-ink font-bold tracking-[0.2em] uppercase text-sm">
              Galería
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
              Nuestros <span className="text-gold-ink">Resultados</span> &amp; Clínica
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm text-lg leading-relaxed">
            La excelencia se refleja en cada detalle. Conoce nuestras instalaciones y resultados reales.
          </p>
        </div>

        {/* Imágenes de la galería */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item) => (
            <button
              type="button"
              key={item.src}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedImage(item);
                dialogRef.current?.showModal();
              }}
              aria-haspopup="dialog"
              aria-controls="galeria-imagen"
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
              {/* Etiqueta de la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <ZoomIn className="text-white mb-2" size={28} />
                <span className="text-white font-bold text-sm tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Más resultados en Facebook */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            ¿Quieres ver más resultados? Visita nuestra página de Facebook.
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
        </div>
      </div>

      <dialog
        id="galeria-imagen"
        ref={dialogRef}
        aria-label="Imagen ampliada de la galería"
        onClose={() => {
          setSelectedImage(null);
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="fixed inset-0 m-auto w-[calc(100%_-_2rem)] max-w-4xl overflow-visible bg-transparent text-white backdrop:bg-black/95 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Cerrar imagen ampliada"
            className="absolute top-0 right-0 z-10 grid min-h-11 min-w-11 place-items-center rounded-full bg-black/90 text-white"
          >
            <X size={28} />
          </button>
          {selectedImage && (
            <figure>
              <div className="relative h-[75svh] w-full overflow-hidden rounded-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 64rem) 56rem, 100vw"
                />
              </div>
              <figcaption className="mt-4 text-center font-bold tracking-wider">
                {selectedImage.label}
              </figcaption>
            </figure>
          )}
        </div>
      </dialog>
    </section>
  );
};

export default Gallery;
