<?php

namespace App\Filament\Resources\Products;

use App\Filament\Resources\Products\Pages\CreateProduct;
use App\Filament\Resources\Products\Pages\EditProduct;
use App\Filament\Resources\Products\Pages\ListProducts;
use App\Filament\Resources\Products\Schemas\ProductForm;
use App\Filament\Resources\Products\Tables\ProductsTable;
use App\Models\Product;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $modelLabel = 'Producto';
    protected static ?string $pluralModelLabel = 'Productos';
    protected static ?string $navigationLabel = 'Productos';
    protected static ?int $navigationSort = 1;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-archive-box';

    protected static ?string $recordTitleAttribute = 'name';

    /**
     * Define globally searchable attributes (name, sku, brand, category).
     */
    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'sku', 'brand', 'category'];
    }

    /**
     * Customize the title of global search results.
     */
    public static function getGlobalSearchResultTitle(\Illuminate\Database\Eloquent\Model $record): string
    {
        /** @var Product $record */
        return "{$record->name} — SKU: {$record->sku}";
    }

    /**
     * Additional details displayed in the global search dropdown.
     */
    public static function getGlobalSearchResultDetails(\Illuminate\Database\Eloquent\Model $record): array
    {
        /** @var Product $record */
        return [
            'SKU' => $record->sku,
            'Marca' => $record->brand ?? '—',
            'Categoría' => $record->category ?? '—',
        ];
    }

    /**
     * Navigate to products table filtering by the selected product's SKU.
     */
    public static function getGlobalSearchResultUrl(\Illuminate\Database\Eloquent\Model $record): string
    {
        /** @var Product $record */
        return static::getUrl('index', [
            'tableSearch' => $record->sku,
            'record' => (string) $record->getKey(),
        ]);
    }

    /**
     * Strict Authorization: Only Administrators can view and manage products.
     */
    public static function canViewAny(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public static function form(Schema $schema): Schema
    {
        return ProductForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ProductsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListProducts::route('/'),
        ];
    }
}
