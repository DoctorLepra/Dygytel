<?php

namespace Database\Seeders;

use App\Models\WebContent;
use Illuminate\Database\Seeder;

class WebContentSeeder extends Seeder
{
    public function run(): void
    {
        $homeContents = [
            [
                'page' => 'home',
                'key' => 'hero_title',
                'type' => 'text',
                'value' => 'Comunicación crítica sin',
            ],
            [
                'page' => 'home',
                'key' => 'hero_title_highlight',
                'type' => 'text',
                'value' => 'interferencias.',
            ],
            [
                'page' => 'home',
                'key' => 'hero_description',
                'type' => 'textarea',
                'value' => 'Tu tienda especializada en radios de telecomunicación profesional. Equipos, accesorios y servicio técnico para operaciones donde la conexión no puede fallar.',
            ],
            [
                'page' => 'home',
                'key' => 'hero_button_text',
                'type' => 'text',
                'value' => 'Asesoría técnica',
            ],
            [
                'page' => 'home',
                'key' => 'hero_button_link',
                'type' => 'text',
                'value' => 'https://api.whatsapp.com/send/?phone=573193053916&text=Hola%20quisiera%20recibir%20asesor%C3%ADa%20t%C3%A9cnica',
            ],
            [
                'page' => 'home',
                'key' => 'hero_image',
                'type' => 'image',
                'value' => null,
            ],
            [
                'page' => 'home',
                'key' => 'hero_badge_1',
                'type' => 'text',
                'value' => 'Terminal Serie-X',
            ],
            [
                'page' => 'home',
                'key' => 'hero_badge_2',
                'type' => 'text',
                'value' => '462.5625 MHz',
            ],
            [
                'page' => 'home',
                'key' => 'hero_badge_3_label',
                'type' => 'text',
                'value' => 'Alcance',
            ],
            [
                'page' => 'home',
                'key' => 'hero_badge_3_val',
                'type' => 'text',
                'value' => '12 km',
            ],
            [
                'page' => 'home',
                'key' => 'hero_badge_4_label',
                'type' => 'text',
                'value' => 'Batería',
            ],
            [
                'page' => 'home',
                'key' => 'hero_badge_4_val',
                'type' => 'text',
                'value' => '24 h',
            ],
            [
                'page' => 'home',
                'key' => 'metric_1_val',
                'type' => 'text',
                'value' => '15+',
            ],
            [
                'page' => 'home',
                'key' => 'metric_1_label',
                'type' => 'text',
                'value' => 'Años de experiencia',
            ],
            [
                'page' => 'home',
                'key' => 'metric_2_val',
                'type' => 'text',
                'value' => '99.9%',
            ],
            [
                'page' => 'home',
                'key' => 'metric_2_label',
                'type' => 'text',
                'value' => 'Uptime garantizado',
            ],
            [
                'page' => 'home',
                'key' => 'metric_3_val',
                'type' => 'text',
                'value' => '24/7',
            ],
            [
                'page' => 'home',
                'key' => 'metric_3_label',
                'type' => 'text',
                'value' => 'Soporte técnico',
            ],
            [
                'page' => 'home',
                'key' => 'about_text',
                'type' => 'textarea',
                'value' => 'En Dygytel, no solo vendemos equipos: conectamos equipos de trabajo en los momentos donde el fallo no es una opción. Más de 15 años integrando soluciones de radiocomunicación donde la señal celular no llega.',
            ],
            [
                'page' => 'home',
                'key' => 'client_logos',
                'type' => 'image',
                'value' => json_encode([]),
            ],
            [
                'page' => 'home',
                'key' => 'catalog_title',
                'type' => 'text',
                'value' => 'Equipamiento destacado',
            ],
            [
                'page' => 'home',
                'key' => 'catalog_description',
                'type' => 'textarea',
                'value' => 'Selección curada del hardware que más recomiendan nuestros ingenieros.',
            ],
            [
                'page' => 'home',
                'key' => 'services_title',
                'type' => 'text',
                'value' => 'Soluciones de ingeniería',
            ],
            [
                'page' => 'home',
                'key' => 'services_description',
                'type' => 'textarea',
                'value' => 'Instalación, mantenimiento y gestión de espectro para operaciones 24/7.',
            ],
            [
                'page' => 'home',
                'key' => 'featured_services',
                'type' => 'json',
                'value' => json_encode([
                    [
                        'n' => '01',
                        'title' => 'Instalación y Configuración',
                        'description' => 'Montaje de torres, antenas y sistemas de repetidoras con estándares internacionales de seguridad.',
                    ],
                    [
                        'n' => '02',
                        'title' => 'Mantenimiento Preventivo',
                        'description' => 'Calibración de frecuencias y revisión técnica periódica para asegurar tiempo de actividad del 99.9%.',
                    ],
                    [
                        'n' => '03',
                        'title' => 'Gestión de Licencias',
                        'description' => 'Asesoría legal y técnica para el cumplimiento de normativas del espectro radioeléctrico.',
                    ],
                ]),
            ],
            [
                'page' => 'home',
                'key' => 'contact_title',
                'type' => 'text',
                'value' => '¿Listo para mejorar tu infraestructura?',
            ],
            [
                'page' => 'home',
                'key' => 'contact_description',
                'type' => 'textarea',
                'value' => 'Cuéntanos sobre tu operación y un especialista te contactará en menos de 24 horas con una propuesta técnica.',
            ],
            [
                'page' => 'home',
                'key' => 'contact_phone',
                'type' => 'text',
                'value' => '+57 319 305 3916',
            ],
            [
                'page' => 'home',
                'key' => 'contact_email',
                'type' => 'text',
                'value' => 'contacto@dygytel.com',
            ],
            [
                'page' => 'home',
                'key' => 'contact_address',
                'type' => 'text',
                'value' => 'Bogotá, Colombia',
            ],
        ];

        foreach ($homeContents as $content) {
            WebContent::updateOrCreate(
                ['page' => $content['page'], 'key' => $content['key']],
                ['type' => $content['type'], 'value' => $content['value']]
            );
        }
    }
}
