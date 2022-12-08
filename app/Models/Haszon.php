<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Haszon extends Model
{
    protected $table = 'haszon';
    
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('dátum', '=', $this->getAttribute('dátum'));
        return $query;
    } 

    protected $fillable=[
        "haszon_százalék",
        "áfa_százalék"
    ];
}
