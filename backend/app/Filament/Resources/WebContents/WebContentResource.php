<?php

namespace App\Filament\Resources\WebContents;

use App\Filament\Resources\WebContents\Pages\CreateWebContent;
use App\Filament\Resources\WebContents\Pages\EditWebContent;
use App\Filament\Resources\WebContents\Pages\ListWebContents;
use App\Filament\Resources\WebContents\Schemas\WebContentForm;
use App\Filament\Resources\WebContents\Tables\WebContentsTable;
use App\Models\WebContent;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class WebContentResource extends Resource
{
    protected static ?string $model = WebContent::class;

    protected static ?string $modelLabel = 'Sección Web';
    protected static ?string $pluralModelLabel = 'Secciones Web';
    protected static ?string $navigationLabel = 'Secciones CMS';
    protected static bool $shouldRegisterNavigation = false;
    protected static ?int $navigationSort = 2;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-computer-desktop';

    protected static ?string $recordTitleAttribute = 'key';

    public static function form(Schema $schema): Schema
    {
        return WebContentForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return WebContentsTable::configure($table);
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
            'index' => ListWebContents::route('/'),
            'create' => CreateWebContent::route('/create'),
            'edit' => EditWebContent::route('/{record}/edit'),
        ];
    }
}
