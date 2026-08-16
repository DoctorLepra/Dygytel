<?php

namespace App\Filament\Resources\WebContents\Pages;

use App\Filament\Resources\WebContents\WebContentResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditWebContent extends EditRecord
{
    protected static string $resource = WebContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $type = $data['type'] ?? 'text';
        $data["value_{$type}"] = $data['value'] ?? null;
        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $type = $data['type'] ?? 'text';
        $data['value'] = $data["value_{$type}"] ?? null;
        return $data;
    }
}
