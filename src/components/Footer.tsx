import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/80 backdrop-blur-md pt-16 pb-8 text-foreground">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#068DBB]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-border/60">
          
          {/* Col 1: Brand & Tagline + Social Icons */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center">
              <img src="/Logo2.png" alt="Dygytel Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Estando comprometidos al 100% en la conectividad, alcance y eficiencia operacional de nuestros clientes y aliados, mejorando la productividad con tecnología de comunicación crítica.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 transition-all hover:bg-gradient-brand hover:text-white hover:shadow-glow"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 transition-all hover:bg-gradient-brand hover:text-white hover:shadow-glow"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 transition-all hover:bg-gradient-brand hover:text-white hover:shadow-glow"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://wa.me/525589001234"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 transition-all hover:bg-gradient-brand hover:text-white hover:shadow-glow"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Tienda / Catálogo */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
              Tienda
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/catalogo" className="text-muted-foreground transition-colors hover:text-foreground">
                  Radios Portátiles
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground transition-colors hover:text-foreground">
                  Radios Móviles
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground transition-colors hover:text-foreground">
                  Repetidores RF
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground transition-colors hover:text-foreground">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground transition-colors hover:text-foreground">
                  Ver Todo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Compañía */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
              Compañía
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/nosotros" className="text-muted-foreground transition-colors hover:text-foreground">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground transition-colors hover:text-foreground">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto directo */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
              Contacto
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-none text-[#068DBB]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Carrera 22C # 46 – 35 | Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-none text-[#068DBB]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+573193053916" className="hover:text-foreground transition-colors">
                  +57 319 305 3916
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-none text-[#068DBB]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:proyectos@dygytel.com" className="hover:text-foreground transition-colors">
                  ventas@dygytel.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-muted-foreground font-mono">
          <span>
            © {new Date().getFullYear()} Dygytel Telecomunicaciones. Todos los derechos reservados.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Términos
            </a>
            <Link to="/admin/login" className="hover:text-[#068DBB] transition-colors">
              Administrador
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
