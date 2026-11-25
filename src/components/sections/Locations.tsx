"use client";

import Link from "next/link";
import { useState } from "react";
import LocationCard from "@/components/sections/LocationCard";
import { cities, locations } from "@/lib/locations";

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

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
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {Object.values(cities).map((city) => (
              <Link
                key={city.path}
                href={city.path}
                className="inline-flex min-h-11 items-center rounded-full border border-gray-300 bg-white px-4 text-sm font-bold text-gray-800 hover:border-gold hover:text-gold"
              >
                Sedes en {city.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          role="group"
          aria-label="Filtrar consultorios"
          className="mb-6 grid grid-cols-2 gap-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-sm md:hidden"
        >
          {[{ id: null, shortName: "Todas" }, ...locations].map(({ id, shortName }) => (
            <button
              type="button"
              key={id ?? "todas"}
              aria-pressed={activeLocation === id}
              aria-controls="consultorios"
              onClick={() => setActiveLocation(id)}
              className={`min-h-11 rounded-xl px-2 text-sm font-bold transition-colors ${
                activeLocation === id ? "bg-gold text-neutral-950 shadow-md" : "text-gray-600 hover:bg-gray-50 hover:text-black"
              }`}
            >
              {shortName}
            </button>
          ))}
        </div>

        <div id="consultorios" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className={activeLocation && activeLocation !== location.id ? "hidden md:block" : undefined}
            >
              <LocationCard location={location} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
