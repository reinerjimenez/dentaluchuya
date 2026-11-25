import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center bg-neutral-950 py-24 sm:py-28 lg:py-32">
      <Image
        src="/hero.webp"
        alt=""
        fill
        fetchPriority="high"
        loading="eager"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-4xl font-bold leading-[1.1] text-white font-heading md:mb-6 md:text-6xl lg:text-7xl">
            Clínica dental en{" "}
            <span className="text-gold-gradient">Tingo María y Aucayacu</span>
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 md:mb-10 md:text-xl">
            Diseño de sonrisa, implantes, ortodoncia y blanqueamiento con tecnología de vanguardia y{" "}
            <strong className="text-gold-light">atención personalizada desde el primer día</strong>.
          </p>

          <div className="mb-7 flex flex-col gap-4 sm:flex-row md:mb-10">
            <Link
              href="#sedes"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105 premium-shadow"
            >
              <span className="text-neutral-950">Agenda tu cita</span> <ChevronRight size={20} aria-hidden="true" />
            </Link>
            <Link
              href="#galeria"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/20"
            >
              <Play size={18} className="fill-white" aria-hidden="true" /> Ver resultados
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2 font-semibold text-white/80">
              <Star size={16} className="fill-gold text-gold" aria-hidden="true" />
              4.9/5 · +500 reseñas
            </p>
            <p>✓ Sin lista de espera</p>
            <p>✓ Respuesta inmediata</p>
          </div>
        </div>

        <div className="mt-7 flex w-fit max-w-full items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-lg text-white lg:ml-auto lg:mt-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-xl font-bold text-neutral-950">10+</span>
          <div>
            <p className="text-sm font-bold">Años de excelencia</p>
            <p className="text-xs text-white/60">10,000+ pacientes atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
