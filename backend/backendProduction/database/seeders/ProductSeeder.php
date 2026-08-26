<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'sku' => 'MOT-DGP8550E',
                'name' => 'Motorola DGP 8550e UHF',
                'description' => 'Radio portátil digital DMR con GPS integrado, Wi-Fi, audio inteligente y resistencia IP68.',
                'price' => 2450000.00,
                'original_price' => 2700000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Motorola',
                'in_stock' => true,
                'features' => [
                    "GPS integrado y Bluetooth 4.0 LE",
                    "Audio Inteligente con supresión de ruido ambiental",
                    "Certificación IP68 (Sumergible a 2m por 2 hrs)",
                    "Batería Impres de larga duración (hasta 29 horas)",
                    "Botón de emergencia programable y Man Down"
                ],
                'specs' => [
                    ["label" => "Banda de Frecuencia", "value" => "UHF (403 - 527 MHz)"],
                    ["label" => "Canales", "value" => "1000 canales"],
                    ["label" => "Potencia", "value" => "4W"],
                    ["label" => "Protocolo", "value" => "DMR Tier II / Tier III"],
                    ["label" => "Protección IP", "value" => "IP68"]
                ],
                'in_the_box' => ["Radio DGP-8550e", "Batería Li-Ion 2900 mAh", "Antena UHF", "Cargador Rápido", "Clip para Cinturón"]
            ],
            [
                'sku' => 'HYT-PD782I',
                'name' => 'Hytera PD782i DMR',
                'description' => 'Radio profesional DMR Tier II con cifrado AES256, pantalla color TFT y construcción militar.',
                'price' => 2180000.00,
                'original_price' => 2350000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Hytera',
                'in_stock' => true,
                'features' => [
                    "Pantalla LCD TFT a color de 1.8 pulgadas",
                    "Cifrado de alto nivel AES256",
                    "Pseudotrunking en modo directo",
                    "Norma MIL-STD-810G y protección IP67",
                    "Roaming multisitio avanzado"
                ],
                'specs' => [
                    ["label" => "Banda de Frecuencia", "value" => "UHF (400 - 470 MHz)"],
                    ["label" => "Canales", "value" => "1024 canales"],
                    ["label" => "Potencia", "value" => "4W UHF"],
                    ["label" => "Protección IP", "value" => "IP67"]
                ],
                'in_the_box' => ["Radio PD-782i", "Batería 2000 mAh", "Antena flexible", "Cargador", "Manual"]
            ],
            [
                'sku' => 'KEN-NX3200',
                'name' => 'Kenwood NX-3200E VHF/UHF',
                'description' => 'Radio multiprotocolo compatible con NXDN y DMR digital más FM analógico.',
                'price' => 1890000.00,
                'original_price' => 2050000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Kenwood',
                'in_stock' => true,
                'features' => [
                    "Soporte Multiprotocolo NXDN y DMR",
                    "Sensor de detección de caídas e inmovilidad",
                    "Bluetooth integrado para accesorios inalámbricos",
                    "Reducción activa de ruido mediante DSP"
                ],
                'specs' => [
                    ["label" => "Banda", "value" => "VHF (136-174 MHz)"],
                    ["label" => "Canales", "value" => "512 canales"],
                    ["label" => "Potencia", "value" => "5W VHF"]
                ],
                'in_the_box' => ["Transceptor NX-3200", "Batería KNB-57L", "Antena KRA-26", "Cargador KSC-35S"]
            ],
            [
                'sku' => 'ICO-F52D',
                'name' => 'Icom IC-F52D dPMR',
                'description' => 'Radio portátil ultra compacto e impermeable con tecnología digital dPMR e IDAS.',
                'price' => 1760000.00,
                'original_price' => 1920000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Icom',
                'in_stock' => true,
                'features' => [
                    "Diseño ultra compacto y ligero",
                    "Grabadora de voz digital de hasta 8 minutos",
                    "Alerta por vibración táctil",
                    "IP67 impermeable y resistente al polvo"
                ],
                'specs' => [
                    ["label" => "Frecuencia", "value" => "VHF 136-174 MHz"],
                    ["label" => "Canales", "value" => "512 canales / 128 zonas"]
                ],
                'in_the_box' => ["Radio IC-F52D", "Batería BP-290", "Clip MB-136", "Antena"]
            ],
            [
                'sku' => 'MOT-DEM400',
                'name' => 'Motorola DEM 400 Móvil',
                'description' => 'Radio móvil analógico/digital para vehículos con pantalla alfanumérica y audio claro.',
                'price' => 1690000.00,
                'original_price' => 1820000.00,
                'category' => 'Radios Móviles',
                'brand' => 'Motorola',
                'in_stock' => true,
                'features' => [
                    "Capacidad dual analógico y DMR digital",
                    "Pantalla alfanumérica de alto contraste",
                    "Micrófono compacto de alta fidelidad",
                    "Cumplimiento norma IP54"
                ],
                'specs' => [
                    ["label" => "Potencia", "value" => "25W - 45W"],
                    ["label" => "Canales", "value" => "160 canales"]
                ],
                'in_the_box' => ["Radio DEM 400", "Micrófono de palma", "Cable de energía", "Soporte de montaje"]
            ],
            [
                'sku' => 'HYT-MD782',
                'name' => 'Hytera MD782 Móvil DMR',
                'description' => 'Radio móvil digital con pantalla grande a color y capacidad para sistemas de despacho.',
                'price' => 2320000.00,
                'original_price' => 2540000.00,
                'category' => 'Radios Móviles',
                'brand' => 'Hytera',
                'in_stock' => true,
                'features' => [
                    "Pantalla LCD color HD de 2.0 pulgadas",
                    "Llamadas individuales, de grupo y generales",
                    "Telemetría y puertos de expansión I/O",
                    "Audio frontal potente de 4W"
                ],
                'specs' => [
                    ["label" => "Banda", "value" => "UHF 400-470 MHz"],
                    ["label" => "Potencia", "value" => "45W High Power"]
                ],
                'in_the_box' => ["Radio MD782", "Micrófono DTMF", "Kit de instalación vehicular", "Manual"]
            ],
            [
                'sku' => 'MOT-SL500E',
                'name' => 'Motorola SL500e Ultra Delgado',
                'description' => 'Radio portátil ultra delgado estilo smartphone, ideal para hotelería y seguridad ejecutiva.',
                'price' => 1380000.00,
                'original_price' => 1520000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Motorola',
                'in_stock' => true,
                'features' => [
                    "Perfil super delgado de solo 22mm",
                    "Pantalla Active View de matriz LED invisible",
                    "Puerto de carga Micro USB / USB-C",
                    "Conectividad Bluetooth integrada"
                ],
                'specs' => [
                    ["label" => "Peso", "value" => "166 gramos"],
                    ["label" => "Canales", "value" => "99 canales"]
                ],
                'in_the_box' => ["Radio SL500e", "Batería Li-Ion", "Funda con clip giratorio", "Cargador de pared"]
            ],
            [
                'sku' => 'REP-SLR5500',
                'name' => 'Repetidor Motorola SLR 5500',
                'description' => 'Repetidor DMR de 1ra clase para cobertura continua en sitio o enlace IP multisitio.',
                'price' => 8250000.00,
                'original_price' => 8900000.00,
                'category' => 'Repetidores',
                'brand' => 'Motorola',
                'in_stock' => true,
                'features' => [
                    "Operación continua 100% ciclo de trabajo a 50W",
                    "Diseño ultra compacto de 1U de rack",
                    "Cargador de batería integrado incorporado",
                    "Soporte para Capacity Plus y Connect Plus"
                ],
                'specs' => [
                    ["label" => "Potencia de salida", "value" => "1-50 Watts"],
                    ["label" => "Frecuencia", "value" => "UHF / VHF Dual"]
                ],
                'in_the_box' => ["Repetidor SLR 5500", "Cable AC", "Manual de configuración"]
            ],
            [
                'sku' => 'REP-HR1062',
                'name' => 'Repetidor Hytera HR1062 DMR',
                'description' => 'Repetidor compacto de nueva generación con módulo de enrutador e itinerancia de red.',
                'price' => 7200000.00,
                'original_price' => 7800000.00,
                'category' => 'Repetidores',
                'brand' => 'Hytera',
                'in_stock' => true,
                'features' => [
                    "Chasis compacto de 1U de altura",
                    "Fuente de alimentación AC/DC redundante",
                    "Servidor SIP integrado para interconexión telefónica",
                    "Gestión web remota via servidor integrado"
                ],
                'specs' => [
                    ["label" => "Potencia", "value" => "50W continuo"],
                    ["label" => "Conectividad", "value" => "Ethernet RJ45, RS232"]
                ],
                'in_the_box' => ["Repetidor HR1062", "Cable de energía", "Guía rápida de uso"]
            ],
            [
                'sku' => 'ACC-PMMN4025',
                'name' => 'Micrófono de Solapa Motorola IMPRES',
                'description' => 'Micrófono remoto con altavoz y cancelación de ruido para radios portátiles serie DGP.',
                'price' => 380000.00,
                'original_price' => 420000.00,
                'category' => 'Accesorios',
                'brand' => 'Motorola',
                'in_stock' => true,
                'features' => [
                    "Tecnología de audio inteligente IMPRES",
                    "Jack de audio de 3.5mm para audífono encubierto",
                    "Pinza giratoria de acero inoxidable 360°"
                ],
                'specs' => [
                    ["label" => "Conector", "value" => "Multipin Motorola DGP"],
                    ["label" => "Protección", "value" => "IP54"]
                ],
                'in_the_box' => ["Micrófono PMMN4025", "Manual de accesorios"]
            ],
            [
                'sku' => 'BAT-PMNN4491',
                'name' => 'Batería Impres Li-Ion 2900mAh',
                'description' => 'Batería de ultra alta capacidad IP68 para radios Motorola DGP 8000/5000.',
                'price' => 430000.00,
                'original_price' => 480000.00,
                'category' => 'Accesorios',
                'brand' => 'Motorola',
                'in_stock' => true,
                'features' => [
                    "Capacidad de 2900 mAh real",
                    "Tecnología de gestión automatizada IMPRES",
                    "Resistencia al agua certificada IP68"
                ],
                'specs' => [
                    ["label" => "Química", "value" => "Litio-Ion"],
                    ["label" => "Rendimiento", "value" => "Hasta 28 horas"]
                ],
                'in_the_box' => ["Batería PMNN4491", "Clip posterior para cinturón"]
            ],
            [
                'sku' => 'ANT-UHF-FIBER',
                'name' => 'Antena Base Omnidireccional Fibra de Vidrio',
                'description' => 'Antena de alta ganancia 6.5 dBi para estación base o repetidores UHF.',
                'price' => 645000.00,
                'original_price' => 710000.00,
                'category' => 'Antenas',
                'brand' => 'TX Pro',
                'in_stock' => true,
                'features' => [
                    "Construcción en fibra de vidrio resistente a intemperie",
                    "Resistencia a vientos de hasta 200 km/h",
                    "Conector N-Hembra de baja pérdida"
                ],
                'specs' => [
                    ["label" => "Ganancia", "value" => "6.5 dBi"],
                    ["label" => "Rango", "value" => "450 - 470 MHz"]
                ],
                'in_the_box' => ["Antena Fibra", "Abrazaderas de montaje en mástil"]
            ],
            [
                'sku' => 'ANT-YAGI-UHF',
                'name' => 'Antena Yagi Directiva 12 dBi',
                'description' => 'Antena direccional de 5 elementos para enlaces de punto a punto en banda UHF.',
                'price' => 510000.00,
                'original_price' => 580000.00,
                'category' => 'Antenas',
                'brand' => 'TX Pro',
                'in_stock' => true,
                'features' => [
                    "Construida en aluminio anodizado anticorrosivo",
                    "Patrón de radiación highly enfocado",
                    "Fácil ajuste de polarización vertical u horizontal"
                ],
                'specs' => [
                    ["label" => "Ganancia", "value" => "12 dBi"],
                    ["label" => "Elementos", "value" => "5 elementos"]
                ],
                'in_the_box' => ["Antena Yagi", "Herrajes de fijación"]
            ],
            [
                'sku' => 'MOT-DEP450',
                'name' => 'Motorola DEP 450 Digital',
                'description' => 'El radio portátil estándar de la industria para trabajo rudo en construcción y manufactura.',
                'price' => 1290000.00,
                'original_price' => 1410000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Motorola',
                'in_stock' => true,
                'features' => [
                    "Operación en modo dual analógico y DMR digital",
                    "Robusto diseño resistente a caídas e impactos",
                    "Calidad de voz clara con cancelación de fondo"
                ],
                'specs' => [
                    ["label" => "Canales", "value" => "32 canales"],
                    ["label" => "Potencia", "value" => "4W UHF / 5W VHF"]
                ],
                'in_the_box' => ["Radio DEP 450", "Batería 2250mAh", "Cargador rápido", "Antena"]
            ],
            [
                'sku' => 'HYT-BP562',
                'name' => 'Hytera BP562 DMR Comercial',
                'description' => 'Radio comercial ligero con altavoz optimizado y gran alcance con antena de alta eficiencia.',
                'price' => 1060000.00,
                'original_price' => 1180000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Hytera',
                'in_stock' => true,
                'features' => [
                    "Altavoz incorporado de 3W con tecnología de supresión",
                    "Carga rápida USB Type-C directa en el radio",
                    "Alcance extendido gracias a módulo receptor mejorado"
                ],
                'specs' => [
                    ["label" => "Pantalla", "value" => "Monocromática 1.77''"],
                    ["label" => "Canales", "value" => "128 canales"]
                ],
                'in_the_box' => ["Radio BP562", "Batería 1500mAh", "Adaptador USB-C", "Clip"]
            ],
            [
                'sku' => 'KEN-TK3000',
                'name' => 'Kenwood TK-3000K UHF Analógico',
                'description' => 'Radio compacto analógico extra resistente de operación intuitiva y bajo mantenimiento.',
                'price' => 780000.00,
                'original_price' => 860000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Kenwood',
                'in_stock' => true,
                'features' => [
                    "Diseño ergonómico ultra liviano de solo 203 gramos",
                    "Exploración de canales (Scan) con prioridad",
                    "Función VOX lista para manos libres"
                ],
                'specs' => [
                    ["label" => "Canales", "value" => "16 canales"],
                    ["label" => "Norma", "value" => "IP54 / MIL-STD-810"]
                ],
                'in_the_box' => ["Radio TK-3000", "Batería Li-Ion", "Cargador rápido KSC-35S", "Antena"]
            ],
            [
                'sku' => 'TXP-500W-PWR',
                'name' => 'Fuente de Poder Regulada 30A 13.8V',
                'description' => 'Fuente de alimentación conmutada para estaciones base y radios móviles vehiculares.',
                'price' => 590000.00,
                'original_price' => 650000.00,
                'category' => 'Accesorios',
                'brand' => 'TX Pro',
                'in_stock' => true,
                'features' => [
                    "Salida estable de 13.8 VCD a 30 Amperios pico",
                    "Protección contra cortocircuito, sobrecarga y sobrevoltaje",
                    "Instrumento de medición analógico para voltaje y corriente"
                ],
                'specs' => [
                    ["label" => "Voltaje Entrada", "value" => "110V / 220V AC"],
                    ["label" => "Amperaje", "value" => "25A continuo / 30A pico"]
                ],
                'in_the_box' => ["Fuente de poder 30A", "Cable de alimentación AC"]
            ],
            [
                'sku' => 'ICO-M25',
                'name' => 'Icom IC-M25 Radio Marino Flotante',
                'description' => 'Radio VHF portátil banda marina impermeable IPX7 que flota y destella en el agua.',
                'price' => 930000.00,
                'original_price' => 1020000.00,
                'category' => 'Radios Portátiles',
                'brand' => 'Icom',
                'in_stock' => true,
                'features' => [
                    "Flotante con luz LED roja de destello automático",
                    "Resistencia al agua sumergible clase IPX7",
                    "Carga rápida vía puerto estándar Micro-USB",
                    "Potencia de audio limpia de 550mW"
                ],
                'specs' => [
                    ["label" => "Banda", "value" => "VHF Marina (156-163 MHz)"],
                    ["label" => "Batería", "value" => "Litio-Ion 1500 mAh integrados"]
                ],
                'in_the_box' => ["Radio IC-M25", "Cargador USB", "Clip de cinturón", "Antena marina"]
            ],
            [
                'sku' => 'DUP-UHF-50W',
                'name' => 'Duplexor UHF para Repetidor 50W',
                'description' => 'Duplexor de cavidades de alta calidad para operación de repetidor con una sola antena.',
                'price' => 1240000.00,
                'original_price' => 1380000.00,
                'category' => 'Accesorios',
                'brand' => 'TX Pro',
                'in_stock' => true,
                'features' => [
                    "6 cavidades de resonancia de alta estabilidad térmica",
                    "Aislamiento de más de 75 dB entre TX y RX",
                    "Conectores N-Hembra de precisión"
                ],
                'specs' => [
                    ["label" => "Potencia Máxima", "value" => "50 Watts"],
                    ["label" => "Separación Frecuencia", "value" => "5 MHz a 10 MHz"]
                ],
                'in_the_box' => ["Duplexor 6 Cavidades", "Certificado de calibración de fábrica"]
            ],
            [
                'sku' => 'CAB-RG213-50M',
                'name' => 'Bobina Cable Coaxial RG-213 50 Metros',
                'description' => 'Cable coaxial militar de baja pérdida para instalaciones profesionales de radiofrecuencia.',
                'price' => 730000.00,
                'original_price' => 810000.00,
                'category' => 'Accesorios',
                'brand' => 'TX Pro',
                'in_stock' => true,
                'features' => [
                    "Conductor central de cobre trenzado de alta pureza",
                    "Malla de blindaje de cobre al 95%",
                    "Chaqueta exterior de PVC resistente a los rayos UV"
                ],
                'specs' => [
                    ["label" => "Impedancia", "value" => "50 Ohms"],
                    ["label" => "Longitud", "value" => "50 Metros"]
                ],
                'in_the_box' => ["Rollo de cable 50m RG-213"]
            ]
        ];

        Product::truncate();

        foreach ($products as $p) {
            Product::create($p);
        }
    }
}
