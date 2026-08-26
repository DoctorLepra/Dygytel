import { Link } from "@tanstack/react-router";
import { useAttachments, getAdminUrl } from "../lib/api";

export function Footer() {
  const { data: attachments = [] } = useAttachments();
  return (
    <footer className="relative border-t border-border/60 bg-background/80 backdrop-blur-md pt-16 pb-8 text-foreground">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#068DBB]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-border/60">
          
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
                href="https://web.facebook.com/dygytel.comunicaciones/?_rdc=1&_rdr#"
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
                href="https://www.instagram.com/dygytelsas/"
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
                href="https://api.whatsapp.com/send/?phone=573193053916&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 transition-all hover:bg-gradient-brand hover:text-white hover:shadow-glow"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href="https://www.threads.com/@dygytelsas?xmt=AQG04t2a1wLO3WY_ZT2R0zzom2CuUSh0whytUy9KT8UsTdo"
                target="_blank"
                rel="noreferrer"
                aria-label="Threads"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 transition-all hover:bg-gradient-brand hover:text-white hover:shadow-glow"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 192 192">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
                </svg>
              </a>
              <a
                href="https://co.linkedin.com/in/dygytel-sas-323153280"
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
        <div className="pt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center text-xs text-muted-foreground font-mono">
          <div className="flex flex-col gap-2">
            <span>
              © {new Date().getFullYear()} Dygytel Telecomunicaciones. Todos los derechos reservados.
            </span>
            {attachments.length > 0 ? (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground/80">
                {attachments.map((a, idx) => (
                  <span key={a.id} className="inline-flex items-center gap-4">
                    <a
                      href={a.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground hover:underline transition-colors"
                    >
                      {a.title}
                    </a>
                    {idx < attachments.length - 1 && (
                      <span className="text-muted-foreground/40 font-normal">·</span>
                    )}
                  </span>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground/80">
                <a href="#" className="hover:text-foreground transition-colors">
                  Políticas de privacidad
                </a>
                <span className="text-muted-foreground/40 font-normal">·</span>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos del servicio
                </a>
              </div>
            )}
          </div>
          <div>
            <a href={getAdminUrl()} className="hover:text-[#068DBB] transition-colors whitespace-nowrap">
              Administrador ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
