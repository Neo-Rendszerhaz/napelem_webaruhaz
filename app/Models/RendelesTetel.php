<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RendelesTetel extends Model
{
    protected $table = 'rendeles_tetel';
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('rendelés_szám', '=', $this->getAttribute('rendelés_szám'))
            ->where('termék_id', '=', $this->getAttribute('termék_id')); 
        return $query;
    } 

    protected $fillable=[
        "termék_id",
        "mennyiség",
        "nettó_ár",
    ];
}
