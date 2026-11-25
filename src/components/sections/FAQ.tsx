"use client";

import { useState } from "react";
import { contactLocation, whatsappUrl } from "@/lib/locations";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    category: "Post-Tratamiento",
    question: "¿Cuáles son los cuidados después de un blanqueamiento?",
    answer:
      "Evita alimentos y bebidas muy pigmentadas (café, té, vino tinto, salsas oscuras) durante las primeras 48 horas. No fumes, usa pajitas para beber y cepíllate con pasta para dientes sensibles. Los resultados pueden durar de 1 a 3 años con un buen mantenimiento.",
  },
  {
    category: "Post-Tratamiento",
    question: "¿Qué cuidados debo tener tras colocar un implante?",
    answer:
      "Las primeras 24 horas aplica hielo cada 20 minutos para reducir la inflamación. Evita alimentos duros, enjuagues con agua tibia y sal, y no toques la zona con la lengua. Toma la medicación indicada. La osteointegración tarda 2-3 meses; durante este período actúa con cuidado.",
  },
  {
    category: "Duración",
    question: "¿Cuánto tiempo dura el tratamiento de ortodoncia?",
    answer:
      "La duración depende de la complejidad del caso. En promedio, un tratamiento con brackets convencionales tarda entre 12 y 24 meses. Los casos leves pueden resolverse en 8-12 meses con alineadores invisibles. En tu evaluación te daremos un cronograma personalizado y realista.",
  },
  {
    category: "Duración",
    question: "¿Cuántas citas necesito para un diseño de sonrisa?",
    answer:
      "El proceso completo de diseño de sonrisa suele requerir entre 2 y 5 citas dependiendo de los procedimientos incluidos (blanqueamiento, carillas, coronas). La primera es de evaluación y planificación digital, y las siguientes para la ejecución. Puedes ver el resultado esperado antes de comenzar.",
  },
  {
    category: "Recomendaciones",
    question: "¿Con qué frecuencia debo ir al dentista?",
    answer:
      "Recomendamos visitas de control y limpieza profesional cada 6 meses. Si usas ortodoncia, las revisiones son mensuales. Una consulta anual de evaluación dental completa (incluyendo radiografías) es esencial para detectar problemas a tiempo y evitar tratamientos mayores.",
  },
  {
    category: "Recomendaciones",
    question: "¿Desde qué edad mis hijos deben ir al dentista?",
    answer:
      "La primera visita debe ser cuando aparezca el primer diente, aproximadamente al año de vida. Las revisiones regulares desde temprana edad previenen caries, detectan problemas de mordida y crean el hábito de una buena salud oral. Nuestra odontopediatra crea un ambiente lúdico y sin miedo.",
  },
  {
    category: "Servicios",
    question: "¿Ofrecen financiamiento para los tratamientos?",
    answer:
      "Sí, contamos con planes de pago flexibles adaptados a tu presupuesto. Aceptamos tarjetas de crédito y débito, y ofrecemos cuotas sin intereses en tratamientos seleccionados. Nuestro objetivo es que ningún paciente se quede sin su tratamiento por razones económicas.",
  },
  {
    category: "Servicios",
    question: "¿Atienden emergencias dentales?",
    answer:
      "¡Absolutamente! Atendemos urgencias de lunes a sábado. Para una atención prioritaria, escríbenos por WhatsApp con la palabra 'URGENCIA' y te asignaremos el primer turno disponible. Dolor severo, fractura dental o infección siempre son prioridad absoluta para nosotros.",
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(FAQS.map((f) => f.category)))];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-2 lg:gap-16">
          {/* Encabezado y filtro */}
          <div className="lg:sticky lg:top-28">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">
              Preguntas Frecuentes
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-8">
              Resolvemos tus <span className="text-gold-dark">Dudas</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              Queremos que te sientas seguro y bien informado antes de iniciar
              tu camino hacia una sonrisa perfecta.
            </p>

            {/* Filtro de categorías */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={cn(
                    "min-h-11 px-5 py-2 rounded-full text-sm font-bold transition",
                    activeCategory === cat
                      ? "bg-gold-gradient text-neutral-950 premium-shadow"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-gold"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details
                key={faq.question}
                name="preguntas-frecuentes"
                open={index === 0}
                hidden={activeCategory !== "Todos" && activeCategory !== faq.category}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6 text-left hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="mb-2 inline-block rounded-full bg-gold/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-gold-dark">
                      {faq.category}
                    </span>
                    <span className="block font-bold text-gray-900">{faq.question}</span>
                  </span>
                  <ChevronDown aria-hidden="true" className="shrink-0 text-gold transition-transform group-open:rotate-180" />
                </summary>
                <p className="border-t border-gray-50 px-6 pb-6 pt-4 leading-relaxed text-gray-500">
                  {faq.answer}
                </p>
              </details>
            ))}

            {/* Contacto */}
            <div className="mt-8 bg-gold-gradient p-6 sm:p-8 rounded-3xl text-white premium-shadow">
              <HelpCircle size={48} className="mb-6 opacity-50" />
              <h3 className="text-2xl font-bold mb-4 text-neutral-950">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="mb-6 leading-relaxed text-neutral-950">
                Escríbenos directamente y uno de nuestros especialistas te
                responderá en minutos.
              </p>
              <a
                href={whatsappUrl(contactLocation, "Hola, tengo una pregunta sobre los tratamientos")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 bg-white text-gold font-bold px-5 sm:px-8 py-3 rounded-full hover:scale-105 transition-transform"
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
