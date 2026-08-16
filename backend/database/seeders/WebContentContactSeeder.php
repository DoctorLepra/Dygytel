<?php

namespace Database\Seeders;

use App\Models\WebContent;
use Illuminate\Database\Seeder;

class WebContentContactSeeder extends Seeder
{
    public function run(): void
    {
        $contactContents = [
            [
                'page' => 'contact',
                'key' => 'hero_title',
                'type' => 'text',
                'value' => 'Hablemos de tus proyectos de',
            ],
            [
                'page' => 'contact',
                'key' => 'hero_title_highlight',
                'type' => 'text',
                'value' => 'comunicación crítica.',
            ],
            [
                'page' => 'contact',
                'key' => 'hero_description',
                'type' => 'textarea',
                'value' => 'Completa el formulario o ponte en contacto directo con nuestra mesa de ingeniería para evaluar la mejor solución para tu empresa.',
            ],
            [
                'page' => 'contact',
                'key' => 'contact_items',
                'type' => 'json',
                'value' => json_encode([
                    [
                        'label' => 'Atención Telefónica',
                        'text' => '+57 319 305 3916',
                        'sublabel' => 'Línea comercial e informes',
                        'link' => 'tel:+573193053916',
                        'icon' => 'phone',
                    ],
                    [
                        'label' => 'WhatsApp Técnico Directo',
                        'text' => '+57 319 305 3916',
                        'sublabel' => 'Atención inmediata por WhatsApp',
                        'link' => 'https://api.whatsapp.com/send/?phone=573193053916',
                        'icon' => 'whatsapp',
                    ],
                    [
                        'label' => 'Correo de Proyectos',
                        'text' => 'ventas@dygytel.com',
                        'sublabel' => 'Respuesta en menos de 2h',
                        'link' => 'mailto:ventas@dygytel.com',
                        'icon' => 'mail',
                    ],
                    [
                        'label' => 'Oficinas Centrales & Laboratorio',
                        'text' => 'Carrera 22C # 46 – 35 | Bogotá, Colombia',
                        'sublabel' => 'Horario Comercial: Lun - Vie (8:00 - 18:00 hrs)',
                        'link' => '',
                        'icon' => 'map',
                    ],
                ]),
            ],
        ];

        foreach ($contactContents as $content) {
            WebContent::updateOrCreate(
                ['page' => $content['page'], 'key' => $content['key']],
                ['type' => $content['type'], 'value' => $content['value']]
            );
        }
    }
}
