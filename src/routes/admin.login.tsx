import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Acceso Administrativo — Dygytel Console" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const [email, setEmail] = useState("admin@dygytel.com");
  const [password, setPassword] = useState("••••••••••••");
  const [twoFactor, setTwoFactor] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Por favor ingrese credenciales válidas.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthenticated(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-background text-foreground">
      {/* Background halos */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/20 blur-[140px] animate-float-slow" />
        <div
          className="absolute top-[40%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[160px] animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#0FD4D4]/15 blur-[120px]"
        />
      </div>

      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(6,141,187,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,141,187,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
        }}
      />
      {/* Main card */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glow border border-border/80">

            {authenticated ? (
              <div className="text-center py-6 animate-fade-in space-y-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow">
                  ✓
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0FD4D4]">
                    Autenticación Exitosa
                  </span>
                  <h2 className="mt-2 text-2xl font-extrabold">¡Bienvenido, Administrador!</h2>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Sesión iniciada correctamente en la consola central Dygytel.
                  </p>
                </div>

                {/* Dashboard mock quick metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                  <div className="glass rounded-2xl p-4">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Cotizaciones</div>
                    <div className="text-xl font-bold text-gradient-brand">12 Pendientes</div>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Estado Red</div>
                    <div className="text-xl font-bold text-[#0FD4D4]">99.9% Normal</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <button
                    onClick={() => setAuthenticated(false)}
                    className="ptt-button bg-gradient-brand w-full rounded-full py-3 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
                  >
                    Cerrar Sesión Administrativa
                  </button>
                  <Link
                    to="/"
                    className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-[#068DBB] py-2"
                  >
                    Ir al Inicio del Sitio
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-center mb-4">
                  <img src="/Logo2.png" alt="Dygytel Logo" className="h-12 w-auto" />
                </div>

                {errorMsg && (
                  <div className="mt-4 rounded-xl bg-destructive/10 border border-destructive/30 p-3 text-xs text-destructive font-medium">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <div className="glass flex items-center rounded-xl px-3 py-2.5 border border-border focus-within:border-[#068DBB]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 text-[#068DBB]">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent text-xs font-medium outline-none placeholder:text-muted-foreground"
                        placeholder="admin@dygytel.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Contraseña
                    </label>
                    <div className="glass flex items-center justify-between rounded-xl px-3 py-2.5 border border-border focus-within:border-[#068DBB]">
                      <div className="flex items-center flex-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 text-[#068DBB]">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-transparent text-xs font-medium outline-none"
                          placeholder="••••••••••••"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-muted-foreground hover:text-foreground text-xs"
                      >
                        {showPassword ? "Ocultar" : "Mostrar"}
                      </button>
                    </div>
                  </div>


                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-muted-foreground">
                      <input type="checkbox" defaultChecked className="rounded border-border" />
                      <span>Recordar este equipo</span>
                    </label>
                    <a href="#" className="text-xs text-[#068DBB] hover:underline font-medium">
                      ¿Olvidaste la clave?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="ptt-button bg-gradient-brand shadow-glow w-full rounded-full py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:brightness-110 active:scale-[0.98] disabled:opacity-50 mt-4"
                  >
                    {loading ? "Validando Credenciales..." : "Ingresar →"}
                  </button>
                </form>
              </div>
            )}

            {/* Bottom info */}
            <div className="mt-8 pt-6 border-t border-border/40">
              <div className="flex items-center justify-between">
                <ThemeToggle />
                <Link
                  to="/"
                  className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-[#068DBB]"
                >
                  ← Volver al sitio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="py-4 text-center font-mono text-[10px] text-muted-foreground">
        © {new Date().getFullYear()} Dygytel Telecommunications Console. Todos los derechos reservados.
      </footer>
    </div>
  );
}
