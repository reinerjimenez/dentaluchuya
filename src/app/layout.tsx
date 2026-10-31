import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MotionProvider from "@/components/ui/MotionProvider";

/** Serializa JSON-LD de forma segura escapando caracteres XSS (CVE)
 *  JSON.stringify NO escapa <, > ni & — un dato con <\/script> rompería el HTML.
 */
const safeJsonLd = (data: unknown): string =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// ENTORNO: mientras el dominio personalizado no esté operativo, se usa la URL de Vercel.
// Cuando el dominio esté listo, establece SITE_URL="https://dentaluchuya.com" en Vercel.
const BASE_URL =
  process.env.SITE_URL ?? "https://dentaluchuya.vercel.app";

// INDEXING_ENABLED: establecer en "true" en Vercel solo cuando el dominio
// personalizado esté activo y se quiera habilitar la indexación.
const indexingEnabled = process.env.INDEXING_ENABLED === "true";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Clínica Dental Uchuya Premium de Mailyng | Dentista en Tingo María y Aucayacu – Perú",
    template: "%s | Clínica Dental Uchuya Premium de Mailyng",
  },

  description:
    "Clínica Dental Uchuya Premium de Mailyng: líderes en diseño de sonrisa, implantes dentales, ortodoncia con brackets e Invisalign, blanqueamiento y odontopediatría en Tingo María y Aucayacu, Perú.",

  keywords: [
    // Marca
    "Clínica Dental Uchuya",
    "Dental Uchuya Premium",
    "Dr. Fernando Uchuya",
    "dentista Fernando Uchuya",
    // Localización
    "dentista Tingo María",
    "clínica dental Tingo María",
    "odontólogo Tingo María",
    "dentista Aucayacu",
    "clínica dental Aucayacu",
    "odontólogo Aucayacu",
    "dentista Huánuco",
    "dentista Selva Central",
    "dentista Leoncio Prado",
    // Servicios
    "diseño de sonrisa Tingo María",
    "implantes dentales Tingo María",
    "ortodoncia brackets Tingo María",
    "Invisalign Tingo María",
    "blanqueamiento dental Tingo María",
    "odontopediatría Tingo María",
    "rehabilitación oral Tingo María",
    "carillas dentales Tingo María",
    "extracción dental Tingo María",
    "limpieza dental Tingo María",
    // Generales
    "clínica dental premium Perú",
    "odontología estética Perú",
    "mejores dentistas Perú",
  ],

  authors: [
    { name: "Clínica Dental Uchuya Premium de Mailyng", url: BASE_URL },
    { name: "Dr. Fernando Uchuya" },
  ],
  creator: "Clínica Dental Uchuya Premium de Mailyng",
  publisher: "Clínica Dental Uchuya Premium de Mailyng",

  category: "health",

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: "Clínica Dental Uchuya Premium de Mailyng",
    title: "Clínica Dental Uchuya Premium de Mailyng | Transforma tu Sonrisa en Tingo María",
    description:
      "Especialistas en odontología estética y salud dental premium en Tingo María y Aucayacu, Perú. Diseño de sonrisa, implantes, ortodoncia, blanqueamiento. ¡Agenda tu evaluación hoy!",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Clínica Dental Uchuya Premium de Mailyng – Instalaciones modernas en Tingo María",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Uchuya Premium de Mailyng | Tingo María & Aucayacu",
    description:
      "Diseño de sonrisa, implantes, ortodoncia y más. ¡Transforma tu sonrisa hoy!",
    images: ["/hero.webp"],
  },

  // Noindex mientras se opera bajo dominio de prueba.
  // Cambiar a index:true solo cuando INDEXING_ENABLED=true esté configurado
  // y el dominio personalizado esté activo.
  robots: indexingEnabled
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },

  alternates: {
    // Canonical apunta a la URL real del entorno activo.
    // En producción con dominio propio, SITE_URL lo sobreescribirá automáticamente.
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      { url: "/logouchuya.webp", type: "image/webp" },
    ],
    apple: "/logouchuya.webp",
  },

  verification: {
    // Agrega tu código cuando lo tengas en Google Search Console:
    // google: "TU_CODIGO_AQUI",
  },
};

// ─── Structured Data helpers ────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${BASE_URL}/#dentist`,
  name: "Clínica Dental Uchuya Premium de Mailyng",
  alternateName: "Dental Uchuya",
  description:
    "Clínica dental de alta especialidad con tres sedes en la Selva Central del Perú. Ofrecemos diseño de sonrisa, implantes dentales, ortodoncia, blanqueamiento, odontopediatría y rehabilitación oral.",
  url: BASE_URL,
  logo: `${BASE_URL}/logouchuya.webp`,
  image: `${BASE_URL}/hero.webp`,
  telephone: ["+51900755788", "+51966746478", "+51935817120"],
  email: "admidentaluchuya@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "PEN",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  hasMap: "https://maps.app.goo.gl/y9R2KgK39a5VhmTR8?g_st=ic",
  sameAs: [
    "https://www.facebook.com/share/1Cf85rz4B8/?mibextid=wwXIfr",
    "https://www.instagram.com/clinicadentaluchuya_premium",
    "https://www.tiktok.com/@uchuya_dental_premium",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Alameda Perú 425",
      addressLocality: "Tingo María",
      addressRegion: "Huánuco",
      postalCode: "10131",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Jr. José Prato 277",
      addressLocality: "Tingo María",
      addressRegion: "Huánuco",
      postalCode: "10131",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Lima 455",
      addressLocality: "Aucayacu",
      addressRegion: "Huánuco",
      postalCode: "10171",
      addressCountry: "PE",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -9.2974,
    longitude: -76.0026,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "15:30",
      closes: "20:00",
    },
  ],
  // aggregateRating eliminado: no es verificable y puede generar penalización
  // de Google si no proviene de datos estructurados en reseñas reales.
  medicalSpecialty: [
    "Dentistry",
    "Orthodontics",
    "Oral Surgery",
    "Pediatric Dentistry",
    "Cosmetic Dentistry",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuáles son los cuidados después de un blanqueamiento dental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evita alimentos y bebidas muy pigmentadas (café, té, vino tinto, salsas oscuras) durante las primeras 48 horas. No fumes, usa pajitas para beber y cepíllate con pasta para dientes sensibles. Los resultados pueden durar de 1 a 3 años con un buen mantenimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué cuidados debo tener tras colocar un implante dental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las primeras 24 horas aplica hielo cada 20 minutos para reducir la inflamación. Evita alimentos duros, enjuagues con agua tibia y sal, y no toques la zona con la lengua. La osteointegración tarda 2-3 meses.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura el tratamiento de ortodoncia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La duración depende de la complejidad del caso. En promedio, un tratamiento con brackets convencionales tarda entre 12 y 24 meses. Los casos leves pueden resolverse en 8-12 meses con alineadores invisibles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas citas necesito para un diseño de sonrisa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso completo de diseño de sonrisa suele requerir entre 2 y 5 citas dependiendo de los procedimientos incluidos (blanqueamiento, carillas, coronas). Puedes ver el resultado esperado antes de comenzar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia debo ir al dentista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos visitas de control y limpieza profesional cada 6 meses. Si usas ortodoncia, las revisiones son mensuales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Desde qué edad mis hijos deben ir al dentista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La primera visita debe ser cuando aparezca el primer diente, aproximadamente al año de vida. Las revisiones regulares desde temprana edad previenen caries y detectan problemas de mordida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen financiamiento para los tratamientos dentales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, contamos con planes de pago flexibles. Aceptamos tarjetas de crédito y débito, y ofrecemos cuotas sin intereses en tratamientos seleccionados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden emergencias dentales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Atendemos urgencias en ambas sedes de lunes a sábado. Para una atención prioritaria, escríbenos por WhatsApp con la palabra URGENCIA.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: BASE_URL,
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Clínica Dental Uchuya Premium de Mailyng",
  url: BASE_URL,
  description: "Clínica dental premium en Tingo María y Aucayacu, Perú.",
  inLanguage: "es-PE",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" className="scroll-smooth">
      <head>
        {/* ── Preconnect para fuentes y recursos externos ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* ── Structured Data (JSON-LD) ──────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
