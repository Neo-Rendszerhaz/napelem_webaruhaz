<?php

use App\Models\RendelesTetel;
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
            $table->decimal("ar");
            $table->timestamps();
        });

        DB::statement("ALTER table rendeles_tetel add constraint check_mennyiseg check ( mennyiseg > 0)");

        /*DB::unprepared('CREATE TRIGGER bruttoAr 
        before insert 
        on 
        rendeles_tetel
        for each row
        set rendeles_tetel.ar = ');*/

        RendelesTetel::create(["rendeles_szam"=>1, "termek_id"=>1,"mennyiseg"=>3, "ar"=>1030]);
        RendelesTetel::create(["rendeles_szam"=>2, "termek_id"=>2,"mennyiseg"=>3, "ar"=>1030]);
        RendelesTetel::create(["rendeles_szam"=>1, "termek_id"=>3,"mennyiseg"=>3, "ar"=>1030]);
        RendelesTetel::create(["rendeles_szam"=>3, "termek_id"=>5,"mennyiseg"=>1, "ar"=>6030]);
        RendelesTetel::create(["rendeles_szam"=>3, "termek_id"=>1,"mennyiseg"=>1, "ar"=>6030]);
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
