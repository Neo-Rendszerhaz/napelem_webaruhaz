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
            $table->id("felhasznalo_id");
            $table->string("email", 80)->unique()->nullable(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('jelszo');
            $table->foreignId("szamlazasi_cim")->nullable()->references("cim_id")->on("cim");
            $table->foreignId("szallitasi_cim_1")->nullable()->references("cim_id")->on("cim");
            $table->foreignId("szallitasi_cim_2")->nullable()->references("cim_id")->on("cim");
            $table->foreignId("szallitasi_cim_3")->nullable()->references("cim_id")->on("cim");
            $table->string("vezeteknev", 80);
            $table->string("keresztnev", 80);
            $table->integer("telefonszam");
            $table->string("cegnev", 80)->nullable();
            $table->char("adoszam", 13)->nullable();
            $table->char("jelleg", 1); // M: magánszemély, C:cég
            $table->char("jogosultsag", 1); //R: rendszer admin, A: általános admin, F: felhasználó
            $table->rememberToken();
            $table->timestamps();
        });

        DB::statement("ALTER table felhasznalo add constraint check_jelleg check (jelleg = 'M' or jelleg = 'C')");
        DB::statement("ALTER table felhasznalo add constraint check_jogosultsag check (jogosultsag = 'R' or jogosultsag = 'A' or jogosultsag = 'F')");

        Felhasznalo::create(["email" => "weinbergerpeti@gmail.com","jelszo" => Hash::make("Aa123456"), "vezeteknev" => "Weinberger", "keresztnev" => "Péter", "telefonszam" => 303696080, "jelleg" => "M", "jogosultsag" => "R"]);
        Felhasznalo::create(["email" => "folyekonyszilard@gmail.com","jelszo" => Hash::make("Aa123456"), "vezeteknev" => "Folyékony", "keresztnev" => "Szilárd", "telefonszam" => 301234567, "jelleg" => "M", "jogosultsag" => "F"]);
        Felhasznalo::create(["email" => "batorjanos@gmail.com","jelszo" => Hash::make("Aa123456"), "vezeteknev" => "Bátor", "keresztnev" => "János", "telefonszam" => 209575324, "jelleg" => "M", "jogosultsag" => "A"]);
        Felhasznalo::create(["email" => "kecskeikende@gmail.com","jelszo" => Hash::make("Aa123456"), "vezeteknev" => "Kecskei", "keresztnev" => "Kende", "telefonszam" => 709384235, "jelleg" => "M", "jogosultsag" => "F"]);
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
