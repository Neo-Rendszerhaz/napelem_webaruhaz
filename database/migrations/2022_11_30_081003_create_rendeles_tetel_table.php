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
        Schema::create('rendeles_tetel', function (Blueprint $table) {
            $table->primary(["rendelés_szám", "termék_id"]);
            $table->foreignId("rendelés_szám")->references("rendelés_szám")->on("rendeles");
            $table->foreignId("termék_id")->references("termék_id")->on("termek");
            $table->integer("mennyiség");
            $table->decimal("nettó_ár");
            $table->timestamps();
        });

        DB::statement("ALTER table rendeles_tetel add constraint check_mennyiség check ( mennyiség > 0)");
        DB::statement("ALTER table rendeles_tetel add constraint check_nettó_ár check ( nettó_ár >= 0)");
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
