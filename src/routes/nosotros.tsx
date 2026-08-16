import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { useWebContent } from "../lib/api";

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

function renderValueIcon(iconKey?: string) {
  switch (iconKey) {
    case "cog":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
        </svg>
      );
    case "lightning":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "check":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "handshake":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      );
    case "trophy":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      );
    case "shield":
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  }
}

const defaultValues = [
  {
    title: "Fiabilidad Absoluta",
    desc: "Sabemos que de la señal depende la vida y productividad de tu personal. No aceptamos margen de error en nuestras instalaciones.",
    iconKey: "shield",
  },
  {
    title: "Rigor Técnico",
    desc: "Cada frecuencia, cavidad y antena es calibrada con instrumental certificado bajo normas estrictas de telecomunicación.",
    iconKey: "cog",
  },
  {
    title: "Respuesta Inmediata",
    desc: "Frente a contingencias en la red, nuestro equipo de guardia técnica está preparado para movilizarse en tiempo récord.",
    iconKey: "lightning",
  },
  {
    title: "Transparencia Regulatoria",
    desc: "Garantizamos que el 100% de los proyectos cumplan strictly con las disposiciones del espectro fijadas por el IFT.",
    iconKey: "check",
  },
];

const defaultCertifications = [
  { name: "Motorola Solutions Partner", level: "Platinum Authorized Dealer" },
  { name: "Hytera Communications", level: "Certified System Integrator" },
  { name: "Instituto Federal de Telecomunicaciones", level: "Perito Registrado IFT" },
  { name: "Norma ISO 9001:2015", level: "Calidad en Gestión y Servicio" },
];

function NosotrosPage() {
  const { data: webContent } = useWebContent();
  const aboutContent = webContent?.about || {};

  const certsList = useMemo(() => {
    if (Array.isArray(aboutContent.certifications) && aboutContent.certifications.length > 0) {
      return aboutContent.certifications;
    }
    return defaultCertifications;
  }, [aboutContent.certifications]);

  const valuesList = useMemo(() => {
    if (Array.isArray(aboutContent.values_list) && aboutContent.values_list.length > 0) {
      return aboutContent.values_list.map((v: any) => ({
        title: v.title || '',
        desc: v.desc || '',
        iconKey: v.icon || 'shield',
      }));
    }
    return defaultValues;
  }, [aboutContent.values_list]);

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
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {aboutContent.hero_title || 'La voz detrás de las'}{" "}
                <br className="hidden sm:inline" />
                <span className="text-gradient-brand">
                  {aboutContent.hero_title_highlight || 'operaciones críticas.'}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
                {aboutContent.hero_description ||
                  'En Dygytel unimos tecnología de vanguardia, ingeniería de precisión y compromiso humano para garantizar comunicaciones ininterrumpidas en los entornos más desafiantes de Colombia.'}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  to="/catalogo"
                  className="bg-gradient-brand ptt-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95 text-center"
                >
                  Conoce Nuestros Equipos →
                </Link>
                <Link
                  to="/servicios"
                  className="glass ptt-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-[#068DBB] text-center"
                >
                  Nuestros Servicios
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glow">
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
                  [ {aboutContent.hero_impact_label || 'NUESTRO IMPACTO EN CIFRAS'} ]
                </div>
                <div className="mt-6 space-y-6">
                  <div className="border-b border-border/50 pb-4">
                    <div className="text-4xl font-extrabold text-gradient-brand">
                      {aboutContent.cifra1_val || '+50,000'}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      {aboutContent.cifra1_title || 'Radios activos en campo'}
                    </div>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <div className="text-4xl font-extrabold text-gradient-brand">
                      {aboutContent.cifra2_val || '+500'}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      {aboutContent.cifra2_title || 'Proyectos de telecomunicaciones ejecutados'}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-gradient-brand">
                      {aboutContent.cifra3_val || '99.9%'}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      {aboutContent.cifra3_title || 'Disponibilidad garantizada en redes contratadas'}
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
            <span className="font-mono text-xs font-bold text-[#068DBB]">
              [ {aboutContent.story_label || 'NUESTRA HISTORIA'} ]
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
              {aboutContent.story_title || 'Nacidos para resolver donde la señal celular'}{" "}
              <span className="text-gradient-brand">
                {aboutContent.story_title_highlight || 'no llega.'}
              </span>
            </h2>
            <div className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {aboutContent.story_desc ||
                'Dygytel nació con un objetivo claro: abastecer de infraestructura de radiocomunicación confiable a industrias estratégicas como la minería, seguridad privada, logística, construcción y energía.\n\nDonde las redes celulares colapsan o simplemente no tienen cobertura, nuestras soluciones de radiofrecuencia analógica y digital (DMR / NXDN) aseguran un enlace instantáneo al presionar un botón (Push-To-Talk).'}
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8 border border-border/60">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB] mb-6">
              {aboutContent.certifications_label || 'Certificaciones e Integraciones Oficiales'}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certsList.map((c: any, i: number) => (
                <div key={i} className="glass rounded-2xl p-4">
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
          <span className="font-mono text-xs font-bold text-[#068DBB]">
            [ {aboutContent.values_label || 'NUESTROS PILARES'} ]
          </span>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            {aboutContent.values_title || 'Valores que guían nuestra ingeniería'}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valuesList.map((v: any, i: number) => (
            <div key={i} className="glass group relative rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 dark:bg-white/5 mb-6">
                {renderValueIcon(v.iconKey)}
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
              {aboutContent.cta_label || '¿TRABAJAMOS JUNTOS?'}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              {aboutContent.cta_title || 'Diseñemos la red que tu empresa necesita.'}
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              {aboutContent.cta_desc ||
                'Habla con uno de nuestros especialistas técnicos para analizar la cobertura y requerimientos de tu operación.'}
            </p>
          </div>
          <a
            href={aboutContent.cta_btn_link || "/#contacto"}
            className="bg-gradient-brand ptt-button whitespace-nowrap inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
          >
            {aboutContent.cta_btn_text || 'Contactar Ingeniero →'}
          </a>
        </div>
      </section>
    </div>
  );
}
