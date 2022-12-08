<?php

namespace App\Http\Controllers;

use App\Models\Cim;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CimController extends Controller
{
    public function index()
    {
        $cimek=Cim::all();
        return $cimek;
    }

    public function test()
    {
        $valami=DB::select(DB::raw("select test()"));
        return $valami;
    }
}
