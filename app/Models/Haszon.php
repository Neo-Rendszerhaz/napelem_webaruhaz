<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Haszon extends Model
{
    protected $table = 'haszon';
    
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('datum', '=', $this->getAttribute('datum'));
        return $query;
    } 

    protected $fillable=[
        "haszon_szazalek",
        "afa_szazalek"
    ];
}
