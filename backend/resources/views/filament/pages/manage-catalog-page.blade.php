<x-filament-panels::page>
    <form wire:submit="save">
        {{ $this->form }}

        <div style="margin-top: 1.5rem !important; padding-top: 1rem !important;" class="border-t border-gray-200 dark:border-gray-800 flex justify-end">
            <x-filament::button type="submit" size="lg" color="primary">
                Guardar Cambios
            </x-filament::button>
        </div>
    </form>
</x-filament-panels::page>
