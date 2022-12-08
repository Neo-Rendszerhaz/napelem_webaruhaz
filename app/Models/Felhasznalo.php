<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Felhasznalo extends Model
{
    protected $table = 'felhasznalo';
    protected $primaryKey="felhasználó_id";

    protected $fillable=[
        "email",
        "jelszó",
        "számlázási cím",
        "szállítási cím 1",
        "szállítási cím 2",
        "szállítási cím 3",
        "vezetéknév",
        "keresztnév",
        "telefonszám",
        "cégnév",
        "adószám",
        "jelleg",
        "jogosultság"
    ];
}
