<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SzamlazasiCimValt extends Model
{
    protected $table = 'szamlazasi_cim_valt';
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('felhasználó_id', '=', $this->getAttribute('felhasználó_id'))
            ->where('dátumig', '=', $this->getAttribute('dátumig')); 
        return $query;
    }

    protected $fillable=[
        "felhasználó_id",
        "dátumig",
        "régi_számlázási_cím"
    ];
}
