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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
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
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú de navegación"
            className="flex h-10 w-10 items-center justify-center rounded-xl glass text-foreground md:hidden hover:text-[#068DBB] transition-colors"
          >
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphism Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-x-4 top-24 z-50 md:hidden animate-fade-in">
          <div className="glass-strong rounded-3xl p-6 shadow-2xl border border-border/80 space-y-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((l) => {
                const isActive = location.pathname === l.to;
                return (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-base font-bold transition-all ${
                      isActive
                        ? "bg-[#068DBB]/15 text-[#068DBB]"
                        : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    <span>{l.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-[#068DBB]" />}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-border/50">
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-brand ptt-button flex w-full items-center justify-center rounded-2xl py-4 text-center font-mono text-xs font-bold uppercase tracking-widest text-white shadow-glow"
              >
                Contacto Directo →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
