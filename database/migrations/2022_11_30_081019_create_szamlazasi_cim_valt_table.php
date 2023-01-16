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
        Schema::create('szamlazasi_cim_valt', function (Blueprint $table) {
            $table->primary(["felhasznalo_id", "datumig"]);
            $table->foreignId("felhasznalo_id")->references("felhasznalo_id")->on("users");
            $table->date("datumig");
            $table->foreignId("regi_szamlazasi_cim")->references("cim_id")->on("cim");
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
        Schema::dropIfExists('szamlazasi_cim_valt');
    }
};
