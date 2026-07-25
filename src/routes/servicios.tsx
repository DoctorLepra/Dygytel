import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de Ingeniería en Telecomunicaciones — Dygytel" },
      {
        name: "description",
        content:
          "Servicios profesionales de radiocomunicación: instalación de torres y repetidores, mantenimiento preventivo, gestión de licencias IFT y estudios de cobertura RF.",
      },
      { property: "og:title", content: "Servicios de Radiocomunicación Profesional — Dygytel" },
      {
        property: "og:description",
        content:
          "Ingeniería especializada en comunicación crítica. Soporte 24/7, mantenimiento de campo y cumplimiento regulatorio IFT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiciosPage,
});



const servicesList = [
  {
    id: "instalacion",
    num: "01",
    title: "Instalación y Configuración de Redes RF",
    shortDesc: "Montaje de torres, antenas y sistemas repetidores con estándares internacionales de seguridad.",
    longDesc:
      "Desplegamos infraestructura de comunicación robusta desde cero. Realizamos el izaje de torres, instalación de sistemas radiantes, cableado heliax de bajas pérdidas y programación de frecuencias en terminales móviles y portátiles.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    details: [
      "Montaje de torres arriostradas y autosoportadas",
      "Calibración de duplexores y cavidades de filtro",
      "Programación masiva de canales y grupos de habla (Talkgroups)",
      "Pruebas de ROE (VSWR) y potencia reflejada",
    ],
  },
  {
    id: "mantenimiento",
    num: "02",
    title: "Mantenimiento Preventivo y Correctivo",
    shortDesc: "Calibración de frecuencias y revisión técnica periódica para asegurar disponibilidad del 99.9%.",
    longDesc:
      "Garantizamos que tu red nunca deje de transmitir. Nuestro laboratorio móvil cuenta con analizadores de servicio de monitoreo de espectro para detectar degradaciones antes de que se conviertan en fallas operativas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    details: [
      "Revisión y reemplazo de baterías y fuentes de poder",
      "Ajuste fino de desviación y potencia RF",
      "Limpieza ultrasónica e impermeabilización de chasis",
      "Contratos de mantenimiento póliza anual con SLA garantizado",
    ],
  },
  {
    id: "licencias",
    num: "03",
    title: "Gestión y Tramitación de Licencias IFT",
    shortDesc: "Asesoría legal y técnica para el cumplimiento de normativas del espectro radioeléctrico ante el IFT.",
    longDesc:
      "Evita sanciones y despojos de frecuencia. Gestionamos todo el proceso técnico y legal ante el Instituto Federal de Telecomunicaciones (IFT) para la asignación y renovación de concesiones de espectro privado.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    details: [
      "Elaboración de carpetas de memoria técnica de ingeniería",
      "Estudios de no interferencia espectral",
      "Defensa y atención de visitas de inspección",
      "Renovación oportuna de títulos de concesión",
    ],
  },
  {
    id: "cobertura",
    num: "04",
    title: "Estudios de Cobertura RF y Simulación 3D",
    shortDesc: "Modelado topográfico computarizado para predecir con exactitud la señal en zonas difíciles.",
    longDesc:
      "Utilizamos software de simulación propagativa de radiofrecuencia (Planet, TAP, Irregular Terrain Model) combinado con mediciones reales en campo para garantizar 100% de cobertura en minas, túneles o naves industriales.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    details: [
      "Mapas de calor de intensidad de señal (RSSI)",
      "Análisis de pérdidas por obstáculos y relieve topográfico",
      "Optimización de ubicación de repetidores",
      "Auditorías de cobertura Drive Test",
    ],
  },
  {
    id: "renta",
    num: "05",
    title: "Renta de Equipos de Radiocomunicación",
    shortDesc: "Alquiler de flotas temporales de portátiles y móviles para eventos, obras y operaciones de temporada.",
    longDesc:
      "Ponemos a tu disposición lotes de radios portátiles digitales y analógicos listos para operar, con baterías cargadas, accesorios individuales y repetidores portátiles de fácil despliegue.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    details: [
      "Rentas por día, semana, mes o proyecto especial",
      "Entrega con baterías de repuesto y cargadores múltiples",
      "Sustitución inmediata de unidades en caso de avería",
      "Configuración personalizada de canales según requerimiento",
    ],
  },
  {
    id: "troncalizados",
    num: "06",
    title: "Redes Troncalizadas Multi-Sitio",
    shortDesc: "Diseño e integración de sistemas DMR Tier III, NXDN y P25 de misión crítica.",
    longDesc:
      "Para operaciones gubernamentales, puertos o complejos industriales extensos, diseñamos redes trunking que gestionan eficientemente miles de usuarios simultáneos con despacho centralizado y GPS.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    details: [
      "Consolas de despacho y grabación de voz digital",
      "Integración de geolocalización GPS en mapas GIS",
      "Interconexión con telefonía IP (PABX / SIP)",
      "Encriptación avanzada de extremo a extremo",
    ],
  },
];

const faqs = [
  {
    q: "¿En qué zonas geográficas brindan servicio técnico?",
    a: "Brindamos cobertura a nivel nacional en todo Colombia. Contamos con ingenieros de campo preparados para trasladarse a parques industriales, zonas mineras, puertos y obras remotas.",
  },
  {
    q: "¿Cuánto tiempo toma tramitar una concesión de frecuencia",
    a: "El trámite regular suele tomar entre 4 y 8 meses dependiendo de la banda y región. Sin embargo, en Dygytel podemos apoyarte con opciones de arrendamiento temporal de frecuencias autorizadas mientras concluye tu trámite.",
  },
  {
    q: "¿Qué incluye una póliza de mantenimiento preventivo?",
    a: "Incluye visitas periódicas programadas (trimestrales o semestrales), revisión de potencia de salida, limpieza técnica, calibración de frecuencias, diagnóstico de baterías, reemplazo de partes dañadas e informe técnico detallado.",
  },
  {
    q: "¿Pueden integrar radios de distintas marcas en una misma red?",
    a: "Sí. Si los equipos utilizan estándares abiertos como DMR (Digital Mobile Radio) o NXDN, es totalmente posible interoperar marcas como Motorola, Hytera, Kenwood e Icom en la misma infraestructura.",
  },
];

function ServiciosPage() {
  const [selectedService, setSelectedService] = useState<string>("instalacion");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeServiceObj = servicesList.find((s) => s.id === selectedService) || servicesList[0];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Background halos */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/25 blur-[120px] animate-float-slow" />
        <div
          className="absolute top-[35%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[140px] animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-[75%] left-1/4 h-[450px] w-[450px] rounded-full bg-[#0FD4D4]/15 blur-[130px] animate-float-slow"
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
            <span className="text-foreground/70">Servicios</span>
          </div>

          <div className="mt-6 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">

              <h1 className="text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
                Soluciones de <br />
                <span className="text-gradient-brand">comunicación crítica.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Diseñamos, instalamos y mantenemos redes de radiofrecuencia de alto desempeño para operaciones donde la falla de señal no es una opción.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#servicios-list"
                  className="bg-gradient-brand ptt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
                >
                  Explorar Servicios ↓
                </a>
                <a
                  href="/#contacto"
                  className="glass ptt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-[#068DBB]"
                >
                  Solicitar Diagnóstico Técnico
                </a>
              </div>
            </div>

            {/* Metrics card */}
            <div className="lg:col-span-5">
              <div className="glass-strong grid grid-cols-2 gap-4 rounded-3xl p-6 shadow-glow">
                <div className="glass rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-gradient-brand">99.9%</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Disponibilidad de Red
                  </div>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-gradient-brand">24/7</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Soporte de Emergencia
                  </div>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-gradient-brand">500+</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Torres Instaladas
                  </div>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-gradient-brand">Lorem</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Cumplimiento Legal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios-list" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-[#068DBB]">[ NUESTROS SERVICIOS ]</span>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Catálogo de Ingeniería
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Desde la planificación técnica inicial hasta la póliza de soporte de emergencia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((s) => (
            <article
              key={s.id}
              onClick={() => setSelectedService(s.id)}
              className={`glass group cursor-pointer relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-glow ${
                selectedService === s.id ? "ring-2 ring-[#068DBB]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-bold text-[#068DBB]">{s.num}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 dark:bg-white/5">
                  {s.icon}
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.shortDesc}</p>

              <a href="https://api.whatsapp.com/send/?phone=573193053916" target="_blank" rel="noreferrer">
              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB] group-hover:underline">
                Conocer más →
              </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Detail Viewer */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#068DBB]">
                  [ SERVICIO {activeServiceObj.num} ]
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                {activeServiceObj.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {activeServiceObj.longDesc}
              </p>

              <div className="mt-8">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
                  Entregables y Alcances Técnicos:
                </h4>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeServiceObj.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#0FD4D4] text-white">
                        ✓
                      </span>
                      <span className="text-sm font-medium">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass flex flex-col gap-6 rounded-2xl p-6 lg:w-80">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
                ¿Necesitas este servicio?
              </h4>
              <p className="text-xs text-muted-foreground">
                Nuestros ingenieros preparan una propuesta a la medida en menos de 24 horas.
              </p>
              <a
                href="/#contacto"
                className="bg-gradient-brand ptt-button inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
              >
                Solicitar Cotización →
              </a>
              <a
                href="https://wa.me/525589001234"
                target="_blank"
                rel="noreferrer"
                className="glass ptt-button inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-widest text-foreground hover:text-[#068DBB]"
              >
                WhatsApp Técnico
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-bold text-[#068DBB]">[ PREGUNTAS FRECUENTES ]</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            Dudas sobre nuestros servicios
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="glass rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:text-[#068DBB]"
                >
                  <span>{faq.q}</span>
                  <span className="font-mono text-xl text-[#068DBB]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
              SOPORTE TÉCNICO INMEDIATO
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              ¿Falla crítica en tu red de comunicaciones?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Nuestros técnicos de guardia responden solicitudes de emergencia las 24 horas del día.
            </p>
          </div>
          <a
            href="/#contacto"
            className="bg-gradient-brand ptt-button whitespace-nowrap inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
          >
            Atención de Emergencia →
          </a>
        </div>
      </section>
    </div>
  );
}
