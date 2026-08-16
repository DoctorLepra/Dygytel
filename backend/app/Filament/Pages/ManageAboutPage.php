<?php

namespace App\Filament\Pages;

use App\Models\WebContent;
use BackedEnum;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ManageAboutPage extends Page
{
    protected static ?string $navigationLabel = 'Vista Nosotros';
    protected static ?string $title = 'CMS — Gestión de Vista Nosotros';
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-user-group';
    protected static ?int $navigationSort = 3;

    protected string $view = 'filament.pages.manage-about-page';

    public ?array $data = [];

    public function mount(): void
    {
        $contents = WebContent::where('page', 'about')->pluck('value', 'key')->toArray();

        // Parse json fields for form state
        if (isset($contents['certifications']) && is_string($contents['certifications'])) {
            $contents['certifications'] = json_decode($contents['certifications'], true) ?? [];
        }
        if (isset($contents['values_list']) && is_string($contents['values_list'])) {
            $contents['values_list'] = json_decode($contents['values_list'], true) ?? [];
        }

        $this->form->fill($contents);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->statePath('data')
            ->components([
                Tabs::make('AboutSections')
                    ->tabs([
                        Tab::make('Hero Section & Cifras')
                            ->icon('heroicon-o-rocket-launch')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('hero_title')
                                            ->label('Título Principal del Hero')
                                            ->placeholder('Ej: La voz detrás de las')
                                            ->required(),
                                        TextInput::make('hero_title_highlight')
                                            ->label('Texto Destacado (Gradiente Azul/Cian)')
                                            ->placeholder('Ej: operaciones críticas.')
                                            ->required(),
                                    ]),
                                Textarea::make('hero_description')
                                    ->label('Descripción del Hero')
                                    ->rows(3)
                                    ->columnSpanFull(),
                                Section::make('Nuestro Impacto en Cifras')
                                    ->schema([
                                        TextInput::make('hero_impact_label')
                                            ->label('Etiqueta Superior de Cifras')
                                            ->placeholder('Ej: NUESTRO IMPACTO EN CIFRAS')
                                            ->required()
                                            ->columnSpanFull(),
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('cifra1_val')
                                                    ->label('Cifra 1 — Valor (ej: +50,000)'),
                                                TextInput::make('cifra1_title')
                                                    ->label('Cifra 1 — Título (ej: Radios activos en campo)'),

                                                TextInput::make('cifra2_val')
                                                    ->label('Cifra 2 — Valor (ej: +500)'),
                                                TextInput::make('cifra2_title')
                                                    ->label('Cifra 2 — Título (ej: Proyectos ejecutados)'),

                                                TextInput::make('cifra3_val')
                                                    ->label('Cifra 3 — Valor (ej: 99.9%)'),
                                                TextInput::make('cifra3_title')
                                                    ->label('Cifra 3 — Título (ej: Disponibilidad garantizada)'),
                                            ]),
                                    ]),
                            ]),

                        Tab::make('Historia & Certificaciones')
                            ->icon('heroicon-o-document-text')
                            ->schema([
                                TextInput::make('story_label')
                                    ->label('Etiqueta Superior de Historia')
                                    ->placeholder('Ej: NUESTRA HISTORIA')
                                    ->required()
                                    ->columnSpanFull(),
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('story_title')
                                            ->label('Título Principal de Historia')
                                            ->placeholder('Ej: Nacidos para resolver donde la señal celular')
                                            ->required(),
                                        TextInput::make('story_title_highlight')
                                            ->label('Texto Destacado (Gradiente)')
                                            ->placeholder('Ej: no llega.')
                                            ->required(),
                                    ]),
                                Textarea::make('story_desc')
                                    ->label('Descripción de la Historia')
                                    ->rows(4)
                                    ->columnSpanFull(),
                                Section::make('Certificaciones e Integraciones Oficiales')
                                    ->schema([
                                        TextInput::make('certifications_label')
                                            ->label('Título de la Sección de Certificaciones')
                                            ->required()
                                            ->columnSpanFull(),
                                        Repeater::make('certifications')
                                            ->label('Listado de Certificaciones / Aliados')
                                            ->itemLabel(fn (array $state): ?string => isset($state['name']) ? "📜 {$state['name']}" : null)
                                            ->collapsible()
                                            ->collapsed()
                                            ->schema([
                                                Grid::make(2)
                                                    ->schema([
                                                        TextInput::make('name')
                                                            ->label('Nombre de la Certificación / Entidad')
                                                            ->placeholder('Ej: Motorola Solutions Partner')
                                                            ->required(),
                                                        TextInput::make('level')
                                                            ->label('Detalle Corto / Nivel')
                                                            ->placeholder('Ej: Platinum Authorized Dealer')
                                                            ->required(),
                                                    ]),
                                            ])
                                            ->columnSpanFull(),
                                    ]),
                            ]),

                        Tab::make('Valores de la Empresa')
                            ->icon('heroicon-o-sparkles')
                            ->schema([
                                TextInput::make('values_label')
                                    ->label('Etiqueta Superior de Valores')
                                    ->placeholder('Ej: NUESTROS PILARES')
                                    ->required()
                                    ->columnSpanFull(),
                                TextInput::make('values_title')
                                    ->label('Título de la Sección de Valores')
                                    ->placeholder('Ej: Valores que guían nuestra ingeniería')
                                    ->required()
                                    ->columnSpanFull(),
                                Repeater::make('values_list')
                                    ->label('Listado de Valores Corporativos')
                                    ->itemLabel(fn (array $state): ?string => isset($state['title']) ? "💎 {$state['title']}" : null)
                                    ->collapsible()
                                    ->collapsed()
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('title')
                                                    ->label('Título del Valor')
                                                    ->required(),
                                                Select::make('icon')
                                                    ->label('Icono Representativo')
                                                    ->options([
                                                        'shield' => '🛡️ Fiabilidad / Protección',
                                                        'cog' => '⚙️ Rigor Técnico / Calibración',
                                                        'lightning' => '⚡ Respuesta Inmediata / Velocidad',
                                                        'check' => '📜 Transparencia / Cumplimiento IFT',
                                                        'handshake' => '🤝 Compromiso Humano / Aliados',
                                                        'trophy' => '🏆 Calidad ISO / Excelencia',
                                                    ])
                                                    ->default('shield')
                                                    ->required(),
                                            ]),
                                        Textarea::make('desc')
                                            ->label('Descripción del Valor')
                                            ->rows(2)
                                            ->required(),
                                    ])
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Card Final CTA')
                            ->icon('heroicon-o-phone-arrow-up-right')
                            ->schema([
                                TextInput::make('cta_label')
                                    ->label('Etiqueta (Badge) Superior')
                                    ->placeholder('Ej: ¿TRABAJAMOS JUNTOS?')
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

        $typeMap = [
            'certifications' => 'json',
            'values_list' => 'json',
            'hero_description' => 'textarea',
            'story_desc' => 'textarea',
            'cta_desc' => 'textarea',
        ];

        foreach ($data as $key => $value) {
            $type = $typeMap[$key] ?? 'text';
            if (is_array($value)) {
                $value = json_encode(array_values($value));
            }

            WebContent::updateOrCreate(
                ['page' => 'about', 'key' => $key],
                ['type' => $type, 'value' => $value]
            );
        }

        Notification::make()
            ->title('Contenido de la Vista Nosotros guardado correctamente')
            ->success()
            ->send();
    }
}
