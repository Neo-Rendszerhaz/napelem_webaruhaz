<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User;

class Felhasznalo extends User
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

    protected $hidden = [
        'jelszó',
        'remember_token',
    ];

    public function getAuthPassword()
    {
        return $this->jelszó;
    }
}
