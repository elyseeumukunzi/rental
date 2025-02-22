<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    public function features(Request $request)
    {
        return Feature::where('property_id', $request->id)->get();

    }
}
