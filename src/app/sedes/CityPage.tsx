import Link from "next/link";
import LocationCard from "@/components/sections/LocationCard";
import JsonLd from "@/components/ui/JsonLd";
import { type CitySlug, cities, locations } from "@/lib/locations";
import { absoluteUrl, organizationId, pageMetadata, siteName } from "@/lib/site";

export function cityMetadata(slug: CitySlug) {
  const city = cities[slug];
  return pageMetadata({
    title: `Dentista en ${city.name}`,
    description: city.description,
    path: city.path,
  });
}

export default function CityPage({ slug }: { slug: CitySlug }) {
  const city = cities[slug];
  const branches = locations.filter((location) => location.citySlug === slug);
  const otherCity = Object.values(cities).find((item) => item.path !== city.path);
  const schema = {
    "@context": "https://schema.org",
    "@graph": branches.map((location) => ({
      "@type": "Dentist",
      "@id": absoluteUrl(location.path),
      name: `${siteName} – ${location.name}`,
      url: absoluteUrl(location.path),
      parentOrganization: { "@id": organizationId },
      telephone: location.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.streetAddress,
        addressLocality: location.city,
        addressRegion: "Huánuco",
        postalCode: location.postalCode,
        addressCountry: "PE",
      },
      openingHoursSpecification: location.openingHoursSpecification,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-[#fdf8ec] pb-12 pt-28 md:pb-16 md:pt-36" aria-labelledby="titulo-ciudad">
        <div className="container mx-auto px-4 sm:px-6">
          <nav aria-label="Ruta de navegación" className="mb-5 flex flex-wrap items-center gap-x-3 text-sm text-gray-700">
            <Link href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#sedes" className="inline-flex min-h-11 items-center underline underline-offset-4">Sedes</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{city.name}</span>
          </nav>
          <p className="font-bold text-gold-dark">{siteName}</p>
          <h1 id="titulo-ciudad" className="mt-3 font-heading text-4xl font-bold text-gray-950 md:text-6xl">
            Clínica dental en {city.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">{city.introduction}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16" aria-labelledby="contacto-ciudad">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 id="contacto-ciudad" className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            Direcciones y citas en {city.name}
          </h2>
          <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {branches.map((location) => <LocationCard key={location.id} location={location} />)}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#servicios" className="inline-flex min-h-11 items-center rounded-full bg-gold-gradient px-4 py-2 font-bold text-white">
              Ver tratamientos dentales
            </Link>
            {otherCity && (
              <Link href={otherCity.path} className="inline-flex min-h-11 items-center rounded-full border border-gray-300 bg-white px-4 py-2 font-bold text-gray-800 hover:border-gold-dark hover:text-gold-dark">
                Ver sedes en {otherCity.name}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
