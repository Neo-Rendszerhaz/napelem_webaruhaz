<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('termek', function (Blueprint $table) {
            $table->id("termek_id");
            $table->string("megnevezes", 80);
            $table->string("cikkszam", 10);
            $table->string("gyartoi_cikkszam", 80);
            $table->string("marka", 80);
            $table->integer("garancia");
            $table->string("leiras", 80);
            $table->timestamps();
        });

        DB::statement("ALTER table termek add constraint check_garancia check ( garancia >= 0)");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('termek');
    }
};
