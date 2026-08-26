<?php

namespace App\Filament\Pages\Auth;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\TextInput;
use Filament\Auth\Pages\Login as BaseLogin;
use Filament\Schemas\Components\Component;
use Filament\Actions\Action;
use Illuminate\Contracts\Support\Htmlable;

class Login extends BaseLogin
{
    public function getHeading(): string|Htmlable
    {
        return '';
    }

    protected function getEmailFormComponent(): Component
    {
        return TextInput::make('email')
            ->label('EMAIL')
            ->email()
            ->required()
            ->autocomplete()
            ->autofocus()
            ->prefixIcon('heroicon-o-user')
            ->placeholder('admin@dygytel.com')
            ->extraInputAttributes(['tabindex' => 1]);
    }

    protected function getPasswordFormComponent(): Component
    {
        return TextInput::make('password')
            ->label('CONTRASEÑA')
            ->hint(new \Illuminate\Support\HtmlString('<a href="#" class="text-[#068DBB] hover:underline font-semibold" style="text-transform: none; font-family: Inter;">¿Olvidaste la clave?</a>'))
            ->password()
            ->revealable(filament()->arePasswordsRevealable())
            ->required()
            ->prefixIcon('heroicon-o-lock-closed')
            ->placeholder('••••••••••••')
            ->extraInputAttributes(['tabindex' => 2]);
    }

    protected function getRememberFormComponent(): Component
    {
        return Checkbox::make('remember')
            ->label('Recordar este equipo');
    }

    protected function getAuthenticateFormAction(): Action
    {
        return Action::make('authenticate')
            ->label('INGRESAR →')
            ->submit('authenticate');
    }
}
