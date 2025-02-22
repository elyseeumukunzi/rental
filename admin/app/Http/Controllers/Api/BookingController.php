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
        $bookings = Booking::where('user_id', $request->userid)
            ->with('property:id,title') // Select only property title
            ->get();

        // Modify response to include the property title
        $bookings = $bookings->map(function ($booking) {
            return [
                'id' => $booking->id,
                'start_date' => $booking->start_date, // Ensure column names match
                'end_date' => $booking->end_date,
                'property_id' => $booking->property_id,
                'property_title' => $booking->property ? $booking->property->title : 'N/A',
                'status' => $booking->status,
                'comment' => $booking->comment,
            ];
        });
        return $bookings;

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
