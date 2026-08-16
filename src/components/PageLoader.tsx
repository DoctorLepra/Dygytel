export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-2xl transition-all duration-500">
      {/* Background radial signal animation */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center">
        <div className="h-[350px] w-[350px] rounded-full bg-[#0FD4D4]/20 blur-[90px] animate-pulse" />
        <div className="absolute h-[220px] w-[220px] rounded-full border border-[#068DBB]/30 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute h-[380px] w-[380px] rounded-full border border-[#0FD4D4]/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Central Clean Icon Only */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src="/icono.png"
          alt="Dygytel Telecomunicaciones"
          className="h-20 w-auto object-contain animate-pulse drop-shadow-[0_0_30px_rgba(15,212,212,0.4)] transition-transform duration-300"
        />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0FD4D4] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#068DBB]"></span>
        </span>
      </div>
    </div>
  );
}
