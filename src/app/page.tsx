import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import AudioPlayer from "@/components/ui/AudioPlayer";
import JsonLd from "@/components/ui/JsonLd";
import { locations } from "@/lib/locations";
import { homeSchema, pageMetadata, siteDescription, siteName } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { Shield, Star, Users, Award, CheckCircle } from "lucide-react";

// Next.js divide el código de estas secciones y conserva su HTML inicial.
const Services = dynamic(() => import("@/components/sections/Services"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Team = dynamic(() => import("@/components/sections/Team"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));

export const metadata = pageMetadata({
  title: `${siteName} | Tingo María y Aucayacu`,
  description: siteDescription,
  path: "/",
});

const TRUST_BADGES = [
  { icon: Shield, text: "Garantía Total", sub: "Tratamientos seguros y certificados" },
  { icon: Star, text: "4.9 / 5 Estrellas", sub: "En Google y Facebook" },
  { icon: Users, text: "10,000 Pacientes", sub: "Sonrisas transformadas" },
  { icon: Award, text: "Tecnología TOP", sub: "Equipos de última generación" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={homeSchema} />
      {/* ── 1. HERO ─────────────────────────────────── */}
      <Hero />

      {/* ── 1b. AUDIO PLAYER (presentación de la clínica) ── */}
      <AudioPlayer />

      {/* ── 2. TRUST BAR ────────────────────────────── */}
      <div
        className="bg-white py-12 border-b border-gray-100"
        aria-label="Indicadores de confianza"
        role="region"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {TRUST_BADGES.map(({ icon: Icon, text, sub }) => (
              <div
                key={text}
                className="group flex cursor-default flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold-ink transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-gray-950 md:size-14">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base text-gray-900">{text}</p>
                  <p className="text-xs text-gray-600 leading-snug">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. SERVICIOS ────────────────────────────── */}
      <Services />

      {/* ── 4. SOBRE NOSOTROS ───────────────────────── */}
      <section
        id="nosotros"
        className="py-12 md:py-24 bg-white overflow-hidden"
        aria-labelledby="titulo-nosotros"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 xl:gap-24">
            {/* Image side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/druchuya.webp"
                  alt="Dr. Fernando Uchuya, odontólogo de Clínica Dental Uchuya Premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) calc(100vw - 3rem), (max-width: 1023px) 448px, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Floating quote badge */}
              <div className="absolute bottom-4 right-3 md:-bottom-6 md:-right-4 lg:-right-10 bg-white p-4 md:p-6 rounded-[28px] md:rounded-[36px] shadow-2xl border border-gray-100 max-w-[180px] md:max-w-[220px]">
                <p className="text-gold-ink font-bold text-xs md:text-sm mb-1 md:mb-2 italic leading-relaxed">
                  &ldquo;Mi compromiso es devolverte la confianza de sonreír&rdquo;
                </p>
                <p className="text-gray-900 font-bold text-xs">Dr. Fernando Uchuya</p>
                <p className="text-gray-600 text-[10px]">Odontólogo Principal</p>
              </div>

              {/* Experience badge */}
              <div className="absolute top-4 left-3 md:-top-6 md:-left-4 lg:-left-8 bg-gold-gradient text-gray-950 p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-xl">
                <p className="text-2xl md:text-3xl font-bold leading-none">10+</p>
                <p className="text-xs font-semibold opacity-80">Años de<br />experiencia</p>
              </div>
            </div>

            {/* Text side */}
            <div className="lg:w-1/2">
              <span className="text-gold-ink font-bold tracking-[0.2em] uppercase text-sm">
                Sobre Nosotros
              </span>
              <h2 id="titulo-nosotros" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-5 md:mb-8 leading-tight">
                Odontología en <span className="text-gold-ink">Tingo María y Aucayacu</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed mb-7 md:mb-10">
                <p>
                  La <strong className="text-gray-900">{siteName}</strong> es el
                  centro odontológico líder en Tingo María, Aucayacu y toda la región de Huánuco.
                  Con más de una década atendiendo a familias de la Selva Central, combinamos
                  tecnología de vanguardia con la calidez humana que mereces.
                </p>
                <p>
                  Desde diseños de sonrisa hasta implantes dentales y ortodoncia, somos el único
                  centro en la región que ofrece todos los tratamientos bajo un mismo techo, con
                  especialistas certificados y equipos digitales de última generación. Agenda hoy
                  tu <strong className="text-gray-900">evaluación profesional</strong> en cualquiera
                  de nuestras tres sedes.
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 mb-7 md:mb-12">
                {[
                  "Tres consultorios en Tingo María y Aucayacu",
                  "Especialistas certificados con atención sin listas de espera",
                  "Planes de pago flexibles accesibles para toda la familia",
                  "Garantía total en todos nuestros tratamientos dentales",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-gold-ink shrink-0" aria-hidden="true" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12 pt-8 border-t border-gray-100">
                {[
                  { value: "98%", label: "Satisfacción" },
                  { value: `${locations.length} sedes`, label: "A tu alcance" },
                  { value: "10+", label: "Años activos" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-bold text-gold-ink mb-1">{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="#sedes"
                className="flex md:inline-flex min-h-11 items-center justify-center gap-2 bg-gold-gradient text-gray-950 px-6 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform premium-shadow"
              >
                Agenda tu evaluación hoy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. GALERÍA ──────────────────────────────── */}
      <div aria-label="Galería de resultados y clínica">
        <Gallery />
      </div>

      {/* ── 6. EQUIPO MÉDICO ────────────────────────── */}
      <div
        id="equipo"
        aria-label="Equipo de especialistas dentales"
      >
        <Team />
      </div>

      {/* ── 7. TESTIMONIOS ──────────────────────────── */}
      <div aria-label="Opiniones de pacientes">
        <Testimonials />
      </div>

      {/* ── 8. FAQ ──────────────────────────────────── */}
      <div
        id="faq"
        aria-label="Preguntas frecuentes sobre tratamientos dentales"
      >
        <FAQ />
      </div>
      <Locations />
    </div>
  );
}
