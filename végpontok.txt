<?php

use App\Http\Controllers\CimController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\GaranciaValtController;
use App\Http\Controllers\HaszonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RendelesController;
use App\Http\Controllers\RendelesTetelController;
use App\Http\Controllers\SzamlazasiCimValtController;
use App\Http\Controllers\TermekController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () 
{
    // return view('welcome');
    return view("oldalak/index");
});

Route::group(['middleware' => ['auth', 'felhasznalo']], function() 
{
    Route::get('/dashboard', function () 
    {
        return view('dashboard');
    })->name('dashboard');

    Route::get("/profil", function()
    {
        return view("oldalak/felhasznalo/profil");
    })->name("profil");

    Route::get("/admin_felulet", function()
    {
        return view("oldalak/admin/admin_web_adatok");
    })->middleware("admin")->name("admin_felulet");

    Route::get("/kezdolap", function()
    {
        return view("oldalak/index");
    })->name("kezdolap");
});

Route::get("/be_reg_felulet", function()
{
    return view("oldalak/bejelentkezes_regisztracio");
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(["rendszerAdmin"])->group(function()
{
    
});

Route::middleware(["admin"])->group(function()
{

    Route::get("/f_cimek/{felhasznalo_id}", [FelhasznaloController::class, "felhasznalokCimekkel"]);

    Route::get("/cimek", [CimController::class, "index"]);
    Route::get("/cimek/{cim_id}", [CimController::class, "show"]);
    Route::post("/cimek", [CimController::class, "store"]);
    Route::put("/cimek/{cim_id}", [CimController::class, "update"]);
    Route::delete("/cimek/{cim_id}", [CimController::class, "destroy"]);

    Route::get("/felhasznalok", [FelhasznaloController::class, "index"]);
    Route::get("/felhasznalok/{felhasznalo_id}", [FelhasznaloController::class, "show"]);
    Route::post("/felhasznalok", [FelhasznaloController::class, "store"]);
    Route::put("/felhasznalok/{felhasznalo_id}", [FelhasznaloController::class, "update"]);
    Route::delete("/felhasznalok/{felhasznalo_id}", [FelhasznaloController::class, "destroy"]);

    Route::get("/garanciaValtozasok", [GaranciaValtController::class, "index"]);
    Route::get("/garanciaValtozasok/{termek_id}/{datumig}", [GaranciaValtController::class, "show"]);
    Route::post("/garanciaValtozasok", [GaranciaValtController::class, "store"]);
    Route::put("/garanciaValtozasok/{termek_id}/{datumig}", [GaranciaValtController::class, "update"]);
    Route::delete("/garanciaValtozasok/{termek_id}/{datumig}", [GaranciaValtController::class, "destroy"]);

    Route::get("/haszon", [HaszonController::class, "index"]);
    Route::get("/haszon/{datum}", [HaszonController::class, "show"]);
    Route::post("/haszon", [HaszonController::class, "store"]);
    Route::put("/haszon/{datum}", [HaszonController::class, "update"]);
    Route::delete("/haszon/{datum}", [HaszonController::class, "destroy"]);

    Route::get("/rendelesek", [RendelesController::class, "index"]);
    Route::get("/rendelesek/{rendeles_id}", [RendelesController::class, "show"]);
    Route::post("/rendelesek", [RendelesController::class, "store"]);
    Route::put("/rendelesek/{rendeles_id}", [RendelesController::class, "update"]);
    Route::delete("/rendelesek/{rendeles_id}", [RendelesController::class, "destroy"]);
    Route::get("/rendelesek_cimmel_felhasznaloval", [RendelesController::class, "CimEsFelhasznalo"]);

    Route::get("/rendeles_tetelek", [RendelesTetelController::class, "index"]);
    Route::get("/rendeles_tetelek_termekkel", [RendelesTetelController::class, "termekekkel"]);
    Route::get("/rendeles_tetelek/{rendeles_szam}/{termek_id}", [RendelesTetelController::class, "show"]);
    Route::post("/rendeles_tetelek", [RendelesTetelController::class, "store"]);
    Route::put("/rendeles_tetelek/{rendeles_szam}/{termek_id}", [RendelesTetelController::class, "update"]);
    Route::delete("/rendeles_tetelek/{rendeles_szam}/{termek_id}", [RendelesTetelController::class, "destroy"]);

    Route::get("/szamlazasi_cim_valtozasok", [SzamlazasiCimValtController::class, "index"]);
    Route::get("/szamlazasi_cim_valtozasok/{felhasználo_id}/{datumig}", [SzamlazasiCimValtController::class, "show"]);
    Route::post("/szamlazasi_cim_valtozasok", [SzamlazasiCimValtController::class, "store"]);
    Route::put("/szamlazasi_cim_valtozasok/{felhasználo_id}/{datumig}", [SzamlazasiCimValtController::class, "update"]);
    Route::delete("/szamlazasi_cim_valtozasok/{felhasználo_id}/{datumig}", [SzamlazasiCimValtController::class, "destroy"]);

    Route::get("/termekek", [TermekController::class, "index"]);
    Route::get("/termekek/{termek_id}", [TermekController::class, "show"]);
    Route::post("/termekek", [TermekController::class, "store"]);
    Route::put("/termekek/{termek_id}", [TermekController::class, "update"]);
    Route::delete("/termekek/{termek_id}", [TermekController::class, "destroy"]);
});

Route::middleware(["felhasznalo"])->group(function()
{    
    Route::get("/adatok", [FelhasznaloController::class, "aktualisFelhasznaloAdatai"]);
    Route::get("/f_rendelesek", [FelhasznaloController::class, "aktualisFelhasznaloRendelesei"]);
});

 /* VÉGPONTOK */

require __DIR__.'/auth.php';