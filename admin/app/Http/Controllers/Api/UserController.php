<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request) 
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            // Create new user if not found from data sent 
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make(uniqid()), 
            ]);
        }
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'User authenticated',
            'user' => $user,
            'userid' => $user->id,
            'token' => $token,
        ]);


        // Check if the password is correct

    }
}
