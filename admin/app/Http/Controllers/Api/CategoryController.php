<?php

namespace App\Http\Controllers\Api;

use App\Filament\Resources\CategoryResource;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        return Category::All();
    }
    public function category(Request $request)
    {
        return Category::where('id', $request->id)->get();

    }

}
