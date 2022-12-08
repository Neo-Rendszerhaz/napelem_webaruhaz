<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GaranciaValt extends Model
{
    protected $table = 'garancia_valt';
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('termék_id', '=', $this->getAttribute('termék_id'))
            ->where('dátumig', '=', $this->getAttribute('dátumig')); 
        return $query;
    }

    protected $fillable=[
        "termék_id",
        "dátumig",
        "garancia"
    ];
}
