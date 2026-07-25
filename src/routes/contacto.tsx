import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Dygytel | Cotización y Asesoría Técnica" },
      {
        name: "description",
        content:
          "Ponte en contacto con los ingenieros de Dygytel. Solicitudes de cotización, soporte técnico 24/7, trámites IFT y atención comercial.",
      },
      { property: "og:title", content: "Contacto — Dygytel Radiocomunicación" },
      {
        property: "og:description",
        content:
          "Atención directa para proyectos de radiocomunicación en México. Teléfono, WhatsApp de ingeniería y cotizaciones en menos de 24 hrs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

const requestTypes = [
  "Cotización de Equipos",
  "Servicio Técnico / Mantenimiento",
  "Gestión de Licencias IFT",
  "Estudio de Cobertura RF",
  "Renta de Radios",
  "Soporte de Emergencia 24/7",
];

function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoSolicitud: requestTypes[0],
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

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
          className="absolute top-[75%] left-1/4 h-[450px] w-[450px] rounded-full bg-[#0FD4D4]/15 blur-[130px] animate-float-slow"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16">
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
            <span className="text-foreground/70">Contacto</span>
          </div>

          <div className="mt-6 max-w-3xl">

            <h1 className="text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Hablemos de tus proyectos de <br />
              <span className="text-gradient-brand">comunicación crítica.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Completa el formulario o ponte en contacto directo con nuestra mesa de ingeniería para evaluar la mejor solución para tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-strong rounded-3xl p-8 md:p-10 shadow-glow">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Enviar mensaje
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Recibirás un diagnóstico inicial o propuesta técnica sin compromiso.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-[#0FD4D4]/10 border border-[#0FD4D4]/30 p-8 text-center animate-fade-in">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow">
                    ✓
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">¡Mensaje Enviado con Éxito!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Gracias por comunicarte con Dygytel, {formState.nombre || "estimado cliente"}. Un ingeniero asignado se pondrá en contacto a través de {formState.email || "tu correo"} a la brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        nombre: "",
                        email: "",
                        telefono: "",
                        empresa: "",
                        tipoSolicitud: requestTypes[0],
                        mensaje: "",
                      });
                    }}
                    className="mt-6 inline-flex rounded-full bg-gradient-brand px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-glow ptt-button hover:brightness-110"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                        placeholder="Ing. Carlos Mendoza"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                        placeholder="carlos@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.telefono}
                        onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                        className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                        placeholder="+57 319 305 3916"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        value={formState.empresa}
                        onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                        className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                        placeholder="Minera / Constructora SA"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Tipo de Solicitud *
                    </label>
                    <select
                      value={formState.tipoSolicitud}
                      onChange={(e) => setFormState({ ...formState, tipoSolicitud: e.target.value })}
                      className="w-full rounded-xl border border-border bg-foreground/[0.04] dark:bg-background/80 px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                    >
                      {requestTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Detalles del Proyecto o Consulta *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      className="w-full resize-none rounded-xl border border-border bg-foreground/[0.04] dark:bg-white/[0.04] px-4 py-3 text-sm outline-none transition-all focus:border-[#068DBB] focus:ring-2 focus:ring-[#068DBB]/20"
                      placeholder="Describe la cantidad de equipos requeridos, ubicación del proyecto o problema técnico a solucionar..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="ptt-button bg-gradient-brand shadow-glow w-full rounded-full py-4 text-xs font-bold uppercase tracking-widest text-white hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? "Procesando envío..." : "Enviar Solicitud al Equipo Técnico →"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Cards Column */}
          <div className="space-y-6 lg:col-span-5">
            {/* Phone & WhatsApp */}
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#068DBB]/10 text-[#068DBB]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                    Atención Telefónica
                  </div>
                  <a href="tel:+573193053916" className="text-lg font-extrabold hover:text-[#068DBB]">
                    +57 319 305 3916
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0FD4D4]/10 text-[#0FD4D4]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                    WhatsApp Técnico Directo
                  </div>
                  <a
                    href="https://wa.me/573193053916"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-extrabold hover:text-[#068DBB]"
                  >
                    +57 319 305 3916
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#068DBB]/10 text-[#068DBB]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                    Correo de Proyectos
                  </div>
                  <a href="mailto:proyectos@dygytel.com" className="text-lg font-extrabold hover:text-[#068DBB]">
                    ventas@dygytel.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[#068DBB]/10 text-[#068DBB]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                    Oficinas Centrales & Laboratorio
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    Carrera 22C # 46 – 35 | Bogotá, ColombiaEnf
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Horario Comercial: Lun - Vie (8:00 - 18:00 hrs)
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency badge card */}
            <div className="glass-strong rounded-3xl p-6 border-l-4 border-l-[#0FD4D4]">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0FD4D4]">
                GUARDIA DE EMERGENCIA 24/7
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Para soporte de red fuera de horario comercial o fallas críticas operativas, la mesa de ayuda redirige llamadas automáticamente a nuestros ingenieros de campo activos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
