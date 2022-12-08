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
        Schema::create('haszon', function (Blueprint $table) {
            $table->primary(["dátum"]);
            $table->date("dátum");
            $table->integer("haszon_százalék");
            $table->integer("áfa_százalék");
            $table->timestamps();
        });

        DB::statement("ALTER table haszon add constraint check_haszon_százalék_nagyobb check ( haszon_százalék >= 0)");
        DB::statement("ALTER table haszon add constraint check_áfa_százalék_nagyobb check ( áfa_százalék >= 0)");
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
