<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactMessageMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class ContactController extends Controller
{
    /**
     * Handle incoming contact form submissions.
     */
    public function send(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email:rfc,filter', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'company' => ['nullable', 'string', 'max:255'],
            'request_type' => ['nullable', 'string', 'max:255'],
            'origin' => ['nullable', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        $validated['ip'] = $request->ip();

        // Determine destination recipient (from ENV or config fallback)
        $recipient = config('mail.contact_recipient') 
            ?: env('MAIL_CONTACT_RECIPIENT') 
            ?: config('mail.from.address', 'ventas@dygytel.com');

        try {
            Mail::to($recipient)->send(new ContactMessageMail($validated));

            return response()->json([
                'success' => true,
                'message' => '¡Tu mensaje ha sido enviado correctamente! Un asesor se pondrá en contacto a la brevedad.',
            ]);
        } catch (\Throwable $e) {
            Log::error('Error al enviar correo de contacto: ' . $e->getMessage(), [
                'exception' => $e,
                'payload' => $validated,
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Ocurrió un inconveniente al procesar tu solicitud por correo. Por favor contáctanos directamente vía WhatsApp o teléfono.',
            ], 500);
        }
    }
}
