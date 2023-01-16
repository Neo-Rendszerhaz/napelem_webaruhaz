<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cim extends Model
{
    protected $table = 'cim';
    
    protected $primaryKey="cim_id";
    
    protected $fillable=[
        "iranyitoszam",
        "varos",
        "kozterulet_neve",
        "kozterulet_jellege",
        "hely_hazszam",
        "hely_haz_jelleg",
        "epulet",
        "emelet",
        "ajto",
        "kapucsengo"
    ];
}
