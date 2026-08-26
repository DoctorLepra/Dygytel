<?php

use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SetPasswordController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->to('/admin/login');
});

Route::middleware('web')->group(function () {
    Route::get('/admin/login', [LoginController::class, 'show'])
        ->name('login');
    Route::post('/admin/login', [LoginController::class, 'login'])
        ->name('login.submit');
    Route::post('/admin/logout', [LoginController::class, 'logout'])
        ->name('filament.admin.auth.logout');

    // Password Reset routes
    Route::get('/admin/forgot-password', [ForgotPasswordController::class, 'show'])
        ->name('password.request');
    Route::post('/admin/forgot-password', [ForgotPasswordController::class, 'sendResetLink'])
        ->name('password.email');
});

Route::get('/set-password/{user}', [SetPasswordController::class, 'show'])
    ->name('user.set-password');

Route::post('/set-password/{user}', [SetPasswordController::class, 'update']);
