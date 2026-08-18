import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { PageLoader } from "../components/PageLoader";
import productHandheld from "../assets/product-handheld.jpg";
import productMobile from "../assets/product-mobile.jpg";
import productRepeater from "../assets/product-repeater.jpg";
import { ThemeToggle } from "../components/ThemeToggle";
import { useProducts, useCategories, useBrands } from "../lib/api";
import { type Category } from "../lib/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo | Dygytel" },
      {
        name: "description",
        content:
          "Explora el catálogo completo de radios portátiles, móviles vehiculares, repetidores y accesorios profesionales Dygytel.",
      },
      { property: "og:title", content: "Catálogo Dygytel — Radiocomunicación Profesional" },
      {
        property: "og:description",
        content:
          "Portátiles UHF/VHF, radios móviles vehiculares, repetidores y accesorios de las marcas líderes del sector.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoPage,
});

const ITEMS_PER_PAGE = 8;

function CatalogoPage() {
  const { data: products = [], isLoading, error } = useProducts();
  const { data: fetchedCategories = [] } = useCategories();
  const { data: fetchedBrands = [] } = useBrands();

  const [active, setActive] = useState<string>("Todos");
  const [activeBrand, setActiveBrand] = useState<string>("Todas");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  // Manage body scroll lock when filter sidebar is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = useMemo(() => {
    const fromProducts = Array.from(new Set(products.map(p => p.category))).filter(Boolean);
    const combined = Array.from(new Set([...fetchedCategories, ...fromProducts])).sort();
    return ["Todos", ...combined];
  }, [fetchedCategories, products]);

  const uniqueBrands = useMemo(() => {
    const fromProducts = Array.from(new Set(products.map(p => p.brand))).filter(Boolean);
    const combined = Array.from(new Set([...fetchedBrands, ...fromProducts])).sort();
    return ["Todas", ...combined];
  }, [fetchedBrands, products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCat = active === "Todos" || p.category === active;
      const okBrand = activeBrand === "Todas" || p.brand === activeBrand;
      const q = query.trim().toLowerCase();
      const okQ =
        !q ||
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.sku && p.sku.toLowerCase().includes(q)) ||
        (p.brand && p.brand.toLowerCase().includes(q));
      return okCat && okBrand && okQ;
    });
  }, [products, active, activeBrand, query]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [active, activeBrand, query]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {isLoading && <PageLoader />}
      {/* Background halos */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/25 blur-[120px] animate-float-slow" />
        <div className="absolute top-[30%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[140px] animate-float-slow" style={{ animationDelay: "3s" }} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(6,141,187,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,141,187,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 20%, black 40%, transparent 75%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/70">Catálogo</span>
          </div>
          <h1 className="mt-4 text-[2.35rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.98] sm:leading-[0.95] tracking-[-0.03em]">
            Catálogo <span className="text-gradient-brand">completo</span>
          </h1>
          <p className="mt-3.5 sm:mt-5 max-w-2xl text-[17px] sm:text-lg text-muted-foreground leading-relaxed">
            Explora nuestra selección de radios portátiles, móviles vehiculares, repetidores y accesorios de las marcas líderes del sector.
          </p>

          {/* Desktop & Tablet Filters (Search Bar + Brands Dropdown + Horizontal Carousel) */}
          <div className="mt-10 hidden md:flex flex-col gap-5">
            <div className="flex w-full flex-row items-center gap-3 max-w-2xl">
              <div className="glass flex w-full flex-1 items-center gap-3 rounded-full px-5 py-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por modelo, SKU o marca…"
                  className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-gradient-brand text-white shadow-glow flex items-center justify-between gap-2 rounded-full px-6 py-3 font-bold text-sm hover:brightness-110 transition-all whitespace-nowrap outline-none border-none">
                  {activeBrand === "Todas" ? "Marcas" : activeBrand}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-strong border-border/50 bg-background/90 backdrop-blur-xl rounded-2xl p-2 min-w-[200px]">
                  {uniqueBrands.map(brand => (
                    <DropdownMenuItem 
                      key={brand} 
                      onClick={() => setActiveBrand(brand)}
                      className={`cursor-pointer rounded-xl px-4 py-2 hover:bg-foreground/5 ${activeBrand === brand ? "text-[#068DBB] font-bold bg-[#068DBB]/10" : ""}`}
                    >
                      {brand === "Todas" ? "Todas las marcas" : brand}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Carousel
              opts={{
                align: "start",
                dragFree: true,
                loop: true,
              }}
              className="w-full max-w-full px-12 relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {categories.map((c) => {
                  const isActive = active === c;
                  return (
                    <CarouselItem key={c} className="pl-2 md:pl-4 basis-auto">
                      <button
                        onClick={() => setActive(c)}
                        className={
                          isActive
                            ? "bg-gradient-brand rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-glow whitespace-nowrap"
                            : "glass rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-foreground/70 transition hover:text-[#068DBB] whitespace-nowrap"
                        }
                      >
                        {c}
                      </button>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-0 glass hover:bg-gradient-brand hover:text-white" />
              <CarouselNext className="right-0 glass hover:bg-gradient-brand hover:text-white" />
            </Carousel>
          </div>

          {/* Mobile-Only Trigger Button "Filtros" + Active Summary Pills */}
          <div className="mt-8 flex md:hidden flex-wrap items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="bg-gradient-brand ptt-button flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-glow hover:brightness-110 active:scale-95 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              <span>Filtros</span>
              {(query || active !== "Todos" || activeBrand !== "Todas") && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#068DBB] text-xs font-black shadow">
                  !
                </span>
              )}
            </button>

            {/* Active Filters Summary Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {query && (
                <span className="glass flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-foreground border border-border/60">
                  Búsqueda: <strong>"{query}"</strong>
                  <button onClick={() => setQuery("")} className="hover:text-red-500 font-bold ml-1">✕</button>
                </span>
              )}
              {activeBrand !== "Todas" && (
                <span className="glass flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-[#068DBB] border border-[#068DBB]/30">
                  Marca: <strong>{activeBrand}</strong>
                  <button onClick={() => setActiveBrand("Todas")} className="hover:text-red-500 font-bold ml-1">✕</button>
                </span>
              )}
              {active !== "Todos" && (
                <span className="glass flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-[#068DBB] border border-[#068DBB]/30">
                  Categoría: <strong>{active}</strong>
                  <button onClick={() => setActive("Todos")} className="hover:text-red-500 font-bold ml-1">✕</button>
                </span>
              )}
              {(query || active !== "Todos" || activeBrand !== "Todas") && (
                <button
                  onClick={() => {
                    setQuery("");
                    setActive("Todos");
                    setActiveBrand("Todas");
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground underline ml-2 font-medium"
                >
                  Limpiar todo
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Left-to-Right Sidebar Filter Drawer (MOBILE ONLY) */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-3xl transition-transform duration-300 ease-in-out md:hidden ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between px-6 pt-2 border-b border-border/40">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#068DBB]/15 text-[#068DBB]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Filtros de Búsqueda</h2>
              <p className="text-xs text-muted-foreground">Encuentra radios y accesorios rápidamente</p>
            </div>
          </div>
          <button
            onClick={() => setIsFilterOpen(false)}
            aria-label="Cerrar filtros"
            className="flex h-11 w-11 items-center justify-center rounded-2xl glass text-foreground hover:text-[#068DBB] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
          {/* 1. Search Bar */}
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Buscar por Palabra Clave
            </label>
            <div className="glass flex w-full items-center gap-3 rounded-2xl px-5 py-3.5 border border-border/60">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#068DBB]">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por modelo, SKU o marca…"
                className="flex-1 bg-transparent text-base placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* 2. Brands Dropdown */}
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Filtrar por Marca
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-gradient-brand text-white shadow-glow flex w-full items-center justify-between gap-2 rounded-2xl px-6 py-4 font-bold text-base hover:brightness-110 transition-all outline-none border-none">
                <span>{activeBrand === "Todas" ? "Todas las Marcas" : `Marca: ${activeBrand}`}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="glass-strong border-border/50 bg-background/95 backdrop-blur-2xl rounded-2xl p-2 w-[calc(100vw-3rem)] max-w-lg z-[110]">
                {uniqueBrands.map(brand => (
                  <DropdownMenuItem
                    key={brand}
                    onClick={() => setActiveBrand(brand)}
                    className={`cursor-pointer rounded-xl px-4 py-3 text-base hover:bg-foreground/5 ${activeBrand === brand ? "text-[#068DBB] font-bold bg-[#068DBB]/10" : ""}`}
                  >
                    {brand === "Todas" ? "Todas las marcas" : brand}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 3. Collapsible Categories Menu */}
          <div className="space-y-3 pt-2 border-t border-border/40">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex w-full items-center justify-between text-left py-2"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Categorías de Producto ({categories.length - 1})
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform duration-200 ${isCategoryOpen ? "rotate-180 text-[#068DBB]" : "text-muted-foreground"}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            {isCategoryOpen && (
              <div className="space-y-2 pt-1 animate-fade-in">
                {categories.map((c) => {
                  const isActive = active === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setActive(c)}
                      className={`flex w-full items-center justify-between rounded-2xl px-5 py-3.5 text-base font-bold transition-all ${
                        isActive
                          ? "bg-[#068DBB]/15 text-[#068DBB] border border-[#068DBB]/30 shadow-inner"
                          : "glass text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                      }`}
                    >
                      <span>{c}</span>
                      {isActive ? (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#068DBB] shadow-[0_0_10px_#068DBB]" />
                      ) : (
                        <span className="text-muted-foreground text-sm">→</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-border/40 bg-background/80 backdrop-blur-lg flex gap-3">
          <button
            onClick={() => {
              setQuery("");
              setActive("Todos");
              setActiveBrand("Todas");
            }}
            className="glass px-5 py-4 rounded-2xl font-mono text-xs uppercase tracking-widest font-bold text-foreground/70 hover:text-foreground active:scale-95"
          >
            Limpiar
          </button>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="flex-1 bg-gradient-brand ptt-button flex items-center justify-center gap-2 rounded-2xl py-4 font-semibold text-white shadow-glow hover:brightness-110 active:scale-95 text-center text-base"
          >
            Ver {filtered.length} Resultados
          </button>
        </div>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            {isLoading ? 'Cargando...' : `${filtered.length} productos`}
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Categoría · {active}
          </span>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass h-[400px] animate-pulse rounded-3xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="glass rounded-3xl p-16 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Sin resultados
            </p>
            <p className="mt-3 text-lg">
              No encontramos productos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActive("Todos");
              }}
              className="mt-6 inline-flex rounded-full bg-gradient-brand px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-glow ptt-button hover:brightness-110 active:scale-95"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProducts.map((p) => (
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
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                      {p.sku}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.brand}
                    </span>
                  </div>
                  <Link to="/producto/$sku" params={{ sku: p.sku }} className="block hover:underline">
                    <h3 className="mt-2 text-xl font-bold tracking-tight">{p.name}</h3>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-lg font-extrabold">
                    {p.price}
                  </span>
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

        {/* Paginator */}
        {totalPages > 1 && (
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={`cursor-pointer bg-background/50 backdrop-blur-sm border-border/50 hover:bg-foreground/5 hover:text-[#068DBB] ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      onClick={() => handlePageChange(i + 1)}
                      isActive={currentPage === i + 1}
                      className={`cursor-pointer font-bold ${currentPage === i + 1 ? 'bg-gradient-brand text-white border-none shadow-glow' : 'bg-background/50 backdrop-blur-sm border-border/50 hover:bg-foreground/5 hover:text-[#068DBB]'}`}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={`cursor-pointer bg-background/50 backdrop-blur-sm border-border/50 hover:bg-foreground/5 hover:text-[#068DBB] ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-14">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0FD4D4]/30 blur-3xl" />
          <div aria-hidden className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#068DBB]/30 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
                ¿No encuentras tu equipo?
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Cotiza soluciones a la <span className="text-gradient-brand">medida</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Nuestro equipo de ingenieros diseña la solución exacta para tu operación: desde una radio individual hasta redes troncalizadas multi-sitio.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=573193053916&text=Hola,%20quisiera%20cotizar%20un%20producto&type=phone_number&app_absent=0"
              target="_blank"
              className="bg-gradient-brand ptt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
            >
              Hablar con un asesor
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
