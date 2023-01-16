<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GaranciaValt extends Model
{
    protected $table = 'garancia_valt';
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('termek_id', '=', $this->getAttribute('termek_id'))
            ->where('datumig', '=', $this->getAttribute('datumig')); 
        return $query;
    }

    protected $fillable=[
        "termek_id",
        "datumig",
        "garancia"
    ];
}
