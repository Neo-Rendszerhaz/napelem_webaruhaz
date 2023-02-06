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
            $table->date("datum")->default(Carbon::now());
            $table->foreignId("felhasznalo_id")->references("felhasznalo_id")->on("felhasznalo");
            $table->foreignId("szallitasi_cim")->references("cim_id")->on("cim");
            $table->decimal("vegosszeg");
            $table->integer("kedvezmeny")->length(2)->default(0);
            $table->decimal("kedvezmenyes_ar")->storedAs('vegosszeg * ((100-kedvezmeny)/100)')->nullable();
            $table->char("allapot", 2)->default('FL');
            $table->timestamps();
        });

        DB::statement("ALTER table rendeles add constraint check_allapot check ( allapot in ('FL', 'FA', 'RL', 'KA', 'T'))");
        DB::statement("ALTER table rendeles add constraint check_kedvezmeny check ( kedvezmeny >=0 and kedvezmeny <=99)");

        Rendeles::create(["felhasznalo_id" => 2, "szallitasi_cim" => 2, "vegosszeg" => 2345]);
        Rendeles::create(["felhasznalo_id" => 1, "szallitasi_cim" => 3, "vegosszeg" => 10000, "kedvezmeny" => 10]);
        Rendeles::create(["felhasznalo_id" => 1, "szallitasi_cim" => 1, "vegosszeg" => 5500, "kedvezmeny" => 5]);
        
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
