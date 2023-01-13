<?php

use App\Models\User;
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
        Schema::create('users', function (Blueprint $table) 
        {
            $table->id("felhasználó_id");
            $table->string("name");
            $table->string("email", 80)->unique();
            $table->string('password');
            // $table->boolean('jogosultsag')->default(2);
            $table->timestamp('email_verified_at')->nullable();
            // $table->string('jelszó');
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
            $table->integer("jogosultság")->default(2); //R | 0: rendszer admin, A | 1: általános admin, F | 2: felhasználó
            $table->rememberToken();
            $table->timestamps();
        });

        // User::create(['name'=>'store', 'email'=>'store@gmail.com', 'password'=> Hash::make('St123456'), 'jogosultsag'=> 0]);
        // User::create(['name'=>'Marcsi', 'email'=>'student1@gmail.com', 'password'=> Hash::make('Aa123456'), 'jogosultsag'=> 1]);
        // User::create(['name'=>'Iván', 'email'=>'student2@gmail.com', 'password'=> Hash::make('Aa123456')]);

        // DB::statement("ALTER table users add constraint check_jelleg check (jelleg = 'M' or jelleg = 'C')");
        // DB::statement("ALTER table users add constraint check_jogosultság check (jogosultság = 'R' or jogosultság = 'A' or jogosultság = 'F')");

        User::create(["name" => "Weinberger Péter","email" => "weinbergerpeti@gmail.com", "password" => Hash::make("Aa123456"), "vezetéknév" => "Weinberger", "keresztnév" => "Péter", "telefonszám" => 303696080, "jelleg" => "M", "jogosultság" => 0]);
        User::create(["name" => "Ulrich Bence", "email" => "ulrichbence@gmail.com","password" => Hash::make("Aa123456"), "vezetéknév" => "Ulrich", "keresztnév" => "Bence", "telefonszám" => 303696080, "jelleg" => "M", "jogosultság" => 1]);
        User::create(["name" => "Xu Máté", "email" => "xumate@gmail.com","password" => Hash::make("Aa123456"), "vezetéknév" => "Xu", "keresztnév" => "Máté", "telefonszám" => 303696080, "jelleg" => "M", "jogosultság" => 2]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
