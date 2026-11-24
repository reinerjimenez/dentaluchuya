export default function JsonLd({ data }: { data: object }) {
  // Evita que el contenido del JSON cierre la etiqueta script.
  const json = JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
