<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'description',
        'price',
        'location',
        'image1',
        'image2',
        'image3',
        'status'

    ];
    
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function features() {
        return $this->hasMany(Feature :: class, 'property_id');
    }
}
