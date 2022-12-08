<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('garancia_valt', function (Blueprint $table) {
            $table->primary(["termék_id", "dátumig"]);
            $table->foreignId("termék_id")->references("termék_id")->on("termek");
            $table->date("dátumig");
            $table->integer("garancia");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('garancia_valt');
    }
};
