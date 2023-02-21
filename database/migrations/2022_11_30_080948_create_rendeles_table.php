<?php

use App\Models\Rendeles;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Carbon;
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
            $table->id("rendeles_szam");
            $table->dateTime("datum")->default(DB::raw("now()"));
            $table->foreignId("felhasznalo_id")->references("felhasznalo_id")->on("felhasznalo");
            $table->foreignId("szallitasi_cim")->references("cim_id")->on("cim");
            $table->integer("teljes_ar");
            $table->integer("kedvezmeny")->length(2)->default(0);
            $table->integer("vegosszeg")->storedAs('teljes_ar * ((100-kedvezmeny)/100)')->nullable();
            $table->char("allapot", 2)->default('FL');
            $table->timestamps();
        });

        DB::statement("ALTER table rendeles add constraint check_allapot check ( allapot in ('FL', 'FA', 'RL', 'KA', 'T'))");
        DB::statement("ALTER table rendeles add constraint check_kedvezmeny check ( kedvezmeny >=0 and kedvezmeny <=99)");

        Rendeles::create(["felhasznalo_id" => 2, "szallitasi_cim" => 2, "teljes_ar" => 2345]);
        Rendeles::create(["felhasznalo_id" => 1, "szallitasi_cim" => 3, "teljes_ar" => 10000, "kedvezmeny" => 10]);
        Rendeles::create(["felhasznalo_id" => 5, "szallitasi_cim" => 4, "teljes_ar" => 5500, "kedvezmeny" => 5]);
        Rendeles::create(["felhasznalo_id" => 4, "szallitasi_cim" => 5, "teljes_ar" => 999999, "kedvezmeny" => 0]);
        
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