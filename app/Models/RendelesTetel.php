<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RendelesTetel extends Model
{
    protected $table = 'rendeles_tetel';

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('rendeles_szam', '=', $this->getAttribute('rendeles_szam'))
            ->where('termek_id', '=', $this->getAttribute('termek_id')); 
        return $query;
    } 

    protected $fillable=[
        "termek_id",
        "mennyiseg",
        "netto_ar",
        "ar",
    ];
}
