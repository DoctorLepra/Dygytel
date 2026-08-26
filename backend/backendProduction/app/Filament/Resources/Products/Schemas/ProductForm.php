<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make(2)
                    ->columnSpanFull()
                    ->schema([
                        TextInput::make('sku')
                            ->label('SKU')
                            ->required(),
                        TextInput::make('name')
                            ->label('Nombre')
                            ->required(),
                    ]),
                Textarea::make('description')
                    ->label('Descripción')
                    ->columnSpanFull(),
                TextInput::make('price')
                    ->label('Precio')
                    ->required()
                    ->numeric()
                    ->prefix('$')
                    ->columnSpanFull(),
                Grid::make(2)
                    ->columnSpanFull()
                    ->schema([
                        Select::make('category')
                            ->label('Categoría')
                            ->options(fn () => \App\Models\Category::pluck('name', 'name')->toArray())
                            ->searchable()
                            ->createOptionForm([
                                TextInput::make('name')
                                    ->label('Nombre de la Categoría')
                                    ->required(),
                            ])
                            ->createOptionUsing(function (array $data) {
                                $cat = \App\Models\Category::create($data);
                                return $cat->name;
                            })
                            ->required(),
                        Select::make('brand')
                            ->label('Marca')
                            ->options(fn () => \App\Models\Brand::pluck('name', 'name')->toArray())
                            ->searchable()
                            ->createOptionForm([
                                TextInput::make('name')
                                    ->label('Nombre de la Marca')
                                    ->required(),
                            ])
                            ->createOptionUsing(function (array $data) {
                                $brand = \App\Models\Brand::create($data);
                                return $brand->name;
                            })
                            ->required(),
                    ]),
                Textarea::make('features')
                    ->label('Características')
                    ->placeholder("Resistencia IP68\nPantalla HD\nBatería de 5000 mAh")
                    ->helperText('Escribe cada característica en una línea separada (Enter).')
                    ->columnSpanFull(),
                Textarea::make('specs')
                    ->label('Especificaciones Técnicas')
                    ->placeholder("Frecuencia: 136 - 174 MHz\nCanales: 32\nPotencia: 5W")
                    ->helperText('Escribe un parámetro por línea en formato "Nombre: Valor" (Ej: Frecuencia: 136-174 MHz).')
                    ->columnSpanFull(),
                Textarea::make('in_the_box')
                    ->label('Contenido de la Caja')
                    ->placeholder("Radio Portátil\nCargador de escritorio\nAntena\nManual")
                    ->helperText('Escribe cada elemento incluido en una línea separada.')
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->label('Imágenes del Producto (Máximo 5)')
                    ->image()
                    ->multiple()
                    ->maxFiles(5)
                    ->reorderable()
                    ->openable()
                    ->downloadable()
                    ->previewable(true)
                    ->panelLayout('grid')
                    ->imagePreviewHeight('110px')
                    ->columnSpanFull()
                    ->disk('public')
                    ->directory('products')
                    ->saveUploadedFileUsing(function ($file) {
                        $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
                        $image = $manager->decodePath($file->getRealPath());
                        $encoded = $image->encode(new \Intervention\Image\Encoders\WebpEncoder(80));
                        $filename = 'products/' . \Illuminate\Support\Str::random(40) . '.webp';
                        \Illuminate\Support\Facades\Storage::disk('public')->put($filename, (string) $encoded);
                        return $filename;
                    }),
            ]);
    }
}
