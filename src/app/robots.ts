import type { MetadataRoute } from "next";

// ENTORNO: mientras el dominio personalizado no esté operativo, se usa la URL de Vercel.
// Cuando el dominio esté configurado, establece SITE_URL en el panel de Vercel.
const SITE_URL =
  process.env.SITE_URL ?? "https://dentaluchuya.vercel.app";

// INDEXING_ENABLED: establecer en "true" en Vercel únicamente cuando el dominio
// personalizado esté configurado y activo. Por defecto NO se indexa.
const indexingEnabled = process.env.INDEXING_ENABLED === "true";

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) {
    // Entorno de pruebas: permitir que los rastreadores lean el HTML
    // (necesario para que puedan leer la directiva noindex del <head>),
    // pero bloquear la indexación de contenido.
    return {
      rules: [
        {
          userAgent: "*",
          // Permitimos el acceso al HTML para que los bots lean el noindex.
          // Bloqueamos solo rutas internas de Next.js que no aportan contenido.
          disallow: ["/api/", "/_next/"],
        },
      ],
      // Sin sitemap en entorno de pruebas para no inducir a los bots a indexar.
    };
  }

  // Producción con dominio personalizado activo:
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
