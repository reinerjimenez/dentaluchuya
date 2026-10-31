import type { MetadataRoute } from "next";

// ENTORNO: mientras el dominio personalizado no esté operativo, se usa la URL de Vercel.
// Cuando el dominio esté configurado, establece SITE_URL en el panel de Vercel.
const SITE_URL =
  process.env.SITE_URL ?? "https://dentaluchuya.vercel.app";

// La indexación NUNCA debe habilitarse en ningún subdominio de Vercel (*.vercel.app).
// Solo se permite cuando se configure un dominio personalizado definitivo en SITE_URL
// Y se active explícitamente INDEXING_ENABLED === "true".
const isVercelDomain = SITE_URL.includes("vercel.app");
const indexingEnabled = process.env.INDEXING_ENABLED === "true" && !isVercelDomain;

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) {
    // Entorno de pruebas: permitir que los rastreadores accedan al HTML para leer
    // la directiva noindex del <head>, sin bloquear recursos necesarios como CSS/JS en /_next/.
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/"],
        },
      ],
      // Sin sitemap en entorno de pruebas ni en dominio vercel.app
    };
  }

  // Producción con dominio personalizado definitivo activo:
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
