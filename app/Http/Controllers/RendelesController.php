<?php

namespace App\Http\Controllers;

use App\Models\Rendeles;
use Illuminate\Http\Request;

class RendelesController extends Controller
{
    public function index()
    {
        $rendelesek=Rendeles::all();
        return $rendelesek;
    }

    public function show($rendeles_szam)
    {
        $rendeles=Rendeles::find($rendeles_szam);
        return $rendeles;
    }

    public function store(Request $request)
    {
        $rendeles= new Rendeles();
        $rendeles->datum = $request->datum;
        $rendeles->felhasznalo_id = $request->felhasznalo_id;
        $rendeles->szallitasi_cim = $request->szallitasi_cim;
        $rendeles->vegosszeg = $request->vegosszeg;
        $rendeles->kedvezmeny = $request->kedvezmeny;
        $rendeles->kedvezmenyes_ar = $request->kedvezmenyes_ar;
        $rendeles->allapot = $request->allapot;
        $rendeles->save();
    }

    public function update(Request $request, $rendeles_szam)
    {
        $rendeles= Rendeles::find($rendeles_szam);
        $rendeles->datum = $request->datum;
        $rendeles->felhasznalo_id = $request->felhasznalo_id;
        $rendeles->szallitasi_cim = $request->szallitasi_cim;
        $rendeles->vegosszeg = $request->vegosszeg;
        $rendeles->kedvezmeny = $request->kedvezmeny;
        $rendeles->kedvezmenyes_ar = $request->kedvezmenyes_ar;
        $rendeles->allapot = $request->allapot;
        $rendeles->save();
    }

    public function destroy($rendeles_szam)
    {
        Rendeles::find($rendeles_szam)->delete();
    }
}
