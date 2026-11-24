import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Dental Uchuya",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d4af37",
    lang: "es-PE",
    orientation: "portrait",
    categories: ["health", "medical"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Agendar Cita",
        short_name: "Cita",
        description: "Agenda tu evaluación",
        url: "/#sedes",
      },
      {
        name: "Nuestras Sedes",
        short_name: "Sedes",
        description: "Encuéntranos en Tingo María y Aucayacu",
        url: "/#sedes",
      },
    ],
  };
}
