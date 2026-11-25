"use client";

import { useEffect, useRef, useState } from "react";
import { X, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import { locations, whatsappUrl } from "@/lib/locations";
import { cn } from "@/lib/utils";

const SERVICIOS = [
  "Diseño de Sonrisa",
  "Implantes Dentales",
  "Ortodoncia (Brackets)",
  "Blanqueamiento Dental",
  "Odontopediatría",
  "Limpieza Profunda",
  "Rehabilitación Oral",
  "Consulta General",
  "Urgencia Dental",
];

const WhatsAppButton = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const stepTitleRef = useRef<HTMLHeadingElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[number] | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const step = selectedLocation ? 2 : 1;
  const bookingLink = selectedLocation && selectedService
    ? whatsappUrl(
        selectedLocation,
        `Hola 👋 Vengo de la web. Me gustaría agendar una cita en la sede *${selectedLocation.name}* para *${selectedService}*.`
      )
    : null;

  useEffect(() => {
    if (dialogRef.current?.open) stepTitleRef.current?.focus();
  }, [step]);

  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
        <div aria-hidden="true" className="hidden whitespace-nowrap rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg sm:block">
          💬 ¡Chatea con nosotros!
        </div>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-label="Abrir chat de WhatsApp"
          aria-haspopup="dialog"
          aria-controls="chat-whatsapp"
          className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-105 active:scale-95 sm:size-16"
        >
          <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </button>
      </div>

      <dialog
        id="chat-whatsapp"
        ref={dialogRef}
        aria-labelledby="chat-whatsapp-titulo"
        onClose={() => {
          setSelectedLocation(null);
          setSelectedService("");
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        className="fixed inset-x-0 bottom-0 m-0 mt-auto h-fit max-h-[calc(100dvh_-_1rem)] w-full max-w-none overflow-y-auto rounded-t-3xl bg-white text-gray-900 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm sm:inset-0 sm:m-auto sm:max-w-md sm:rounded-3xl"
      >
        <div>
          <div className="flex items-start justify-between gap-3 bg-gold-gradient px-6 py-5 text-white">
            <div>
              <p className="mb-1 text-xs font-semibold text-neutral-950">En línea ahora</p>
              <h2 id="chat-whatsapp-titulo" className="font-heading text-xl font-bold text-neutral-950">Agendar por WhatsApp</h2>
              <p className="mt-0.5 text-sm text-neutral-950">Respuesta inmediata · Sin compromiso</p>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Cerrar chat de WhatsApp"
              className="grid min-h-11 min-w-11 shrink-0 place-items-center rounded-full bg-white/20 text-white/70 transition-colors hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div aria-hidden="true" className="flex gap-2 px-6 pt-4">
            <div className="h-1 flex-1 rounded-full bg-gold" />
            <div className={cn("h-1 flex-1 rounded-full", step === 2 ? "bg-gold" : "bg-gray-200")} />
          </div>

          <div className="p-6">
            {selectedLocation ? (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 ref={stepTitleRef} tabIndex={-1} className="text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Paso 2 de 2 · Elige el tratamiento
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLocation(null);
                      setSelectedService("");
                    }}
                    className="min-h-11 rounded-md px-2 text-sm font-bold text-gold hover:underline"
                  >
                    ← Volver
                  </button>
                </div>

                <p className="flex items-center gap-2 rounded-xl bg-gold/10 px-3 py-2 text-sm font-semibold text-gold-dark">
                  <MapPin size={14} aria-hidden="true" />
                  Sede: {selectedLocation.name}
                </p>

                <div className="grid max-h-56 grid-cols-1 gap-2 overflow-y-auto pr-2">
                  {SERVICIOS.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => setSelectedService(service)}
                      aria-pressed={selectedService === service}
                      className={cn(
                        "min-h-11 w-full rounded-xl border-2 px-4 py-2.5 text-left text-sm transition-colors",
                        selectedService === service
                          ? "border-gold bg-gold/10 font-bold text-gold-dark"
                          : "border-gray-200 text-gray-700 hover:border-gold"
                      )}
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {bookingLink ? (
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeDialog}
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] p-4 font-bold text-white shadow-lg transition-colors hover:bg-[#20ba5a]"
                  >
                    <MessageCircle size={20} />
                    <span className="text-neutral-950">Abrir WhatsApp</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-gray-100 p-4 font-bold text-gray-600"
                  >
                    <MessageCircle size={20} />
                    Abrir WhatsApp
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <h3 ref={stepTitleRef} tabIndex={-1} className="mb-4 text-xs font-bold tracking-wide text-gray-700 uppercase">
                  Paso 1 de 2 · Elige tu sede
                </h3>
                {locations.map((location) => (
                  <button
                    type="button"
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className="group flex min-h-11 w-full items-center justify-between gap-3 rounded-2xl border-2 border-gray-100 p-3 text-left transition-colors hover:border-gold hover:bg-gold/5 sm:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gold group-hover:bg-gold/20">
                        <MapPin size={20} />
                      </span>
                      <span>
                        <span className="block font-bold text-gray-900">{location.name}</span>
                        <span className="block text-xs text-gray-600">{location.streetAddress}</span>
                        <span className="block text-xs text-gray-600">{location.hours}</span>
                      </span>
                    </div>
                    <ChevronRight aria-hidden="true" className="shrink-0 text-gray-300 group-hover:text-gold" size={20} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default WhatsAppButton;
