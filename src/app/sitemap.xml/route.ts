import { absoluteUrl, indexingEnabled, PUBLIC_PAGE_PATHS } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  if (!indexingEnabled) {
    return new Response("Sitemap no publicado.", { status: 404 });
  }

  const entries = PUBLIC_PAGE_PATHS.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
  ].join("\n");

  return new Response(sitemap, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
