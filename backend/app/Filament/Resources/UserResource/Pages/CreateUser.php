<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Notifications\UserInvitationNotification;
use Filament\Notifications\Notification as FilamentNotification;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        // Set a random strong password until the user sets their own via invitation link
        $data['password'] = Hash::make(Str::random(32));

        return $data;
    }

    protected function afterCreate(): void
    {
        /** @var \App\Models\User $user */
        $user = $this->record;

        try {
            $user->notify(new UserInvitationNotification());
            
            FilamentNotification::make()
                ->title('Usuario Creado e Invitado')
                ->body("Se ha enviado un correo de invitación a {$user->email} para definir su contraseña.")
                ->success()
                ->send();
        } catch (\Exception $e) {
            FilamentNotification::make()
                ->title('Usuario creado, pero falló el envío de correo')
                ->body('El usuario fue registrado correctamente pero ocurrió un error al enviar el correo: ' . $e->getMessage())
                ->warning()
                ->send();
        }
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
