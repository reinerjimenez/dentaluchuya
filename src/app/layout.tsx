import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { indexingEnabled, siteDescription, siteName, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  applicationName: siteName,
  robots: indexingEnabled
    ? { index: true, follow: true, "max-image-preview": "large" }
    : { index: false, follow: false },
  icons: { apple: { url: "/icon-192.png", sizes: "192x192", type: "image/png" } },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:flex focus:min-h-11 focus:items-center focus:rounded-lg focus:bg-white focus:px-4 focus:font-bold focus:text-gray-950"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
