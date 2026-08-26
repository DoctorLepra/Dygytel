<?php

namespace App\Filament\Pages;

use App\Models\WebContent;
use BackedEnum;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ManageCatalogPage extends Page
{
    protected static \UnitEnum|string|null $navigationGroup = 'Secciones CMS';
    protected static ?string $navigationLabel = 'Vista Catálogo';
    protected static ?string $title = 'Vista Catálogo';

    public function getHeading(): string
    {
        return '';
    }

    /**
     * Authorization: Accessible by Administrators and Editors.
     */
    public static function canAccess(): bool
    {
        return auth()->user()?->isAdmin() || auth()->user()?->isEditor();
    }

    protected static string|BackedEnum|null $navigationIcon = null;
    protected static ?int $navigationSort = 2;

    protected string $view = 'filament.pages.manage-catalog-page';

    public ?array $data = [];

    public function mount(): void
    {
        $contents = WebContent::where('page', 'catalog')->pluck('value', 'key')->toArray();

        // Defaults if not yet set in DB
        $defaults = [
            'hero_title' => 'Catálogo',
            'hero_title_highlight' => 'completo',
            'hero_description' => 'Explora nuestra selección de radios portátiles, móviles vehiculares, repetidores y accesorios de las marcas líderes del sector.',
            'cta_badge' => '¿No encuentras tu equipo?',
            'cta_title' => 'Cotiza soluciones a la',
            'cta_title_highlight' => 'medida',
            'cta_desc' => 'Nuestro equipo de ingenieros diseña la solución exacta para tu operación: desde una radio individual hasta redes troncalizadas multi-sitio.',
            'cta_btn_text' => 'Hablar con un asesor',
            'cta_btn_link' => 'https://api.whatsapp.com/send/?phone=573193053916&text=Hola,%20quisiera%20cotizar%20un%20producto&type=phone_number&app_absent=0',
        ];

        $this->form->fill(array_merge($defaults, $contents));
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->statePath('data')
            ->components([
                Tabs::make('CatalogSections')
                    ->tabs([
                        Tab::make('Hero Section')
                            ->icon('heroicon-o-rocket-launch')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('hero_title')
                                            ->label('Título Principal del Hero')
                                            ->placeholder('Ej: Catálogo'),
                                        TextInput::make('hero_title_highlight')
                                            ->label('Texto Destacado (Gradiente Azul/Cian)')
                                            ->placeholder('Ej: completo'),
                                    ]),
                                Textarea::make('hero_description')
                                    ->label('Descripción del Hero')
                                    ->rows(3)
                                    ->placeholder('Explora nuestra selección de radios portátiles...')
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Card Final CTA (Asesor)')
                            ->icon('heroicon-o-chat-bubble-left-right')
                            ->schema([
                                TextInput::make('cta_badge')
                                    ->label('Tag / Badge Superior')
                                    ->placeholder('Ej: ¿No encuentras tu equipo?')
                                    ->columnSpanFull(),
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('cta_title')
                                            ->label('Título Principal del CTA')
                                            ->placeholder('Ej: Cotiza soluciones a la'),
                                        TextInput::make('cta_title_highlight')
                                            ->label('Texto Destacado (Gradiente)')
                                            ->placeholder('Ej: medida'),
                                    ]),
                                Textarea::make('cta_desc')
                                    ->label('Descripción del CTA')
                                    ->rows(3)
                                    ->placeholder('Nuestro equipo de ingenieros diseña la solución exacta...')
                                    ->columnSpanFull(),
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('cta_btn_text')
                                            ->label('Texto del Botón')
                                            ->placeholder('Ej: Hablar con un asesor'),
                                        TextInput::make('cta_btn_link')
                                            ->label('Enlace del Botón (WhatsApp / URL)')
                                            ->placeholder('https://api.whatsapp.com/...'),
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
            'hero_description' => 'textarea',
            'cta_desc' => 'textarea',
        ];

        foreach ($data as $key => $value) {
            $type = $typeMap[$key] ?? 'text';

            WebContent::updateOrCreate(
                ['page' => 'catalog', 'key' => $key],
                ['type' => $type, 'value' => $value]
            );
        }

        Notification::make()
            ->title('Contenido de la Vista Catálogo guardado correctamente')
            ->success()
            ->send();
    }
}
