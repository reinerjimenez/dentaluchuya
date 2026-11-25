import type { CitySlug } from "./locations";

export const dentalServices = [
  {
    id: "diseno-de-sonrisa",
    name: "Diseño de sonrisa",
    description: "En Tingo María, puedes agendar una evaluación de estética dental para conversar sobre la forma, el color y las proporciones de tu sonrisa.",
    cities: ["tingo-maria"],
  },
  {
    id: "implantes-dentales",
    name: "Implantes dentales",
    description: "Consulta si los implantes dentales son una opción para reemplazar dientes perdidos. En la evaluación, el odontólogo revisa tu caso y explica las alternativas.",
    cities: [],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia con brackets o alineadores",
    description: "En Tingo María y Aucayacu, puedes consultar por brackets metálicos, brackets de zafiro y ortodoncia invisible con alineadores Invisalign.",
    cities: ["tingo-maria", "aucayacu"],
  },
  {
    id: "blanqueamiento-dental",
    name: "Blanqueamiento dental",
    description: "Consulta en tu sede por el blanqueamiento dental y agenda una evaluación para conocer las opciones disponibles.",
    cities: [],
  },
  {
    id: "odontopediatria",
    name: "Odontopediatría",
    description: "Atención dental para niños en Tingo María, con controles desde el primer diente, sellantes y flúor según la evaluación.",
    cities: ["tingo-maria"],
  },
  {
    id: "rehabilitacion-oral",
    name: "Rehabilitación oral",
    description: "En Tingo María y Aucayacu, puedes consultar por coronas, carillas y prótesis dentales fijas o removibles.",
    cities: ["tingo-maria", "aucayacu"],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  name: string;
  description: string;
  cities: readonly CitySlug[];
}>;
