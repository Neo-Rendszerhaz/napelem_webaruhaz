<?php

use App\Models\Termek;
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
            $table->string("megnevezes");
            $table->string("cikkszam");
            $table->string("gyartoi_cikkszam")->nullable();
            $table->string("marka");
            $table->integer("garancia");
            $table->timestamps();
        });

        DB::statement("ALTER table termek add constraint check_garancia check ( garancia >= 0)");
        Termek::create(["megnevezes"=>"Risen Energy Napelem RSM40-8-405M Black Mono 405w", "cikkszam"=>"320719", "gyartoi_cikkszam"=>"RSM40-8-405M","marka"=>"Risen","garancia"=>3]);
        Termek::create(["megnevezes"=>"Risen Energy Napelem RSM144-7-450M Mono 450w", "cikkszam"=>"312009", "gyartoi_cikkszam"=>"RSM144-7-450M","marka"=>"Risen","garancia"=>2]);
        Termek::create(["megnevezes"=>"Sunova Solar Napelem SS-410-54MDH PERC Mono 410w", "cikkszam"=>"324777", "gyartoi_cikkszam"=>"SS-410-54MDH","marka"=>"Sunova","garancia"=>2]);
        Termek::create(["megnevezes"=>"Huawei SUN 2000-6KTL-M1 - 3 fázis inverter", "cikkszam"=>"295514", "gyartoi_cikkszam"=>"SUN 2000-6KTL-M1","marka"=>"Huawei","garancia"=>3]);
        Termek::create(["megnevezes"=>"Huawei SUN 2000-5KTL-M1 - 3 fázis inverter", "cikkszam"=>"295512", "gyartoi_cikkszam"=>"SUN 2000-5KTL-M1","marka"=>"Huawei","garancia"=>4]);
        Termek::create(["megnevezes"=>"Huawei Luna Smart Power Sensor 3F 100A", "cikkszam"=>"314177", "gyartoi_cikkszam"=>"DTSU_100A","marka"=>"Huawei","garancia"=>2]);
        Termek::create(["megnevezes"=>"Tigo TS4-A-O 700W Optimizer 1,2m", "cikkszam"=>"319119", "gyartoi_cikkszam"=>"","marka"=>"Tigo","garancia"=>1]);
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
