<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    /**
     * Display the forgot password view.
     */
    public function show()
    {
        return view('auth.forgot-password');
    }

    /**
     * Send a password reset link to the given user.
     */
    public function sendResetLink(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
        ], [
            'email.required' => 'El correo electrónico es obligatorio.',
            'email.email' => 'Por favor ingresa un correo electrónico válido.',
            'email.exists' => 'No encontramos ningún usuario registrado con este correo electrónico.',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user) {
            $user->notify(new ResetPasswordNotification());
        }

        return back()->with('status', '¡Hemos enviado el enlace de restablecimiento a tu correo! Revisa tu bandeja de entrada.');
    }
}
