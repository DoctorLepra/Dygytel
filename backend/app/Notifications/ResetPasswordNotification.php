<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\URL;

class ResetPasswordNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        // Generate temporary signed URL valid for 2 hours
        $url = URL::temporarySignedRoute(
            'user.set-password',
            now()->addHours(2),
            ['user' => $notifiable->id]
        );

        return (new MailMessage)
            ->subject('Restablecimiento de Contraseña — Dygytel Console')
            ->greeting('¡Hola ' . $notifiable->name . '!')
            ->line('Recibimos una solicitud para restablecer la contraseña de acceso a tu cuenta en la consola Dygytel.')
            ->line('Para definir una nueva contraseña segura, haz clic en el siguiente botón:')
            ->action('Restablecer mi Contraseña', $url)
            ->line('Por motivos de seguridad, este enlace expirará en 2 horas.')
            ->line('Si tú no solicitaste este restablecimiento, no se requiere ninguna acción adicional.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
