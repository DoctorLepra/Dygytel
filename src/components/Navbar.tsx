import { Link, useLocation } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Catálogo", to: "/catalogo" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nosotros", to: "/nosotros" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="glass-strong mx-auto flex h-16 w-[min(100%-2rem,80rem)] items-center justify-between rounded-2xl px-6">
        <Link to="/" className="flex items-center">
          <img src="/Logo2.png" alt="Dygytel Logo" className="h-8 w-auto" />
        </Link>
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
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contacto"
            className="bg-gradient-brand ptt-button inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-glow hover:brightness-110 active:scale-95"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
