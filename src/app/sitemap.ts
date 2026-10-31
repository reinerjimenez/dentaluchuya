import type { MetadataRoute } from "next";

// ENTORNO: mientras el dominio personalizado no esté operativo, se usa la URL de Vercel.
// Cuando el dominio esté configurado, establece la variable de entorno SITE_URL
// con el valor "https://dentaluchuya.com" en el panel de Vercel y elimina el fallback.
const BASE_URL =
  process.env.SITE_URL ?? "https://dentaluchuya.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Solo la URL raíz es una URL real e indexable.
  // Los fragmentos (#servicios, #equipo, etc.) son anclas dentro de la misma página
  // y no deben incluirse en el sitemap (Google los ignora o los trata como error).
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
