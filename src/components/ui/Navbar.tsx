"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { m, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Equipo", href: "#equipo" },
  { name: "Sedes", href: "#sedes" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-[padding,background-color,box-shadow,border-color] duration-500 px-6",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Custom PNG Logo */}
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <Image
                src="/logouchuya.webp"
                alt="Uchuya Dental Premium"
                width={200}
                height={202}
                className="h-12 w-auto object-contain"
                priority
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-bold text-xl leading-tight tracking-wider transition-colors",
                  isScrolled ? "text-gray-900" : "text-white drop-shadow-md"
                )}
              >
                UCHUYA
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold-dark uppercase">
                Dental Premium
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold hover:text-gold-dark transition-colors relative group",
                  isScrolled ? "text-gray-700" : "text-white/90"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-[width] duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+51966746478"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                isScrolled ? "text-gray-600" : "text-white/80"
              )}
            >
              <Phone size={16} className="text-gold" />
              966 746 478
            </a>
            <Link
              href="#sedes"
              className="bg-gold-gradient text-white px-7 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform premium-shadow"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir o cerrar menú de navegación"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col"
          >
            {/* Mobile header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
              <span className="font-heading font-bold text-xl tracking-wider">UCHUYA <span className="text-gold-dark text-sm">DENTAL</span></span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile links */}
            <div className="flex flex-col flex-1 items-start justify-center px-10 gap-8">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-heading font-bold text-gray-900 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </m.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-10 pb-12 space-y-4">
              <Link
                href="#sedes"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-gold-gradient text-white px-8 py-4 rounded-full font-bold text-lg text-center"
              >
                Agendar Cita
              </Link>
              <a
                href="tel:+51966746478"
                className="flex items-center justify-center gap-2 text-gray-600 font-semibold"
              >
                <Phone size={18} className="text-gold" />
                +51 966 746 478
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
