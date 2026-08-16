<?php

namespace App\Filament\Resources\WebContents\Pages;

use App\Filament\Resources\WebContents\WebContentResource;
use Filament\Resources\Pages\CreateRecord;

class CreateWebContent extends CreateRecord
{
    protected static string $resource = WebContentResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $type = $data['type'] ?? 'text';
        $data['value'] = $data["value_{$type}"] ?? null;
        return $data;
    }
}
