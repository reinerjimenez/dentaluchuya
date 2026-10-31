"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { m } from "framer-motion";

const SEDES = [
  {
    name: "Tingo María – Alameda Perú",
    badge: "Sede Principal",
    address: "Av. Alameda Perú 425, Tingo María 10131, Perú",
    phone: "+51 900 755 788",
    whatsapp: "51900755788",
    hours: "Lun – Sáb: 9:00 AM – 1:00 PM y 3:30 – 8:00 PM",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.068!2d-76.0026!3d-9.2974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7f9e3c0000001%3A0x1!2sAv.%20Alameda%20Per%C3%BA%20425%2C%20Tingo%20Mar%C3%ADa!5e0!3m2!1ses!2spe!4v1714600000000",
    mapsDirections: "https://maps.google.com/?q=Av.+Alameda+Perú+425,+Tingo+María,+Peru",
    color: "from-gold to-gold-dark",
  },
  {
    name: "Tingo María – José Prato",
    badge: "Segunda Sede",
    address: "Jr. José Prato 277, Tingo María 10131, Perú",
    phone: "+51 966 746 478",
    whatsapp: "51966746478",
    hours: "Lun – Sáb: 9:00 AM – 1:00 PM y 3:30 – 8:00 PM",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.068!2d-76.0026!3d-9.2974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7f9e3c0000001%3A0x1!2sJr.%20Jos%C3%A9%20Prato%20277%2C%20Tingo%20Mar%C3%ADa!5e0!3m2!1ses!2spe!4v1714600000002",
    mapsDirections: "https://maps.app.goo.gl/y9R2KgK39a5VhmTR8?g_st=ic",
    color: "from-gold-dark to-gold",
  },
  {
    name: "Aucayacu",
    badge: "Sede Aucayacu",
    address: "Av. Lima 455, Aucayacu, Peru, 10171",
    phone: "+51 935 817 120",
    whatsapp: "51935817120",
    hours: "Lun – Sáb: 9:00 AM – 1:00 PM y 3:30 – 8:00 PM",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.068!2d-76.0832!3d-8.9231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7e1a000000001%3A0x1!2sAv.%20Lima%20455%2C%20Aucayacu!5e0!3m2!1ses!2spe!4v1714600000001",
    mapsDirections: "https://maps.google.com/?q=Av.+Lima+455,+Aucayacu,+Peru",
    color: "from-gold to-gold-dark",
  },
];

const Locations = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="sedes" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm"
          >
            Nuestras Ubicaciones
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4"
          >
            Estamos <span className="text-gold-dark">Cerca de Ti</span>
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-4 text-lg max-w-xl mx-auto"
          >
            Tres sedes para que tu atención dental premium esté siempre a mano, donde estés.
          </m.p>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden flex gap-2 mb-8 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
          {SEDES.map((sede, index) => (
            <button
              type="button"
              key={sede.name}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-colors duration-300 text-center ${
                activeTab === index
                  ? "bg-gold text-white shadow-md"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              {sede.name}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {SEDES.map((sede, index) => (
            <div
              key={`wrapper-${sede.name}`}
              className={index !== activeTab ? "hidden md:block" : "block"}
            >
              <m.div
                key={`${sede.name}-${activeTab === index ? 'active' : 'inactive'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: activeTab === index ? 0 : index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] h-full overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card header strip */}
              <div className={`bg-gradient-to-r ${sede.color} px-8 py-5 flex items-center justify-between`}>
                <div>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                    {sede.badge}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white">{sede.name}</h3>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
              </div>

              <div className="p-8">
                {/* Info list */}
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Dirección</p>
                      <p className="text-gray-700 text-sm leading-snug">{sede.address}</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Teléfono / WhatsApp</p>
                      <a href={`tel:${sede.phone.replace(/\s/g, "")}`} className="text-gray-700 text-sm hover:text-gold transition-colors">
                        {sede.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Horario de Atención</p>
                      <p className="text-gray-700 text-sm">{sede.hours}</p>
                    </div>
                  </li>
                </ul>

                {/* Map iframe — lazy loaded by the browser until scrolled into view */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] mb-6">
                  <iframe
                    src={sede.mapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de sede ${sede.name}`}
                    sandbox="allow-scripts allow-popups allow-forms"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={sede.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:border-gold hover:text-gold transition-colors"
                  >
                    <ExternalLink size={16} />
                    Cómo llegar
                  </a>
                  <a
                    href={`https://wa.me/${sede.whatsapp}?text=Hola,%20deseo%20agendar%20una%20cita%20en%20la%20sede%20${encodeURIComponent(sede.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-colors shadow-sm"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
              </m.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
