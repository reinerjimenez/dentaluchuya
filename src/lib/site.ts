import type { Metadata } from "next";

export const siteName = "Clínica Dental Uchuya Premium";
export const siteDescription =
  "Atención dental en Tingo María y Aucayacu. Consulta nuestras ubicaciones y agenda una evaluación de ortodoncia, implantes o diseño de sonrisa.";
export const productionUrl = "https://dentaluchuya.com";
export const productionHost = "dentaluchuya.com";
export const formerHost = "dentaluchuya.vercel.app";
export const redirectHosts = [formerHost, `www.${productionHost}`];

export const indexingEnabled =
  process.env.VERCEL_ENV === "production" &&
  process.env.SITE_URL === productionUrl &&
  process.env.INDEXING_ENABLED === "true";

export const siteUrl = indexingEnabled ? productionUrl : `https://${formerHost}`;
export const PUBLIC_PAGE_PATHS = ["/", "/sedes/tingo-maria", "/sedes/aucayacu"] as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).href;
}

export const organizationId = absoluteUrl("/#organizacion");

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      alternateName: "Dental Uchuya",
      url: absoluteUrl("/"),
      logo: absoluteUrl("/icon-192.png"),
      email: "admidentaluchuya@gmail.com",
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#sitio"),
      name: siteName,
      alternateName: "Dental Uchuya",
      url: absoluteUrl("/"),
      inLanguage: "es-PE",
      publisher: { "@id": organizationId },
    },
  ],
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: (typeof PUBLIC_PAGE_PATHS)[number];
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} | ${siteName}`;
  const socialImage = absoluteUrl("/clinica-social.jpg");
  const socialImageAlt = "Dr. Fernando Uchuya";

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_PE",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: socialImageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: socialImage, alt: socialImageAlt }],
    },
  };
}
