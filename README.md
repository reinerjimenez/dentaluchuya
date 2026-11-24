# Clínica Dental Uchuya Premium

Sitio público de la clínica en Tingo María y Aucayacu, con Next.js 16, App Router y Tailwind CSS v4. El selector de WhatsApp permite elegir el consultorio y el tratamiento antes de abrir la conversación.

## Desarrollo

Con las dependencias instaladas, ejecuta `npm run dev` y abre `http://localhost:3000`. Para comprobar los cambios, ejecuta `npm run lint`, `npx tsc --noEmit` y `npm run build`.

## Migración de Vercel a dentaluchuya.com

El dominio canónico elegido es **https://dentaluchuya.com**, sin `www`. Mientras la migración está desactivada, `dentaluchuya.vercel.app` sigue sirviendo las páginas con `noindex`. La aplicación comparte la política entre metadatos, robots, sitemap y redirecciones.

1. **Verifica el sitio de origen.** Si vas a usar Cambio de dirección, verifica primero la propiedad de prefijo `https://dentaluchuya.vercel.app/` en Google Search Console. Para el método de etiqueta HTML, añade el valor de `content` de la etiqueta a `GOOGLE_SITE_VERIFICATION` en las variables de producción de Vercel, vuelve a desplegar y completa la verificación con la cuenta que verificará el dominio definitivo.
2. **Conecta ambos nombres.** Tras adquirir el dominio, añade `dentaluchuya.com` y `www.dentaluchuya.com` como dominios del mismo proyecto de producción en Vercel. Usa los registros DNS mostrados por el panel. Deja ambos nombres sirviendo el sitio durante la comprobación inicial. Espera la emisión de certificados y comprueba que ambos respondan por HTTPS. Vercel gestiona la transición de HTTP a HTTPS.
3. **Activa el cambio.** Configura `SITE_URL=https://dentaluchuya.com` (sin barra final) y `INDEXING_ENABLED=true` solo en producción, verifica que la variable de sistema `VERCEL_ENV` esté expuesta y valga `production`, y vuelve a desplegar. La misma compilación activa la indexación de las páginas canónicas y los 301 de Vercel y `www`. Las redirecciones las gestiona la aplicación.
4. **Comprueba las respuestas.** Confirma `200` en `/`, `/sedes/tingo-maria` y `/sedes/aucayacu` del dominio canónico. Revisa los canonicals de cada página y `/robots.txt`, que debe anunciar `https://dentaluchuya.com/sitemap.xml`. El sitemap debe contener esas tres páginas. Comprueba `301` desde las variantes de origen, conservando ruta y parámetros, por ejemplo `/sedes/aucayacu?utm_source=prueba`. Un destino que no existe debe devolver `404`. Comprueba también que una URL de preview indique `noindex`.
5. **Completa Search Console.** Verifica la propiedad de dominio `dentaluchuya.com` con el registro TXT que te indique Google. Envía `/sitemap.xml`, inspecciona las tres páginas y solicita indexación tras comprobar el resultado de la prueba en directo. Comprueba el marcado de las dos páginas locales con la [prueba de resultados enriquecidos de Google](https://search.google.com/test/rich-results). Si la propiedad anterior tenía presencia en Google y la herramienta admite la migración, solicita Cambio de dirección desde esa propiedad. Conserva los 301 durante al menos un año.
6. **Actualiza las fichas y supervisa.** Tras verificar las fichas de Google Business Profile, actualiza sus enlaces a la página local correspondiente. Revisa las páginas indexadas, los errores de rastreo y las métricas de rendimiento en Search Console. Usa PageSpeed Insights para distinguir las pruebas de laboratorio de los datos reales de CrUX cuando estén disponibles.

Para revertir la activación, establece `INDEXING_ENABLED=false` en producción y vuelve a desplegar. Esto restaura el estado de prepublicación. Las redirecciones 301 pueden seguir en caché en navegadores y otros intermediarios, por lo que conviene mantener DNS y HTTPS operativos durante la reversión.

[Dominios de Vercel](https://vercel.com/docs/domains/working-with-domains/add-a-domain) · [Migraciones de Google Search](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) · [Cambio de dirección](https://support.google.com/webmasters/answer/9370220)

## Validación editorial pendiente

La clínica debe confirmar horarios y enlaces oficiales de las fichas de cada consultorio. El perfil del Dr. Roberto Hidalgo menciona ortodoncia y endodoncia en distintas partes. Quedan por validar también la disponibilidad de urgencias, financiación, garantías, cifras, testimonios y el texto para la transcripción de la presentación.
