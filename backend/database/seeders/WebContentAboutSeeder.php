<?php

namespace Database\Seeders;

use App\Models\WebContent;
use Illuminate\Database\Seeder;

class WebContentAboutSeeder extends Seeder
{
    public function run(): void
    {
        $aboutContents = [
            [
                'page' => 'about',
                'key' => 'hero_title',
                'type' => 'text',
                'value' => 'La voz detrás de las',
            ],
            [
                'page' => 'about',
                'key' => 'hero_title_highlight',
                'type' => 'text',
                'value' => 'operaciones críticas.',
            ],
            [
                'page' => 'about',
                'key' => 'hero_description',
                'type' => 'textarea',
                'value' => 'En Dygytel unimos tecnología de vanguardia, ingeniería de precisión y compromiso humano para garantizar comunicaciones ininterrumpidas en los entornos más desafiantes de Colombia.',
            ],
            [
                'page' => 'about',
                'key' => 'hero_impact_label',
                'type' => 'text',
                'value' => 'NUESTRO IMPACTO EN CIFRAS',
            ],
            [
                'page' => 'about',
                'key' => 'cifra1_val',
                'type' => 'text',
                'value' => '+50,000',
            ],
            [
                'page' => 'about',
                'key' => 'cifra1_title',
                'type' => 'text',
                'value' => 'Radios activos en campo',
            ],
            [
                'page' => 'about',
                'key' => 'cifra2_val',
                'type' => 'text',
                'value' => '+500',
            ],
            [
                'page' => 'about',
                'key' => 'cifra2_title',
                'type' => 'text',
                'value' => 'Proyectos de telecomunicaciones ejecutados',
            ],
            [
                'page' => 'about',
                'key' => 'cifra3_val',
                'type' => 'text',
                'value' => '99.9%',
            ],
            [
                'page' => 'about',
                'key' => 'cifra3_title',
                'type' => 'text',
                'value' => 'Disponibilidad garantizada en redes contratadas',
            ],
            [
                'page' => 'about',
                'key' => 'story_label',
                'type' => 'text',
                'value' => 'NUESTRA HISTORIA',
            ],
            [
                'page' => 'about',
                'key' => 'story_title',
                'type' => 'text',
                'value' => 'Nacidos para resolver donde la señal celular',
            ],
            [
                'page' => 'about',
                'key' => 'story_title_highlight',
                'type' => 'text',
                'value' => 'no llega.',
            ],
            [
                'page' => 'about',
                'key' => 'story_desc',
                'type' => 'textarea',
                'value' => "Dygytel nació con un objetivo claro: abastecer de infraestructura de radiocomunicación confiable a industrias estratégicas como la minería, seguridad privada, logística, construcción y energía.\n\nDonde las redes celulares colapsan o simplemente no tienen cobertura, nuestras soluciones de radiofrecuencia analógica y digital (DMR / NXDN) aseguran un enlace instantáneo al presionar un botón (Push-To-Talk).",
            ],
            [
                'page' => 'about',
                'key' => 'certifications_label',
                'type' => 'text',
                'value' => 'Certificaciones e Integraciones Oficiales',
            ],
            [
                'page' => 'about',
                'key' => 'certifications',
                'type' => 'json',
                'value' => json_encode([
                    [
                        'name' => 'Motorola Solutions Partner',
                        'level' => 'Platinum Authorized Dealer',
                    ],
                    [
                        'name' => 'Hytera Communications',
                        'level' => 'Certified System Integrator',
                    ],
                    [
                        'name' => 'Instituto Federal de Telecomunicaciones',
                        'level' => 'Perito Registrado IFT',
                    ],
                    [
                        'name' => 'Norma ISO 9001:2015',
                        'level' => 'Calidad en Gestión y Servicio',
                    ],
                ]),
            ],
            [
                'page' => 'about',
                'key' => 'values_label',
                'type' => 'text',
                'value' => 'NUESTROS PILARES',
            ],
            [
                'page' => 'about',
                'key' => 'values_title',
                'type' => 'text',
                'value' => 'Valores que guían nuestra ingeniería',
            ],
            [
                'page' => 'about',
                'key' => 'values_list',
                'type' => 'json',
                'value' => json_encode([
                    [
                        'title' => 'Fiabilidad Absoluta',
                        'desc' => 'Sabemos que de la señal depende la vida y productividad de tu personal. No aceptamos margen de error en nuestras instalaciones.',
                        'icon' => 'shield',
                    ],
                    [
                        'title' => 'Rigor Técnico',
                        'desc' => 'Cada frecuencia, cavidad y antena es calibrada con instrumental certificado bajo normas estrictas de telecomunicación.',
                        'icon' => 'cog',
                    ],
                    [
                        'title' => 'Respuesta Inmediata',
                        'desc' => 'Frente a contingencias en la red, nuestro equipo de guardia técnica está preparado para movilizarse en tiempo récord.',
                        'icon' => 'lightning',
                    ],
                    [
                        'title' => 'Transparencia Regulatoria',
                        'desc' => 'Garantizamos que el 100% de los proyectos cumplan estrictamente con las disposiciones del espectro fijadas por el IFT.',
                        'icon' => 'check',
                    ],
                ]),
            ],
            [
                'page' => 'about',
                'key' => 'cta_label',
                'type' => 'text',
                'value' => '¿TRABAJAMOS JUNTOS?',
            ],
            [
                'page' => 'about',
                'key' => 'cta_title',
                'type' => 'text',
                'value' => 'Diseñemos la red que tu empresa necesita.',
            ],
            [
                'page' => 'about',
                'key' => 'cta_desc',
                'type' => 'textarea',
                'value' => 'Habla con uno de nuestros especialistas técnicos para analizar la cobertura y requerimientos de tu operación.',
            ],
            [
                'page' => 'about',
                'key' => 'cta_btn_text',
                'type' => 'text',
                'value' => 'Contactar Ingeniero →',
            ],
            [
                'page' => 'about',
                'key' => 'cta_btn_link',
                'type' => 'text',
                'value' => '/#contacto',
            ],
        ];

        foreach ($aboutContents as $content) {
            WebContent::updateOrCreate(
                ['page' => $content['page'], 'key' => $content['key']],
                ['type' => $content['type'], 'value' => $content['value']]
            );
        }
    }
}
