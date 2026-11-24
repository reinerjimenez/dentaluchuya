"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

export default function LocationMap({ id, name, address }: { id: string; name: string; address: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const mapId = `mapa-${id}`;

  return (
    <div className="mb-4">
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 text-left text-sm font-bold text-gold-ink hover:underline"
        aria-expanded={isOpen}
        aria-controls={mapId}
        aria-label={`${isOpen ? "Ocultar" : "Ver"} mapa de ${name}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MapPin size={16} aria-hidden="true" />
        {isOpen ? "Ocultar mapa" : "Ver mapa"}
      </button>
      <div id={mapId} hidden={!isOpen}>
        {isOpen && (
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            className="mt-2 h-60 w-full rounded-2xl border-0"
            title={`Mapa de ${name}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
