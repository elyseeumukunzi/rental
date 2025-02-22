<?php

namespace App\Http\Controllers\Api;

use App\Filament\Resources\BookingResource;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        return Booking::All();
    }
    public function Booking(Request $request)  //get a specific booking based on id
    {
        return Booking::where('id', $request->id)->get();

    }
    public function MyBooking(Request $request) //get only user's booking according to the user id
    {
        return Booking::where('user_id', $request->id)->get();

    }
    public function createbooking(Request $request)
    {
        $booking = Booking::create($request->all());

        return response()->json([
            'message' => 'Booking created successfully!',
        ], 201);

    }
    public function updatebooking(Request $request)
    {
        $booking = Booking::find($request->id);
        //lets update the booking status only 

        $booking->update([
            'status' => $request->status,
        ]);

        return response()->json([
            'message' => 'Booking updated successfully!',
        ], 200);
    }

}
