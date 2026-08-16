<?php

namespace App\Filament\Pages;

use App\Models\WebContent;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

use BackedEnum;

class ManageHomePage extends Page
{
    protected static ?string $navigationLabel = 'Vista Inicio';
    protected static ?string $title = 'CMS — Gestión de Vista Inicio';
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-computer-desktop';
    protected static ?int $navigationSort = 1;

    protected string $view = 'filament.pages.manage-home-page';

    public ?array $data = [];

    public function mount(): void
    {
        $contents = WebContent::where('page', 'home')->pluck('value', 'key')->toArray();

        // Parse json/array fields for form state
        if (isset($contents['client_logos']) && is_string($contents['client_logos'])) {
            $contents['client_logos'] = json_decode($contents['client_logos'], true) ?? [];
        }
        if (isset($contents['featured_services']) && is_string($contents['featured_services'])) {
            $contents['featured_services'] = json_decode($contents['featured_services'], true) ?? [];
        }

        $this->form->fill($contents);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->statePath('data')
            ->components([
                Tabs::make('HomeSections')
                    ->tabs([
                        Tab::make('Hero Section')
                            ->icon('heroicon-o-rocket-launch')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('hero_title')
                                            ->label('Título Principal del Hero')
                                            ->placeholder('Ej: Comunicación crítica sin')
                                            ->required(),
                                        TextInput::make('hero_title_highlight')
                                            ->label('Texto Destacado (Degradado Azul/Cian)')
                                            ->placeholder('Ej: interferencias.')
                                            ->required(),
                                    ]),
                                Textarea::make('hero_description')
                                    ->label('Descripción del Hero')
                                    ->rows(3)
                                    ->columnSpanFull(),
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('hero_button_text')
                                            ->label('Texto del Botón')
                                            ->required(),
                                        TextInput::make('hero_button_link')
                                            ->label('Enlace del Botón')
                                            ->required(),
                                    ]),
                                FileUpload::make('hero_image')
                                    ->label('Imagen Principal del Hero')
                                    ->image()
                                    ->directory('web-content')
                                    ->columnSpanFull(),
                                Section::make('Datos Imagen Principal (Badges y Chips)')
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('hero_badge_1')
                                                    ->label('Badge 1 (Superior Izquierdo sobre Imagen)')
                                                    ->placeholder('Ej: Terminal Serie-X'),
                                                TextInput::make('hero_badge_2')
                                                    ->label('Badge 2 (Superior Derecho sobre Imagen)')
                                                    ->placeholder('Ej: 462.5625 MHz'),
                                            ]),
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('hero_badge_3_label')
                                                    ->label('Chip 3 Label (Flotante Izquierdo - Nombre)')
                                                    ->placeholder('Ej: Alcance'),
                                                TextInput::make('hero_badge_3_val')
                                                    ->label('Chip 3 Valor (Flotante Izquierdo - Valor)')
                                                    ->placeholder('Ej: 12 km'),
                                            ]),
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('hero_badge_4_label')
                                                    ->label('Chip 4 Label (Flotante Derecho - Nombre)')
                                                    ->placeholder('Ej: Batería'),
                                                TextInput::make('hero_badge_4_val')
                                                    ->label('Chip 4 Valor (Flotante Derecho - Valor)')
                                                    ->placeholder('Ej: 24 h'),
                                            ]),
                                    ]),

                                Section::make('Métricas')
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('metric_1_val')
                                                    ->label('Métrica 1 — Valor (ej: 15+)'),
                                                TextInput::make('metric_1_label')
                                                    ->label('Métrica 1 — Etiqueta (ej: Años de experiencia)'),
                                                TextInput::make('metric_2_val')
                                                    ->label('Métrica 2 — Valor (ej: 99.9%)'),
                                                TextInput::make('metric_2_label')
                                                    ->label('Métrica 2 — Etiqueta (ej: Uptime garantizado)'),
                                                TextInput::make('metric_3_val')
                                                    ->label('Métrica 3 — Valor (ej: 24/7)'),
                                                TextInput::make('metric_3_label')
                                                    ->label('Métrica 3 — Etiqueta (ej: Soporte técnico)'),
                                            ]),
                                    ]),
                            ]),

                        Tab::make('Sobre Dygytel')
                            ->icon('heroicon-o-building-office-2')
                            ->schema([
                                Textarea::make('about_text')
                                    ->label('Texto de Presentación Dygytel')
                                    ->rows(4)
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Logos de Clientes')
                            ->icon('heroicon-o-user-group')
                            ->schema([
                                FileUpload::make('client_logos')
                                    ->label('Cargar Logos Reales de Clientes')
                                    ->image()
                                    ->multiple()
                                    ->reorderable()
                                    ->directory('web-content/logos')
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Catálogo Destacado')
                            ->icon('heroicon-o-shopping-bag')
                            ->schema([
                                TextInput::make('catalog_title')
                                    ->label('Título de la Sección')
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('catalog_description')
                                    ->label('Descripción de la Sección')
                                    ->rows(3)
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Servicios Destacados')
                            ->icon('heroicon-o-wrench-screwdriver')
                            ->schema([
                                TextInput::make('services_title')
                                    ->label('Título de Servicios')
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('services_description')
                                    ->label('Descripción de Servicios')
                                    ->rows(2)
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Contacto & Ubicación')
                            ->icon('heroicon-o-phone')
                            ->schema([
                                TextInput::make('contact_title')
                                    ->label('Título de Tarjeta Contacto')
                                    ->columnSpanFull(),
                                Textarea::make('contact_description')
                                    ->label('Descripción de Contacto')
                                    ->rows(2)
                                    ->columnSpanFull(),
                                Grid::make(3)
                                    ->schema([
                                        TextInput::make('contact_phone')
                                            ->label('Teléfono Principal / WhatsApp'),
                                        TextInput::make('contact_email')
                                            ->label('Correo Electrónico'),
                                        TextInput::make('contact_address')
                                            ->label('Dirección / Ubicación'),
                                    ]),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public function save(): void
    {
        $data = $this->form->getState();

        $typeMap = [
            'hero_image' => 'image',
            'client_logos' => 'image',
            'featured_services' => 'json',
            'hero_description' => 'textarea',
            'about_text' => 'textarea',
            'catalog_description' => 'textarea',
            'services_description' => 'textarea',
            'contact_description' => 'textarea',
        ];

        foreach ($data as $key => $value) {
            $type = $typeMap[$key] ?? 'text';
            if (is_array($value)) {
                $value = json_encode(array_values($value));
            }

            WebContent::updateOrCreate(
                ['page' => 'home', 'key' => $key],
                ['type' => $type, 'value' => $value]
            );
        }

        Notification::make()
            ->title('Contenido de la Vista Inicio guardado correctamente')
            ->success()
            ->send();
    }
}
