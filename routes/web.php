<?php

use App\Http\Controllers\CimController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\ProfileController;
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
    return view('welcome');
});

Route::get('/dashboard', function () 
{
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(["rendszerAdmin"])->group(function()
{
    Route::get("/cimek", [CimController::class, "index"]);
    Route::get("/cimek/{cim_id}", [CimController::class, "show"]);
    Route::post("/cimek", [CimController::class, "store"]);
    Route::post("/cimek/{cim_id}", [CimController::class, "update"]);
    Route::post("/cimek/{cim_id}", [CimController::class, "delete"]);

    Route::get("/felhasznalok", [FelhasznaloController::class, "index"]);
    Route::get("/felhasznalok/{felhasznalo_id}", [FelhasznaloController::class, "show"]);
    Route::post("/felhasznalok", [FelhasznaloController::class, "store"]);
    Route::post("/felhasznalok/{felhasznalo_id}", [FelhasznaloController::class, "update"]);
    Route::post("/felhasznalok/{felhasznalo_id}", [FelhasznaloController::class, "delete"]);
});

Route::middleware(["admin"])->group(function()
{
    
});

Route::middleware(["felhasznalo"])->group(function()
{
   
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

 /* VÉGPONTOK */


require __DIR__.'/auth.php';
