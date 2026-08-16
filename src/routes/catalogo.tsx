import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
      { title: "Catálogo — Dygytel | Radios de Telecomunicación Profesional" },
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

  if (isLoading) {
    return <PageLoader />;
  }

  const [active, setActive] = useState<string>("Todos");
  const [activeBrand, setActiveBrand] = useState<string>("Todas");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q);
      return okCat && okBrand && okQ;
    });
  }, [active, activeBrand, query]);

  // Reset page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [active, activeBrand, query]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Background halos */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/25 blur-[120px] animate-float-slow" />
        <div className="absolute top-[30%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[140px] animate-float-slow" style={{ animationDelay: "3s" }} />
      </div>



      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-14">
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
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
            Catálogo <span className="text-gradient-brand">completo</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Explora nuestra selección de radios portátiles, móviles vehiculares, repetidores y accesorios de las marcas líderes del sector.
          </p>

          {/* Search + filters */}
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex w-full flex-col sm:flex-row items-center gap-3 md:max-w-2xl">
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
                <DropdownMenuTrigger className="bg-gradient-brand text-white shadow-glow flex w-full sm:w-auto items-center justify-between gap-2 rounded-full px-6 py-3 font-bold text-sm hover:brightness-110 transition-all whitespace-nowrap outline-none border-none">
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
        </div>
      </section>

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
