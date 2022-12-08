<?php

use App\Http\Controllers\CimController;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get("/api/cimek", [CimController::class, "index"]);
Route::get("teszt_mail", [MailController::class, "index"]);
