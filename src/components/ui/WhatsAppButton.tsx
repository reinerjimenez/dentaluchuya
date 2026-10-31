"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SEDES = [
  {
    id: "tingomaria-alameda",
    name: "Tingo María – Alameda Perú",
    badge: "Principal",
    number: "51900755788",
    address: "Av. Alameda Perú 425",
    hours: "Lun–Sáb 9am–1pm / 3:30–8pm",
  },
  {
    id: "tingomaria-prato",
    name: "Tingo María – José Prato",
    badge: "",
    number: "51966746478",
    address: "Jr. José Prato 277",
    hours: "Lun–Sáb 9am–1pm / 3:30–8pm",
  },
  {
    id: "aucayacu",
    name: "Aucayacu",
    badge: "",
    number: "51935817120",
    address: "Av. Lima 455",
    hours: "Lun–Sáb 9am–1pm / 3:30–8pm",
  },
];

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

type Step = 1 | 2;

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [selectedSede, setSelectedSede] = useState<(typeof SEDES)[0] | null>(null);
  const [selectedService, setSelectedService] = useState("");

  const reset = () => {
    setStep(1);
    setSelectedSede(null);
    setSelectedService("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(reset, 400);
  };

  const handleSend = () => {
    if (!selectedSede || !selectedService) return;
    const text = `Hola 👋 Vengo de la web. Me gustaría agendar una cita en la sede *${selectedSede.name}* para *${selectedService}*.`;
    const url = `https://wa.me/${selectedSede.number}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    handleClose();
  };

  return (
    <>
      {/* ── Floating Trigger Button ─────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip label (visible when modal is closed) */}
        <AnimatePresence>
          {!isOpen && (
            <m.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap"
            >
              💬 ¡Chatea con nosotros!
            </m.div>
          )}
        </AnimatePresence>

        <m.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
          aria-label="Abrir chat de WhatsApp"
          className="relative w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center pulse-gold"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <m.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </m.span>
            ) : (
              <m.span
                key="wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* WhatsApp SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </m.span>
            )}
          </AnimatePresence>
        </m.button>
      </div>

      {/* ── Modal ───────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center sm:p-4">
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClose();
              }}
              role="button"
              tabIndex={0}
              aria-label="Cerrar modal"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Panel */}
            <m.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-gold-gradient px-6 py-5 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs font-semibold">En línea ahora</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">Agendar por WhatsApp</h3>
                  <p className="text-white/75 text-sm mt-0.5">Respuesta inmediata · Sin compromiso</p>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Cerrar chat de WhatsApp"
                  className="text-white/70 hover:text-white bg-white/20 rounded-full p-1.5 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Step indicator */}
              <div className="flex px-6 pt-4 gap-2">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors duration-300",
                      step >= s ? "bg-gold" : "bg-gray-200"
                    )}
                  />
                ))}
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Step 1 — Sede */}
                {step === 1 && (
                  <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Paso 1 de 2 · Elige tu sede
                    </p>
                    {SEDES.map((sede) => (
                      <button
                        type="button"
                        key={sede.id}
                        onClick={() => { setSelectedSede(sede); setStep(2); }}
                        className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 hover:border-gold hover:bg-gold/5 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                            <MapPin className="text-gold" size={20} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900">{sede.name}</span>
                              {sede.badge && (
                                <span className="text-[10px] bg-gold/10 text-gold-dark font-bold px-2 py-0.5 rounded-full">
                                  {sede.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-gray-400">{sede.address}</span>
                            <span className="block text-xs text-gray-400">{sede.hours}</span>
                          </div>
                        </div>
                        <ChevronRight className="text-gray-300 group-hover:text-gold transition-colors shrink-0" size={20} />
                      </button>
                    ))}
                  </m.div>
                )}

                {/* Step 2 — Service */}
                {step === 2 && (
                  <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Paso 2 de 2 · Elige el tratamiento
                      </p>
                      <button
                        type="button"
                        onClick={() => { setStep(1); setSelectedService(""); }}
                        className="text-xs text-gold font-bold hover:underline"
                      >
                        ← Volver
                      </button>
                    </div>

                    {/* Selected sede indicator */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-gold/10 rounded-xl">
                      <MapPin size={14} className="text-gold" />
                      <span className="text-xs font-semibold text-gold-dark">
                        Sede: {selectedSede?.name}
                      </span>
                    </div>

                    {/* Service grid */}
                    <div className="grid grid-cols-1 gap-2 max-h-56 overflow-y-auto pr-1">
                      {SERVICIOS.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setSelectedService(s)}
                          className={cn(
                            "w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors",
                            selectedService === s
                              ? "border-gold bg-gold/10 text-gold-dark font-bold"
                              : "border-gray-100 hover:border-gold/40 text-gray-700"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      disabled={!selectedService}
                      onClick={handleSend}
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#20ba5a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2 shadow-lg"
                    >
                      <MessageCircle size={20} />
                      Abrir WhatsApp
                    </button>
                  </m.div>
                )}
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
