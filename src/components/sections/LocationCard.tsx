import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { type ClinicLocation, whatsappUrl } from "@/lib/locations";
import LocationMap from "@/components/sections/LocationMap";

export default function LocationCard({ location }: { location: ClinicLocation }) {
  const { id, name, address, badge, phone, telephone, hours } = location;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const appointment = whatsappUrl(location, `Hola, deseo agendar una cita en la sede ${name}.`);

  return (
    <article
      id={id}
      aria-labelledby={`nombre-${id}`}
      className="h-full scroll-mt-28 overflow-hidden rounded-[40px] border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-3 bg-gold-gradient px-5 py-5 text-gray-950 sm:px-8 lg:px-5 xl:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest">{badge}</p>
          <h3 id={`nombre-${id}`} className="font-heading text-2xl font-bold">{name}</h3>
        </div>
        <MapPin size={24} className="size-12 shrink-0 rounded-2xl bg-white/30 p-3" aria-hidden="true" />
      </div>

      <div className="p-5 sm:p-8 lg:p-5 xl:p-8">
        <dl className="mb-5 space-y-4 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <MapPin className="size-9 shrink-0 rounded-xl bg-gold/10 p-2 text-gold-ink" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-gray-600">Dirección</dt>
              <dd>{address}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="size-9 shrink-0 rounded-xl bg-gold/10 p-2 text-gold-ink" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-gray-600">Teléfono</dt>
              <dd>
                <a href={`tel:${telephone}`} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-gold-ink">
                  {phone}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="size-9 shrink-0 rounded-xl bg-gold/10 p-2 text-gold-ink" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-gray-600">Horario de atención</dt>
              <dd>{hours}</dd>
            </div>
          </div>
        </dl>

        <LocationMap id={id} name={name} address={address} />

        <div className="grid grid-cols-2 gap-2">
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Cómo llegar a ${name}`}
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border-2 border-gray-300 px-2 py-2 text-center text-sm font-bold text-gray-700 transition-colors hover:border-gold-ink hover:text-gold-ink"
          >
            <ExternalLink size={16} className="shrink-0" aria-hidden="true" />
            Cómo llegar
          </a>
          <a
            href={appointment}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Agendar por WhatsApp en ${name}`}
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#25d366] px-2 py-2 text-center text-sm font-bold text-[#052213] shadow-sm transition-colors hover:bg-[#20ba5a]"
          >
            <MessageCircle size={16} className="shrink-0" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
