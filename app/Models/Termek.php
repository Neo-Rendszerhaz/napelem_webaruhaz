<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Termek extends Model
{
    protected $table = 'termek';
    protected $primaryKey="termek_id";

    protected $fillable=[
        "megnevezes",
        "cikkszam",
        "gyartoi cikkszam",
        "marka",
        "garancia",
        "leiras"
    ];
}
