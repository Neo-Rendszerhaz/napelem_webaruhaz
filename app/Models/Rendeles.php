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
        "teljes_ar",
        "kedvezmeny",
        "vegosszeg",
        "allapot",
    ];
}
