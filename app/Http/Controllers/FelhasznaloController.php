<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;

class FelhasznaloController extends Controller
{
    public function index()
    {
        $felhasznalok=Felhasznalo::all();
        return $felhasznalok;
    }

    public function show($felhasznalo_id)
    {
        $felhasznalo=Felhasznalo::find($felhasznalo_id);
        return $felhasznalo;
    }

    public function store(Request $request)
    {
        $felhasznalo= new Felhasznalo();
        $felhasznalo->email = $request->email;
        $felhasznalo->jelszo = $request->jelszo;
        $felhasznalo->szamlazasi_cim = $request->szamlazasi_cim;
        $felhasznalo->szallitasi_cim_1 = $request->szallitasi_cim_1;
        $felhasznalo->szallitasi_cim_2 = $request->szallitasi_cim_2;
        $felhasznalo->szallitasi_cim_3 = $request->szallitasi_cim_3;
        $felhasznalo->vezeteknev = $request->vezeteknev;
        $felhasznalo->keresztnev = $request->keresztnev;
        $felhasznalo->telefonszam = $request->telefonszam;
        $felhasznalo->cegnev = $request->cegnev;
        $felhasznalo->adoszam = $request->adoszam;
        $felhasznalo->jelleg = $request->jelleg;
        $felhasznalo->jogosultsag = $request->jogosultsag;
        $felhasznalo->save();
    }

    public function update(Request $request, $id)
    {
        $felhasznalo= Felhasznalo::find($id);
        $felhasznalo->email = $request->email;
        $felhasznalo->jelszo = $request->jelszo;
        $felhasznalo->szamlazasi_cim = $request->szamlazasi_cim;
        $felhasznalo->szallitasi_cim_1 = $request->szallitasi_cim_1;
        $felhasznalo->szallitasi_cim_2 = $request->szallitasi_cim_2;
        $felhasznalo->szallitasi_cim_3 = $request->szallitasi_cim_3;
        $felhasznalo->vezeteknev = $request->vezeteknev;
        $felhasznalo->keresztnev = $request->keresztnev;
        $felhasznalo->telefonszam = $request->telefonszam;
        $felhasznalo->cegnev = $request->cegnev;
        $felhasznalo->adoszam = $request->adoszam;
        $felhasznalo->jelleg = $request->jelleg;
        $felhasznalo->jogosultsag = $request->jogosultsag;
        $felhasznalo->save();
    }

    public function destroy($id)
    {
        Felhasznalo::find($id)->delete();
    }
}
