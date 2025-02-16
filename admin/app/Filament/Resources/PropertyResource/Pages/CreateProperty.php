<?php

namespace App\Filament\Resources\PropertyResource\Pages;

use App\Filament\Resources\PropertyResource;
use App\Models\Feature;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateProperty extends CreateRecord
{
    protected static string $resource = PropertyResource::class;

    protected function afterCreate(): void
    {
        $property = $this->record; // Get this created property
        $data = $this->form->getState(); // Get the submitted form data

        if (!empty($data['features'])) {
            foreach ($data['features'] as $feature) {
                Feature::create([
                    'property_id' => $property->id, // Get the saved property ID and save it as a foreign key
                    'name' => $feature['name'],
                    'description' => $feature['description'],
                ]);
            }
        }
    }
}
