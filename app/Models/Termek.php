<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Termek extends Model
{
    protected $table = 'termek';
    protected $primaryKey="termék_id";

    protected $fillable=[
        "megnevezés",
        "cikkszám",
        "gyártói cikkszám",
        "márka",
        "garancia",
        "leírás"
    ];
}
