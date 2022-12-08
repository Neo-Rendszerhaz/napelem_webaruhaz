<?php

namespace App\Http\Controllers;

use App\Models\Cim;
use Illuminate\Http\Request;

class CimController extends Controller
{
    public function index()
    {
        $cimek=Cim::all();
        return $cimek;
    }
}
