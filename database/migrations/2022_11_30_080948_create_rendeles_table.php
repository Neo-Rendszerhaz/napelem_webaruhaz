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
        Schema::create('rendeles', function (Blueprint $table) {
            $table->id("rendelés_szam");
            $table->date("datum")->getdate();
            $table->foreignId("felhasznalo_id")->references("felhasznalo_id")->on("users");
            $table->foreignId("szallitasi_cim")->references("cim_id")->on("cim");
            $table->decimal("vegosszeg");
            $table->integer("kedvezmeny")->length(2)->default(0);
            $table->decimal("kedvezmenyes_ar");
            $table->char("allapot", 1);
            $table->timestamps();
        });

        DB::statement("ALTER table rendeles add constraint check_allapot check ( allapot in ('FL', 'FA', 'RL', 'KA', 'T'))");
        DB::statement("ALTER table rendeles add constraint check_kedvezmeny check ( kedvezmeny >=0 and kedvezmeny <=99)");
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rendeles');
    }
};
