<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->name,
            'description' => $this->description,
            'image1' => $this->image1,
            'image2' => $this->image2,
            'image3' => $this->image3,
            'location' => $this->location,
            'price' => $this->price,
            'status' => $this->status,
            'category' => new CategoryResource($this->category),
        ];
    }
}
