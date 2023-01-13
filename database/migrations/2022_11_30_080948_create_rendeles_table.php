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
            $table->id("rendelés_szám");
            $table->date("dátum")->getdate();
            $table->foreignId("felhasználó_id")->references("felhasználó_id")->on("users");
            $table->foreignId("szállítási_cím")->references("cím_id")->on("cim");
            $table->decimal("végösszeg");
            $table->integer("kedvezmény")->length(2)->default(0);
            $table->decimal("kedvezményes_ár");
            $table->char("állapot", 1);
            $table->timestamps();
        });

        DB::statement("ALTER table rendeles add constraint check_állapot check ( állapot in ('FL', 'FA', 'RL', 'KA', 'T'))");
        DB::statement("ALTER table rendeles add constraint check_kedvezmény check ( kedvezmény >=0 and kedvezmény <=99)");
        
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
