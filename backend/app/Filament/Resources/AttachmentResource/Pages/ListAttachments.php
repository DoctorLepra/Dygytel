<?php

namespace App\Filament\Resources\AttachmentResource\Pages;

use App\Filament\Resources\AttachmentResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListAttachments extends ListRecords
{
    protected static string $resource = AttachmentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->label('Nuevo Anexo / Documento')
                ->icon('heroicon-o-document-plus')
                ->modalHeading('Subir Nuevo Anexo')
                ->modalDescription('Carga un archivo PDF para asociarlo a los enlaces públicos del sitio web.')
                ->modalSubmitActionLabel('Guardar y Publicar')
                ->modalWidth('lg')
                ->color('primary')
                ->createAnother(false),
        ];
    }
}
