<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\URL;

class UserInvitationNotification extends Notification
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
        // Generate temporary signed URL valid for 48 hours
        $url = URL::temporarySignedRoute(
            'user.set-password',
            now()->addHours(48),
            ['user' => $notifiable->id]
        );

        return (new MailMessage)
            ->subject('Invitación al Panel de Administración — Dygytel')
            ->greeting('¡Hola ' . $notifiable->name . '!')
            ->line('Has sido invitado a formar parte del panel administrativo del sistema Dygytel CMS.')
            ->line('Para completar la activación de tu cuenta y crear tu contraseña de acceso, por favor haz clic en el siguiente botón:')
            ->action('Asignar mi Contraseña', $url)
            ->line('Este enlace de invitación vencerá en 48 horas.')
            ->line('Si no esperabas esta invitación, puedes ignorar este mensaje.');
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
