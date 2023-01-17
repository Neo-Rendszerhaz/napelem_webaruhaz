<?php

use App\Models\Haszon;
use Carbon\Carbon as CarbonCarbon;
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
        Schema::create('haszon', function (Blueprint $table) {
            $table->primary(["datum"]);
            $table->date("datum")->default(Carbon::now());
            $table->integer("haszon_szazalek");
            $table->integer("afa_szazalek");
            $table->timestamps();
        });

        DB::statement("ALTER table haszon add constraint check_haszon_szazalek_nagyobb check ( haszon_szazalek >= 0)");
        DB::statement("ALTER table haszon add constraint check_afa_szazalek_nagyobb check ( afa_szazalek >= 0)");

        Haszon::create(["haszon_szazalek" => 50, "afa_szazalek" => 27]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('haszon');
    }
};
