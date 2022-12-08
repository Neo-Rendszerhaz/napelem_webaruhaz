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
            $table->primary(["felhasználó_id", "dátumig"]);
            $table->foreignId("felhasználó_id")->references("felhasználó_id")->on("felhasznalo");
            $table->date("dátumig");
            $table->foreignId("régi_számlázási_cím")->references("cím_id")->on("cim");
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
