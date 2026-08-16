import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#068DBB" },
      { title: "Inicio | Dygytel" },
      {
        name: "description",
        content:
          "Tienda especializada en radios de telecomunicación profesional. Portátiles, móviles vehiculares, repetidores y servicios de ingeniería.",
      },
      // Open Graph
      { property: "og:site_name", content: "Dygytel" },
      { property: "og:title", content: "Dygytel — Radiocomunicación Profesional" },
      {
        property: "og:description",
        content:
          "Equipamiento de radio profesional para entornos exigentes. Seguridad, alcance y claridad en cada transmisión.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dygytel.vercel.app" },
      { property: "og:image", content: "https://dygytel.vercel.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dygytel — Radiocomunicación Profesional" },
      { property: "og:locale", content: "es_CO" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@dygytel" },
      { name: "twitter:title", content: "Dygytel — Radiocomunicación Profesional" },
      {
        name: "twitter:description",
        content:
          "Equipamiento de radio profesional para entornos exigentes. Seguridad, alcance y claridad en cada transmisión.",
      },
      { name: "twitter:image", content: "https://dygytel.vercel.app/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dygytel.vercel.app" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/icono.png", type: "image/png" },
      { rel: "icon", href: "/icono.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/Logo vertical.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/icono.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dygytel",
          "url": "https://dygytel.vercel.app",
          "logo": "https://dygytel.vercel.app/icono.png",
          "description": "Venta, instalación y servicio técnico especializado en radios de telecomunicación profesional.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+57-319-305-3916",
            "contactType": "customer service",
            "availableLanguage": ["Spanish", "English"]
          },
          "sameAs": [
            "https://api.whatsapp.com/send/?phone=573193053916"
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isAdminLogin = location.pathname === "/admin/login";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        {!isAdminLogin && <Navbar />}
        <div className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </div>
        {!isAdminLogin && <Footer />}
      </div>
    </QueryClientProvider>
  );
}
