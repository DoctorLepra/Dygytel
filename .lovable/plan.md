## Objetivo

Construir la landing page de Dygytel en `/` con estilo moderno, limpio, concepto de tienda tecnológica, base blanca y acentos cian/turquesa (#068DBB y #0FD4D4) usando glassmorphism como sello visual. Se conserva la composición de la dirección "Signal Aesthetic" seleccionada (hero split, marquee, 3 cards catálogo, 3 cards servicios, formulario de contacto).

## Sistema visual

**Paleta (tokens en `src/styles.css`)**
- `--background`: blanco puro
- `--foreground`: gris muy oscuro (casi negro)
- `--muted-foreground`: gris medio
- `--primary`: `#068DBB` (azul cian)
- `--accent`: `#0FD4D4` (turquesa brillante)
- `--primary-foreground`: blanco
- `--border`: negro 8%
- Gradiente utilitario `--gradient-brand: linear-gradient(135deg, #068DBB, #0FD4D4)` para CTA y detalles.
- Halos suaves cian/turquesa en el fondo del hero y detrás de la sección de contacto (blobs radiales muy difuminados) para dar profundidad sin romper la limpieza.

**Glassmorphism (utilidad `.glass`)**
- Fondo `rgba(255,255,255,0.55)` + `backdrop-filter: blur(20px) saturate(140%)` + borde `1px rgba(255,255,255,0.6)` + sombra suave.
- Nunca escribir `-webkit-backdrop-filter` a mano; solo la propiedad estándar (Lightning CSS añade el prefijo).
- Se usa en: navbar sticky, cards de producto, cards de servicios, formulario de contacto, badge del hero, e imagen del terminal (marco glass sobre halo de color).

**Tipografía**
- Inter (400/500/700/800) para todo el cuerpo y titulares.
- JetBrains Mono (500) solo para micro-etiquetas técnicas (SKU, "SEÑAL DE GRADO INDUSTRIAL", numeración de secciones).
- Fuentes cargadas vía `<link>` en `head()` de `__root.tsx` (nunca `@import` remoto en CSS).
- Registradas en `@theme` como `--font-sans` y `--font-mono`.

**Motion**
- Marquee infinito para logos.
- Micro-hover en cards: elevación de sombra y borde acentuado con gradiente.
- Botón CTA con transición suave (metáfora PTT: pequeño scale al presionar).

## Estructura (una sola ruta, `src/routes/index.tsx`)

1. **Navbar sticky** glass — logo "Dygytel." (con punto en gradiente cian→turquesa), links Inicio · Catálogo · Servicios · Nosotros · Contacto, botón "Iniciar Sesión" con gradiente cian/turquesa.
2. **Hero** split 7/5 sobre fondo blanco con halos cian/turquesa difuminados:
   - Badge glass "SEÑAL DE GRADO INDUSTRIAL".
   - Titular grande "Comunicación crítica sin interferencias.", palabra final en gradiente.
   - Subtítulo.
   - CTA primario "Explorar Catálogo" (gradiente) + secundario "Asesoría Técnica" (glass outline).
   - Imagen del terminal dentro de marco glass con halo turquesa detrás.
3. **Leyenda Dygytel** — bloque centrado, sin fondo oscuro (se mantiene todo claro), con acento tipográfico y línea gradiente.
4. **Marquee "Distribuidores autorizados"** — logotipos en gris que se colorean cian al hover; máscara de fade en los bordes.
5. **Catálogo** — encabezado con `[ 01 ]` en mono cian, título, link "Ver catálogo completo" (flecha en círculo glass). 3 cards glass: portátil, móvil vehicular, repetidor. Cada card: imagen, SKU mono, título, descripción, precio + botón "Cotizar".
6. **Servicios** — encabezado `[ 02 ]`, link "Todos los servicios". 3 cards glass con badge numerado con gradiente: Instalación, Mantenimiento, Gestión de licencias.
7. **Contacto** — grid 2 columnas: info (tel, mail, ubicación con etiquetas mono cian) + formulario glass simple (nombre, email, teléfono, mensaje, submit gradiente).
8. **Footer** limpio, minimal, con copyright y 3 links secundarios.

## Metadata / SEO

- `__root.tsx`: título "Dygytel — Radiocomunicación Profesional", meta description específica, og:title, og:description, og:type, twitter:card. Cargar Inter y JetBrains Mono con `<link>`. Sin `og:image` en root.
- `index.tsx`: propio `head()` con título y descripción de la landing.

## Navegación

- Links del navbar → anclas internas (`#inicio`, `#catalogo`, `#servicios`, `#nosotros`, `#contacto`) por ahora, con `scroll-behavior: smooth`.
- "Iniciar Sesión", "Ver catálogo completo" y "Todos los servicios" quedan como `<a href="#">` — se conectarán a rutas reales cuando existan.

## Archivos afectados

```text
src/styles.css                     (tokens blanco + cian/turquesa, gradiente, .glass, marquee, ptt)
src/routes/__root.tsx              (metadata + <link> Google Fonts)
src/routes/index.tsx               (reemplazo total del placeholder por la landing)
src/assets/hero-radio.jpg          (generado)
src/assets/product-handheld.jpg    (generado)
src/assets/product-mobile.jpg      (generado)
src/assets/product-repeater.jpg    (generado)
```

## Fuera de alcance

- Rutas separadas /catalogo, /servicios, /nosotros, /contacto.
- Autenticación real detrás de "Iniciar Sesión".
- Envío real del formulario (sin handler por ahora).
