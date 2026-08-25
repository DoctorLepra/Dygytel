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
            ->homeUrl(fn () => auth()->user()?->isEditor() ? '/admin/manage-home-page' : '/admin/products')
            ->breadcrumbs(false)
            ->colors([
                'primary' => Color::hex('#068dbb'),
                'info' => Color::hex('#0fd4d4'),
            ])
            ->font('Inter')
            ->brandName('Panel Administrativo Dygytel')
            ->favicon(asset('icono.png'))
            ->brandLogo(asset('Logo2.png'))
            ->brandLogoHeight('2.75rem')
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                \App\Filament\Pages\ManageHomePage::class,
                \App\Filament\Pages\ManageCatalogPage::class,
                \App\Filament\Pages\ManageServicesPage::class,
                \App\Filament\Pages\ManageAboutPage::class,
                \App\Filament\Pages\ManageContactPage::class,
            ])
            ->navigationGroups([
                \Filament\Navigation\NavigationGroup::make('Secciones CMS')
                    ->icon('heroicon-o-computer-desktop'),
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
                \Filament\View\PanelsRenderHook::HEAD_END,
                fn (): string => '
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
                    <style>
                        /* Brand Logo Sizing */
                        .fi-logo img,
                        .fi-sidebar-header img,
                        a.fi-logo img {
                            height: 2.75rem !important;
                            max-height: 2.75rem !important;
                            width: auto !important;
                        }

                        /* Force 4px vertical gap between Productos, Usuarios and Secciones CMS */
                        ul.fi-sidebar-nav-groups,
                        .fi-sidebar-nav-groups,
                        aside.fi-sidebar nav,
                        aside.fi-sidebar nav > ul {
                            gap: 0.25rem !important;
                            row-gap: 0.25rem !important;
                        }
                        .fi-sidebar-nav-groups > * + *,
                        aside.fi-sidebar nav > ul > * + * {
                            margin-top: 0.25rem !important;
                        }
                        aside.fi-sidebar .fi-sidebar-group,
                        .fi-sidebar-group {
                            margin-top: 0.25rem !important;
                            margin-bottom: 0.25rem !important;
                            padding-top: 0 !important;
                            padding-bottom: 0 !important;
                        }
                        aside.fi-sidebar .fi-sidebar-group-header,
                        .fi-sidebar-group-header {
                            padding-top: 0.25rem !important;
                            padding-bottom: 0.25rem !important;
                        }
                        aside.fi-sidebar .fi-sidebar-group-header button,
                        aside.fi-sidebar .fi-sidebar-group-header a {
                            padding-top: 0.5rem !important;
                            padding-bottom: 0.5rem !important;
                        }
                        aside.fi-sidebar .fi-sidebar-item,
                        .fi-sidebar-item {
                            margin-top: 0.125rem !important;
                            margin-bottom: 0.125rem !important;
                        }

                        /* Homogenize sidebar inactive items and group headers (Usuarios vs Secciones CMS) */
                        aside.fi-sidebar .fi-sidebar-item:not(.fi-active) .fi-sidebar-item-label,
                        aside.fi-sidebar .fi-sidebar-group-label,
                        aside.fi-sidebar .fi-sidebar-group-btn span,
                        .fi-sidebar-group-label,
                        .fi-sidebar-item:not(.fi-active) .fi-sidebar-item-label {
                            color: #475569 !important;
                            font-weight: 500 !important;
                            font-size: 0.875rem !important;
                        }

                        aside.fi-sidebar .fi-sidebar-item:not(.fi-active) .fi-sidebar-item-icon,
                        aside.fi-sidebar .fi-sidebar-group-btn svg,
                        .fi-sidebar-group-btn svg {
                            color: #64748b !important;
                        }

                        /* Smooth hover effects */
                        aside.fi-sidebar .fi-sidebar-item:not(.fi-active):hover .fi-sidebar-item-label,
                        aside.fi-sidebar .fi-sidebar-item:not(.fi-active):hover .fi-sidebar-item-icon,
                        aside.fi-sidebar .fi-sidebar-group-btn:hover .fi-sidebar-group-label,
                        aside.fi-sidebar .fi-sidebar-group-btn:hover svg {
                            color: #068dbb !important;
                        }
                    </style>
                '
            );
    }
}
