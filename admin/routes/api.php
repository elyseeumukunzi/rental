<?php

use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\FeatureController;
use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});
Route::get('/properties', [PropertyController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/category', [CategoryController::class, 'category']);
Route::get('/property', [PropertyController::class, 'property']);
Route::get('/features', [FeatureController::class, 'features']);
Route::get('/bookings', [BookingController::class, 'index']);
Route::get('/booking', [BookingController::class, 'booking']);
Route::post('/createbooking', [BookingController::class, 'createbooking']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/updatebooking', [BookingController::class, 'updatebooking']);









