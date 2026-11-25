import { Sparkles, ShieldCheck, Heart, Zap, Star, UserCheck } from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import { dentalServices } from "@/lib/dental-services";
import { cities } from "@/lib/locations";
import { absoluteUrl, organizationId } from "@/lib/site";

const serviceIcons = {
  "diseno-de-sonrisa": Sparkles,
  "implantes-dentales": ShieldCheck,
  ortodoncia: Zap,
  "blanqueamiento-dental": Star,
  odontopediatria: Heart,
  "rehabilitacion-oral": UserCheck,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": dentalServices.map(({ id, name, description, cities: serviceCities }) => {
    const url = absoluteUrl(`/#${id}`);
    return {
      "@type": "Service",
      "@id": url,
      url,
      name,
      description,
      provider: { "@id": organizationId },
      ...(serviceCities.length > 0 && {
        areaServed: serviceCities.map((slug) => ({ "@type": "City", name: cities[slug].name })),
      }),
    };
  }),
};

const Services = () => {
  return (
    <section id="servicios" className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <JsonLd data={serviceSchema} />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <span
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm"
          >
            Nuestras Especialidades
          </span>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Tratamientos Dentales en{" "}
            <span className="text-gold-dark">Tingo María y Aucayacu</span>
          </h2>
          <p
            className="text-gray-500 text-lg leading-relaxed"
          >
            Conoce nuestros servicios odontológicos y consulta qué tratamientos puedes agendar en tu sede.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dentalServices.map(({ id, name, description }) => {
            const Icon = serviceIcons[id];
            return (
              <div
                key={id}
                id={id}
                className="bg-white p-6 md:p-10 rounded-3xl premium-shadow hover:translate-y-[-10px] transition-transform duration-300 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-gradient transition-colors">
                  <Icon className="text-gold group-hover:text-white transition-colors" size={32} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{name}</h3>
                <p className="text-gray-500 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
