<?php

namespace App\Filament\Resources\WebContents\Pages;

use App\Filament\Resources\WebContents\WebContentResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListWebContents extends ListRecords
{
    protected static string $resource = WebContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
