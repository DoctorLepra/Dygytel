<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Models\User;
use App\Notifications\UserInvitationNotification;
use Filament\Actions\CreateAction;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ListUsers extends ListRecords
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->label('Invitar Nuevo Usuario')
                ->icon('heroicon-o-user-plus')
                ->modalHeading('Invitar Nuevo Usuario')
                ->modalDescription('Ingresa los datos para enviar un enlace de activación por correo electrónico.')
                ->modalSubmitActionLabel('Enviar Invitación')
                ->modalWidth('lg')
                ->color('primary')
                ->createAnother(false)
                ->mutateFormDataUsing(function (array $data): array {
                    $data['password'] = Hash::make(Str::random(32));
                    return $data;
                })
                ->after(function (User $record) {
                    try {
                        $record->notify(new UserInvitationNotification());

                        Notification::make()
                            ->title('Invitación Enviada')
                            ->body("Se ha enviado un correo de invitación a {$record->email} para definir su contraseña.")
                            ->success()
                            ->send();
                    } catch (\Exception $e) {
                        Notification::make()
                            ->title('Usuario creado, pero falló el envío de correo')
                            ->body('El usuario fue registrado pero ocurrió un error al enviar el correo: ' . $e->getMessage())
                            ->warning()
                            ->send();
                    }
                }),
        ];
    }
}
