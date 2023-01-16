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

    public function show($cim_id)
    {
        $cim=Cim::find($cim_id);
        return $cim;
    }

    public function store(Request $request)
    {
        $cim= new Cim();
        $cim->iranyitoszam = $request->iranyitoszam;
        $cim->varos = $request->varos;
    }
}
