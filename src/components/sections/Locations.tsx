"use client";

import { useState } from "react";
import LocationCard from "@/components/sections/LocationCard";
import { locations } from "@/lib/locations";

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState(locations[0].id);

  return (
    <section id="sedes" className="scroll-mt-24 bg-gray-50 py-12 md:py-24" aria-labelledby="titulo-sedes">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Nuestras ubicaciones</p>
          <h2 id="titulo-sedes" className="mt-4 font-heading text-3xl font-bold md:text-5xl">
            Sedes en <span className="text-gold-dark">Tingo María y Aucayacu</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Tres consultorios para agendar tu atención dental en Huánuco.
          </p>
        </div>

        <div
          role="group"
          aria-label="Seleccionar consultorio"
          className="mx-auto mb-6 grid max-w-2xl grid-cols-3 gap-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-sm"
        >
          {locations.map(({ id, shortName }) => (
            <button
              type="button"
              key={id}
              aria-pressed={activeLocation === id}
              aria-controls={id}
              onClick={() => setActiveLocation(id)}
              className={`min-h-11 rounded-xl px-2 text-sm font-bold transition-colors ${
                activeLocation === id ? "bg-gold text-neutral-950 shadow-md" : "text-gray-600 hover:bg-gray-50 hover:text-black"
              }`}
            >
              {shortName}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          {locations.map((location) => (
            <div
              key={location.id}
              hidden={activeLocation !== location.id}
            >
              <LocationCard
                location={location}
                mapDisplay={activeLocation === location.id ? "inline" : "hidden"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
