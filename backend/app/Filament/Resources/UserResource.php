<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Models\User;
use App\Notifications\UserInvitationNotification;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification as FilamentNotification;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationLabel = 'Usuarios';

    protected static ?string $modelLabel = 'Usuario';

    protected static ?string $pluralModelLabel = 'Usuarios';

    protected static ?int $navigationSort = 2;

    /**
     * Strict Authorization: Only Administrators can view and manage users.
     */
    public static function canViewAny(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nombre Completo')
                    ->placeholder('Ej. Juan Pérez')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),

                TextInput::make('email')
                    ->label('Correo Electrónico')
                    ->placeholder('ejemplo@dygytel.com')
                    ->email()
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true)
                    ->columnSpanFull(),

                Select::make('role')
                    ->label('Rol en el Sistema')
                    ->options([
                        'admin' => 'Administrador (Acceso total)',
                        'editor' => 'Editor (Solo Secciones CMS)',
                    ])
                    ->default('editor')
                    ->required()
                    ->columnSpanFull(),

                TextInput::make('password')
                    ->label('Nueva Contraseña')
                    ->password()
                    ->dehydrateStateUsing(fn ($state) => Hash::make($state))
                    ->dehydrated(fn ($state) => filled($state))
                    ->required(fn (string $context): bool => $context === 'edit' && false)
                    ->visible(fn (string $context): bool => $context === 'edit')
                    ->helperText('Deja este campo en blanco si no deseas modificar la contraseña actual.')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nombre')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('email')
                    ->label('Correo Electrónico')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('role')
                    ->label('Rol')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'admin' => 'primary',
                        'editor' => 'info',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'admin' => 'Administrador',
                        'editor' => 'Editor',
                        default => $state,
                    })
                    ->sortable(),

                IconColumn::make('email_verified_at')
                    ->label('Estado')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-clock')
                    ->trueColor('success')
                    ->falseColor('warning')
                    ->getStateUsing(fn (User $record): bool => $record->email_verified_at !== null)
                    ->tooltip(fn (User $record): string => $record->email_verified_at ? 'Cuenta Activa' : 'Invitación Pendiente'),

                TextColumn::make('created_at')
                    ->label('Fecha Registro')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                Action::make('resendInvitation')
                    ->label('Reenviar')
                    ->icon('heroicon-o-paper-airplane')
                    ->iconButton()
                    ->tooltip('Reenviar Invitación')
                    ->color('info')
                    ->requiresConfirmation()
                    ->modalHeading('Reenviar correo de invitación')
                    ->modalDescription('Se enviará un nuevo enlace de activación y asignación de contraseña a este correo.')
                    ->action(function (User $record) {
                        try {
                            $record->notify(new UserInvitationNotification());
                            FilamentNotification::make()
                                ->title('Invitación enviada')
                                ->body("Se ha reenviado la invitación a {$record->email}")
                                ->success()
                                ->send();
                        } catch (\Exception $e) {
                            FilamentNotification::make()
                                ->title('Error al enviar')
                                ->body('Ocurrió un inconveniente al enviar el correo: ' . $e->getMessage())
                                ->danger()
                                ->send();
                        }
                    }),

                EditAction::make()
                    ->iconButton()
                    ->tooltip('Editar Usuario')
                    ->modalHeading('Editar Usuario')
                    ->modalSubmitActionLabel('Guardar Cambios')
                    ->modalWidth('lg'),

                DeleteAction::make()
                    ->iconButton()
                    ->tooltip('Borrar Usuario'),
            ])
            ->actionsColumnLabel('Acciones')
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
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
            'index' => Pages\ListUsers::route('/'),
        ];
    }
}
