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
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ManageContactPage extends Page
{
    protected static \UnitEnum|string|null $navigationGroup = 'Secciones CMS';
    protected static ?string $navigationLabel = 'Vista Contacto';
    protected static ?string $title = 'Vista Contacto';

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
    protected static ?int $navigationSort = 5;

    protected string $view = 'filament.pages.manage-contact-page';

    public ?array $data = [];

    public function mount(): void
    {
        $contents = WebContent::where('page', 'contact')->pluck('value', 'key')->toArray();

        // Parse json fields for form state
        if (isset($contents['contact_items']) && is_string($contents['contact_items'])) {
            $contents['contact_items'] = json_decode($contents['contact_items'], true) ?? [];
        }

        $this->form->fill($contents);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->statePath('data')
            ->components([
                Tabs::make('ContactSections')
                    ->tabs([
                        Tab::make('Hero Section')
                            ->icon('heroicon-o-rocket-launch')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('hero_title')
                                            ->label('Título Principal del Hero')
                                            ->placeholder('Ej: Hablemos de tus proyectos de'),
                                        TextInput::make('hero_title_highlight')
                                            ->label('Texto Destacado (Gradiente Azul/Cian)')
                                            ->placeholder('Ej: comunicación crítica.'),
                                    ]),
                                Textarea::make('hero_description')
                                    ->label('Descripción del Hero')
                                    ->rows(3)
                                    ->columnSpanFull(),
                            ]),

                        Tab::make('Datos de Contacto')
                            ->icon('heroicon-o-phone')
                            ->schema([
                                Repeater::make('contact_items')
                                    ->label('Listado de Tarjetas / Datos de Contacto')
                                    ->itemLabel(fn (array $state): ?string => isset($state['label']) ? "📞 {$state['label']}" : null)
                                    ->collapsible()
                                    ->collapsed()
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('label')
                                                    ->label('Etiqueta / Nombre del Dato')
                                                    ->placeholder('Ej: Atención Telefónica'),
                                                Select::make('icon')
                                                    ->label('Icono Representativo')
                                                    ->options([
                                                        'phone' => '📞 Teléfono',
                                                        'whatsapp' => '💬 WhatsApp',
                                                        'mail' => '✉️ Correo Electrónico',
                                                        'map' => '📍 Dirección / Ubicación',
                                                        'clock' => '⏰ Horario de Atención',
                                                        'user' => '👤 Vendedor / Asesor',
                                                    ])
                                                    ->default('phone'),
                                            ]),
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('text')
                                                    ->label('Texto Principal / Valor')
                                                    ->placeholder('Ej: +57 319 305 3916'),
                                                TextInput::make('sublabel')
                                                    ->label('Label Auxiliar / Nota')
                                                    ->placeholder('Ej: Respuesta en menos de 2h'),
                                            ]),
                                        TextInput::make('link')
                                            ->label('Enlace Interactivo (Opcional)')
                                            ->placeholder('Ej: tel:+573193053916 o mailto:ventas@dygytel.com')
                                            ->columnSpanFull(),
                                    ])
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public function save(): void
    {
        $data = $this->form->getState();

        $typeMap = [
            'contact_items' => 'json',
            'hero_description' => 'textarea',
        ];

        foreach ($data as $key => $value) {
            $type = $typeMap[$key] ?? 'text';
            if (is_array($value)) {
                $value = json_encode(array_values($value));
            }

            WebContent::updateOrCreate(
                ['page' => 'contact', 'key' => $key],
                ['type' => $type, 'value' => $value]
            );
        }

        Notification::make()
            ->title('Contenido de la Vista Contacto guardado correctamente')
            ->success()
            ->send();
    }
}
