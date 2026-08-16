<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->breadcrumbs(false)
            ->login(\App\Filament\Pages\Auth\Login::class)
            ->colors([
                'primary' => Color::hex('#068dbb'),
                'info' => Color::hex('#0fd4d4'),
            ])
            ->font('Inter')
            ->brandLogo(asset('Logo2.png'))
            ->brandLogoHeight('3.5rem')
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                \App\Filament\Pages\ManageHomePage::class,
                \App\Filament\Pages\ManageServicesPage::class,
                \App\Filament\Pages\ManageAboutPage::class,
                \App\Filament\Pages\ManageContactPage::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                AccountWidget::class,
                FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                PreventRequestForgery::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->renderHook(
                \Filament\View\PanelsRenderHook::BODY_START,
                fn (): string => request()->routeIs('filament.admin.auth.login') ? \Illuminate\Support\Facades\Blade::render('
                    <!-- Halos and background elements -->
                    <div class="fixed inset-0 -z-20 overflow-hidden dark-elements hidden">
                        <div class="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0FD4D4]/20 blur-[140px]"></div>
                        <div class="absolute top-[40%] -right-40 h-[600px] w-[600px] rounded-full bg-[#068DBB]/20 blur-[160px]"></div>
                        <div class="absolute inset-0 opacity-[0.25]" style="background-image: linear-gradient(to right, rgba(6,141,187,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,141,187,0.12) 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%);"></div>
                    </div>
                    <style>
                        /* Base (Light mode) */
                        html, body { background-color: #f8fafc !important; }
                        html.dark .dark-elements { display: block !important; }
                        html.dark, html.dark body { background-color: #030712 !important; color: white !important; }
                        
                        .fi-simple-page { background: transparent !important; }
                        
                        /* Main Card */
                        .fi-simple-main {
                            background: #ffffff !important;
                            border: none !important;
                            box-shadow: 0 0 80px rgba(15, 212, 212, 0.1) !important;
                            border-radius: 1.5rem !important;
                            padding: 2.5rem !important;
                            transition: all 0.3s ease;
                        }
                        html.dark .fi-simple-main {
                            background: rgba(255, 255, 255, 0.03) !important;
                            backdrop-filter: blur(16px) !important;
                            border: 1px solid rgba(255, 255, 255, 0.08) !important;
                            box-shadow: 0 0 30px rgba(6, 141, 187, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.02) !important;
                        }
                        
                        .fi-logo { justify-content: center !important; margin-bottom: 1rem !important; }

                        /* Labels */
                        .fi-fo-field-wrp-label label {
                            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                            text-transform: uppercase !important;
                            font-size: 10px !important;
                            letter-spacing: 0.1em !important;
                            font-weight: 800 !important;
                            color: #6b7280 !important;
                        }
                        
                        /* Inputs */
                        .fi-input-wrapper {
                            background: transparent !important;
                            border: 1px solid #e5e7eb !important;
                            border-radius: 0.75rem !important;
                            box-shadow: none !important;
                        }
                        html.dark .fi-input-wrapper {
                            background: rgba(0, 0, 0, 0.2) !important;
                            border-color: rgba(255, 255, 255, 0.1) !important;
                        }
                        .fi-input-wrapper:focus-within {
                            border-color: #0fd4d4 !important;
                            box-shadow: 0 0 0 1px #0fd4d4 !important;
                        }
                        
                        .fi-input { font-weight: 500 !important; color: #111827 !important; }
                        html.dark .fi-input { color: #f9fafb !important; }

                        /* Button */
                        button[type="submit"] {
                            background: linear-gradient(135deg, #068DBB 0%, #0FD4D4 100%) !important;
                            border: none !important;
                            border-radius: 9999px !important;
                            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                            text-transform: uppercase !important;
                            letter-spacing: 0.1em !important;
                            font-weight: 800 !important;
                            color: white !important;
                            padding-top: 14px !important;
                            padding-bottom: 14px !important;
                            box-shadow: 0 4px 14px rgba(15, 212, 212, 0.3) !important;
                            transition: all 0.3s ease !important;
                            margin-top: 1rem !important;
                        }
                        button[type="submit"]:hover { filter: brightness(1.1) !important; transform: translateY(-1px) !important; }

                        /* Links */
                        .fi-simple-main a { color: #068DBB !important; font-weight: 600 !important; }
                        .fi-simple-main a:hover { color: #0FD4D4 !important; }
                        
                        /* Headers */
                        .fi-simple-header-heading, .fi-simple-header-subheading { display: none !important; }
                    </style>
                ') : ''
            )
            ->renderHook(
                \Filament\View\PanelsRenderHook::AUTH_LOGIN_FORM_AFTER,
                fn (): string => request()->routeIs('filament.admin.auth.login') ? \Illuminate\Support\Facades\Blade::render('
                    <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                        <button type="button" onclick="document.documentElement.classList.toggle(\'dark\'); localStorage.setItem(\'theme\', document.documentElement.classList.contains(\'dark\') ? \'dark\' : \'light\');" class="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors">
                            <!-- Moon icon -->
                            <svg class="dark:hidden block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            <!-- Sun icon -->
                            <svg class="hidden dark:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        </button>
                        <a href="http://127.0.0.1:8080" class="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 hover:text-[#068DBB]" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Courier New\', monospace;">
                            &larr; VOLVER AL SITIO
                        </a>
                    </div>
                ') : ''
            );
    }
}
