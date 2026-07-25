import { createFileRoute, Link } from "@tanstack/react-router";
import { ThemeToggle } from "../components/ThemeToggle";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Dygytel | Empresa de Radiocomunicación Profesional" },
      {
        name: "description",
        content:
          "Conoce la historia, misión, certificaciones e infraestructura de Dygytel. Más de 15 años liderando soluciones de radiocomunicación en México.",
      },
      { property: "og:title", content: "Acerca de Dygytel — Conexiones de Misión Crítica" },
      {
        property: "og:description",
        content:
          "Especialistas en ingeniería de radiofrecuencia, redes troncalizadas e infraestructura para operaciones de alta exigencia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NosotrosPage,
});





const values = [
  {
    title: "Fiabilidad Absoluta",
    desc: "Sabemos que de la señal depende la vida y productividad de tu personal. No aceptamos margen de error en nuestras instalaciones.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Rigor Técnico",
    desc: "Cada frecuencia, cavidad y antena es calibrada con instrumental certificado bajo normas estrictas de telecomunicación.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
      </svg>
    ),
  },
  {
    title: "Respuesta Inmediata",
    desc: "Frente a contingencias en la red, nuestro equipo de guardia técnica está preparado para movilizarse en tiempo récord.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Transparencia Regulatoria",
    desc: "Garantizamos que el 100% de los proyectos cumplan estrictamente con las disposiciones del espectro fijadas por el IFT.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const certifications = [
  { name: "Motorola Solutions Partner", level: "Platinum Authorized Dealer" },
  { name: "Hytera Communications", level: "Certified System Integrator" },
  { name: "Instituto Federal de Telecomunicaciones", level: "Perito Registrado IFT" },
  { name: "Norma ISO 9001:2015", level: "Calidad en Gestión y Servicio" },
];

function NosotrosPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Background halos */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/25 blur-[120px] animate-float-slow" />
        <div
          className="absolute top-[30%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[140px] animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-[70%] left-1/3 h-[400px] w-[400px] rounded-full bg-[#0FD4D4]/15 blur-[120px] animate-float-slow"
          style={{ animationDelay: "6s" }}
        />
      </div>



      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(6,141,187,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,141,187,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 45%, transparent 80%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
            <Link to="/" className="hover:text-foreground">
              Inicio
            </Link>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/70">Nosotros</span>
          </div>

          <div className="mt-6 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">

              <h1 className="text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
                La voz detrás de las <br />
                <span className="text-gradient-brand">operaciones críticas.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                En Dygytel unimos tecnología de vanguardia, ingeniería de precisión y compromiso humano para garantizar comunicaciones ininterrumpidas en los entornos más desafiantes de Colombia.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/catalogo"
                  className="bg-gradient-brand ptt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
                >
                  Conoce Nuestros Equipos →
                </Link>
                <Link
                  to="/servicios"
                  className="glass ptt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-[#068DBB]"
                >
                  Nuestros Servicios
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glow">
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
                  [ NUESTRO IMPACTO EN CIFRAS ]
                </div>
                <div className="mt-6 space-y-6">
                  <div className="border-b border-border/50 pb-4">
                    <div className="text-4xl font-extrabold text-gradient-brand">+50,000</div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      Radios activos en campo
                    </div>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <div className="text-4xl font-extrabold text-gradient-brand">+500</div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      Proyectos de telecomunicaciones ejecutados
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-gradient-brand">99.9%</div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      Disponibilidad garantizada en redes contratadas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-mono text-xs font-bold text-[#068DBB]">[ NUESTRA HISTORIA ]</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
              Nacidos para resolver donde la señal celular <span className="text-gradient-brand">no llega</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Dygytel nació con un objetivo claro: abastecer de infraestructura de radiocomunicación confiable a industrias estratégicas como la minería, seguridad privada, logística, construcción y energía.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Donde las redes celulares colapsan o simplemente no tienen cobertura, nuestras soluciones de radiofrecuencia analógica y digital (DMR / NXDN) aseguran un enlace instantáneo al presionar un botón (Push-To-Talk).
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-8 border border-border/60">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB] mb-6">
              Certificaciones e Integraciones Oficiales
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <div key={c.name} className="glass rounded-2xl p-4">
                  <div className="font-bold text-sm">{c.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#068DBB] mt-1">
                    {c.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-[#068DBB]">[ NUESTROS PILARES ]</span>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Valores que guían nuestra ingeniería
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="glass group relative rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 dark:bg-white/5 mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
              ¿TRABAJAMOS JUNTOS?
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Diseñemos la red que tu empresa necesita.
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Habla con uno de nuestros especialistas técnicos para analizar la cobertura y requerimientos de tu operación.
            </p>
          </div>
          <a
            href="/#contacto"
            className="bg-gradient-brand ptt-button whitespace-nowrap inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
          >
            Contactar Ingeniero →
          </a>
        </div>
      </section>
    </div>
  );
}
