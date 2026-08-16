<?php

namespace App\Filament\Pages;

use App\Models\WebContent;
use BackedEnum;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ManageServicesPage extends Page
{
    protected static ?string $navigationLabel = 'Vista Servicios';
    protected static ?string $title = 'CMS — Gestión de Vista Servicios';
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-wrench-screwdriver';
    protected static ?int $navigationSort = 2;

    protected string $view = 'filament.pages.manage-services-page';

    public ?array $data = [];

    public function mount(): void
    {
        $contents = WebContent::where('page', 'services')->pluck('value', 'key')->toArray();

        // Parse json fields for form state
        if (isset($contents['services_list']) && is_string($contents['services_list'])) {
            $contents['services_list'] = json_decode($contents['services_list'], true) ?? [];
        }
        if (isset($contents['faqs']) && is_string($contents['faqs'])) {
            $contents['faqs'] = json_decode($contents['faqs'], true) ?? [];
        }

        $this->form->fill($contents);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->statePath('data')
            ->components([
                Tabs::make('ServicesSections')
                    ->tabs([
                        Tab::make('Hero Section')
                            ->icon('heroicon-o-rocket-launch')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('hero_title')
                                            ->label('Título Principal del Hero')
                                            ->placeholder('Ej: Soluciones de')
                                            ->required(),
                                        TextInput::make('hero_title_highlight')
                                            ->label('Texto Destacado (Gradiente Azul/Cian)')
                                            ->placeholder('Ej: comunicación crítica.')
                                            ->required(),
                                    ]),
                                Textarea::make('hero_description')
                                    ->label('Descripción del Hero')
                                    ->rows(3)
                                    ->columnSpanFull(),
                                Grid::make(3)
                                    ->schema([
                                        TextInput::make('hero_btn1_text')
                                            ->label('Texto Botón 1 (Explorar)')
                                            ->required(),
                                        TextInput::make('hero_btn2_text')
                                            ->label('Texto Botón 2 (Diagnóstico)')
                                            ->required(),
                                        TextInput::make('hero_btn2_link')
                                            ->label('Enlace Botón 2')
                                            ->required(),
                                    ]),
                                Section::make('Métricas del Hero (4 Tarjetas)')
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('hero_metric1_val')
                                                    ->label('Métrica 1 — Valor (ej: 99.9%)'),
                                                TextInput::make('hero_metric1_title')
                                                    ->label('Métrica 1 — Título (ej: Disponibilidad de Red)'),

                                                TextInput::make('hero_metric2_val')
                                                    ->label('Métrica 2 — Valor (ej: 24/7)'),
                                                TextInput::make('hero_metric2_title')
                                                    ->label('Métrica 2 — Título (ej: Soporte de Emergencia)'),

                                                TextInput::make('hero_metric3_val')
                                                    ->label('Métrica 3 — Valor (ej: 500+)'),
                                                TextInput::make('hero_metric3_title')
                                                    ->label('Métrica 3 — Título (ej: Torres Instaladas)'),

                                                TextInput::make('hero_metric4_val')
                                                    ->label('Métrica 4 — Valor (ej: 100%)'),
                                                TextInput::make('hero_metric4_title')
                                                    ->label('Métrica 4 — Título (ej: Cumplimiento Legal)'),
                                            ]),
                                    ]),
                            ]),

                        Tab::make('Catálogo de Servicios')
                            ->icon('heroicon-o-wrench-screwdriver')
                            ->schema([
                                TextInput::make('services_catalog_title')
                                    ->label('Título de la Sección Catálogo')
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('services_catalog_desc')
                                    ->label('Descripción de la Sección Catálogo')
                                    ->rows(2)
                                    ->columnSpanFull(),
                                Repeater::make('services_list')
                                    ->label('Listado de Servicios Ofrecidos')
                                    ->itemLabel(fn (array $state): ?string => isset($state['num'], $state['title'])
                                        ? ((!empty($state['is_featured']))
                                            ? "⭐ [{$state['num']}] {$state['title']} (DESTACADO)"
                                            : "[{$state['num']}] {$state['title']}")
                                        : ($state['title'] ?? null))
                                    ->collapsible()
                                    ->collapsed()
                                    ->schema([
                                        Toggle::make('is_featured')
                                            ->label('Marcar como Servicio Destacado ⭐')
                                            ->onIcon('heroicon-s-star')
                                            ->offIcon('heroicon-o-star')
                                            ->onColor('warning')
                                            ->offColor('gray')
                                            ->helperText('Solo 1 servicio puede estar activo como destacado. Si activas este, será el presentado en el visor destacado.')
                                            ->columnSpanFull(),
                                        Grid::make(3)
                                            ->schema([
                                                TextInput::make('num')
                                                    ->label('Número (ej: 01)')
                                                    ->required(),
                                                TextInput::make('title')
                                                    ->label('Título del Servicio')
                                                    ->required()
                                                    ->columnSpan(2),
                                            ]),
                                        Select::make('icon')
                                            ->label('Icono Representativo')
                                            ->options([
                                                'tower' => '🗼 Torre / Antena / Transmisión RF',
                                                'wrench' => '🔧 Herramienta / Mantenimiento Técnico',
                                                'license' => '📜 Licencia / Normativa IFT / Documentación',
                                                'radar' => '📡 Cobertura RF / Radar / Simulación 3D',
                                                'truck' => '🚚 Renta Equipos / Transporte / Logística',
                                                'network' => '🌐 Red Troncalizada Multi-Sitio / Trunking',
                                                'shield' => '🛡️ Seguridad / Encriptación / Misión Crítica',
                                                'headset' => '🎧 Soporte Técnico / Despacho Centralizado',
                                                'battery' => '🔋 Batería / Energía / Autonomía',
                                                'signal' => '📶 Señal / Frecuencia / Cobertura Mobile',
                                            ])
                                            ->default('tower')
                                            ->required(),
                                        Textarea::make('shortDesc')
                                            ->label('Descripción Corta (Para Tarjeta)')
                                            ->rows(2)
                                            ->required(),
                                        Textarea::make('longDesc')
                                            ->label('Descripción Detallada (Para Visor Interactivo)')
                                            ->rows(3)
                                            ->required(),
                                        Repeater::make('details')
                                            ->label('Entregables y Alcances Técnicos (Máximo 4)')
                                            ->maxItems(4)
                                            ->schema([
                                                TextInput::make('item')
                                                    ->label('Entregable / Alcance Técnico')
                                                    ->required(),
                                            ])
                                            ->columnSpanFull(),
                                    ])
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Cotización & WhatsApp')
                            ->icon('heroicon-o-chat-bubble-left-right')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('quote_btn_text')
                                            ->label('Texto Botón Cotización')
                                            ->required(),
                                        TextInput::make('quote_btn_link')
                                            ->label('Enlace Botón Cotización')
                                            ->required(),

                                        TextInput::make('wa_btn_text')
                                            ->label('Texto Botón WhatsApp')
                                            ->required(),
                                        TextInput::make('wa_btn_link')
                                            ->label('Enlace Botón WhatsApp')
                                            ->required(),
                                    ]),
                            ]),

                        Tab::make('Preguntas Frecuentes')
                            ->icon('heroicon-o-question-mark-circle')
                            ->schema([
                                TextInput::make('faqs_title')
                                    ->label('Título de la Sección FAQ')
                                    ->required()
                                    ->columnSpanFull(),
                                Repeater::make('faqs')
                                    ->label('Preguntas Frecuentes (Máximo 4)')
                                    ->maxItems(4)
                                    ->itemLabel(fn (array $state): ?string => $state['q'] ?? null)
                                    ->collapsible()
                                    ->collapsed()
                                    ->schema([
                                        TextInput::make('q')
                                            ->label('Pregunta')
                                            ->required(),
                                        Textarea::make('a')
                                            ->label('Respuesta')
                                            ->rows(3)
                                            ->required(),
                                    ])
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Card Final CTA')
                            ->icon('heroicon-o-phone-arrow-up-right')
                            ->schema([
                                TextInput::make('cta_badge')
                                    ->label('Etiqueta (Badge) Superior')
                                    ->columnSpanFull(),
                                TextInput::make('cta_title')
                                    ->label('Título del Banner')
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('cta_desc')
                                    ->label('Descripción del Banner')
                                    ->rows(2)
                                    ->columnSpanFull(),
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('cta_btn_text')
                                            ->label('Texto del Botón')
                                            ->required(),
                                        TextInput::make('cta_btn_link')
                                            ->label('Enlace del Botón')
                                            ->required(),
                                    ]),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public function save(): void
    {
        $data = $this->form->getState();

        // Enforce strictly 1 featured service
        if (isset($data['services_list']) && is_array($data['services_list'])) {
            $featuredIndex = null;
            foreach ($data['services_list'] as $idx => $service) {
                if (!empty($service['is_featured'])) {
                    $featuredIndex = $idx;
                }
            }
            if ($featuredIndex === null && count($data['services_list']) > 0) {
                $featuredIndex = 0;
            }
            foreach ($data['services_list'] as $idx => &$service) {
                $service['is_featured'] = ($idx === $featuredIndex);
            }
            unset($service);

            $this->form->fill($data);
        }

        $typeMap = [
            'services_list' => 'json',
            'faqs' => 'json',
            'hero_description' => 'textarea',
            'services_catalog_desc' => 'textarea',
            'cta_desc' => 'textarea',
        ];

        foreach ($data as $key => $value) {
            $type = $typeMap[$key] ?? 'text';
            if (is_array($value)) {
                $value = json_encode(array_values($value));
            }

            WebContent::updateOrCreate(
                ['page' => 'services', 'key' => $key],
                ['type' => $type, 'value' => $value]
            );
        }

        Notification::make()
            ->title('Contenido de la Vista Servicios guardado correctamente')
            ->success()
            ->send();
    }
}
