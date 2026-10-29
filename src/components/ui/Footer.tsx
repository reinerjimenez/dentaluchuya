import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

// Social icons — lucide-react doesn't export Facebook/Instagram/TikTok
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.75a4.85 4.85 0 0 1-1.02-.06z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/share/1Cf85rz4B8/?mibextid=wwXIfr",
    label: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    href: "https://www.instagram.com/clinicadentaluchuya_premium",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "https://www.tiktok.com/@uchuya_dental_premium",
    label: "TikTok",
    icon: <TikTokIcon />,
  },
];

const NAV_LINKS = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Equipo", href: "#equipo" },
  { name: "FAQ", href: "#faq" },
  { name: "Sedes", href: "#sedes" },

];

const SEDES = [
  {
    name: "Tingo María (Principal)",
    address: "Av. Alameda Perú 425, Tingo María 10131",
    phone: "+51 900755788",
    hours: "Lun – Sáb: 9:00 AM – 8:00 PM",
    whatsapp: "51966746478",
  },
  {
    name: "Sede Aucayacu",
    address: "Av. Lima 455, Aucayacu 10171",
    phone: "+51 935 817 120",
    hours: "Lun – Sáb: 9:00 AM – 8:00 PM",
    whatsapp: "51935817120",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-white">


      {/* Main footer body */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/logouchuya.webp"
                  alt="Uchuya Dental Premium"
                  width={200}
                  height={202}
                  className="h-12 w-auto object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none text-white">
                  UCHUYA
                </span>
                <span className="text-[10px] text-gold tracking-[0.25em] font-semibold">
                  DENTAL PREMIUM
                </span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Líderes en odontología estética y salud dental premium en la Selva Central. Tecnología de vanguardia y atención que transforma vidas.
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:admidentaluchuya@gmail.com" className="hover:text-gold transition-colors">
                admidentaluchuya@gmail.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-white transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-heading font-bold mb-6 text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold transition-[width] duration-300 group-hover:w-3" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sedes */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-heading font-bold mb-6 text-white uppercase tracking-wider">
              Nuestras Sedes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {SEDES.map((sede) => (
                <div key={sede.name} className="space-y-3">
                  <h5 className="font-bold text-gold-dark text-sm">{sede.name}</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p className="flex gap-2">
                      <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                      {sede.address}
                    </p>
                    <p className="flex gap-2">
                      <Phone size={14} className="text-gold shrink-0 mt-0.5" />
                      <a
                        href={`tel:${sede.phone.replace(/\s/g, "")}`}
                        className="hover:text-gold transition-colors"
                      >
                        {sede.phone}
                      </a>
                    </p>
                    <p className="flex gap-2">
                      <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                      {sede.hours}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${sede.whatsapp}?text=Hola,%20deseo%20agendar%20una%20cita`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#25D366] text-xs font-bold hover:underline"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Escribir por WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Clínica Dental Uchuya Premium de Mailyng. Desarrollado por <a href="https://www.linkedin.com/in/reiner-jairo-jim%C3%A9nez-huaman-9234a9388/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Reiner Jimenez</a>. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
