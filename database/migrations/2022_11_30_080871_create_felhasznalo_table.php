<?php

use App\Models\Felhasznalo;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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
        Schema::create('felhasznalo', function (Blueprint $table) {
            $table->id("felhasználó_id");
            $table->string("email", 80)->unique()->nullable(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('jelszó');
            $table->foreignId("számlázási cím")->nullable()->references("cím_id")->on("cim");
            $table->foreignId("szállítási cím 1")->nullable()->references("cím_id")->on("cim");
            $table->foreignId("szállítási cím 2")->nullable()->references("cím_id")->on("cim");
            $table->foreignId("szállítási cím 3")->nullable()->references("cím_id")->on("cim");
            $table->string("vezetéknév", 80);
            $table->string("keresztnév", 80);
            $table->integer("telefonszám");
            $table->string("cégnév", 80)->nullable();
            $table->char("adószám", 13)->nullable();
            $table->char("jelleg", 1); // M: magánszemély, C:cég
            $table->char("jogosultság", 1); //R: rendszer admin, A: általános admin, F: felhasználó
            $table->rememberToken();
            $table->timestamps();
        });

        DB::statement("ALTER table felhasznalo add constraint check_jelleg check (jelleg = 'M' or jelleg = 'C')");
        DB::statement("ALTER table felhasznalo add constraint check_jogosultság check (jogosultság = 'R' or jogosultság = 'A' or jogosultság = 'F')");

        Felhasznalo::create(["email" => "weinbergerpeti@gmail.com","jelszó" => Hash::make("Peti1999"), "vezetéknév" => "Weinberger", "keresztnév" => "Péter", "telefonszám" => 303696080, "jelleg" => "M", "jogosultság" => "R"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('felhasznalo');
    }
};
