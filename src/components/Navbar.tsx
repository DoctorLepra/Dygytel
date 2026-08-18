import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Catálogo", to: "/catalogo" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nosotros", to: "/nosotros" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change & manage body scroll lock
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="glass-strong mx-auto flex h-16 w-[min(100%-2rem,80rem)] items-center justify-between rounded-2xl px-4 sm:px-6">
          <Link to="/" className="flex items-center">
            <img src="/Logo2.png" alt="Dygytel Logo" className="h-9 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`text-sm font-medium transition-colors hover:text-[#068DBB] ${
                    isActive ? "text-[#068DBB] font-semibold" : "text-foreground/70"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              to="/contacto"
              className="hidden sm:inline-flex bg-gradient-brand ptt-button items-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-glow hover:brightness-110 active:scale-95"
            >
              Contacto
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú de navegación"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-foreground md:hidden hover:text-[#068DBB] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Sidebar Drawer (Right to Left Slide) */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-3xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between px-6 pt-2 border-b border-border/40">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img src="/Logo2.png" alt="Dygytel Logo" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-11 w-11 items-center justify-center rounded-2xl glass text-foreground hover:text-[#068DBB] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sidebar Body & Nav Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-4">
              Navegación
            </div>
            {navLinks.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-6 py-4 text-xl font-bold transition-all ${
                    isActive
                      ? "bg-[#068DBB]/15 text-[#068DBB] shadow-inner"
                      : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  <span>{l.label}</span>
                  {isActive ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-[#068DBB] shadow-[0_0_10px_#068DBB]" />
                  ) : (
                    <span className="text-muted-foreground text-sm">→</span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Sidebar Bottom CTA */}
          <div className="pt-6 mt-8 border-t border-border/50 space-y-4">
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-brand ptt-button flex w-full items-center justify-center rounded-full py-3.5 text-base font-semibold text-white shadow-glow hover:brightness-110 active:scale-95 text-center"
            >
              Contacto
            </Link>
            <div className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Dygytel — Radiocomunicación Profesional
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
