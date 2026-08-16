export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl transition-all duration-500">
      {/* Background radial signal animation */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center">
        <div className="h-[350px] w-[350px] rounded-full bg-[#0FD4D4]/20 blur-[90px] animate-pulse" />
        <div className="absolute h-[250px] w-[250px] rounded-full border border-[#068DBB]/30 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute h-[400px] w-[400px] rounded-full border border-[#0FD4D4]/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Central Brand Logo & Spinner */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl glass-strong shadow-glow p-4">
          <img src="/Logo2.png" alt="Dygytel Telecomunicaciones" className="h-12 w-auto animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0FD4D4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#068DBB]"></span>
          </span>
        </div>

        {/* Progress Text & Spinner */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#068DBB]">
            <svg className="h-4 w-4 animate-spin text-[#0FD4D4]" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>Cargando Contenido</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Conectando con infraestructura de misión crítica...
          </p>
        </div>
      </div>
    </div>
  );
}
