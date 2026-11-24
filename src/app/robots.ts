import type { MetadataRoute } from "next";
import { absoluteUrl, indexingEnabled } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Permite que los rastreadores lean la directiva noindex fuera de producción.
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: indexingEnabled ? absoluteUrl("/sitemap.xml") : undefined,
  };
}
