<?php

namespace Database\Seeders;

use App\Models\WebContent;
use Illuminate\Database\Seeder;

class WebContentServicesSeeder extends Seeder
{
    public function run(): void
    {
        $servicesContents = [
            [
                'page' => 'services',
                'key' => 'hero_title',
                'type' => 'text',
                'value' => 'Soluciones de',
            ],
            [
                'page' => 'services',
                'key' => 'hero_title_highlight',
                'type' => 'text',
                'value' => 'comunicación crítica.',
            ],
            [
                'page' => 'services',
                'key' => 'hero_description',
                'type' => 'textarea',
                'value' => 'Diseñamos, instalamos y mantenemos redes de radiofrecuencia de alto desempeño para operaciones donde la falla de señal no es una opción.',
            ],
            [
                'page' => 'services',
                'key' => 'hero_btn1_text',
                'type' => 'text',
                'value' => 'Explorar Servicios ↓',
            ],
            [
                'page' => 'services',
                'key' => 'hero_btn2_text',
                'type' => 'text',
                'value' => 'Solicitar Diagnóstico Técnico',
            ],
            [
                'page' => 'services',
                'key' => 'hero_btn2_link',
                'type' => 'text',
                'value' => '/#contacto',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric1_val',
                'type' => 'text',
                'value' => '99.9%',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric1_title',
                'type' => 'text',
                'value' => 'Disponibilidad de Red',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric2_val',
                'type' => 'text',
                'value' => '24/7',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric2_title',
                'type' => 'text',
                'value' => 'Soporte de Emergencia',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric3_val',
                'type' => 'text',
                'value' => '500+',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric3_title',
                'type' => 'text',
                'value' => 'Torres Instaladas',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric4_val',
                'type' => 'text',
                'value' => '100%',
            ],
            [
                'page' => 'services',
                'key' => 'hero_metric4_title',
                'type' => 'text',
                'value' => 'Cumplimiento Legal',
            ],
            [
                'page' => 'services',
                'key' => 'services_catalog_title',
                'type' => 'text',
                'value' => 'Catálogo de Ingeniería',
            ],
            [
                'page' => 'services',
                'key' => 'services_catalog_desc',
                'type' => 'textarea',
                'value' => 'Desde la planificación técnica inicial hasta la póliza de soporte de emergencia.',
            ],
            [
                'page' => 'services',
                'key' => 'services_list',
                'type' => 'json',
                'value' => json_encode([
                    [
                        'id' => 'instalacion',
                        'num' => '01',
                        'title' => 'Instalación y Configuración de Redes RF',
                        'shortDesc' => 'Montaje de torres, antenas y sistemas repetidores con estándares internacionales de seguridad.',
                        'longDesc' => 'Desplegamos infraestructura de comunicación robusta desde cero. Realizamos el izaje de torres, instalación de sistemas radiantes, cableado heliax de bajas pérdidas y programación de frecuencias en terminales móviles y portátiles.',
                        'icon' => 'tower',
                        'is_featured' => true,
                        'details' => [
                            ['item' => 'Montaje de torres arriostradas y autosoportadas'],
                            ['item' => 'Calibración de duplexores y cavidades de filtro'],
                            ['item' => 'Programación masiva de canales y grupos de habla (Talkgroups)'],
                            ['item' => 'Pruebas de ROE (VSWR) y potencia reflejada'],
                        ],
                    ],
                    [
                        'id' => 'mantenimiento',
                        'num' => '02',
                        'title' => 'Mantenimiento Preventivo y Correctivo',
                        'shortDesc' => 'Calibración de frecuencias y revisión técnica periódica para asegurar disponibilidad del 99.9%.',
                        'longDesc' => 'Garantizamos que tu red nunca deje de transmitir. Nuestro laboratorio móvil cuenta con analizadores de servicio de monitoreo de espectro para detectar degradaciones antes de que se conviertan en fallas operativas.',
                        'icon' => 'wrench',
                        'is_featured' => false,
                        'details' => [
                            ['item' => 'Revisión y reemplazo de baterías y fuentes de poder'],
                            ['item' => 'Ajuste fino de desviación y potencia RF'],
                            ['item' => 'Limpieza ultrasónica e impermeabilización de chasis'],
                            ['item' => 'Contratos de mantenimiento póliza anual con SLA garantizado'],
                        ],
                    ],
                    [
                        'id' => 'licencias',
                        'num' => '03',
                        'title' => 'Gestión y Tramitación de Licencias IFT',
                        'shortDesc' => 'Asesoría legal y técnica para el cumplimiento de normativas del espectro radioeléctrico ante el IFT.',
                        'longDesc' => 'Evita sanciones y despojos de frecuencia. Gestionamos todo el proceso técnico y legal ante la entidad reguladora para la asignación y renovación de concesiones de espectro privado.',
                        'icon' => 'license',
                        'details' => [
                            ['item' => 'Elaboración de carpetas de memoria técnica de ingeniería'],
                            ['item' => 'Estudios de no interferencia espectral'],
                            ['item' => 'Defensa y atención de visitas de inspección'],
                            ['item' => 'Renovación oportuna de títulos de concesión'],
                        ],
                    ],
                    [
                        'id' => 'cobertura',
                        'num' => '04',
                        'title' => 'Estudios de Cobertura RF y Simulación 3D',
                        'shortDesc' => 'Modelado topográfico computarizado para predecir con exactitud la señal en zonas difíciles.',
                        'longDesc' => 'Utilizamos software de simulación propagativa de radiofrecuencia combinado con mediciones reales en campo para garantizar 100% de cobertura en minas, túneles o naves industriales.',
                        'icon' => 'radar',
                        'details' => [
                            ['item' => 'Mapas de calor de intensidad de señal (RSSI)'],
                            ['item' => 'Análisis de pérdidas por obstáculos y relieve topográfico'],
                            ['item' => 'Optimización de ubicación de repetidores'],
                            ['item' => 'Auditorías de cobertura Drive Test'],
                        ],
                    ],
                    [
                        'id' => 'renta',
                        'num' => '05',
                        'title' => 'Renta de Equipos de Radiocomunicación',
                        'shortDesc' => 'Alquiler de flotas temporales de portátiles y móviles para eventos, obras y operaciones de temporada.',
                        'longDesc' => 'Ponemos a tu disposición lotes de radios portátiles digitales y analógicos listos para operar, con baterías cargadas, accesorios individuales y repetidores portátiles de fácil despliegue.',
                        'icon' => 'truck',
                        'details' => [
                            ['item' => 'Rentas por día, semana, mes o proyecto especial'],
                            ['item' => 'Entrega con baterías de repuesto y cargadores múltiples'],
                            ['item' => 'Sustitución inmediata de unidades en caso de avería'],
                            ['item' => 'Configuración personalizada de canales según requerimiento'],
                        ],
                    ],
                    [
                        'id' => 'troncalizados',
                        'num' => '06',
                        'title' => 'Redes Troncalizadas Multi-Sitio',
                        'shortDesc' => 'Diseño e integración de sistemas DMR Tier III, NXDN y P25 de misión crítica.',
                        'longDesc' => 'Para operaciones gubernamentales, puertos o complejos industriales extensos, diseñamos redes trunking que gestionan eficientemente miles de usuarios simultáneos con despacho centralizado y GPS.',
                        'icon' => 'network',
                        'details' => [
                            ['item' => 'Consolas de despacho y grabación de voz digital'],
                            ['item' => 'Integración de geolocalización GPS en mapas GIS'],
                            ['item' => 'Interconexión con telefonía IP (PABX / SIP)'],
                            ['item' => 'Encriptación avanzada de extremo a extremo'],
                        ],
                    ],
                ]),
            ],
            [
                'page' => 'services',
                'key' => 'quote_btn_text',
                'type' => 'text',
                'value' => 'Solicitar Cotización →',
            ],
            [
                'page' => 'services',
                'key' => 'quote_btn_link',
                'type' => 'text',
                'value' => '/#contacto',
            ],
            [
                'page' => 'services',
                'key' => 'wa_btn_text',
                'type' => 'text',
                'value' => 'WhatsApp Técnico',
            ],
            [
                'page' => 'services',
                'key' => 'wa_btn_link',
                'type' => 'text',
                'value' => 'https://api.whatsapp.com/send/?phone=573193053916',
            ],
            [
                'page' => 'services',
                'key' => 'faqs_title',
                'type' => 'text',
                'value' => 'Dudas sobre nuestros servicios',
            ],
            [
                'page' => 'services',
                'key' => 'faqs',
                'type' => 'json',
                'value' => json_encode([
                    [
                        'q' => '¿En qué zonas geográficas brindan servicio técnico?',
                        'a' => 'Brindamos cobertura a nivel nacional en todo Colombia. Contamos con ingenieros de campo preparados para trasladarse a parques industriales, zonas mineras, puertos y obras remotas.',
                    ],
                    [
                        'q' => '¿Cuánto tiempo toma tramitar una concesión de frecuencia?',
                        'a' => 'El trámite regular suele tomar entre 4 y 8 meses dependiendo de la banda y región. Sin embargo, en Dygytel podemos apoyarte con opciones de arrendamiento temporal de frecuencias autorizadas mientras concluye tu trámite.',
                    ],
                    [
                        'q' => '¿Qué incluye una póliza de mantenimiento preventivo?',
                        'a' => 'Incluye visitas periódicas programadas (trimestrales o semestrales), revisión de potencia de salida, limpieza técnica, calibración de frecuencias, diagnóstico de baterías, reemplazo de partes dañadas e informe técnico detallado.',
                    ],
                    [
                        'q' => '¿Pueden integrar radios de distintas marcas en una misma red?',
                        'a' => 'Sí. Si los equipos utilizan estándares abiertos como DMR (Digital Mobile Radio) o NXDN, es totalmente posible interoperar marcas como Motorola, Hytera, Kenwood e Icom en la misma infraestructura.',
                    ],
                ]),
            ],
            [
                'page' => 'services',
                'key' => 'cta_badge',
                'type' => 'text',
                'value' => 'SOPORTE TÉCNICO INMEDIATO',
            ],
            [
                'page' => 'services',
                'key' => 'cta_title',
                'type' => 'text',
                'value' => '¿Falla crítica en tu red de comunicaciones?',
            ],
            [
                'page' => 'services',
                'key' => 'cta_desc',
                'type' => 'textarea',
                'value' => 'Nuestros técnicos de guardia responden solicitudes de emergencia las 24 horas del día.',
            ],
            [
                'page' => 'services',
                'key' => 'cta_btn_text',
                'type' => 'text',
                'value' => 'Atención de Emergencia →',
            ],
            [
                'page' => 'services',
                'key' => 'cta_btn_link',
                'type' => 'text',
                'value' => '/#contacto',
            ],
        ];

        foreach ($servicesContents as $content) {
            WebContent::updateOrCreate(
                ['page' => $content['page'], 'key' => $content['key']],
                ['type' => $content['type'], 'value' => $content['value']]
            );
        }
    }
}
