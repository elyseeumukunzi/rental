<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
                $table->id();
                $table->foreignId('property_id')->constrained()->onDelete('cascade'); 
                $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
                $table->string('start_date'); // When the booking starts
                $table->string('end_date'); // When the booking ends
                $table->string('comment')->nullable();
                $table->string('status')->default('pending'); // Booking status (Either pending, comfirmed, cancelled)
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
