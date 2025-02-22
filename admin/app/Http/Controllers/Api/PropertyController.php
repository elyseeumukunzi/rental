<?php

namespace App\Http\Controllers\Api;

use App\Filament\Resources\PropertyResource;
use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index(Request $request)  //retrieve all properties
    {
        return Property::All();
    }
    public function property(Request $request) //retrieve requested property only sent in request 
    {
        return Property::find($request->id);

    }
}
