<?php

namespace App\Filament\Pages;

class Dashboard extends \Filament\Pages\Dashboard
{
    protected static bool $shouldRegisterNavigation = false;
    protected static ?string $navigationLabel = 'Dashboard';
    protected static ?string $title = 'Dashboard';
}
