import { Sparkles, ShieldCheck, Heart, Zap, Star, UserCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Diseño de Sonrisa",
    description:
      "El tratamiento más solicitado por nuestros pacientes en Tingo María. Personalizamos cada detalle — forma, color y proporción — para lograr la sonrisa que siempre soñaste, adaptada a tu rostro y personalidad.",
    icon: Sparkles,
  },
  {
    title: "Implantes Dentales",
    description:
      "Somos el centro de implantología de referencia en la Selva Central del Perú. Recupera la función masticatoria y la estética con implantes de titanio de carga inmediata y tecnología de precisión.",
    icon: ShieldCheck,
  },
  {
    title: "Ortodoncia con Brackets e Invisalign",
    description:
      "Alineamos tu sonrisa en Tingo María y Aucayacu con brackets convencionales, zafiro o con alineadores Invisalign. Tratamientos para niños, adolescentes y adultos con seguimiento mensual personalizado.",
    icon: Zap,
  },
  {
    title: "Blanqueamiento Dental",
    description:
      "Recupera el blanco natural de tus dientes con los sistemas de blanqueamiento más avanzados del mercado. Consulta la disponibilidad de este tratamiento en tu sede. Resultados visibles desde la primera sesión.",
    icon: Star,
  },
  {
    title: "Odontopediatría",
    description:
      "Cuidado dental especializado para niños en Tingo María en un ambiente cálido, lúdico y sin miedo. Controles desde el primer diente, sellantes, flúor y tratamientos adaptados a cada etapa de crecimiento.",
    icon: Heart,
  },
  {
    title: "Rehabilitación Oral",
    description:
      "Reconstruimos tu salud bucal de forma integral en nuestra clínica dental en Aucayacu y Tingo María. Coronas, carillas, prótesis removibles y fijas con materiales estéticos de la más alta calidad.",
    icon: UserCheck,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-12 md:py-24 bg-gray-50 overflow-hidden">
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
            La clínica dental premium de la Selva Central de Huánuco. Ofrecemos todos los
            tratamientos odontológicos bajo un mismo techo, con tecnología de vanguardia y
            atención personalizada.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 md:p-10 rounded-3xl premium-shadow hover:translate-y-[-10px] transition-transform duration-300 group border border-gray-100"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-gradient transition-colors">
                <service.icon className="text-gold group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
