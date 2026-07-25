import productHandheld from "../assets/product-handheld.jpg";
import productMobile from "../assets/product-mobile.jpg";
import productRepeater from "../assets/product-repeater.jpg";

export type Category = "Todos" | "Portátiles" | "Móviles" | "Repetidores" | "Accesorios";

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
  category: Exclude<Category, "Todos">;
  brand: string;
  badge?: string;
  features: string[];
  inBox: string[];
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    sku: "DGP-8550e",
    name: "Portátil Digital UHF",
    description: "GPS integrado, Wi-Fi, audio inteligente y resistencia IP68.",
    longDescription:
      "El Motorola DGP-8550e ofrece conectividad total para operaciones críticas. Equipado con GPS integrado, Wi-Fi para actualizaciones remotas de firmware, audio inteligente con cancelación de ruido y certificación IP68 sumergible.",
    price: "$549.00",
    image: productHandheld,
    category: "Portátiles",
    brand: "Motorola",
    badge: "Top ventas",
    features: [
      "GPS integrado y Bluetooth 4.0 LE",
      "Audio Inteligente con supresión de ruido ambiental",
      "Certificación IP68 (Sumergible a 2m por 2 hrs)",
      "Batería Impres de larga duración (hasta 29 horas)",
      "Boton de emergencia programable y Man Down",
    ],
    inBox: ["Radio DGP-8550e", "Batería Li-Ion 2900 mAh", "Antena UHF", "Cargador Rápido de Escritorio", "Clip para Cinturón"],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (403 - 527 MHz)" },
      { label: "Canales", value: "1000 canales" },
      { label: "Potencia de Salida", value: "4W (UHF)" },
      { label: "Protocolo Digital", value: "DMR Tier II / Tier III" },
      { label: "Protección IP", value: "IP68" },
      { label: "Duración Batería", value: "Hasta 29 hrs (5/5/90)" },
    ],
  },
  {
    sku: "PD-782i",
    name: "Portátil DMR Tier II",
    description: "Cifrado AES256, GPS y batería de 2000 mAh para jornadas largas.",
    longDescription:
      "El Hytera PD-782i es un terminal portable profesional robusto con pantalla a color de alta definición y teclado completo. Diseñado para ofrecer voz clara y datos seguros con cifrado avanzado en entornos industriales.",
    price: "$489.00",
    image: productHandheld,
    category: "Portátiles",
    brand: "Hytera",
    features: [
      "Pantalla LCD TFT a color de 1.8 pulgadas",
      "Cifrado de alto nivel AES256",
      "Pseudotrunking en modo directo para optimización de slot",
      "Construcción bajo norma MIL-STD-810G",
      "Soporte para roaming multisitio",
    ],
    inBox: ["Radio PD-782i", "Batería Li-Ion 2000 mAh", "Antena flexible", "Cargador inteligente", "Manual de usuario"],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (400 - 470 MHz)" },
      { label: "Canales", value: "1024 canales" },
      { label: "Potencia de Salida", value: "4W (UHF) / 5W (VHF)" },
      { label: "Protocolo Digital", value: "DMR Tier II" },
      { label: "Protección IP", value: "IP67" },
      { label: "Peso", value: "335 g" },
    ],
  },
  {
    sku: "TK-3402",
    name: "Portátil VHF Analógico",
    description: "Radio robusta MIL-STD-810 con 16 canales y audio de alta claridad.",
    longDescription:
      "El Kenwood TK-3402 combina potencia y durabilidad a un costo accesible. Perfecto para personal de seguridad privada, logística comercial e instalaciones de construcción.",
    price: "$319.00",
    image: productHandheld,
    category: "Portátiles",
    brand: "Kenwood",
    features: [
      "16 Canales con selector rotativo",
      "Bocina integrada de 1000mW para audio potente",
      "Señalización FleetSync y QT/DQT",
      "Diseño compacto ergonómico reforzado",
      "Encriptador de voz por inversión analógica",
    ],
    inBox: ["Radio TK-3402", "Batería Ni-MH 1500 mAh", "Antena helik", "Cargador KSC-35S", "Clip KB-18"],
    specs: [
      { label: "Banda de Frecuencia", value: "VHF (136 - 174 MHz)" },
      { label: "Canales", value: "16 canales" },
      { label: "Potencia de Salida", value: "5W" },
      { label: "Estándar Militar", value: "MIL-STD-810 C/D/E/F/G" },
      { label: "Protección IP", value: "IP54 / IP55" },
    ],
  },
  {
    sku: "MDT-5000",
    name: "Radio Móvil Vehicular",
    description: "Alta potencia 45W, pantalla a color, ideal para logística pesada.",
    longDescription:
      "Radio móvil de alta potencia diseñada para vehículos de carga, emergencias y flotillas comerciales. Garantiza alcance extendido e integración fluida con redes digitales y analógicas.",
    price: "$780.00",
    image: productMobile,
    category: "Móviles",
    brand: "Motorola",
    badge: "Nuevo",
    features: [
      "Transmisión de alta potencia hasta 45 vatios",
      "Pantalla alfanumérica de alto contraste",
      "Micrófono de servicio pesado con cancelación de ruido",
      "Puerto de accesorios trasero programable",
      "Llamada individual, grupal e interconexión telefónica",
    ],
    inBox: ["Transceptor MDT-5000", "Micrófono de mano", "Kit de montaje de vehículo", "Cable de alimentación de alta capacidad", "Arnés de fusibles"],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (403 - 470 MHz)" },
      { label: "Canales", value: "99 Canales" },
      { label: "Potencia de Salida", value: "45 W ajustables" },
      { label: "Tensión de Operación", value: "13.8 V DC" },
      { label: "Protección IP", value: "IP54 frontal" },
    ],
  },
  {
    sku: "MD-655",
    name: "Móvil Digital DMR",
    description: "50W con doble ranura de tiempo y roaming multisite.",
    longDescription:
      "Equipo móvil DMR compacto controlado directamente desde el micrófono inteligente con pantalla. Ideal para espacios reducidos en cabina de vehículos modernos.",
    price: "$720.00",
    image: productMobile,
    category: "Móviles",
    brand: "Hytera",
    features: [
      "Control total desde el micrófono con pantalla LCD",
      "Diseño ultrafino para montaje bajo asiento o guantera",
      "Doble slot en modo directo TDMA",
      "Llamada de emergencia con un solo toque",
      "Compatibilidad analógico y DMR",
    ],
    inBox: ["Unidad principal MD-655", "Micrófono con pantalla remota", "Soporte de instalación", "Cable DC con fusible"],
    specs: [
      { label: "Banda de Frecuencia", value: "VHF/UHF" },
      { label: "Canales", value: "1024 canales" },
      { label: "Potencia de Salida", value: "25W - 50W" },
      { label: "Dimensiones", value: "165 x 46 x 140 mm" },
    ],
  },
  {
    sku: "NX-1700",
    name: "Móvil NEXEDGE",
    description: "Compacto, dual-mode analógico/digital, ideal para flotas.",
    longDescription:
      "Transceptor móvil multiprotocolo apto para migraciones paulatinas de analógico a digital NXDN o DMR.",
    price: "$690.00",
    image: productMobile,
    category: "Móviles",
    brand: "Kenwood",
    features: [
      "Soporta protocolos NXDN y DMR (mediante licencia)",
      "Audio claro con procesador DSP avanzado",
      "Pantalla de 7 colores seleccionables para indicador LED",
      "Scrambler de voz analógico integrado",
    ],
    inBox: ["Radio NX-1700", "Micrófono estándar", "Base metálica", "Tornillería y cable de corriente"],
    specs: [
      { label: "Banda de Frecuencia", value: "VHF (136 - 174 MHz)" },
      { label: "Canales", value: "260 canales" },
      { label: "Potencia de Salida", value: "50W" },
    ],
  },
  {
    sku: "SLR-1000",
    name: "Repetidor de Rango Extendido",
    description: "Ciclo continuo 100%, diseño compacto y bajo consumo.",
    longDescription:
      "El repetidor Motorola SLR-1000 ofrece cobertura sin fisuras en interiores y exteriores. Su chasis IP65 sin ventiladores permite instalación directa en postes sin necesidad de gabinete adicional.",
    price: "$1,250.00",
    image: productRepeater,
    category: "Repetidores",
    brand: "Motorola",
    badge: "Recomendado",
    features: [
      "Diseño estanco IP65 resistente a la intemperie",
      "Ciclo de trabajo continuo 100% a 10W",
      "Operación silenciosa sin ventiladores",
      "Soporte para redes IP Site Connect, Capacity Plus y Linked Capacity Plus",
      "Consumo de energía ultrabajo",
    ],
    inBox: ["Repetidor SLR-1000", "Soporte de pared / poste", "Cable de alimentación", "Guía de inicio rápido"],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (400 - 512 MHz)" },
      { label: "Potencia de Salida", value: "1 - 10 W" },
      { label: "Ciclo de Trabajo", value: "100%" },
      { label: "Protección IP", value: "IP65" },
    ],
  },
  {
    sku: "RD-985",
    name: "Repetidor DMR 50W",
    description: "IP54, gestión remota y soporte multi-site IP conectado.",
    longDescription:
      "Repetidor profesional de alta capacidad para redes de radiocomunicación extendidas. Soporta simulcast y enlace por red IP.",
    price: "$1,420.00",
    image: productRepeater,
    category: "Repetidores",
    brand: "Hytera",
    features: [
      "50W de potencia continua en rack estándar de 19 pulgadas",
      "Pantalla HD color de 2.0 pulgadas para diagnóstico de estado",
      "Conmutación automática analógico / digital",
      "Diagnóstico y control remoto (RDAC)",
    ],
    inBox: ["Repetidor RD-985", "Cable de poder", "Brackets para Rack 19\""],
    specs: [
      { label: "Banda de Frecuencia", value: "UHF (400 - 470 MHz)" },
      { label: "Potencia de Salida", value: "5 - 50 W" },
      { label: "Pantalla", value: "2.0\" Color LCD" },
    ],
  },
  {
    sku: "TKR-D810",
    name: "Repetidor Digital NXDN",
    description: "Repetidor multi-protocolo con panel frontal desmontable.",
    longDescription:
      "Unidad repetidora de la serie Kenwood NXDN concebida para maximizar la cobertura en áreas geográficas complejas.",
    price: "$1,180.00",
    image: productRepeater,
    category: "Repetidores",
    brand: "Kenwood",
    features: [
      "Operación analógica y digital NXDN",
      "Interfaz de red Ethernet integrada",
      "Entradas/Salidas AUX programables",
    ],
    inBox: ["Repetidor TKR-D810", "Manual técnico", "Cable DC"],
    specs: [
      { label: "Potencia", value: "50W" },
      { label: "Montaje", value: "Rack 19 pulgadas" },
    ],
  },
  {
    sku: "PMLN7008",
    name: "Micrófono de Solapa IP54",
    description: "Cable reinforced, botón PTT táctil y clip metálico rotatorio.",
    longDescription:
      "Accesorio de audio ergonómico con tubo acústico transparente intercambiable para uso discreto de seguridad.",
    price: "$78.00",
    image: productHandheld,
    category: "Accesorios",
    brand: "Motorola",
    features: [
      "Tubo acústico desmontable quirúrgico",
      "Micrófono integrado en botón PTT",
      "Cable reforzado con Kevlar",
    ],
    inBox: ["Micrófono de solapa PMLN7008", "Tubo acústico de repuesto", "Almohadilla de silicona"],
    specs: [
      { label: "Conector", value: "Multi-pin Motorola" },
      { label: "Protección", value: "IP54" },
    ],
  },
  {
    sku: "BAT-2900",
    name: "Batería Extendida 2900 mAh",
    description: "Li-Ion de alta densidad con protección térmica integrada.",
    longDescription:
      "Batería recargable inteligente para extender la operación del equipo hasta 24-30 horas seguidas.",
    price: "$95.00",
    image: productHandheld,
    category: "Accesorios",
    brand: "Hytera",
    features: [
      "Tecnología Li-Ion de alto rendimiento",
      "Sin efecto memoria",
      "Protección contra sobrecargas",
    ],
    inBox: ["Batería BAT-2900", "Clip trasero"],
    specs: [
      { label: "Capacidad", value: "2900 mAh" },
      { label: "Voltaje", value: "7.4V" },
    ],
  },
  {
    sku: "ANT-UHF-5",
    name: "Antena UHF 5 dBi",
    description: "Fibra de vidrio para base fija, kit de montaje incluido.",
    longDescription:
      "Antena omnidireccional de estación base construida en fibra de vidrio de alta resistencia a ráfagas de viento e intemperie.",
    price: "$135.00",
    image: productRepeater,
    category: "Accesorios",
    brand: "Icom",
    features: [
      "Ganancia de 5 dBi omnidireccional",
      "Construcción hermética en fibra de vidrio",
      "Herrajes metálicos reforzados incluidos",
    ],
    inBox: ["Antena ANT-UHF-5", "Juego de abrazaderas U-Bolt"],
    specs: [
      { label: "Frecuencia", value: "450 - 470 MHz" },
      { label: "Ganancia", value: "5.0 dBi" },
      { label: "Conector", value: "N-Femenino" },
    ],
  },
];

export function getProductBySku(sku: string): Product | undefined {
  if (!sku) return undefined;
  const decodedSku = decodeURIComponent(sku).trim().toLowerCase();
  return products.find((p) => p.sku.toLowerCase() === decodedSku);
}
