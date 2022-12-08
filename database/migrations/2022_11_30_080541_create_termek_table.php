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
        Schema::create('termek', function (Blueprint $table) {
            $table->id("termék_id");
            $table->string("megnevezés", 80);
            $table->string("cikkszám", 10);
            $table->string("gyártói cikkszám", 80);
            $table->string("márka", 80);
            $table->integer("garancia");
            $table->string("leírás", 80);
            $table->timestamps();
        });

        DB::statement("ALTER table termek add constraint check_garancia check ( garancia >= 0)");
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
