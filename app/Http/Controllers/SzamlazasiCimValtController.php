<?php

namespace App\Http\Controllers;

use App\Models\SzamlazasiCimValt;
use Illuminate\Http\Request;

class SzamlazasiCimValtController extends Controller
{
    public function index()
    {
        $szamlazasiCimValtozasok=SzamlazasiCimValt::all();
        return $szamlazasiCimValtozasok;
    }

    public function show($felhasználo_id, $datumig)
    {
        $szamlazasiCimValtozas = SzamlazasiCimValt::where('felhasználo_id', $felhasználo_id)->where('datumig', $datumig)->get();
        return $szamlazasiCimValtozas[0];
    }

    public function store(Request $request)
    {
        $szamlazasiCimValtozas= new SzamlazasiCimValt();
        $szamlazasiCimValtozas->felhasznalo_id = $request->felhasznalo_id;
        $szamlazasiCimValtozas->datumig = $request->datumig;
        $szamlazasiCimValtozas->regi_szamlazasi_cim = $request->regi_szamlazasi_cim;
        $szamlazasiCimValtozas->save();
    }

    public function update(Request $request, $felhasználo_id, $datumig)
    {
        $szamlazasiCimValtozas= SzamlazasiCimValtController::show($felhasználo_id, $datumig);
        $szamlazasiCimValtozas->felhasznalo_id = $request->felhasznalo_id;
        $szamlazasiCimValtozas->datumig = $request->datumig;
        $szamlazasiCimValtozas->regi_szamlazasi_cim = $request->regi_szamlazasi_cim;
        $szamlazasiCimValtozas->save();
    }

    public function destroy($felhasználo_id, $datumig)
    {
        SzamlazasiCimValtController::show($felhasználo_id, $datumig)->delete();
    }
}
