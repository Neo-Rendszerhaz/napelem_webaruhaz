<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User;

class Felhasznalo extends User
{
    protected $table = 'felhasznalo';
    protected $primaryKey="felhasznalo_id";

    protected $fillable=[
        "email",
        "jelszo",
        "szamlazasi_cim",
        "szallitasi_cim_1",
        "szallitasi_cim_2",
        "szallitasi_cim_3",
        "vezeteknev",
        "keresztnev",
        "telefonszam",
        "cegnev",
        "adoszam",
        "jelleg",
        "jogosultsag"
    ];

    protected $hidden = [
        'jelszo',
        'remember_token',
    ];

    public function getAuthPassword()
    {
        return $this->jelszo;
    }
}
