import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { useProduct, useProducts } from "../lib/api";
import { PageLoader } from "../components/PageLoader";

export const Route = createFileRoute("/producto/$sku")({
  component: ProductDetailPageWrapper,
});

function ProductDetailPageWrapper() {
  const { sku } = Route.useParams();
  const { data: product, isLoading, error } = useProduct(sku);
  const { data: allProducts = [] } = useProducts();

  if (isLoading) {
    return <PageLoader />;
  }

  if (error || !product) {
    return <ProductNotFound />;
  }

  return <ProductDetailPage product={product} allProducts={allProducts} />;
}

function ProductNotFound() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-40 text-center">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
          Error 404
        </span>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight">Producto no encontrado</h1>
        <p className="mt-4 text-muted-foreground">
          El producto que buscas no está disponible o fue movido.
        </p>
        <Link
          to="/catalogo"
          className="bg-gradient-brand ptt-button mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110"
        >
          Volver al catálogo
        </Link>
      </div>
    </div>
  );
}

function ProductDetailPage({ product, allProducts }: { product: any, allProducts: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = (product.images && product.images.length > 0)
    ? product.images
    : (product.image ? [product.image] : []);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const related = allProducts
    .filter((p) => p.category === product.category && p.sku !== product.sku)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Background halos */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/25 blur-[120px] animate-float-slow" />
        <div
          className="absolute top-[30%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[140px] animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
      </div>



      <section className="relative pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
            <Link to="/" className="hover:text-foreground">
              Inicio
            </Link>
            <span className="text-foreground/30">/</span>
            <Link to="/catalogo" className="hover:text-foreground">
              Catálogo
            </Link>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/70">{product.category}</span>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/70">{product.sku}</span>
          </div>

          {/* Main product grid */}
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Image */}
            <div className="glass relative overflow-hidden rounded-3xl p-8">

              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/60">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0FD4D4]/10 to-transparent" />
                <img
                  src={images[activeIndex] || product.image}
                  alt={`${product.name} - Vista ${activeIndex + 1}`}
                  className="h-full w-full object-cover transition-opacity duration-500"
                />
              </div>
              {images.length > 1 && (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {images.map((img: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`glass-subtle relative h-20 w-20 flex-none overflow-hidden rounded-xl transition-all ${
                        activeIndex === i ? "opacity-100 ring-2 ring-[#068DBB]" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="glass rounded-full px-4 py-1.5 font-mono text-[12.5px] font-bold uppercase tracking-widest text-[#068DBB]">
                  {product.brand}
                </span>
                <span className="glass rounded-full px-4 py-1.5 font-mono text-[12.5px] font-bold uppercase tracking-widest text-foreground/70">
                  {product.category}
                </span>
              </div>
              <span className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                SKU · {product.sku}
              </span>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{product.longDescription}</p>

              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold">
                  {product.price}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                   · IVA incluido
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://api.whatsapp.com/send/?phone=573193053916&text=${encodeURIComponent(`Hola quisiera cotizar el producto ${product.name} que vi en la pagina web.\n\nhttps://dygytel.com/producto/${product.sku}`)}`}
                  target="_blank"
                  className="bg-gradient-brand ptt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-glow hover:brightness-110 active:scale-95"
                >
                  Solicitar cotización <span aria-hidden>→</span>
                </a>
                <Link
                  to="/catalogo"
                  className="glass ptt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-[#068DBB]"
                >
                  ← Volver al catálogo
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  { t: "Garantía", v: "12 meses" },
                  { t: "Envío", v: "Nacional" },
                  { t: "Soporte", v: "24/7" },
                ].map((b) => (
                  <div key={b.t} className="glass rounded-2xl p-4 text-center">
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#068DBB]">
                      {b.t}
                    </div>
                    <div className="mt-1 text-lg font-bold">{b.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Features */}
            <div className="glass rounded-3xl p-8 lg:col-span-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
                Características
              </span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                Diseñado para el trabajo <span className="text-gradient-brand">real</span>
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-border pt-8">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
                  Contenido de la caja
                </span>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.inBox.map((i: string) => (
                    <li
                      key={i}
                      className="glass-subtle rounded-full px-4 py-2 text-xs text-foreground/80"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specs */}
            <div className="glass-strong rounded-3xl p-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
                Especificaciones técnicas
              </span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Ficha técnica</h2>
              <dl className="mt-6 divide-y divide-border">
                {product.specs.map((s: { label: string; value: string }) => (
                  <div key={s.label} className="flex items-center justify-between py-3">
                    <dt className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="text-right text-sm font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <div className="flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#068DBB]">
                    También te puede interesar
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                    Productos <span className="text-gradient-brand">relacionados</span>
                  </h2>
                </div>
                <Link
                  to="/catalogo"
                  className="hidden text-sm font-medium text-[#068DBB] hover:underline md:inline"
                >
                  Ver catálogo completo →
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.sku}
                    to="/producto/$sku"
                    params={{ sku: p.sku }}
                    className="glass group relative block overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
                  >
                    <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl bg-white/60">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0FD4D4]/10 to-transparent" />
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                        {p.sku}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {p.brand}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold tracking-tight">{p.name}</h3>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="font-extrabold">
                        {p.price}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#068DBB]">
                        Ver detalle →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
