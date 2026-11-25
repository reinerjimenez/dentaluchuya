"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { contactLocation } from "@/lib/locations";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Servicios", href: "/#servicios" },
  { name: "Galería", href: "/#galeria" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Equipo", href: "/#equipo" },
  { name: "Sedes", href: "/#sedes" },
  { name: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const homeLinkRef = useRef<HTMLAnchorElement>(null);
  const solid = pathname !== "/" || isScrolled;
  const bookingLink = "/#sedes";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) menuRef.current?.close();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  const closeMenu = () => menuRef.current?.close();
  const telephone = `tel:${contactLocation.telephone}`;

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-[padding,background-color,box-shadow,border-color] duration-500 px-6",
          solid
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" ref={homeLinkRef} aria-label="Clínica Dental Uchuya Premium, inicio" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <Image
                src="/logouchuya.webp"
                alt=""
                width={200}
                height={202}
                className="h-12 w-auto object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-bold text-xl leading-tight tracking-wider transition-colors",
                  solid ? "text-gray-900" : "text-white drop-shadow-md"
                )}
              >
                UCHUYA
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold-dark uppercase">
                Dental Premium
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "inline-flex min-h-11 items-center text-sm font-semibold transition-colors relative group",
                  solid ? "text-gray-700 hover:text-gold-dark" : "text-white/90 hover:text-gold-dark"
                )}
              >
                {link.name}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gold transition-[width] duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={telephone}
              className={cn(
                "flex min-h-11 items-center gap-2 text-sm font-semibold transition-colors",
                solid ? "text-gray-600" : "text-white/80"
              )}
            >
              <Phone size={16} className="text-gold" />
              {contactLocation.phone.replace(/^\+51\s/, "")}
            </a>
            <Link
              href={bookingLink}
              className="inline-flex min-h-11 items-center bg-gold-gradient text-neutral-950 px-7 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform premium-shadow"
            >
              Agendar cita
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "lg:hidden min-w-11 min-h-11 p-2 rounded-xl transition-colors",
              solid ? "text-gray-900" : "text-white"
            )}
            onClick={() => {
              menuRef.current?.showModal();
              setMobileMenuOpen(true);
            }}
            aria-label="Abrir menú de navegación"
            aria-haspopup="dialog"
            aria-controls="menu-movil"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={28} />
          </button>
          <noscript>
            <style>{'button[aria-controls="menu-movil"] { display: none; }'}</style>
            <a href={bookingLink} className={cn("lg:hidden inline-flex min-h-11 items-center font-semibold", solid ? "text-gray-900" : "text-white")}>
              Sedes
            </a>
          </noscript>
        </div>
      </nav>

      <dialog
        ref={menuRef}
        id="menu-movil"
        aria-labelledby="menu-movil-titulo"
        onClose={() => {
          setMobileMenuOpen(false);
          if (window.matchMedia("(min-width: 64rem)").matches) {
            homeLinkRef.current?.focus({ preventScroll: true });
          } else {
            menuButtonRef.current?.focus({ preventScroll: true });
          }
        }}
        className="fixed inset-0 w-full h-dvh max-h-none max-w-none bg-white text-gray-900 overflow-y-auto"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
            <h2 id="menu-movil-titulo" className="font-heading font-bold text-xl">Menú</h2>
            <button type="button" onClick={closeMenu} aria-label="Cerrar menú" className="grid min-h-11 min-w-11 place-items-center rounded-xl">
              <X size={28} />
            </button>
          </div>

          <nav aria-label="Secciones del sitio" className="flex flex-col flex-1 items-start justify-center px-8 py-6 gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="inline-flex min-h-11 items-center text-3xl font-heading font-bold text-gray-900 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-8 pb-8 space-y-3">
            <Link
              href={bookingLink}
              onClick={closeMenu}
              className="block w-full bg-gold-gradient text-neutral-950 px-8 py-4 rounded-full font-bold text-lg text-center"
            >
              Agendar cita
            </Link>
            <a href={telephone} className="flex min-h-11 items-center justify-center gap-2 text-gray-600 font-semibold">
              <Phone size={18} className="text-gold" />
              {contactLocation.phone}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
