<?php

namespace App\Filament\Pages;

use App\Filament\Resources\Products\ProductResource;

class Dashboard extends \Filament\Pages\Dashboard
{
    protected static bool $shouldRegisterNavigation = false;

    public function mount(): void
    {
        redirect()->to(ProductResource::getUrl('index'));
    }
}
