<?php

namespace App\Http\Controllers;

use App\Models\GaranciaValt;
use Illuminate\Http\Request;

class GaranciaValtController extends Controller
{
    public function index()
    {
        $garanciaValtozasok=GaranciaValt::all();
        return $garanciaValtozasok;
    }

    public function show($termek_id, $datumig)
    {
        $garanciaValtozas = GaranciaValt::where('termek_id', $termek_id)->where('datumig', $datumig)->get();
        return $garanciaValtozas[0];
    }

    public function store(Request $request)
    {
        $garanciaValtozas= new GaranciaValt();
        $garanciaValtozas->termek_id = $request->termek_id;
        $garanciaValtozas->datumig = $request->datumig;
        $garanciaValtozas->garancia = $request->garancia;
        $garanciaValtozas->save();
    }

    public function update(Request $request, $termek_id, $datumig)
    {
        $garanciaValtozas= GaranciaValtController::show($termek_id, $datumig);
        $garanciaValtozas->termek_id = $request->termek_id;
        $garanciaValtozas->datumig = $request->datumig;
        $garanciaValtozas->garancia = $request->garancia;
        $garanciaValtozas->save();
    }

    public function destroy($termek_id, $datumig)
    {
        GaranciaValtController::show($termek_id, $datumig)->delete();
    }
}