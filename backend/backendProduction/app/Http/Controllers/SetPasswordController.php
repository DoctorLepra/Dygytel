<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class SetPasswordController extends Controller
{
    /**
     * Display the set password view.
     */
    public function show(Request $request, User $user)
    {
        if (! $request->hasValidSignature()) {
            abort(401, 'El enlace de invitación es inválido o ha expirado.');
        }

        return view('auth.set-password', [
            'user' => $user,
        ]);
    }

    /**
     * Handle updating the user's password.
     */
    public function update(Request $request, User $user)
    {
        if (! $request->hasValidSignature()) {
            abort(401, 'El enlace de invitación es inválido o ha expirado.');
        }

        $request->validate([
            'password' => [
                'required',
                'confirmed',
                Password::min(6)
                    ->mixedCase()
                    ->numbers()
                    ->symbols(),
            ],
        ], [
            'password.required' => 'La contraseña es obligatoria.',
            'password.confirmed' => 'La confirmación de la contraseña no coincide.',
            'password.min' => 'La contraseña debe tener al menos 6 caracteres.',
        ]);

        $user->forceFill([
            'password' => Hash::make($request->password),
            'email_verified_at' => now(),
        ])->save();

        return redirect('/admin/login')->with('status', '¡Tu contraseña se ha establecido correctamente! Ya puedes iniciar sesión.');
    }
}
