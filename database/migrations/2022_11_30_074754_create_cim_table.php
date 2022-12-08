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
            $table->id('cím_id');
            $table->integer('irányítószám')->length(4);
            $table->string("város", 30);
            $table->string("közterület neve", 50);
            $table->string("közterület jellege", 30);
            $table->string("hely_házszám", 12);
            $table->char("hely_ház_jelleg", 4);
            $table->string("épület", 6)->nullable();
            $table->integer("emelet")->nullable()->length(2);
            $table->string("ajtó", 5)->nullable();
            $table->integer("kapucsengő")->nullable()->length(3);
            $table->timestamps();
        });

        // DB::statement("ALTER table cim add constraint check_hely_házszám check (isnumeric(substring(hely_házszám,2,len(hely_házjelleg)) LIKE '%[0-9]%'))");
        DB::statement("ALTER table cim add constraint check_hely_ház_jelleg check (hely_ház_jelleg = 'hrsz' or hely_ház_jelleg = 'hsz')");
        // Cim::create(["irányítószám"=>1118, "város" => "Budapest", "közterület neve" => "Ménesi", "közterület jellege" => "út", "házszám" =>"77"]);
        Cim::create(["irányítószám"=>1041, "város" => "Budapest", "közterület neve" => "Lőrinc", "közterület jellege" => "utca", "hely_házszám" =>"10", "hely_ház_jelleg"=>"hsz"]);

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
