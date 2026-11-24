import type { NextConfig } from "next";
import { indexingEnabled, productionHost, productionUrl, redirectHosts } from "./src/lib/site";

const exactHost = (host: string) => host.replaceAll(".", "\\.");

const nextConfig: NextConfig = {
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async redirects() {
    if (!indexingEnabled) return [];

    return redirectHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: exactHost(host) }],
      destination: `${productionUrl}/:path*`,
      statusCode: 301,
    }));
  },

  async headers() {
    return [
      {
        source: "/:path*",
        // Las URL generadas de un despliegue también sirven el HTML estático.
        missing: indexingEnabled
          ? [productionHost, ...redirectHosts].map((host) => ({
              type: "host",
              value: exactHost(host),
            }))
          : undefined,
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
