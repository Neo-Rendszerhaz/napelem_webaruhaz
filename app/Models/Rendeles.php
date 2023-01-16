<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rendeles extends Model
{
    protected $table = 'rendeles';
    protected $primaryKey="rendeles_szam";

    protected $fillable=[
        "datum",
        "felhasznalo_id",
        "szallitasi_cim",
        "vegosszeg",
        "kedvezmeny",
        "kedvezmenyes_ar",
        "allapot",
    ];
}
