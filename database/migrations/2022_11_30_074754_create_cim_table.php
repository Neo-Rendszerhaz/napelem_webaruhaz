<?php

use App\Models\Cim;
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
        Schema::create('cim', function (Blueprint $table) {
            $table->id('cim_id');
            $table->integer('iranyitoszam')->length(4);
            $table->string("varos", 30);
            $table->string("kozterulet_neve", 50);
            $table->string("kozterulet_jellege", 30);
            $table->string("hely_hazszam", 12);
            $table->char("hely_haz_jelleg", 4);
            $table->string("epulet", 6)->nullable()->default("");
            $table->string("emelet")->nullable()->length(2)->default("");
            $table->string("ajto", 5)->nullable()->default("");
            $table->string("kapucsengo")->nullable()->length(3)->default("");
            $table->timestamps();
        });

        DB::statement("ALTER table cim add constraint check_hely_hazszam check (left(hely_hazszam,1) in ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'))");
        DB::statement("ALTER table cim add constraint check_hely_ház_jelleg check (hely_haz_jelleg = 'hrsz' or hely_haz_jelleg = 'hsz')");
        // Cim::create(["irányítószám"=>1118, "város" => "Budapest", "közterület neve" => "Ménesi", "közterület jellege" => "út", "házszám" =>"77"]);
        Cim::create(["iranyitoszam"=>1041, "varos" => "Budapest", "kozterulet_neve" => "Lőrinc", "kozterulet_jellege" => "utca", "hely_hazszam" =>"10", "hely_haz_jelleg"=>"hsz"]);
        Cim::create(["iranyitoszam"=>1223, "varos" => "Budapest", "kozterulet_neve" => "Kukac", "kozterulet_jellege" => "körút", "hely_hazszam" =>"21", "hely_haz_jelleg"=>"hsz"]);
        Cim::create(["iranyitoszam"=>1211, "varos" => "Budapest", "kozterulet_neve" => "Terem", "kozterulet_jellege" => "tér", "hely_hazszam" =>"01", "hely_haz_jelleg"=>"hsz"]);
        Cim::create(["iranyitoszam"=>1141, "varos" => "Budapest", "kozterulet_neve" => "Nyár", "kozterulet_jellege" => "körút", "hely_hazszam" =>"02", "hely_haz_jelleg"=>"hsz"]);
        Cim::create(["iranyitoszam"=>1101, "varos" => "Budapest", "kozterulet_neve" => "Tél", "kozterulet_jellege" => "út", "hely_hazszam" =>"09", "hely_haz_jelleg"=>"hsz"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cim');
    }
};
