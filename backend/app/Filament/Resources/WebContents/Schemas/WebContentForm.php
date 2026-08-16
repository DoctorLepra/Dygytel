<?php

namespace App\Filament\Resources\WebContents\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class WebContentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Select::make('page')
                    ->label('Página')
                    ->options([
                        'home' => 'Inicio',
                        'about' => 'Nosotros',
                        'catalog' => 'Catálogo',
                        'contact' => 'Contacto',
                        'global' => 'Global',
                    ])
                    ->required(),
                \Filament\Forms\Components\TextInput::make('key')
                    ->label('Clave / Identificador')
                    ->required(),
                \Filament\Forms\Components\Select::make('type')
                    ->label('Tipo de Contenido')
                    ->options([
                        'text' => 'Texto Corto',
                        'textarea' => 'Texto Largo',
                        'image' => 'Imagen',
                    ])
                    ->required()
                    ->default('text')
                    ->live(),
                \Filament\Forms\Components\TextInput::make('value_text')
                    ->label('Contenido (Texto)')
                    ->visible(fn (\Filament\Forms\Get $get) => $get('type') === 'text'),
                \Filament\Forms\Components\Textarea::make('value_textarea')
                    ->label('Contenido (Texto Largo)')
                    ->visible(fn (\Filament\Forms\Get $get) => $get('type') === 'textarea'),
                \Filament\Forms\Components\FileUpload::make('value_image')
                    ->label('Contenido (Imagen)')
                    ->image()
                    ->directory('web-content')
                    ->visible(fn (\Filament\Forms\Get $get) => $get('type') === 'image'),
            ]);
    }
}
