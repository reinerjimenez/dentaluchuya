"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

export default function LocationMap({
  id,
  name,
  address,
  inline = false,
}: {
  id: string;
  name: string;
  address: string;
  inline?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const mapId = `mapa-${id}`;
  const visible = inline || isOpen;

  return (
    <div className="mb-4">
      {!inline && (
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 text-left text-sm font-bold text-gold hover:underline"
          aria-expanded={isOpen}
          aria-controls={mapId}
          aria-label={`${isOpen ? "Ocultar" : "Ver"} mapa de ${name}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MapPin size={16} aria-hidden="true" />
          {isOpen ? "Ocultar mapa" : "Ver mapa"}
        </button>
      )}
      <div id={mapId} hidden={!visible}>
        {visible && (
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
