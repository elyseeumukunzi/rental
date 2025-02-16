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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('category_id');  //rentals may be of different type; apartment, house, office,.. etc
            $table->string('title');
            $table->text('description');
            $table->string('price');    //may be price per night or per day depending on the category
            $table->string('location');
            $table->string('image1');
            $table->string('image2');
            $table->string('image3');
            $table->string('status'); //booked or available
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
