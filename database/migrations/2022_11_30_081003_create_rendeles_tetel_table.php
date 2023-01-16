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
            $table->primary(["rendeles_szam", "termek_id"]);
            $table->foreignId("rendeles_szam")->references("rendeles_szam")->on("rendeles");
            $table->foreignId("termek_id")->references("termek_id")->on("termek");
            $table->integer("mennyiseg");
            $table->decimal("netto_ar");
            $table->timestamps();
        });

        DB::statement("ALTER table rendeles_tetel add constraint check_mennyiseg check ( mennyiseg > 0)");
        DB::statement("ALTER table rendeles_tetel add constraint check_netto_ar check ( netto_ar >= 0)");
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
