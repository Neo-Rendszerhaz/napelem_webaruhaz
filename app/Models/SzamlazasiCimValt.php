<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SzamlazasiCimValt extends Model
{
    protected $table = 'szamlazasi_cim_valt';
    
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('felhasználo_id', '=', $this->getAttribute('felhasznalo_id'))
            ->where('datumig', '=', $this->getAttribute('datumig')); 
        return $query;
    }

    protected $fillable=[
        "felhasznalo_id",
        "datumig",
        "regi_szamlazasi_cim"
    ];
}
