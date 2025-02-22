<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'property_id',
    ];

    public function Property()
    {
        //lets refer to the property_id in the database
        return $this->belongsTo(Property :: class, 'property_id' );
    }
}
