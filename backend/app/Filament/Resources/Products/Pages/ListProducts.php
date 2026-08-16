<?php

namespace App\Filament\Resources\Products\Pages;

use App\Filament\Resources\Products\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Pages\ListRecords;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

use Livewire\Attributes\Url;

class ListProducts extends ListRecords
{
    protected static string $resource = ProductResource::class;

    #[Url]
    public string $activeView = 'products';

    public function setView(string $view): void
    {
        $this->activeView = $view;
        $this->cachedHeaderActions = [];
        $this->cacheInteractsWithHeaderActions();
        $this->resetPage();
        $this->resetTable();
    }

    protected function getHeaderActions(): array
    {
        $actions = [
            Action::make('viewProducts')
                ->label('Productos')
                ->color(fn () => $this->activeView === 'products' ? 'primary' : 'gray')
                ->outlined(fn () => $this->activeView !== 'products')
                ->action(fn () => $this->setView('products')),

            Action::make('viewCategories')
                ->label('Categorías')
                ->color(fn () => $this->activeView === 'categories' ? 'primary' : 'gray')
                ->outlined(fn () => $this->activeView !== 'categories')
                ->action(fn () => $this->setView('categories')),

            Action::make('viewBrands')
                ->label('Marcas')
                ->color(fn () => $this->activeView === 'brands' ? 'primary' : 'gray')
                ->outlined(fn () => $this->activeView !== 'brands')
                ->action(fn () => $this->setView('brands')),
        ];

        if ($this->activeView === 'categories') {
            $actions[] = Action::make('createCategory')
                ->label('Nueva Categoría')
                ->modalSubmitActionLabel('Crear')
                ->color('primary')
                ->form([
                    TextInput::make('name')
                        ->label('Nombre de la Categoría')
                        ->required(),
                ])
                ->action(function (array $data) {
                    Category::create($data);
                });
        } elseif ($this->activeView === 'brands') {
            $actions[] = Action::make('createBrand')
                ->label('Nueva Marca')
                ->modalSubmitActionLabel('Crear')
                ->color('primary')
                ->form([
                    TextInput::make('name')
                        ->label('Nombre de la Marca')
                        ->required(),
                ])
                ->action(function (array $data) {
                    Brand::create($data);
                });
        } else {
            $actions[] = CreateAction::make()
                ->label('Nuevo Producto')
                ->modalSubmitActionLabel('Crear')
                ->modalWidth('4xl')
                ->color('primary');
        }

        return $actions;
    }

    public function table(Table $table): Table
    {
        if ($this->activeView === 'categories') {
            return $table
                ->query(Category::query()->latest())
                ->columns([
                    TextColumn::make('id')
                        ->label('ID')
                        ->searchable()
                        ->sortable(),
                    TextColumn::make('name')
                        ->label('Nombre de Categoría')
                        ->searchable()
                        ->sortable(),
                    TextColumn::make('created_at')
                        ->label('Fecha de Creación')
                        ->date('d/m/Y')
                        ->sortable(),
                ])
                ->recordActions([
                    EditAction::make('editCategory')
                        ->iconButton()
                        ->form([
                            TextInput::make('name')
                                ->label('Nombre de la Categoría')
                                ->required(),
                        ])
                        ->action(function (Category $record, array $data) {
                            $record->update($data);
                        }),
                    DeleteAction::make()
                        ->iconButton(),
                ])
                ->actionsColumnLabel('Acciones');
        }

        if ($this->activeView === 'brands') {
            return $table
                ->query(Brand::query()->latest())
                ->columns([
                    TextColumn::make('id')
                        ->label('ID')
                        ->searchable()
                        ->sortable(),
                    TextColumn::make('name')
                        ->label('Nombre de Marca')
                        ->searchable()
                        ->sortable(),
                    TextColumn::make('created_at')
                        ->label('Fecha de Creación')
                        ->date('d/m/Y')
                        ->sortable(),
                ])
                ->recordActions([
                    EditAction::make('editBrand')
                        ->iconButton()
                        ->form([
                            TextInput::make('name')
                                ->label('Nombre de la Marca')
                                ->required(),
                        ])
                        ->action(function (Brand $record, array $data) {
                            $record->update($data);
                        }),
                    DeleteAction::make()
                        ->iconButton(),
                ])
                ->actionsColumnLabel('Acciones');
        }

        return parent::table($table);
    }
}
