import productHandheld from "../assets/product-handheld.jpg";
import productMobile from "../assets/product-mobile.jpg";
import productRepeater from "../assets/product-repeater.jpg";

export type Category = string;

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  sku: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  images: string[];
  category: string;
  brand: string;
  badge?: string | null;
  features: string[];
  inBox: string[];
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    sku: "DEP-450",
    name: "Radio Portátil DMR",
    description: "32 canales, robustez militar IP54 y batería de 18 horas.",
    longDescription:
      "El transmisor portátil DEP-450 es el estándar de la industria para comunicaciones de voz claras e instantáneas. Construido bajo especificaciones militares 810 C/D/E/F/G y protección contra polvo y salpicaduras IP54.",
    price: "$ 1.450.000",
    image: productHandheld,
    images: [productHandheld, productMobile, productRepeater],
    category: "Portátiles",
    brand: "Motorola",
    badge: "Más vendido",
    features: [
      "Tecnología Digital DMR y Analógica integrada",
      "Audio inteligente con cancelación activa de ruido ambiental",
      "Cumplimiento con estándar militar MIL-STD-810 C/D/E/F/G",
      "Interruptor giratorio de canal reforzado con tope seguro",
      "Llamada selectiva digital y privacidad de voz básica",
    ],
    inBox: [
      "Radio portátil DEP-450",
      "Batería Li-Ion de alta capacidad (1750 mAh)",
      "Cargador rápido de escritorio de 110V/220V",
      "Antena flexible UHF/VHF de alta ganancia",
      "Clip para cinturón de resorte reforzado",
    ],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (403 - 470 MHz) / VHF (136 - 174 MHz)" },
      { label: "Capacidad de Canales", value: "32 Canales (2 zonas de 16)" },
      { label: "Potencia de Salida RF", value: "4 W (UHF) / 5 W (VHF)" },
      { label: "Duración de Batería", value: "Hasta 18.5 horas en modo digital" },
      { label: "Grado de Protección", value: "IP54 resistente a agua y Polvo" },
      { label: "Peso", value: "406 gramos con batería" },
    ],
  },
  {
    sku: "PD-505",
    name: "Radio Portátil Compacto",
    description: "Ergonómico, resistente al agua y polvo IP54, 256 canales.",
    longDescription:
      "Diseño ultraligero sin pantalla ideal para personal operativo en hoteles, centros comerciales y logística. Excelente claridad de audio DMR.",
    price: "$ 1.280.000",
    image: productHandheld,
    images: [productHandheld, productMobile],
    category: "Portátiles",
    brand: "Hytera",
    features: [
      "Doble slot en modo directo TDMA",
      "Cifrado básico de 40 bits",
      "Resistente a golpes y vibración continua",
      "Función pseudo-trunking de Hytera",
    ],
    inBox: ["Radio PD-505", "Batería Li-Ion 1500mAh", "Cargador inteligente", "Antena y Clip"],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (400 - 470 MHz)" },
      { label: "Capacidad de Canales", value: "256 Canales" },
      { label: "Potencia de Salida", value: "4 W" },
      { label: "Protección IP", value: "IP54" },
    ],
  },
  {
    sku: "NX-1300",
    name: "Radio Multiprotocolo NXDN/DMR",
    description: "Pantalla OLED, audio de 1W, GPS opcional y bluetooth.",
    longDescription:
      "Dispositivo híbrido preparado para trabajar en redes analógicas convencionales y actualizarse a digital NXDN o DMR mediante licencias de software.",
    price: "$ 1.620.000",
    image: productHandheld,
    images: [productHandheld, productRepeater],
    category: "Portátiles",
    brand: "Kenwood",
    badge: "Destacado",
    features: [
      "Soporta protocolos NXDN y DMR",
      "Pantalla LCD de alto contraste de 2 dígitos",
      "Ecualizador de audio de 7 bandas",
      "Sensor Man-Down y trabajador solitario",
    ],
    inBox: ["Radio NX-1300", "Batería KNB-45L", "Cargador KSC-35", "Antena KRA-27"],
    specs: [
      { label: "Banda de Frecuencia", value: "VHF (136 - 174 MHz)" },
      { label: "Canales", value: "64 Canales" },
      { label: "Potencia Audio", value: "1000 mW" },
    ],
  },
  {
    sku: "MDT-5000",
    name: "Móvil Vehicular Analógico/Digital",
    description: "45W de potencia RF, pantalla matricial e integración GPS.",
    longDescription:
      "Diseñado para instalación en patrullas, camiones de carga y maquinaria pesada. Transmisión limpia de voz y datos con micrófono de alto rendimiento.",
    price: "$ 2.350.000",
    image: productMobile,
    images: [productMobile, productHandheld],
    category: "Móviles",
    brand: "Motorola",
    badge: "Nuevo",
    features: [
      "Transmisión de alta potencia hasta 45 vatios",
      "Pantalla alfanumérica de alto contraste",
      "Micrófono de servicio pesado con cancelación de ruido",
      "Puerto de accesorios trasero programable",
    ],
    inBox: ["Transceptor MDT-5000", "Micrófono de mano", "Kit de montaje de vehículo", "Cable de alimentación"],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (403 - 470 MHz)" },
      { label: "Canales", value: "99 Canales" },
      { label: "Potencia de Salida", value: "45 W ajustables" },
    ],
  },
  {
    sku: "SLR-1000",
    name: "Repetidor de Rango Extendido",
    description: "Ciclo continuo 100%, diseño compacto IP65 y bajo consumo.",
    longDescription:
      "El repetidor Motorola SLR-1000 ofrece cobertura sin fisuras en interiores y exteriores. Su chasis IP65 sin ventiladores permite instalación directa en postes.",
    price: "$ 4.850.000",
    image: productRepeater,
    images: [productRepeater, productHandheld],
    category: "Repetidores",
    brand: "Motorola",
    badge: "Recomendado",
    features: [
      "Diseño estanco IP65 resistente a la intemperie",
      "Ciclo de trabajo continuo 100% a 10W",
      "Operación silenciosa sin ventiladores",
      "Soporte para redes IP Site Connect y Capacity Plus",
    ],
    inBox: ["Repetidor SLR-1000", "Soporte de pared / poste", "Cable de alimentación"],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (400 - 512 MHz)" },
      { label: "Potencia de Salida", value: "1 - 10 W" },
      { label: "Ciclo de Trabajo", value: "100%" },
    ],
  },
];

export function getProductBySku(sku: string): Product | undefined {
  if (!sku) return undefined;
  const decodedSku = decodeURIComponent(sku).trim().toLowerCase();
  return products.find((p) => p.sku.toLowerCase() === decodedSku);
}
