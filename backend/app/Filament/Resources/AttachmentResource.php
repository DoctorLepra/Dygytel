<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AttachmentResource\Pages;
use App\Models\Attachment;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class AttachmentResource extends Resource
{
    protected static ?string $model = Attachment::class;

    protected static \UnitEnum|string|null $navigationGroup = 'Secciones CMS';

    protected static string|BackedEnum|null $navigationIcon = null;

    protected static ?string $navigationLabel = 'Anexos';

    protected static ?string $modelLabel = 'Anexo';

    protected static ?string $pluralModelLabel = 'Anexos';

    protected static ?int $navigationSort = 6;

    /**
     * Authorization: Accessible by Administrators and Editors.
     */
    public static function canViewAny(): bool
    {
        return auth()->user()?->isAdmin() || auth()->user()?->isEditor();
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Título del Documento / Anexo')
                    ->placeholder('Ej: Políticas de Privacidad')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),

                FileUpload::make('file_path')
                    ->label('Archivo PDF')
                    ->acceptedFileTypes(['application/pdf'])
                    ->directory('attachments')
                    ->openable()
                    ->downloadable()
                    ->required()
                    ->columnSpanFull(),

                Toggle::make('is_active')
                    ->label('Publicado / Visible en la Web')
                    ->default(true)
                    ->inline(false),

                TextInput::make('sort_order')
                    ->label('Orden de Visualización')
                    ->numeric()
                    ->default(0)
                    ->helperText('Número menor aparece primero en la lista.')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Título del Documento')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('file_path')
                    ->label('Archivo PDF')
                    ->formatStateUsing(fn () => 'Abrir PDF ↗')
                    ->url(fn (Attachment $record): ?string => $record->file_url, shouldOpenInNewTab: true)
                    ->badge()
                    ->color('info'),

                ToggleColumn::make('is_active')
                    ->label('Visible'),

                TextColumn::make('sort_order')
                    ->label('Orden')
                    ->sortable(),

                TextColumn::make('updated_at')
                    ->label('Última Modificación')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('sort_order', 'asc')
            ->recordActions([
                EditAction::make()
                    ->iconButton()
                    ->tooltip('Editar Anexo')
                    ->modalHeading('Editar Anexo')
                    ->modalSubmitActionLabel('Guardar Cambios')
                    ->modalWidth('lg'),

                DeleteAction::make()
                    ->iconButton()
                    ->tooltip('Eliminar Anexo'),
            ])
            ->actionsColumnLabel('Acciones')
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAttachments::route('/'),
        ];
    }
}
