import { createFileRoute, Link } from "@tanstack/react-router";
import heroRadio from "../assets/hero-radio.jpg";
import productHandheld from "../assets/product-handheld.jpg";
import productMobile from "../assets/product-mobile.jpg";
import productRepeater from "../assets/product-repeater.jpg";
import { ThemeToggle } from "../components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dygytel — Radios de Telecomunicación Profesional" },
      {
        name: "description",
        content:
          "Tienda especializada en radios de telecomunicación profesional. Portátiles, móviles vehiculares, repetidores y servicios de instalación, mantenimiento y licencias.",
      },
    ],
  }),
  component: Landing,
});



import { useProducts, useWebContent } from "../lib/api";
import { PageLoader } from "../components/PageLoader";

const brands = ["MOTOROLA", "HYTERA", "KENWOOD", "ICOM", "VERTEX", "TAIT", "SEPURA"];

const services = [
  {
    n: "01",
    title: "Instalación y Configuración",
    description:
      "Montaje de torres, antenas y sistemas de repetidoras con estándares internacionales de seguridad.",
  },
  {
    n: "02",
    title: "Mantenimiento Preventivo",
    description:
      "Calibración de frecuencias y revisión técnica periódica para asegurar tiempo de actividad del 99.9%.",
  },
  {
    n: "03",
    title: "Gestión de Licencias",
    description:
      "Asesoría legal y técnica para el cumplimiento de normativas del espectro radioeléctrico ante el IFT.",
  },
];

function Landing() {
  const { data: allProducts = [], isLoading: isLoadingProducts } = useProducts();
  const topProducts = allProducts.slice(0, 3);
  
  const { data: content, isLoading: isLoadingContent } = useWebContent();
  const homeContent = content?.home || {};

  if (isLoadingContent || isLoadingProducts) {
    return <PageLoader />;
  }
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Background halos */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/25 blur-[120px] animate-float-slow" />
        <div className="absolute top-[20%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[140px] animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[70%] left-1/3 h-[400px] w-[400px] rounded-full bg-[#0FD4D4]/15 blur-[120px] animate-float-slow" style={{ animationDelay: "6s" }} />
      </div>



      {/* Hero */}
      <section
        id="inicio"
        className="relative isolate overflow-hidden pt-28 pb-24 lg:pt-32 lg:pb-32"
      >
        {/* Grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(6,141,187,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,141,187,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 60% 40%, black 40%, transparent 75%)",
          }}
        />
        {/* Radial signal rings */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-[-15%] -z-10 h-[900px] w-[900px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(15,212,212,0.18) 0%, rgba(6,141,187,0.08) 40%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="animate-fade-in-up space-y-10 lg:col-span-7">


              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-balance">
                {homeContent.hero_title || 'Comunicación crítica sin'}{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-brand">
                    {homeContent.hero_title_highlight || 'interferencias.'}
                  </span>
                  <span aria-hidden className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-2xl bg-[#0FD4D4]/10 blur-2xl" />
                </span>
              </h1>

              <p className="max-w-[52ch] text-base sm:text-lg text-muted-foreground text-pretty md:text-xl">
                {homeContent.hero_description || 'Tu tienda especializada en radios de telecomunicación profesional. Equipos, accesorios y servicio técnico para operaciones donde la conexión no puede fallar.'}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  to="/catalogo"
                  className="bg-gradient-brand ptt-button group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-9 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95 text-center"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Explorar Catálogo</span>
                  <span aria-hidden className="relative transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <a
                  href={homeContent.hero_button_link || "https://api.whatsapp.com/send/?phone=573193053916&text=Hola,%20requiero%20asesor%C3%ADa%20t%C3%A9cnica%20acerca%20de%20un%20producto&type=phone_number&app_absent=0"}
                  target="_blank"
                  rel="noreferrer"
                  className="glass ptt-button inline-flex items-center justify-center rounded-full px-9 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground hover:border-[#068DBB]/40 active:scale-95 text-center"
                >
                  {homeContent.hero_button_text || 'Asesoría Técnica'}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 pt-6 border-t border-border/50">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-brand">
                    {homeContent.metric_1_val || '15+'}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {homeContent.metric_1_label || 'Años de experiencia'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-brand">
                    {homeContent.metric_2_val || '99.9%'}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {homeContent.metric_2_label || 'Uptime garantizado'}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-brand">
                    {homeContent.metric_3_val || '24/7'}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {homeContent.metric_3_label || 'Soporte técnico'}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              {/* Concentric signal rings behind the device */}
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <div className="absolute h-[110%] w-[110%] rounded-full border border-[#068DBB]/15" />
                <div className="absolute h-[85%] w-[85%] rounded-full border border-[#0FD4D4]/20" />
                <div className="absolute h-[60%] w-[60%] rounded-full border border-[#0FD4D4]/25" />
                <div className="absolute h-56 w-56 rounded-full bg-[#0FD4D4]/40 blur-3xl" />
                <div className="absolute right-0 h-64 w-64 rounded-full bg-[#068DBB]/40 blur-3xl" />
              </div>

              <div className="glass-strong relative overflow-hidden rounded-[2rem] p-4 shadow-glow animate-float-slow">
                {/* Badge 1 (Top Left inside) */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/70 dark:bg-black/60 px-2.5 py-1 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0FD4D4]" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#068DBB]">
                    {homeContent.hero_badge_1 || 'Terminal Serie-X'}
                  </span>
                </div>

                {/* Badge 2 (Top Right inside) */}
                <div className="absolute top-4 right-4 z-10 rounded-full bg-white/70 dark:bg-black/60 px-2.5 py-1 backdrop-blur">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-foreground/70">
                    {homeContent.hero_badge_2 || '462.5625 MHz'}
                  </span>
                </div>

                <img
                  src={homeContent.hero_image || heroRadio}
                  alt="Radio terminal profesional Dygytel"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-white/70 drop-shadow">
                      Canal Activo
                    </div>
                    <div className="font-mono text-2xl font-bold text-white drop-shadow">CH · 14</div>
                  </div>
                  <div className="flex items-end gap-1">
                    {[3, 5, 7, 9, 11].map((h) => (
                      <span
                        key={h}
                        className="w-1.5 rounded-sm bg-[#0FD4D4] shadow-[0_0_10px_#0FD4D4]"
                        style={{ height: `${h * 3}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge 3 (Left outside) */}
              <div className="glass absolute -left-4 top-1/3 hidden rounded-2xl px-4 py-3 shadow-glass md:block animate-float-slow" style={{ animationDelay: "2s" }}>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {homeContent.hero_badge_3_label || 'Alcance'}
                </div>
                <div className="text-lg font-extrabold text-gradient-brand">
                  {homeContent.hero_badge_3_val || '12 km'}
                </div>
              </div>

              {/* Floating Badge 4 (Right outside) */}
              <div className="glass absolute -right-4 bottom-8 hidden rounded-2xl px-4 py-3 shadow-glass md:block animate-float-slow" style={{ animationDelay: "4s" }}>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {homeContent.hero_badge_4_label || 'Batería'}
                </div>
                <div className="text-lg font-extrabold text-gradient-brand">
                  {homeContent.hero_badge_4_val || '24 h'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Legend */}
      <section id="nosotros" className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="mx-auto mb-6 h-px w-24 bg-gradient-brand" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <img 
            src="/Logo vertical.svg" 
            alt="Dygytel Logo Vertical" 
            className="w-48 h-auto md:w-64 shrink-0 opacity-90"
          />
          <p className="flex-1 text-2xl font-medium leading-relaxed md:text-3xl md:text-left">
            {homeContent.about_text || 'En Dygytel, no solo vendemos equipos: conectamos equipos de trabajo en los momentos donde el fallo no es una opción. Más de 15 años integrando soluciones de radiocomunicación donde la señal celular no llega.'}
          </p>
        </div>
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-brand" />
      </section>

      {/* Brands / Client Logos Marquee */}
      <section className="relative py-12">
        <div className="mx-auto mb-8 max-w-7xl px-6 text-center">
          <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Distribuidores Autorizados
          </h3>
        </div>
        <div className="mask-fade-x flex overflow-hidden">
          {Array.isArray(homeContent.client_logos) && homeContent.client_logos.length > 0 ? (
            (() => {
              const raw = homeContent.client_logos;
              let repeated = [...raw];
              while (repeated.length < 16) {
                repeated = [...repeated, ...raw];
              }
              return (
                <>
                  <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
                    {repeated.map((logoUrl: string, i: number) => (
                      <img
                        key={i}
                        src={logoUrl}
                        alt="Logo cliente Dygytel"
                        className="h-12 w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                      />
                    ))}
                  </div>
                  <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16" aria-hidden>
                    {repeated.map((logoUrl: string, i: number) => (
                      <img
                        key={`dup-${i}`}
                        src={logoUrl}
                        alt="Logo cliente Dygytel"
                        className="h-12 w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                      />
                    ))}
                  </div>
                </>
              );
            })()
          ) : (
            <>
              <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
                {[...brands, ...brands].map((b, i) => (
                  <span
                    key={i}
                    className="text-2xl font-black tracking-tighter text-foreground/30 transition-colors hover:text-[#068DBB]"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16" aria-hidden>
                {[...brands, ...brands].map((b, i) => (
                  <span
                    key={`dup-${i}`}
                    className="text-2xl font-black tracking-tighter text-foreground/30 transition-colors hover:text-[#068DBB]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#068DBB]">[ 01 ] CATÁLOGO</span>
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
              {homeContent.catalog_title || 'Equipamiento destacado'}
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              {homeContent.catalog_description || 'Selección curada del hardware que más recomiendan nuestros ingenieros.'}
            </p>
          </div>
          <Link
            to="/catalogo"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-foreground"
          >
            Ver catálogo completo
            <span className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all group-hover:bg-gradient-brand group-hover:text-white">
              →
            </span>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass h-[350px] animate-pulse rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {topProducts.map((p) => (
              <article
                key={p.sku}
                className="glass group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div>
                  <Link to="/producto/$sku" params={{ sku: p.sku }} className="block">
                    <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl bg-white/60">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0FD4D4]/10 to-transparent" />
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                    {p.sku}
                  </span>
                  <Link to="/producto/$sku" params={{ sku: p.sku }} className="block hover:underline">
                    <h3 className="mt-2 text-xl font-bold tracking-tight">{p.name}</h3>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-lg font-extrabold">{p.price}</span>
                  <Link
                    to="/producto/$sku"
                    params={{ sku: p.sku }}
                    className="ptt-button rounded-full bg-gradient-brand px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white hover:brightness-110 active:scale-95"
                  >
                    Ver detalle
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Services */}
      <section id="servicios" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#068DBB]">[ 02 ] SERVICIOS</span>
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
              {homeContent.services_title || 'Soluciones de ingeniería'}
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              {homeContent.services_description || 'Instalación, mantenimiento y gestión de espectro para operaciones 24/7.'}
            </p>
          </div>
          <Link
            to="/servicios"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-foreground"
          >
            Todos los servicios
            <span className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all group-hover:bg-gradient-brand group-hover:text-white">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s: any) => (
            <a
              href={homeContent.hero_button_link || "https://api.whatsapp.com/send/?phone=573193053916"}
              target="_blank"
              rel="noreferrer"
              key={s.n}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-glow block"
            >
              <div className="bg-gradient-brand shadow-glow mb-6 flex h-14 w-14 items-center justify-center rounded-2xl font-mono font-bold text-white">
                {s.n}
              </div>
              <h4 className="text-xl font-bold tracking-tight">{s.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#068DBB] opacity-0 transition-opacity group-hover:opacity-100">
                Saber más →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs font-bold text-[#068DBB]">[ CONTACTO ]</span>
            <h2 className="mt-4 mb-8 text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
              {homeContent.contact_title || '¿Listo para mejorar tu infraestructura?'}
            </h2>
            <p className="mb-10 max-w-md text-muted-foreground">
              {homeContent.contact_description || 'Cuéntanos sobre tu operación y un especialista te contactará en menos de 24 horas con una propuesta técnica.'}
            </p>

            <div className="space-y-6">
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <div className="font-mono text-xs font-bold text-[#068DBB]">TEL</div>
                <div className="text-lg font-semibold">{homeContent.contact_phone || '+57 319 305 3916'}</div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <div className="font-mono text-xs font-bold text-[#068DBB]">MAIL</div>
                <div className="text-lg font-semibold">{homeContent.contact_email || 'contacto@dygytel.com'}</div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <div className="font-mono text-xs font-bold text-[#068DBB]">UBIC</div>
                <div className="text-base text-muted-foreground">
                  {homeContent.contact_address || 'Carrera 22C # 46 – 35 | Bogotá, Colombia'}
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong grid grid-cols-1 gap-5 rounded-3xl p-8 md:grid-cols-2"
          >
            <div className="space-y-2">
              <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                placeholder="Juan Pérez"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Email corporativo
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                placeholder="juan@empresa.com"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Teléfono
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                placeholder="+57z ..."
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                placeholder="Describe tu proyecto o equipo de interés..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="ptt-button bg-gradient-brand shadow-glow w-full rounded-full py-4 text-sm font-bold uppercase tracking-widest text-white hover:brightness-110 active:scale-[0.98]"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
