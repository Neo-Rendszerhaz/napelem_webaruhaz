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
        Schema::create('rendeles_tetel', function (Blueprint $table) {
            $table->primary(["rendelés_szám", "termék_id"]);
            $table->foreignId("rendelés_szám")->references("rendelés_szám")->on("rendeles");
            $table->foreignId("termék_id")->references("termék_id")->on("termek");
            $table->integer("mennyiség");
            $table->decimal("nettó_ár");
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
        Schema::dropIfExists('rendeles_tetel');
    }
};
