export const cities = {
  "tingo-maria": {
    name: "Tingo María",
    path: "/sedes/tingo-maria",
    description:
      "Direcciones, horarios y teléfonos de Clínica Dental Uchuya Premium en Tingo María, Huánuco. Agenda en Av. Alameda Perú o Jr. José Prato.",
    introduction:
      "Elige entre los consultorios de Av. Alameda Perú y Jr. José Prato. Consulta la ubicación, el teléfono y el horario de cada uno para agendar tu cita dental.",
  },
  aucayacu: {
    name: "Aucayacu",
    path: "/sedes/aucayacu",
    description:
      "Encuentra Clínica Dental Uchuya Premium en Av. Lima 455, Aucayacu, Huánuco. Consulta horarios, cómo llegar y cómo agendar una cita dental.",
    introduction:
      "Nuestro consultorio en Aucayacu está en Av. Lima 455. Consulta cómo llegar y comunícate por teléfono o WhatsApp para agendar tu cita dental.",
  },
} as const;

export type CitySlug = keyof typeof cities;

const schedule = [
  { opens: "09:00", closes: "13:00" },
  { opens: "15:30", closes: "20:00" },
] as const;

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type LocationDetails = {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  citySlug: CitySlug;
  streetAddress: string;
  postalCode: string;
  localNumber: `${number} ${number} ${number}`;
};

function defineLocation({ localNumber, ...details }: LocationDetails) {
  const city = cities[details.citySlug];
  const whatsapp = `51${localNumber.replaceAll(" ", "")}`;

  return {
    ...details,
    city: city.name,
    path: `${city.path}#${details.id}`,
    address: `${details.streetAddress}, ${city.name} ${details.postalCode}, Perú`,
    phone: `+51 ${localNumber}`,
    telephone: `+${whatsapp}`,
    whatsapp,
    hours: `Lun–Sáb · ${schedule.map(({ opens, closes }) => `${opens}–${closes}`).join(" y ")}`,
    openingHoursSpecification: schedule.map((interval) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: weekDays,
      ...interval,
    })),
  };
}

const alameda = defineLocation({
  id: "tingomaria-alameda",
  name: "Tingo María – Alameda Perú",
  shortName: "Alameda Perú",
  badge: "Sede principal",
  citySlug: "tingo-maria",
  streetAddress: "Av. Alameda Perú 425",
  postalCode: "10131",
  localNumber: "900 755 788",
});

export const contactLocation = defineLocation({
  id: "tingomaria-prato",
  name: "Tingo María – José Prato",
  shortName: "José Prato",
  badge: "Sede Tingo María",
  citySlug: "tingo-maria",
  streetAddress: "Jr. José Prato 277",
  postalCode: "10131",
  localNumber: "966 746 478",
});

const aucayacu = defineLocation({
  id: "aucayacu",
  name: "Aucayacu",
  shortName: "Aucayacu",
  badge: "Sede Aucayacu",
  citySlug: "aucayacu",
  streetAddress: "Av. Lima 455",
  postalCode: "10171",
  localNumber: "935 817 120",
});

export const locations = [alameda, contactLocation, aucayacu];

export type ClinicLocation = (typeof locations)[number];

export function whatsappUrl(location: Pick<ClinicLocation, "whatsapp">, message: string) {
  return `https://wa.me/${location.whatsapp}?text=${encodeURIComponent(message)}`;
}
